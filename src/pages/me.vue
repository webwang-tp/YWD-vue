<template>
  <div style='background:#f3f3f3;height:100vh;'>
    <head-nav>
      <div slot="left"><img src="../assets/images/me/set.png" alt=""></div>
      <div slot="center">个人中心</div>
      <div slot="right"><img src="../assets/images/me/news.png" alt=""></div>
    </head-nav>

    <me-info></me-info>

    <order-form></order-form>

    <shop-address></shop-address>
  </div>
</template>
<script>
import headNav from "../components/headNav";
import meInfo from '../components/meInfo'
import orderForm from '../components/orderForm'
import shopAddress from '../components/shopAddress'

export default {
  props: [],
  components: {
    headNav,
    meInfo,
    orderForm,
    shopAddress
  },
  data() {
    return {
       
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped></style>