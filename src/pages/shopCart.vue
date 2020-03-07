<template>
  <div class="wrap">
    <!-- 头部导航 -->
    <head-nav>
      <div slot='center'>购物车</div>
      <div slot="right"></div>
    </head-nav>
    <!-- 购物车内容 -->
    <div class="shopcartCon">
      <vershop-cart v-if="shopCartdata.length==0"></vershop-cart>
      <shop-cartcon v-else></shop-cartcon>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import headNav from '../components/headNav'
import vershopCart from '../components/vershopCart'
import shopCartcon from '../components/shopCartcon';
export default {
  props: [],
  components: {
    headNav,
    vershopCart,
    shopCartcon
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    ...mapGetters(["shopCartdata"])
  }
};
</script>
<style scoped>

.shopcartCon{
  width: 100vw;
  height: 80vh;
  font-size: 24px;
  background-color: #fafafa;
}


</style>