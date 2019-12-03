var db = require('../../config/db.config');
const Jobfeedcollection = db.jobfeedcollection;
const Joi = require('@hapi/joi');


exports.create = (req, res) => {
    // let {error} = ValidationError(req.body);
    // if(error){
    //     return res.status(403).send(error.details[0].message);
    // }
    const newjobfeedcollection = new Jobfeedcollection({
        companyid: req.body.companyid,
        memberid: req.body.memberid,
        jobid: req.body.date_and_time_of_interview,
        date_and_time: req.body.date_and_time,
        feed_details: req.body.feed_details,
        status: req.body.status,
    });
    newjobfeedcollection.save()
    .then(data => {
       return res.send(data);
    }).catch(err => {
       return res.status(500).send({
            message: err.message || "Some error occurred while creating a User."
        });
    });
}

// function ValidationError(message){
//     let Schema = Joi.object().keys({
//         'companyid': Joi.string().required(),
//     })
//     return Joi.validate(message,Schema);
// }