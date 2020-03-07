<template>
  <div>
      <evaluate-list v-for="item in apprData.postForm" :key='item.createTime' :Alldata='item'></evaluate-list>
  </div>
</template>
<script>
import evaluateList from  '../components/evaluateList'
import {mapGetters} from 'vuex'
export default {
  props: [],
  components: {
      evaluateList
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
     ...mapGetters(['apprData','apprAll','apprGood'])
  }
};
</script>
<style lang="stylus" scoped></style>