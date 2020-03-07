<template>
  <div class="goback" @click="goback">
      <img src="../assets/images/shopcar/nav_icon_back@2x.png" alt="">
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  methods: {
      goback(){
          this.$router.go(-1)
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>

</style>