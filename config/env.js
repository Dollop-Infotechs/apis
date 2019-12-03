const env = {
    database: 'cambio',
    username: 'root',
    password: 'password',
    host: '142.93.220.160',
    dialect: 'mysql',
    pool: {
        max: '5',
        min: '0',
        acquire: '30000',
        idle: '100'
    }
  };
   
  module.exports = env;