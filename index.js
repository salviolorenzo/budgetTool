const db = require("./models/db");

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);

app.use(
  session({
    store: new pgSession({
      pgPromise: db
    }),
    secret: "hgutieshgnireg85759303rngvfjdsinb498e935hthgnvtuu!",
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000
    }
  })
);

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  let isLoggedIn = req.session.user ? true : false;
  console.log(isLoggedIn);
  next();
});

const page = require("./views/page");
const helper = require(`./views/helper`);
const User = require(`./models/User`);
const Account = require(`./models/Account`);
const Income = require(`./models/Income`);
const Expense = require(`./models/Expense`);

function protectRoute(req, res, next) {
  let isLoggedIn = req.session.user ? true : false;
  if (isLoggedIn) {
    next();
  } else {
    res.redirect("/");
  }
}

// DEFINE TODAY'S DATE
let d = new Date();
let day = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();
let today = `${year}-${month}-${day}`;

// ROUTES

app.get("/", (req, res) => {
  res.send(
    page(
      `${helper.header()}
            ${helper.login()}
            ${helper.register()}
            ${helper.footer()}`
    )
  );
});

// REGISTER
app.post(`/register`, (req, res) => {
  User.add(req.body.user_name, req.body.email, req.body.password).then(user => {
    req.session.user = user;
    Account.add(0, user.id).then(account => {
      console.log(account);
    });
    res.redirect("/home");
  });
});

// LOGIN
app.post(`/login`, (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.getByEmail(email)
    .catch(err => {
      console.log(err);
    })
    .then(user => {
      const didMatch = user.checkPassword(password);
      if (didMatch) {
        req.session.user = user;
        console.log(req.session.user);
        res.redirect("/home");
      } else {
        res.redirect(`/`);
      }
    });
});

// LOGOUT
app.post(`/logout`, (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.get("/home", protectRoute, (req, res) => {
  User.getById(req.session.user.id).then(user => {
    Account.getByUser(user.id).then(account => {
      console.log(account[0].amount);
      Income.getByUser(user.id).then(incomeArray => {
        console.log(incomeArray);
        Expense.getByUser(user.id).then(expenseArray => {
          console.log(expenseArray);
          let incomes = 0;
          let expenses = 0;
          for (item of incomeArray) {
            incomes += item.amount;
          }
          for (item of expenseArray) {
            expenses += item.amount;
          }
          res.send(
            page(
              `${helper.header(req.session.user)}
                ${helper.summary(
                  month + "/" + day + "/" + year,
                  account[0].amount + incomes - expenses,
                  incomes,
                  expenses,
                  ((expenses / incomes) * 100).toFixed(2) + "%"
                )}
                ${helper.budget(
                  helper.drawBoxes(incomeArray),
                  helper.drawBoxes(expenseArray)
                )}

                ${helper.footer()}`
            )
          );
        });
      });
    });
  });
});

app.post(`/addData`, (req, res) => {
  let user = req.session.user;
  let amount = req.body.amount;
  let description = req.body.description;
  if (req.body.plusminus === `+`) {
    Income.add(amount, description, today, user.id);
    res.redirect(`/home`);
  } else if (req.body.plusminus === `-`) {
    Expense.add(amount, description, today, user.id);
    res.redirect(`/home`);
  }
});

// GET ACCOUNT INFO

// ADDING INCOMES AND EXPENSES

app.listen(3000, () => {
  console.log(`Ready...`);
});
