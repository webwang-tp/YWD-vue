<template>
  <div class="wrap">
    <!-- 头部搜素 -->
    <header class="header">
      <div class="searchBox">
        <van-search
          v-model="value"
          background="#ff9900"
          left-icon
          right-icon="search"
          placeholder="请输入搜索关键词"
        />
      </div>
    </header>
    <!-- 导航切换 -->
    <div class="classifyCon">
      <div class="classNav">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item title="母婴专区" />
          <van-sidebar-item title="美妆护肤" />
          <van-sidebar-item title="家居生活" />
          <van-sidebar-item title="食品营养" />
          <van-sidebar-item title="全球直邮" />
        </van-sidebar>
      </div>
      <div class="classItem">
        <muying :Cdata='data' :IDs='ID'></muying>
       <!--  <meizhuang></meizhuang>-->
        <!-- <div class="classItemCon" :is="classItemName"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
import API from "../util/API";
import muying from "../components/muying";
import meizhuang from "../components/meizhuang";
export default {
  props: [],
  components: {
    muying,
    meizhuang
  },
  data() {
    return {
      value: "",
      activeKey: 0,
      classItemName: "muying",
      data: [],
      ID:0
    };
  },
  methods: {
    onChange(index){
      // console.log(index)
      this.ID=index
    }
  },
  mounted() {
    this.$axios({
      url: API.Classify,
      method: "get"
    }).then(res => {
      this.data = res.data.data;
      this.$store.dispatch("classifyData", res.data.data);
      console.log(this.data);
    });
  },
  watch: {},
  computed: {}
};
</script>
<style scoped>
.header {
  width: 100vw;
  background-color: #ff9900;
}
.searchBox {
  width: 5.1rem;
  margin: 0 auto;
}
.searchBox .van-search__content {
  background-color: #ffe1b5;
  border-radius: 8px;
  padding-left: 0.2rem;
}
.van-cell {
  font-size: 0.2rem;
}
/* 导航切换 */
.van-sidebar {
  width: 2.35rem;
}
.van-sidebar-item--select {
  font-size: 0.26rem;
  color: #ff9900;
  border-color: #1d84a7;
}
.classifyCon {
  display: flex;
  flex-direction: row;
}
.classItem {
  flex: 1;
}
</style>