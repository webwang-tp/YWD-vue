<template>
  <div class="shopbox">
    <div class="shopList" v-for="(item,index) in shop" :key="item.name">
      <div class="shopTit">
        <div class="shopLogo">
          <img :src="bgt[index]" alt />
        </div>
        <p>{{item.name}}</p>
      </div>
      <div class="shopCon">
        <ul class="shopitem">
          <li v-for="i in item.list" :key="i.id" @click="detail(i.id)">
            <img :src="i.thumbnail" alt />
            <div class="price">
              <span class="price-new">￥{{i.reduct_price}}</span>
              <span class="price-old">￥{{i.original_price}}</span>
            </div>
            <div class="shopIner">
              <p>{{i.name}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import b1 from "../assets/images/index/hot.png";
import b2 from "../assets/images/index/baby.png";
import b3 from "../assets/images/index/meizhuang.png";
import b4 from "../assets/images/index/furniture.png";
import b5 from "../assets/images/index/food.png";
import b6 from "../assets/images/index/airplane.png";

export default {
  props: ["shop"],
  components: {},
  data() {
    return {
      arr: [],
      bgt: [b1, b2, b3, b4, b5, b6]
    };
  },
  methods: {
      detail(id){
          this.$router.push('/detail?shopId='+id)
      }
  },
  mounted() {
    //   this.arr=this.shop
  },
  watch: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>
.shopbox {
  padding-bottom: 1.3rem;
  background-color: #fafafa;
}

.shopTit {
  height: 0.94rem;
  line-height: 0.94rem;
  padding: 0 0.2rem;

  .shopLogo {
    float: left;
    line-height: 0.88rem;
    margin-right: 0.2rem;
  }
}

.shopitem {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  li {
    background-color: #fff;
    width: 2.9rem;
    border: 1px solid #eeeeee;

    img {
      width: 80%;
      display: block;
      margin: 0 auto;
    }

    .price {
      overflow: hidden;
      height: 0.62rem;
      line-height: 0.62rem;
      padding: 0 0.2rem;

      .price-new {
        color: #e60012;
        font-size: 0.24rem;
        float: left;
      }

      .price-old {
        color: #666666;
        font-size: 0.2rem;
        float: right;
        line-height: 0.66rem;
        text-decoration: line-through;
      }
    }

    .shopIner {
      font-size: 0.26rem;
      color: #666;
      padding: 0 0.4rem 0.05rem 0.2rem;

      p {
        line-height: 0.39rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient:vertical;
      }
    }
  }
}
</style>