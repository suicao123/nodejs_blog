const Course = require('../models/Course');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /store/course
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }
}

module.exports = new CourseController();
