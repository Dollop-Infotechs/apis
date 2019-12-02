var db = require('../config/db.config');
const User = db.user;

function verifyEmailPhone(req, res, next) {
    var email = req.body.email;
    var phoneno = req.body.phoneno;
   
if(email){
    if (!email)
        return res.status(403).send({ auth: false, message: 'Please Email Can not empty' });
    User.findOne({ where: { email: req.body.email } }).then(data => {
        if (data) {
            return res.status(200).send({
                message: "User already exists with email " + req.body.email
            });
        } else {
            next();
        }
    })
}

    if(phoneno){
        if (!phoneno)
        return res.status(403).send({ auth: false, message: 'Please Phone number Can not empty' });
        User.findOne({ where: { phoneno: req.body.phoneno } }).then(data => {
            if (data) {
                return res.status(200).send({
                    message: "User already exists with Phone Number " + req.body.phoneno
                });
            } else {
                next();
            }
        })
    }

}
module.exports = verifyEmailPhone;