//解构ctx中注册post请求的数据，将其传给service层后，等待service回送
 const {createUserByNamePassword} =require('../service/user')
//post请求 通过request.body可以拿到request中body部分的JSON数据
console.log("regcontroller1");
async function RegisterController(ctx) { 
    //确保解构的数据类型为对象后再解构
console.log("regcontroller2")
    // console.log(typeof  JSON.parse(ctx.request.body))
    const { username,password } = ctx.request.body
    //向service传递数据
    console.log("123")
    const resInfo = await createUserByNamePassword(username, password)//返回
    console.log("这是我的的的的resinfo", resInfo)
    if (resInfo){  //创建成功
        ctx.body = {
            code: 0,
            msg: {
                id: resInfo.id,
                username: resInfo.username,
            }
        }    
    }
    else {  //创建失败
        ctx.body = {
            code: 1,
            msg: {
                err:"failure" 
            }
        }
    }   
}

module.exports = {
    RegisterController,
}
