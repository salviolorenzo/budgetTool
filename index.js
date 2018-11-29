const db = require('./models/db');

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const page = require('./views/page');
const helper = require(`./views/helper`);
const User = require(`./models/User`);
const Account = require(`./models/Account`);
const Income = require(`./models/Income`);
const Expense = require(`./models/Expense`);

// ROUTES

app.get('/', (req, res) => {
    res.send(
        page(
            `${helper.summary()}
            ${helper.budget()}
            ${helper.calculator()}
            ${helper.footer()}`
        )
    )
});

app.listen(3000, () => {
    console.log(`Ready...`);
})