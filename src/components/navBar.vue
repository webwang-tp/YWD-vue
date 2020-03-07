<template>
  <div class="navbar">
    <nav-baritem paths='/index/home'>
        <img src="../assets/images/index/tab_home_nor.png" slot="nav-icon" alt />
        <img src="../assets/images/index/tab_home_hig.png" alt slot="nav-icon-active"/>
        <div slot="nav-text">首页</div>
    </nav-baritem>

    <nav-baritem paths='/index/classify'>
      <img src="../assets/images/index/tab_menu_nor.png" alt slot="nav-icon"/>
      <img src="../assets/images/index/tab_menu_hig.png" alt slot="nav-icon-active"/>
      <div slot="nav-text">分类</div>
    </nav-baritem>

    <nav-baritem paths='/index/shopCart'>
      <img src="../assets/images/index/tab_shopping_nor.png" alt slot="nav-icon"/>
      <img src="../assets/images/index/tab_shopping_hig.png" alt  slot="nav-icon-active"/>
      <div slot="nav-text">购物车</div>
    </nav-baritem>

    <nav-baritem paths='/index/me'>  
      <img src="../assets/images/index/tab_me_nor.png" alt slot="nav-icon"/>
      <img src="../assets/images/index/tab_me_hig.png" alt slot="nav-icon-active"/>
      <div slot="nav-text">我</div>
    </nav-baritem>
  </div>
</template>
<script>
import navBaritem from "./navBaritem";
export default {
  props: [],
  components: {
    navBaritem
  },
  data() {
    return {
      
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
   
  }
};
</script>
<style scoped>
.navbar {
  width: 100vw;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  background-color: #fff;
}
</style>