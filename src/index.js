const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//middleWare xu ly du lieu form post
app.use(express.urlencoded());
app.use(express.json());

//http logger
//app.use(morgan('combined'));

//template handlebars
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.get('/search', (req, res) => {
  //console.log(req.query)
  res.render('search');
})

//danh cho phuong thuc post
// app.post('/search', (req, res) => {
//   //console.log(req.body)
//   res.render('search');
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
