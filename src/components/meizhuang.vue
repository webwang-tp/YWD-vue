<template>
  <div class="box">
      <classifyList v-for='item in classArr[1].list' :key='item.id'></classifyList>
  </div>
</template>
<script>
import classifyList from './classifyList'
import {mapGetters} from 'vuex'
export default {
  props: ['Cdata'],
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
