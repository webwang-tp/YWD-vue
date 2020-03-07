<template>
  <div class="wrap">
    <head-nav>
      <h1 slot="center">注册</h1>
      <router-link to="/login" slot="right">登录</router-link>
    </head-nav>
    <div class="from">
      <div class="fromInput">
        手机号:
        <input type="tel" v-model="user.phone" />
      </div>
      <div class="fromInput">
        密&nbsp;&nbsp;&nbsp;&nbsp;码:
        <input type="password" v-model="user.password" />
      </div>
      <div class="fromInput">
        验证码:
        <input type="text" />
      </div>
      <!-- <div class="mLink"><a href="javaScript:;">忘记密码</a></div> -->
      <div class="letGO">
        <van-button color="#ff9900" size="large" round type="primary" @click="reg">下一步</van-button>
      </div>
      <div class="regPolice">
        <van-checkbox v-model="flag" shape="square" checked-color="#ff9900" icon-size="0.3rem" @change='check'></van-checkbox>
        <p>
          我已阅读并同意使用
          <span>条款和隐私政策</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import headNav from "../components/headNav";
import API from "../util/API";
export default {
  props: [],
  components: {
    headNav
  },
  data() {
    return {
      user: {
        phone: "",
        password: ""
      },
      flag: ""
    };
  },
  methods: {
    check() {
      // this.flag=!this.flag
      console.log(this.flag);
    },
    reg() {
      if (this.flag == true) {
        this.$axios({
          url: API.register,
          method: "post",
          data: this.user
        })
          .then(res => {
            console.log(res);
          })
          .catch(rej => {
            console.log(rej);
          });
      }else{
        this.$toast('请勾选阅读条款');
      }
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.from {
  padding: 0 0.7rem;
  // text-align center
  margin-top: 0.96rem;

  .fromInput {
    height: 1.3rem;
    line-height: 1.3rem;
    border-bottom: 1px solid #a3a3a3;

    input {
      height: 1.3rem;
      line-height: 1.3rem;
      border: none;
    }
  }

  .mLink {
    height: 1.15rem;
    line-height: 1.15rem;
    text-align: right;
    font-size: 0.26rem;

    a {
      color: $colorA;
    }
  }

  .letGO {
    margin-top: 0.48rem;
    margin-bottom: 0.48rem;
  }

  .regPolice {
    font-size: 0.28rem;

    .van-checkbox {
      float: left;
      color: $colorA;
    }

    span {
      color: #333333;
      font-size: 0.28rem;
    }
  }
}
</style>