<template>
  <div class="wrap">
      <head-nav></head-nav>
      <div class="from">
          <div class="fromInput">
              手机号: <input type="tel" v-model="user.phone">
          </div>
          <div class="fromInput">
              密&nbsp;&nbsp;&nbsp;&nbsp;码: <input type="password" v-model="user.password">
          </div>
          <div class="mLink"><a href="javaScript:;">忘记密码</a></div>
          <van-button color="#ff9900" size="large" round type="primary" @click="login">登录</van-button>
      </div>
  </div>
</template>
<script>
import headNav from '../components/headNav'
import API from '../util/API'
export default {
  props: [],
  components: {
      headNav
  },
  data() {
    return {
        user:{
            phone:'',
            password:''
        }
    };
  },
  methods: {
      login(){
          this.$axios({
              url:API.login,
              method:'get',
              params:this.user
          }).then(res=>{
              localStorage.setItem('name',this.user.phone)
              this.$router.replace('/index')
          }).catch(rej=>{
              this.$toast.fail('账号或密码错误');
          })
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';      
.from
    padding 0 0.7rem
    // text-align center
    margin-top 1.86rem
    .fromInput
     height 1.3rem
     line-height 1.3rem
     border-bottom 1px solid #a3a3a3
     input 
      height 1.3rem
      line-height 1.3rem
      border none 
    .mLink
      height 1.15rem
      line-height 1.15rem
      text-align right 
      font-size 0.26rem
      a
       color #666666
</style>