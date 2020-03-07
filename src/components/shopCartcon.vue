<template>
  <div id="box">
    <van-swipe-cell :before-close="beforeClose" v-for="item in shopCartdata" :key="item.cid">
      <input type="checkbox" v-model="item.flag" class="shopcheck" @click="shopcheck(item.pid)" />
      <van-card
        :num="item.num"
        :price="item.reduct_price"
        :title="item.name"
        class="goods-card"
        :thumb="item.swiperImgArr[0]"
      />
      <van-stepper
        v-model="item.num"
        @plus="push(item.pid)"
        @minus="minus(item.pid)"
        @confirm="delet(item.id)"
      />
      <van-button slot="right" square text="删除" type="danger" class="delete-button" />
    </van-swipe-cell>
    
    <van-submit-bar :price="Zprice" button-text="提交订单">
      <van-checkbox v-model="checkedFlag" @click="cheackAll">全选</van-checkbox>
    </van-submit-bar>
    <!-- <input type="checkbox" v-model='checkedFlag' > -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { Dialog } from "vant";
export default {
  props: [],
  components: {},
  data() {
    return {
      value: ""
    };
  },
  methods: {
    push(id) {
      this.$store.dispatch("add", id);
    },
    minus(id) {
      this.$store.dispatch("minus", id);
    },
    delet(id) {
      this.$store.dispatch("delet", id);
    },
    beforeClose({ position, instance }) {
      switch (position) {
        case "right":
          Dialog.confirm({
            message: "确定删除吗？"
          })
            .then(res => {
              instance.close();
              this.delet();
              this.$toast.success("删除成功!");
            })
            .catch(() => {
              instance.close();
            });
          break;
      }
    },
    shopcheck(id) {
      this.$store.dispatch("shopcheck", id); //通知vuex修改商品选中状态
    },
    cheackAll() {
      if (!this.checkedFlag) {
        this.$store.dispatch("cheackAll"); //通知vuex将所有商品状态改成不选
      } else {
        this.$store.dispatch("cheackNo"); //通知vuex将所有商品状态改成全选
      }
    }
  },
  mounted() {},
  watch: {},
  computed: {
    ...mapGetters(["shopCartdata"]),
    checkedFlag: {
      get() {
        var index = this.shopCartdata.findIndex(item => item.flag === false);
        return index > -1 ? false : true;
      },
      set() {}
    },
    Zprice() {
         var arr = this.shopCartdata.filter(item=>item.flag===true)
         var p = 0
         arr.forEach(item=> p+= item.num*item.pricez)
         return p *100
    }
  }
};
</script>
<style  scoped>
#box >>> .van-swipe-cell__wrapper {
  display: flex !important;
}
.goods-card {
  margin: 0;
  background-color: #f7f7f7;
}
.shopcheck {
  height: 2rem;
  width: 0.5rem;
  margin: 0.1rem;
}
.van-stepper {
  position: absolute;
  left: 3.5rem;
  top: 1.4rem;
}
.delete-button {
  height: 100%;
}
</style>