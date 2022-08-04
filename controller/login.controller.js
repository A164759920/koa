//需要导入service中的数据处理函数
const { getUserInfoByUserName} = require('../service/user')

//处理http请求中拿到的上下文ctx
async function LoginController(ctx) { 
    //解构出所需变量
    // console.log(ctx.body)
    const { username, password } = ctx.query;
    //验证并向前端做出响应
    const userInfo = await getUserInfoByUserName(username, password)
    if (userInfo) {  //若验证通过
        ctx.body = {
            success: true,
            data: userInfo
        }
    }
    else { 
        ctx.body = {
            success: false,
            data: {
                msg: "错误"
            }
        }
    }
}

module.exports = {
    LoginController
}