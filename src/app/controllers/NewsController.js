

class NewsController {

    //[GET] / News
    index(req, res) {
        res.render('news');
    }

    //[GET] / News/:slug
    show(req, res) {
        res.send('news detail!!!');
    }

    //[GET] / News/detail
    show2(req, res) {
        res.send('news detail2!!!');
    }

}

module.exports = new NewsController;
