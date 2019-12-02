module.exports = (sequelize, Sequelize) => {
    const jobpostcollection = sequelize.define('jobpostcollection', {
      job_title: {
        type: Sequelize.STRING
      },
      job_type: {
        type: Sequelize.STRING,
      },
      qualification: {
        type: Sequelize.STRING
      },
      shift: {
        type: Sequelize.STRING
      },
      cabs: {
        type: Sequelize.BOOLEAN
      },
      from_annaul_ctc: {
        type: Sequelize.INTEGER
      },
      to_annual_ctc: {
        type: Sequelize.INTEGER
      },
      process: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      notice_period: {
        type: Sequelize.INTEGER
      },
      from_age: {
        type: Sequelize.INTEGER
      },
      to_age: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.ENUM('male', 'female'),
        defaultValue: 'male'
      },
      no_of_positions: {
          type: Sequelize.INTEGER
      },
      allow_disabled: {
          type: Sequelize.BOOLEAN
      },
      interview_details: {
          type: Sequelize.TEXT
      },
      interviewerid: {
          type: Sequelize.STRING
      },
      interview_round: {
          type: Sequelize.STRING
      },
      last_date_to_apply: {
          type: Sequelize.DATEONLY
      },
      last_date_of_post: {
          type: Sequelize.DATEONLY
      },
      special_comments: {
          type: Sequelize.STRING
      },
      mode_of_interview: {
          type: Sequelize.STRING
      },
      screening_questions: {
          type: Sequelize.TEXT
      },
      interested_in_parttime: {
          type: Sequelize.BOOLEAN
      },
      weekends_availibility: {
          type: Sequelize.BOOLEAN
      },
      flexible_shift: {
          type: Sequelize.BOOLEAN
      },
      sign_contract: {
          type: Sequelize.BOOLEAN
      },
      travel: {
          type: Sequelize.BOOLEAN
      },
      sales_assignments: {
          type: Sequelize.BOOLEAN
      },
      applicants_list: {
          type: Sequelize.STRING
      },
      status: {
          type: Sequelize.STRING
      }
    }, {
      freezeTableName: true
    });
  
    return jobpostcollection;
  }