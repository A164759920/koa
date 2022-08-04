// const { User } = require('../database/database.js')
const { Op } = require('sequelize')
const User = require('../model/user.model')
async function getUserInfoByUserName(username, password) {
    // const res1 = await User.findOne({ where: { username: username } })
    // console.log(res1);
    // return res1;
    console.log(password)
    const res1 = await User.findAll({
        where: { username: username } 
    })
    console.log("这是我的res11111111",res1);
    return res1;
}
async function createUserByNamePassword(username, password) {
    //创建成功
    // if (username !== undefined && password !== undefined) {
    //         console.log("写入数据库成功")
    //         return 1
    // }

    // //创建失败
    // else {
    //     return null
    // }
    //必须使用异步函数创建，否则无法捕获到
    const res = await User.create({ username, password })
    //  console.log(typeof res.dataValues);
    //  console.log(res.dataValues);
    console.log("这是回传的的的值", res.dataValues)
    return res.dataValues

}

module.exports = {
    getUserInfoByUserName,
    createUserByNamePassword
}