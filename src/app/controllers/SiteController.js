const Course = require('../models/Course');

class SiteController {
    //[GET] /
    async index(req, res) {

        try{
            const courses = await Course.find({});
            res.json(courses);
            return;
        }
        catch (error) {
            res.status(400).json({ error: 'message' })
        }

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

module.exports = new SiteController();
