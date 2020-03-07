<template>
  <div style='margin-bottom:1.3rem'>
    <div class="evalNav">
      <span :class="[spanName=='all'?'active':'']" @click="btnActive('all')">全部评价</span>
      <span :class="[spanName=='good'?'active':'']" @click="btnActive('good')">好评</span>
      <span :class="[spanName=='bad'?'active':'']"  @click="btnActive('bad')">差评</span>
      <span :class="[spanName=='postForm'?'active':'']" @click="btnActive('postForm')">晒单</span>
    </div>
    <!-- <evaluate-List></evaluate-List> -->
    <!-- <all></all>
    <good></good>
    <bad></bad>
    <post-form></post-form> -->
    <div class="evaluateCon" :is='evaluateConponent'></div><!-- 动态组件 -->
  </div>
</template>
<script>
import API from "../util/API";
import {mapGetters} from "vuex"
import evaluateList from '../components/evaluateList'
import all from '../components/all'
import good from '../components/good'
import bad from '../components/bad'
import postForm from '../components/postForm'

export default {
  props: ["buys"],
  components: {
      evaluateList,
      all,
      good,
      bad,
      postForm
  },
  data() {
    return {
      spanName:'all',//动态导航初始变量
      evaluateConponent:'all'//动态组件初始变量
    };
  },
  methods: {
      btnActive(data){
          this.spanName=data          //修改动态导航初始变量
          this.evaluateConponent=data //修改动态组件初始变量
      }
  },
  mounted() {
  },
  watch: {},
  computed: {
     ...mapGetters(['apprData'])
  }
};
</script>
<style lang="stylus" scoped>
.evalNav
    padding 0.1rem 0
    width 95%
    text-align center
    border-bottom 1px solid #999999
    margin 0 auto
    span 
     text-align center
     font-size 0.24rem
     color #fff
     display inline-block
     width 1.25rem
     height 0.4rem
     line-height 0.4rem
     margin 0.05rem 0.10rem
     border-radius 0.2rem
     background-color #999999
    .active
     background-color #ff9900

</style>