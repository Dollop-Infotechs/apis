module.exports = (sequelize, Sequelize) => {
    const jobfeedcollection = sequelize.define('jobfeedcollection', {
      companyid: {
        type: Sequelize.STRING
      },
      memberid: {
        type: Sequelize.STRING,
      },
      jobid: {
        type: Sequelize.STRING
      },
      date_and_time: {
        type: Sequelize.DATE
      },
      feed_details: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
    }, {
      freezeTableName: true
    });
  
    return jobfeedcollection;
  }