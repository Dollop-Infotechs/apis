module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM('candidate', 'admin', 'employer', 'community'),
        defaultValue: 'candidate'
      },
      enable_location: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      profile_visibility: {
        type: Sequelize.ENUM('public', 'private'),
        defaultValue: 'public'
      },
      location: {
        type: Sequelize.STRING
      },
      industry: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      phoneno: {
        type: Sequelize.STRING
      },
      designation: {
        type: Sequelize.STRING
      },
      specialization: {
        type: Sequelize.STRING
      },
      account_plan: {
        type: Sequelize.STRING
      },
      profile_building_questions: {
        type: Sequelize.TEXT,
        get: function(){
          return JSON.parse(this.getDataValue("profile_building_questions"));
        },
        set: function (value) {
          this.setDataValue('profile_building_questions', JSON.stringify(value));
      },
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.ENUM('male', 'female'),
        defaultValue: 'male'
      },
      languages: {
        type: Sequelize.TEXT,
        get: function(){
          return JSON.parse(this.getDataValue("languages"));
        },
        set: function (value) {
          this.setDataValue('languages', JSON.stringify(value));
      },
      },
      marital_status: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.FLOAT
      },
      weight: {
        type: Sequelize.FLOAT
      },
      differently_abled: {
        type: Sequelize.BOOLEAN,
      },
      differently_abled_details: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.STRING
      },
      special_talents: {
        type: Sequelize.STRING
      },
      otp: {
        type: Sequelize.INTEGER
      },
      isregister: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      profile_pic: {
        type: Sequelize.STRING
      },
    }, {
      freezeTableName: true
    });
  
    return User;
  }