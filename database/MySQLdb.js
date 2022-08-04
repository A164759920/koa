//导入环境变量
const {MYSQL_HOST,MYSQL_PORT,MYSQL_USER,MYSQL_PWD,MYSQL_DB} = require('../config.default')
const { Sequelize } = require('sequelize');
//实例化时需要传参
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    dialect: 'mysql',
    timezone: '+08:00',
});

seq.authenticate().then(() => { 
    console.log('数据库连接成功')
}).catch((err) => {
    console.log('数据库连接失败',err)
})
//导出一个数据库对象
module.exports = seq