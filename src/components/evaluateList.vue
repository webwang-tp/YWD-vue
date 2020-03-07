<template>
  <div class="wrap">
      <div class="info">
          <p class="tit">{{Alldata.buyerName}}</p>
          <p class="time">{{Alldata.createTime | Date}}</p>
      </div>
      <div class="imgbox">
          <img v-for="i in Alldata.postImg" :key="i" :src=i alt="">
      </div>
      <p class="con">{{Alldata.postDescribe}}</p>
      <div><p class="conM">卖家回复：{{Alldata.adminReviews}}</p></div>
  </div>
</template>
<script>
export default {
  props: ['Alldata'],
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
.wrap{
    width: 90%;
    margin: 0 auto;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #dddddd;
}
.info{
    display: flex;
    height:0.6rem;
    line-height: 0.6rem;
}
.info .tit{
    flex: 1;
    text-align: left;
    font-size: 0.22rem;
    color: #ffa51f;
}
.info .time{
    flex: 1;
    text-align: right;
    font-size: 0.14rem;
    color: #999999;
}
.imgbox img{
    width: 1.55rem;
    height: 1.53rem;
    margin-right:0.2rem;
}
.con{
    height: 0.38rem;
    line-height: 0.38rem;
    font-size: 0.18rem;
    color: #999999;
}
.conM{
    font-size: 0.17rem;
    line-height: 0.25rem;
    color: #666666;
    background-color: #dddddd;
    padding: 0.13rem 0.1rem;
    border-radius: 0.09rem;
}
</style>