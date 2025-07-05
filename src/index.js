const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

//tu nap file index
const route = require('./routes');
const db = require('./config/db');

//connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'))

//middleWare xu ly du lieu form post
app.use(express.urlencoded());
app.use(express.json());

//http logger
//app.use(morgan('combined'));

//template handlebars
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
//app.set('views', path.join(__dirname, 'resources/views')); cach 1
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
