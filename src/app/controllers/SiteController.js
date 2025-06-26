
class SiteController {

    //[GET] /
    index(req, res) {
        res.render('home');
    }

    //[GET] /Search
    search(req, res) {
        res.render('search');
    }

    //[GET] /Search
    search2(req, res) {
        res.send('search!!!');
    }

}

module.exports = new SiteController;
