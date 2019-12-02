// module.exports = (sequelize, Sequelize) => {
//     const User = sequelize.define('user_token', {
//       name: {
//         type: Sequelize.STRING
//       },
//       user_id: {
//         type: Sequelize.STRING,
//         unique: true
//       },
//       usertoken:{
//         type: Sequelize.STRING,
//       },
//       otp: {
//         type: Sequelize.INTEGER
//       },
//     }, {
//       freezeTableName: true
//     });
  
//     return User;
//   }