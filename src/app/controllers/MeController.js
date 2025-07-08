const Course = require('../models/Course');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /store/course
    storedCourses(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsWithDeleted({ deleted: true })])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);

    }

    //[GET] /trash/course
    trashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then(courses => {
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }
}

module.exports = new CourseController();
