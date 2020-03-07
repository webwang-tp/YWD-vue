<template>
  <div class="wrap">
    <div class="banner">
      <div class="gobackbox">
        <go-back></go-back>
      </div>
      <!-- 轮播 -->
      <van-swipe class="banner" :autoplay="5000" indicator-color="#ff9900">
        <van-swipe-item v-for="(image, index) in swiperImgArr" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 中心信息 -->
    <div class="detail-info">
      <div class="detailName">{{shopDetail.name}}</div>
      <div class="detailPrice">
        <p class="newPrice">￥{{shopDetail.reduct_price}}</p>
        <p class="oldPrice">￥{{shopDetail.original_price}}</p>
      </div>
      <div class="detLable-dis">
        <van-tag color="#ff9900">{{shopDetail.allowance}}折</van-tag>
        <van-tag color="#ff9900">{{shopDetail.isFreeShip==true?'包邮':'不包邮'}}</van-tag>
      </div>
      <div class="detLable-fet">
        <van-tag plain v-for="item in shopDetail.describe" :key="item" class="bq">{{item}}</van-tag>
      </div>
    </div>
    <div class="line" style="height:0.32rem;background:#eeeeee"></div>
    <!-- 动态组件 -->
    <div class="particulars">
      <span :class="[flag=='shopDetail'?'active':'']" @click="spanData('shopDetail')">商品详情</span>
      <span :class="[flag=='evaluate'?'active':'']" @click="spanData('evaluate')">买家口碑</span>
    </div>
    <!-- <shop-detail></shop-detail> -->
    <!-- <evaluate :buys="buy"></evaluate> -->
    <div class="shopNav" :is="shopNavname" :shopImg="this.shopDetail.shopDes"></div>
    <!-- 购物车 -->
    <van-goods-action :d="swiperImgArr">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addshop()" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <!-- 选购信息 -->
    <van-action-sheet v-model="show" title="请选择商品信息">
      <div class="content">
        <img :src="this.swiperImgArr[0]" alt style="width:50%;display:block;margin:5px auto;" />
        <div class="skuBox">
          <div v-for="item in shopDetail.buySelect" :key="item.name" class="shopSku">
            <p>{{item.name}}</p>
            <span v-for="i in item.list" :key="i">{{i}}</span>
          </div>
        </div>
        <div class="shopInfo">
          <p class="num">购买个数:{{num}}</p>
          <p class="priceZJ">总价:${{pricez}}</p>
        </div>
        <van-button plain hairline type="primary" @click="add">+</van-button>
        <van-button plain hairline type="primary" @click="jian">-</van-button>
        <van-button type="info" @click="addshopcart(num,pricez)">添加到购物车</van-button>
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
import API from "../util/API";
import shopDetail from "../components/shopDetail";
import evaluate from "../components/evaluate";
export default {
  props: [],
  components: {
    shopDetail,
    evaluate
  },
  data() {
    return {
      id: "",
      shopDetail: [], //商品信息
      swiperImgArr: [], //轮播图片
      buy: [],
      num: 0, //购物车商品数量
      pricez: 0,
      flag: "shopDetail", //底部导航动态组件初始值
      show: false,
      shopNavname: "shopDetail" //底部内容动态组件初始值
    };
  },
  methods: {
    spanData(data) {
      this.flag = data;
      this.shopNavname = data;
    },
    addshop() {
      this.show = true;
    },
    add() {
      this.num++;
      this.pricez = this.num * this.shopDetail.reduct_price;
    },
    jian() {
      this.num--;
      this.pricez = this.num * this.shopDetail.reduct_price;
    },
    addshopcart(num, pricez) {
      this.shopDetail.num = num;
      this.shopDetail.pricez = pricez;
      this.shopDetail.flag = false;
      this.$store.dispatch("addshopcart", this.shopDetail);
      this.show = false;
    }
  },
  mounted() {
    this.id = this.$route.query.shopId;
    localStorage.setItem("id", this.id);
    this.$axios({
      url: API.detail,
      params: {
        pid: this.id
      }
    }).then(res => {
      this.shopDetail = res.data.data;
      this.swiperImgArr = this.shopDetail.swiperImgArr;
      this.buy = this.shopDetail.buyerReviews; //买家评价
      this.$store.dispatch("appraise", this.buy); //通过vuex缓存拿到商品评价数据
    });
  },
  watch: {},
  computed: {},
  activated() {
    this.id = this.$route.query.shopId;
    console.log(this.id);
    if (localStorage.getItem("id") != this.id) {
      localStorage.setItem("id", this.id);
      this.shopDetail = [];
      this.swiperImgArr = [];
      this.num = 0;
      this.pricez = 0;
      this.$axios({
        url: API.detail,
        params: {
          pid: this.id
        }
      }).then(res => {
        this.shopDetail = res.data.data;
        this.swiperImgArr = this.shopDetail.swiperImgArr;
        this.buy = this.shopDetail.buyerReviews; //买家评价
        this.$store.dispatch("appraise", this.buy); //通过vuex缓存拿到商品评价数据
      });
    }
  },
  beforeRouteEnter(to,from,next){
    if(from.path=='/index/home'){
      next()
      return;
    }
    next('/index/home')
  }
};
</script>
<style  scoped>
.banner {
  width: 100vw;
  height: 5.4rem;
  border-bottom: 1px solid #eeeeee;
  position: relative;
}
.gobackbox {
  position: absolute;
  left: 0.23rem;
  top: 0.5rem;
  width: 0.54rem;
  height: 0.54rem;
  line-height: 0.54rem;
  text-align: center;
  background-color: #b2b2b2;
  border-radius: 50%;
  z-index: 9999;
}
.banner img {
  width: 80%;
  display: block;
  margin: 0 auto;
}

.detail-info {
  padding: 0.1rem 0.2rem;
}
.detail-info .detailName {
  font-size: 0.28rem;
  color: #333;
  line-height: 0.4rem;
}

.detail-info .detailPrice {
  float: left;
  width: 1.8rem;
}
.newPrice {
  color: #eb2222;
  line-height: 0.43rem;
  font-size: 0.25rem;
}
.oldPrice {
  font-size: 0.18rem;
  color: #999999;
  text-decoration: line-through;
}
.detail-info .bq {
  margin-right: 0.1rem;
}
.particulars {
  padding: 0 0.45rem;
  display: flex;
  padding-bottom: 0.1rem;
  border-bottom: 1px solid #999999;
}
.particulars span {
  flex: 1;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.24rem;
  color: #999999;
}
.active {
  color: #ffcc7f;
  border-bottom: 1px solid #ff9900;
}
/* 商品信息 */
.shopInfo{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

/* 商品规格 */
.skuBox {
  margin: 0.05rem 0.15rem;
}
.shopSku {
  height: 1rem;
  margin: 0.1rem 0;
}
.shopSku span {
  display: inline-block;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  border: 1px solid black;
  border-radius: 0.1rem;
  padding: 0.1rem;
  margin: 0.05rem;
}
</style>