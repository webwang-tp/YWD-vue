<template>
  <div style="margin:0.1rem 0;background:#fafafa; position: relative;">
    <div class="orderHeader">
      <span>我的订单</span>
      <span>查看全部订单</span>
    </div>
    <div class="nav">
    <van-tabbar route v-model="active" active-color="#ff9900" class="nav">
      <van-tabbar-item to="/index/home">
        <span>待付款</span>
        <img slot="icon" :src=" icon.daifu " />
      </van-tabbar-item>

      <van-tabbar-item to="/index">
        <span>代发货</span>
        <img slot="icon"  :src="icon.daifa " />
      </van-tabbar-item>

      <van-tabbar-item to="/index">
        <span>待收货</span>
        <img slot="icon"  :src="icon.daishou "/>
      </van-tabbar-item>

      <van-tabbar-item to="/index">
        <span>待评价</span>
        <img slot="icon"  :src="icon.pingjia "/>
      </van-tabbar-item>

      <van-tabbar-item to="/index">
        <span>退款/售后</span>
        <img slot="icon" :src="icon.shouhou " />
      </van-tabbar-item>
    </van-tabbar>
    </div>
  </div>
</template>
<script>
import daifu from "../assets/images/me/icon_boligation.png";
import daifa from "../assets/images/me/prepare.png";
import daishou from "../assets/images/me/icon_consignee.png";
import pingjia from "../assets/images/me/icon_evaluate.png";
import shouhou from "../assets/images/me/icon_refund.png";

export default {
  props: [],
  components: {},
  data() {
    return {
      icon: {
        daifu,
        daifa,
        daishou,
        pingjia,
        shouhou
      }
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style scoped>
.orderHeader {
  height: 1rem;
  line-height: 1rem;
  font-size: 0.3rem;
  overflow: hidden;
  border-bottom: 1px solid #b3b3b3;
}
.orderHeader span:nth-child(1) {
  color: black;
  margin-left: 0.4rem;
}
.orderHeader span:nth-child(2) {
  color: #999999;
  float: right;
}
.nav {
  position: relative;
  width: 100vw;;
  height: 1.9rem;
  background-color: #fafafa;
}
</style>