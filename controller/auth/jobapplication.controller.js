var db = require('../../config/db.config');
var fs = require('fs');
const Jobapplication = db.jobapplication; 

exports.create = (req, res) => {
    console.log(req.body);

}