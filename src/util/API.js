const api = '/api'
//注册接口
const register = api +'/register'
//登录接口
const login = api +'/login'
//home首页接口
const home = api +'/getIndexData'
//商品详情接口
const detail = api +'/getDetails'
//分类请求接口
const Classify = api + '/getClassify'
export default{
    register,
    login,
    home,
    detail,
    Classify
}