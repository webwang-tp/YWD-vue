<template>
  <div class="box">
    <div class="loginImg">
       <div class="loginImgcon">
           <div class="Img"><img src="http://47.106.12.223:8569/static/img/01.png" alt=""></div>
           <p style="marginTop:0.2rem;color:black;">花里胡哨</p>
       </div>
    </div>
    <div class="collect">
        <div class="collectCon">
            <img src="../assets/images/me/keep.png" alt="">
            <span>我的收藏</span>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style scoped>
.box{
    display: flex;
    height: 3.6rem;
    flex-direction: column;
}
.loginImg{
    height: 1.5rem;
    background-color: #ff9900;
    position: relative;
}
.loginImg .loginImgcon{
    position: absolute;
    left: 50%;
    top: 10%;
    margin-left: -1.3rem;
    width: 2.6rem;
    height: 2.6rem;
    text-align: center;
    z-index: 999;
}
.loginImgcon .Img{
   overflow: hidden;
   border-radius: 50%;
   width: 2rem;
   height: 2rem;
   text-align: center;
   margin: 0 auto;
}
.Img img{
    width: 100%;
}
.collect{
    flex: 1;
    background-color: #fafafa;
    position: relative;
}
.collectCon{
    position: absolute;
    height: 0.66rem;
    line-height: 0.66rem;
    bottom: 0.1rem;
    left: 0.2rem;
}
.collectCon img{
    margin: 0 0.1rem;
}
</style>