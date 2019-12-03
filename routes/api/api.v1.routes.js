module.exports = (app) => {
    const users = require('../../controller/auth/user.controller');
    const authlogin = require('../../controller/auth/login.controller');
    const authforgot = require('../../controller/auth/forgotpassword.controller');
    const eduactiondetails = require('../../controller/auth/educationwork.controller');
    const interviewcollection = require('../../controller/auth/interviewcollection.controller');
    const jobfeedcollection = require('../../controller/auth/jobfeedcollection.controller');
    const jobpostcollection = require('../../controller/auth/jobpost.controller');
    var multer = require('multer');
    const path = require('path');
    const email = require('../../helper/custom.helper');
    const verifylogin = require('../../middleware/token.verify.middleware');
 

  //  Create a new User
    let storage = multer.diskStorage({
        destination: function(req, file, callback) {
            callback(null, 'public/images/profile/')
        },
        filename: function(req, file, callback) {
            
            callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
       })
    let upload = multer({
        storage: storage,
        fileFilter: function(req, file, callback) {
            let ext = path.extname(file.originalname)
            if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                return callback(res.end('Only images are allowed'), null)
            }
            callback(null, true)
        }
    });
     /*=====User Routes=====
      =====================*/
    app.post('/users',upload.single('profile_pic'),email, users.create);

     //  update user with userId
    app.patch('/users/:userId', verifylogin, users.update);

     // get user by Id
    
    app.get('/user/:userId', upload.single('profile_pic'), verifylogin, users.findOne);

    /*=====Login Routes=====
      =====================*/
    app.post('/login', authlogin.login);

    /* ========Forgot password====*/
   
    // Send a reset password link to User
    app.post('/forgotpass', authforgot.forgotpass);
    app.post('/matchotp/:userid', authforgot.matchotp);
    app.post('/resetpass/:userid', authforgot.resetpass);

    /*==========================
       education work details API
    ===========================*/

    app.post('/eduactiondetails', verifylogin, eduactiondetails.create);
    app.get('/eduactiondetail/:id', verifylogin, eduactiondetails.findOne);
    app.patch('/eduactiondetail/:id', verifylogin, eduactiondetails.update);

    /* =================
       Interview collection
       =================*/
    
    app.post('/interviewcollection', verifylogin, interviewcollection.create);   

    /* =================
       Job Feed collection
       =================*/

    app.post('/jobfeedcollection', verifylogin, jobfeedcollection.create); 

      /* =================
       Job Post collection
       =================*/

    app.post('/jobpostcollection', verifylogin, jobpostcollection.create); 
    app.patch('/jobpostcollection/:userId', verifylogin, jobpostcollection.update); 
}