const env = require('./env');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
   
    pool: {
      max: env.max,
      min: env.min,
      acquire: env.acquire,
      idle: env.idle
    }
  });
 const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user= require('../app/models/user.model')(sequelize,Sequelize);
// db.usertoken= require('../app/models/user_token.model')(sequelize,Sequelize);
db.educationworkdetails= require('../app/models/education_work_details.model')(sequelize,Sequelize);
db.interviewcollection= require('../app/models/interviewcollection.model')(sequelize,Sequelize);
db.jobfeedcollection= require('../app/models/jobfeedcollection.model')(sequelize,Sequelize);
db.jobpostcollection= require('../app/models/jobpostcollection.model')(sequelize,Sequelize);
module.exports = db;