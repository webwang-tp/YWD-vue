<template>
  <div class="navbar-item" @click='navGo'>
      <div v-if='!isshow'><slot name="nav-icon"></slot></div>
      <div v-else><slot name="nav-icon-active" ></slot></div>
      <div :style="txtcolor"><slot name="nav-text"></slot></div> 
  </div>
</template>
<script>
export default {
  props:{
      paths:String,
      textActive:{
          type:String,
          default:'#ea986c'
      }
  },
  components: {},
  data() {
    return {
    };
  },
  methods: {
      navGo(){
          this.$router.push(this.paths)
      }
  },
  mounted(){},
  watch: {},
  computed: {
      isshow(){
         return this.$route.path.indexOf(this.paths) !== -1
      },
      txtcolor(){
          return this.isshow?{color:this.textActive}:{}
      }
  }
};
</script>
<style scoped>
.navbar-item {
  flex: 1;
  text-align: center;
  font-size: 0.22rem;
  line-height: 0.48rem
}
.navbar-item img{
    width: 0.4rem;
    height: 0.4rem;
    vertical-align: middle;
    margin-top: 0.16rem;
}
.active{
    color: #ea986c;
}
</style>