<template>
  <div class="box">
    <van-image :src='classify.thumbnail' style="width:80%;display: block;margin: 0 auto;">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
    <h2>{{classify.name}}</h2>
  </div>
</template>
<script>
export default {
  props: ['classify'],
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
<style  scoped>
.box {
  width: 1.8rem;
  height: 1.9rem;
  border: 1px solid #1d84a7;
  border-radius: 0.06rem;
  float:left;
  margin: 0.2rem 0.09rem 0rem;
  box-sizing: border-box;
}
.box .van-image__img{
  margin: 0 auto;
  width: 80%!important;
}
.box h2{
  height: 0.47rem;
  line-height: 0.47rem;
  background-color: #1d84a7;
  color: #fff;
  text-align: center;
  border-top-left-radius: 0.06rem;
  border-top-right-radius: 0.06rem;
}
</style>