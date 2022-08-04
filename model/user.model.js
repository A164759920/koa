//导入数据类型
const { DataTypes } = require('sequelize')

//导入seq对象
const seq = require('../database/MySQLdb')

//定义模型对象 （类/对象-->表的映射）【User->Users】
//也可直接用tableName定义表的名称
//对象的字段根据表的设计确定
const User = seq.define('User', {
    //id会自动创建 可忽略
    username: {
        type: DataTypes.STRING, //类型
        allowNull: false, //字段是否可以为空
        unique: true, //字段是否唯一
        comment: '用户名，唯一', //描述
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: '密码'
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0, //默认值
        commit: '0为非管理员,1为管理员'
    }
})
//具体在【模型同步中】
//自动同步模型对象到数据表 
//force：true 若原表存在 则强制删除再创建
User.sync({ force: false })
//导出模型
module.exports = User 
