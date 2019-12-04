module.exports = (sequelize, Sequelize) => {
    const jobapplication = sequelize.define('jobapplication', {
      jobid: {
        type: Sequelize.STRING
      },
      applicantid: {
        type: Sequelize.STRING,
      },
      interviewid: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      interview_round: {
        type: Sequelize.STRING
      },
      post_interview_feedback: {
        type: Sequelize.TEXT
      },
      feedback_details: {
        type: Sequelize.TEXT
      },
      cancel_reason: {
        type: Sequelize.TEXT
      },
    }, {
      freezeTableName: true
    });
  
    return jobapplication;
  }