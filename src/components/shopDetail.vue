<template>
  <div class="detail">
      <img v-for="(item,index) in shopImg" :key="index" :src='item' alt="">
  </div>
</template>
<script>
export default {
  props: ['shopImg'],
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
<style lang="stylus" scoped>
.detail 
 width 100vw
 height auto
 text-align center
 margin-top 0.25rem
 img 
  margin 0 auto
  display block
</style>