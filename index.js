const db = require('./models/db');

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

app.use(session({
    store: new pgSession({
        pgPromise: db
    }),
    secret: 'hgutieshgnireg85759303rngvfjdsinb498e935hthgnvtuu!',
    saveUninitialized: false,
    cookie: {
        maxAge: 30*24*60*60*1000
    }
}));

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
    let isLoggedIn = req.session.user ? true : false;
    console.log(isLoggedIn);
    next();
})

const page = require('./views/page');
const helper = require(`./views/helper`);
const User = require(`./models/User`);
const Account = require(`./models/Account`);
const Income = require(`./models/Income`);
const Expense = require(`./models/Expense`);

function protectRoute(req, res, next) {
    let isLoggedIn = req.session.user ? true : false;
    if (isLoggedIn){
        next();
    }
    else {
        res.redirect('/');
    }
}

// ROUTES

app.get('/', (req, res) => {
    res.send(
        page(
            `${helper.header()}
            ${helper.login()}
            ${helper.register()}
            ${helper.footer()}`
        )
    )
});

// REGISTER
app.post(`/register`, (req, res) => {
    User.add()
})



app.get('/home', (req, res) => {
    res.send(
        page(
            `${helper.header()}
            ${helper.summary()}
            ${helper.budget()}
            ${helper.calculator()}
            ${helper.footer()}`
        )
    )
})

app

app.listen(3000, () => {
    console.log(`Ready...`);
})