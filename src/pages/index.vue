<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>


    <van-tabbar route v-model="active" active-color="#ff9900">
      <van-tabbar-item to="/index/home">
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
      </van-tabbar-item>

      <van-tabbar-item to="/index/classify">
        <span>标签</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active1 : icon.inactive1" />
      </van-tabbar-item>

      <van-tabbar-item
        to="/index/shopCart"
        :info="shopCartdata.length==0 ? shopNum : shopCartdata.length">
        <span>购物车</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active2 : icon.inactive2" />
      </van-tabbar-item>

      <van-tabbar-item to="/index/me">
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active3 : icon.inactive3" />
      </van-tabbar-item>

    </van-tabbar>
  </div>
</template>
<script>
import homeN from "../assets/images/index/tab_home_nor.png";
import homeH from "../assets/images/index/tab_home_hig.png";
import classifyN from "../assets/images/index/tab_menu_nor.png";
import classifyH from "../assets/images/index/tab_menu_hig.png";
import shopN from "../assets/images/index/tab_shopping_nor.png";
import shopH from "../assets/images/index/tab_shopping_hig.png";
import meN from "../assets/images/index/tab_me_nor.png";
import meH from "../assets/images/index/tab_me_hig.png";

import { mapGetters } from "vuex";
import navBar from "../components/navBar";
export default {
  props: [],
  components: {
    navBar
  },
  data() {
    return {
      active: 0,
      icon: {
        active: homeH,
        inactive: homeN,
        active1: classifyH,
        inactive1: classifyN,
        active2: shopH,
        inactive2: shopN,
        active3: meH,
        inactive3: meN
      },
      shopNum: "" //购物车数量初始值
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    ...mapGetters(["shopCartdata"])
  }
};
</script>
<style lang="stylus" scoped></style>