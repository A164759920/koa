const Router = require('koa-router');
const router = new Router();
//controller
const { LoginController } = require('../controller/login.controller')
const { RegisterController } = require('../controller/register.controller')

//中间件
const {cryptPassowrd} = require('../middleware/user.middleware')
    
//编写路由请求
//路由和controller函数之间的映射关系
console.log("router");
router.get('/login', LoginController);
router.post('/login/register',cryptPassowrd, RegisterController);

module.exports = {
    router
}
