const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    //   app.get('/news', (req, res) => {
    //      res.render('news');
    //   })
    app.use('/news', newsRouter);

    //  app.get('/', (req, res) => {
    //       res.render('home');
    //  })
    //  app.get('/search', (req, res) => {
    //      //console.log(req.query)
    //      res.render('search');
    //  })
    app.use('/', siteRouter);

    //danh cho phuong thuc post
    //  app.post('/search', (req, res) => {
    //      //console.log(req.body)
    //      res.render('search');
    //  })
}

module.exports = route;
