<template>
  <div class="headerNav">
    <div class="navGo">
      <slot name="left">
        <go-back></go-back>
      </slot>
    </div>
    <div class="navTit">
      <slot name="center">
        <h1>登录</h1>
      </slot>
    </div>
    <div class="navLink">
      <slot name="right">
        <router-link to="/register">注册</router-link>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
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
@import '../stylus/index.styl';

.headerNav {
  height: 1.4rem;
  line-height: 1.4rem;
  background-color: $bg1;
  display: flex;
  color: $bgff;
  font-size: $textHeight;

  .navTit {
    width: 4rem;
    text-align: center;

    h1 {
      font-weight: normal;
    }
  }

  .navGo {
    flex: 1;
    padding-left: 0.2rem;
  }

  .navLink {
    flex: 1;
    text-align: right;
    padding-right: 0.2rem;
  }
}
</style>