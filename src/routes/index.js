const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

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

    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
}

module.exports = route;
