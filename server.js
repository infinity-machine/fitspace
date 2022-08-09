const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const PORT = process.env.PORT || 3333;
const db = require('./config/db_connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();
const { view_routes, auth_routes, post_routes } = require('./controllers/index');

const app = express();

app.use(express.static(path.join('browser')));  

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    store: new SequelizeStore({ db }),
    saveUninitialized: false,
    resave: false,
    cookie: {
        // httpOnly: true
    }
}));

app.use('/', view_routes);
app.use('/auth', auth_routes);
app.use('/posts', post_routes);
db.sync().then(() => {
    app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
});