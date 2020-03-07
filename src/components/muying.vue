<template>
  <div class="box">
      <classifyList v-for='item in Cdata[IDs].list' :key='item.id' :classify='item'></classifyList>
  </div>
</template>
<script>
import classifyList from './classifyList'
import {mapGetters} from 'vuex'
export default {
  // props: ['Cdata','IDs'],
  props:{
    Cdata:{
        type:Array
    },
    IDs:{
      type:Number,
      // default(){
      //   return 0
      // }
    }
  },
  components: {
      classifyList
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
      ...mapGetters(['classArr'])
  }
};
</script>
<style scoped>
.box{
    width:4.05rem;
    overflow:hidden;
}

</style>
