/**
 * 模拟登陆接口
 * 
 */
// code : 0  message : 登录成功
// code : 1  message : 登录失败

const Mock = require('mockjs');
const Random = Mock.Random;
/**
 * 登陆模拟
 */
const login = Mock.mock({
    code: 0,
    result: {
        username: Random.word(7),
        realname: Random.cname(),
        email: Random.email(),
        role: Random.integer(0, 3),
        token: "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJuaW5naGFvLm5ldCIsImV4cCI6IjE0Mzg5NTU0NDUiLCJuYW1lIjoid2FuZ2hhbyIsImFkbWluIjp0cnVlfQ.SwyHTEx_RQppr97g4J5lKXtabJecpejuef8AqKYMAJc"
    },
    message: '操作成功'
});

export default { login }