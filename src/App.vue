<template>
<div>
  <keep-alive>
      <router-view></router-view>
  </keep-alive>

</div>
</template>

<script>
import login from './pages/login'
export default {
  components:{
    login
  }
}
</script>
<style lang="stylus">
@import './stylus/index.styl'
</style>





