const bcrypt = require('bcryptjs')

//定义一个中间件加密函数，函数结束后必须调用next
async function cryptPassowrd(ctx, next) {
    // const { password } = JSON.parse(ctx.request.body)
    console.log("这是body", typeof ctx.request.body)
    const { password } = ctx.request.body; //解构密码
    console.log("这是密码类型", typeof password)
    console.log("这是密码信息", password)
    var salt = bcrypt.genSaltSync(10); //加盐
    var hash = bcrypt.hashSync(password, salt) //保存的密文
    console.log("这是hash", hash)
    ctx.request.body.password = hash;
    await next(); //
}

module.exports = {
    cryptPassowrd
}