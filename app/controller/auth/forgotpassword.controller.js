const bcrypt = require('bcryptjs');
// const async = require('async');
// const crypto = require('crypto');
const sgMail = require('@sendgrid/mail');
var db = require('../../../config/db.config');
var otpGenerator = require('otp-generator')
const User = db.user;
// const appConst = require('../helper/constants/constant.js');


exports.forgotpass = (req, res) => {
    // Validate Request
    if (!req.body.email) {
        return res.status(400).send({
            message: "User email can not be empty"
        });
    }
    User.findOne({ where: { email: req.body.email } }).then(user => {
        if (user) {
            otp = otpGenerator.generate(4, { upperCase: false, specialChars: false, alphabets: false });
            sgMail.setApiKey(process.env.SENDGRID_APIKEY);
            const msg = {
                to: user.email,
                from: process.env.EMAILFROM_NAME + ' <' + process.env.EMAILFROM_EMAIL + '>',
                subject: 'OTP for password reset!',
                text: 'You requested for a password reset, kindly use to reset your password',
                html: '<!DOCTYPE html><html><head><title>Forget Password Email</title></head><body><div><h3>Dear ' + user.name + ' ' + user.email + ',</h3><p>You requested for a password reset, Your OTP is ' + otp + ' kindly use this <a href="">link</a> to reset your password</p><br><br><p>Cheers!</p></div></body></html>',
            };
            sgMail.send(msg).then(() => {
                User.update({
                    otp: otp
                }, {
                    where: { id: user.id }
                }).then(() => {
                    return res.status(200).send({
                        message: "Kindly check your email for further instructions"
                    });
                })
            })
        } else {
            return res.status(400).send({
                message: "User not found with email" + req.body.email
            });
        }
    }).catch(err => {
        res.send(err);
    })
};

/**
 * macth otp
 */
exports.matchotp = (req, res) => {
    // Validate Request
    otp = req.body.otp;
    User.findOne({ where: { id: req.params.userid } }).then(user => {
        console.log(user.otp)
        if (user) {
            if (otp === user.otp) {
                return res.status(200).send({
                    message: "true"
                });
            } else {
                return res.status(200).send({
                    message: "OTP not match"
                });
            }
        } else {
            return res.status(400).send({
                message: "User not found with ID" + req.params.userid
            });
        }
    }).catch(err => {
        res.send(err);
    })

};


/**
 * Reset password
 */
exports.resetpass = (req, res) => {
    // Validate Request
    if (req.body.newpassword === req.body.confirmpass) {
        User.findOne({ where: { id: req.params.userid } }).then(user => {
            if (user) {
                let userPassHash = '';
                if (req.body.confirmpass != '') {
                    userPassHash = bcrypt.hashSync(req.body.confirmpass, 10);
                }
                User.update({
                    password: userPassHash
                }, {
                    where: { id: req.params.userid }
                }).then(() => {
                    User.update({
                        otp: ""
                    },{
                        where: { id: req.params.userid }  
                    }).then(() =>{
                        return res.status(200).send({
                            message: "Password reset successfully"
                        });
                    })
                })
            } else {
                return res.status(400).send({
                    message: "User not found with ID" + req.params.userid
                });
            }
        }).catch(err => {
            res.send(err);
        })
    }
};