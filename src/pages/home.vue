<template>
  <div>
    <div class="banner">
      <img src="../assets/images/index/homebanner.jpg" alt />
    </div>
    <shop-list :shop="shops"></shop-list>
  </div>
</template>
<script>
import API from "../util/API";
import shopList from "../components/shopList";
export default {
  props: [],
  components: {
    shopList
  },
  data() {
    return {
      shops: []
    };
  },
  methods: {},
  mounted() {
    this.$axios({
      url: API.home
    }).then(res => {
      console.log(res);
      this.shops = res.data.data;
    });
  },
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>