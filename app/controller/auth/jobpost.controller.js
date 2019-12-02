var db = require('../../../config/db.config');
const Jobpostcollection = db.jobpostcollection;


exports.create = (req, res) => {
    const newjobpost =new Jobpostcollection({
        job_title: req.body.job_title,
        job_type: req.body.job_type,
        qualification: req.body.qualification,
        shift: req.body.shift,
        cabs: req.body.cabs,
        from_annaul_ctc: req.body.from_annaul_ctc,
        to_annual_ctc: req.body.to_annual_ctc,
        process: req.body.process,
        role: req.body.role,
        notice_period: req.body.notice_period,
        from_age: req.body.from_age,
        to_age: req.body.to_age,
        gender: req.body.gender,
        no_of_positions: req.body.no_of_positions,
        allow_disabled: req.body.allow_disabled,
        interview_details: req.body.interview_details,
        interviewerid: req.body.interviewerid,
        interview_round: req.body.interview_round,
        last_date_to_apply: req.body.last_date_to_apply,
        last_date_of_post: req.body.last_date_of_post,
        special_comments: req.body.special_comments,
        mode_of_interview: req.body.mode_of_interview,
        screening_questions: req.body.screening_questions,
        interested_in_parttime: req.body.interested_in_parttime,
        weekends_availibility: req.body.weekends_availibility,
        flexible_shift: req.body.flexible_shift,
        sign_contract: req.body.sign_contract,
        travel: req.body.travel,
        sales_assignments: req.body.sales_assignments,
        applicants_list: req.body.applicants_list,
        status: req.body.status,
    });
    newjobpost.save()
    .then(data => {
       return res.send(data);
    }).catch(err => {
       return res.status(500).send({
            message: err.message || "Some error occurred while creating a User."
        });
    });
}

exports.update = (req, res) => {
    //  update it with the request body    
    User.update({
        job_title: req.body.job_title,
        job_type: req.body.job_type,
        qualification: req.body.qualification,
        shift: req.body.shift,
        cabs: req.body.cabs,
        from_annaul_ctc: req.body.from_annaul_ctc,
        to_annual_ctc: req.body.to_annual_ctc,
        process: req.body.process,
        role: req.body.role,
        notice_period: req.body.notice_period,
        from_age: req.body.from_age,
        to_age: req.body.to_age,
        gender: req.body.gender,
        no_of_positions: req.body.no_of_positions,
        allow_disabled: req.body.allow_disabled,
        interview_details: req.body.interview_details,
        interviewerid: req.body.interviewerid,
        interview_round: req.body.interview_round,
        last_date_to_apply: req.body.last_date_to_apply,
        last_date_of_post: req.body.last_date_of_post,
        special_comments: req.body.special_comments,
        mode_of_interview: req.body.mode_of_interview,
        screening_questions: req.body.screening_questions,
        interested_in_parttime: req.body.interested_in_parttime,
        weekends_availibility: req.body.weekends_availibility,
        flexible_shift: req.body.flexible_shift,
        sign_contract: req.body.sign_contract,
        travel: req.body.travel,
        sales_assignments: req.body.sales_assignments,
        applicants_list: req.body.applicants_list,
        status: req.body.status,
    },{
        where:{ id: req.params.userId}
    }).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.send(err);
    })
};