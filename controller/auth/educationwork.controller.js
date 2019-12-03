const bcrypt = require('bcryptjs');
var db = require('../../config/db.config');
var fs = require('fs');
const Educationwork = db.educationworkdetails; 


// Create and Save a education details
exports.create = (req, res) => {
  
    // Create a User
    const education = new Educationwork({
        highest_qualification: req.body.highest_qualification,
        fresher: req.body.fresher,
        name_institution: req.body.name_institution,
        year_of_passing:  req.body.year_of_passing,
        name_of_company: req.body.name_of_company,
        total_years_of_experience: req.body.total_years_of_experience,
        from_date: req.body.from_date,
        to_date: req.body.to_date,
    });

    // Save User in the database

    education.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a eduaction details."
            });
        });

};

/*=============
 Eduaction and work details Get By Id
  =============*/

exports.findOne = (req, res) =>{
    Educationwork.findByPk(req.params.id)
        .then(data => {
            if(!data){
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send(data);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving user with id " + req.params.id
            });
        })
};

/*===============
 Update Education record
 ================*/

 exports.update=(req,res)=>{
    var education =req.body;
    //const id = req.params.empId;
    Educationwork.update({
        highest_qualification: req.body.highest_qualification,
        fresher: req.body.fresher,
        name_institution: req.body.name_institution,
        year_of_passing:  req.body.year_of_passing,
        name_of_company: req.body.name_of_company,
        total_years_of_experience: req.body.total_years_of_experience,
        from_date: req.body.from_date,
        to_date: req.body.to_date,
    },{
        where:{id:req.params.id}
      }
    ).then(()=>{
        res.send(education);
    }).catch(err=>{
        res.send("error"+err);
    })
}