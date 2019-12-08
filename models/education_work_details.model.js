module.exports = (sequelize, Sequelize) => {
    const educationandwork = sequelize.define('education_work_details', {
      highest_qualification: {
        type: Sequelize.STRING
      },
      fresher: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      name_institution: {
        type: Sequelize.STRING
      },
      year_of_passing: {
        type: Sequelize.INTEGER
      },
      name_of_company: {
        type: Sequelize.STRING
      },
      total_years_of_experience: {
        type: Sequelize.INTEGER
      },
      from_date: {
        type: Sequelize.DATEONLY
      },
      to_date: {
        type: Sequelize.DATEONLY
      },
    }, {
      freezeTableName: true
    });
  
    return educationandwork;
  }