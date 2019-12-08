const env = require('./env');
const Sequelize = require('sequelize');
console.log(env)

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
   
    pool: {
      max: env.max,
      min: env.pool.min,
      acquire: env.pool.acquire,
      idle: env.pool.idle
    }
  });
 const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user= require('../models/user.model')(sequelize,Sequelize);
// db.usertoken= require('../models/user_token.model')(sequelize,Sequelize);
db.educationworkdetails= require('../models/education_work_details.model')(sequelize,Sequelize);
db.interviewcollection= require('../models/interviewcollection.model')(sequelize,Sequelize);
db.jobfeedcollection= require('../models/jobfeedcollection.model')(sequelize,Sequelize);
db.jobpostcollection= require('../models/jobpostcollection.model')(sequelize,Sequelize);
db.jobapplication= require('../models/jobapplicationcollection.model')(sequelize,Sequelize);
module.exports = db;