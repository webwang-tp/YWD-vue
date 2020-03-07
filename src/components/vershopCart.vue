<template>
  <div class="wrap">
    <div class="box">
      <img src="../assets/images/index/tab_shopping_nor.png" alt />
      <p>购物车还是空的赶快去逛逛吧~</p>
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
.box {
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  text-align: center;
  font-size: 0.3rem;
  color: #000;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%)
}
.box img {
  display: block;
  margin: 0 auto;
  width: 0.6rem;
  height: 0.6rem;
}
.box p {
  line-height: 0.44rem;
  margin-top: 0.3rem;
}
</style>