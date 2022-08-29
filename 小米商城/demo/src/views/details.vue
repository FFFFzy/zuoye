<template>
  <div class="box">
    <div class="smallbox">
      <el-card>
        <!-- 卡片 -->
        <div class="card">
          <p>{{ goodslist.product_name }}</p>
          <p>
            <span style="cursor: pointer">概述</span>
            <span style="cursor: pointer">参数</span>
            <span style="cursor: pointer">用户评价</span>
          </p>
        </div>
      </el-card>
      <!-- 中间内容 -->
      <div class="content">
        <!-- 左边 -->
        <div class="left">
          <!-- 轮播图 -->
          <div class="block">
            <el-carousel height="500px">
              <el-carousel-item v-for="item,index in goodsbanner" :key="index">
                <img :src="item.product_picture" alt="" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!-- 右边 -->
        <div class="right">
          <h2 class="h">{{ goodslist.product_title }}</h2>
          <p class="rightp">{{ goodslist.product_intro }}</p>
          <span class="rightspan">小米自营</span><br />
          <i class="rightmoney">{{ goodslist.product_selling_price }}元</i
          >&nbsp;
          <s class="s">{{ goodslist.product_price }}元</s>
          <hr />
          <div class="rightbox">
            <p class="rightboxp">
              <span>{{ goodslist.product_name }}</span>
              <span
                >{{ goodslist.product_selling_price }}元&nbsp;&nbsp;<s
                  >{{ goodslist.product_price }}元</s
                ></span
              >
            </p>
            <big class="money"
              >总计:{{ goodslist.product_selling_price }}元</big
            >
          </div>
          <el-button class="btn">加入购物车</el-button>
          <el-button class="btn1">喜欢</el-button><br />
          <ul>
            <li class="el-icon-circle-check">小米自营</li>
            <li class="el-icon-circle-check">小米发货</li>
            <li class="el-icon-circle-check">7天无理由退换货</li>
            <li class="el-icon-circle-check">7天价格保护</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      goodslist: [], //详情商品
      goodsbanner: [], //輪播圖
    };
  },
  created() {
    // 获取详情商品
    axios
      .post("product/getDetails", { productID: this.$route.query.productID })
      .then((res) => {
        // console.log(res);
        this.goodslist = res.data.Product[0];
      });
    //   获取轮播图
    axios
      .post("product/getDetailsPicture", {
        productID: this.$route.query.productID,
      })
      .then((res) => {
        console.log(res);
        this.goodsbanner = res.data.ProductPicture;
      });
  },
};
</script>
<style lang="scss" scoped>
// 轮播图

.box {
  width: 100%;
  //   background-color: #eee;
  .smallbox {
    width: 1190px;
    margin: auto;
  }
}
.card {
  display: flex;
  justify-content: space-between;
  p {
    span {
      margin: 0 15px;
    }
    span:hover {
      color: #ff6d74;
    }
  }
}
.content {
  width: 1190px;
  margin-top: 15px;
  height: 500px;
  .left {
    width: 45%;
    height: 100%;
    float: left;
    .block {
      width: 500px;
      height: 500px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.btn {
  width: 350px;
  height: 45px;
  background-color: #ff6700;
  color: #fff;
  font-size: 18px;
  margin-bottom: 15px;
}
.btn1 {
  width: 270px;
  height: 45px;
  background-color: #b0b0b0;
  color: #fff;
  margin-right: 15px;
  margin-bottom: 15px;
}
.h {
  font-weight: 400;
  margin: 15px 0;
}
hr {
  margin: 10px 0px;
}
.right {
  width: 55%;
  float: right;
  ul {
    li {
      color: #b0b0b0;
      margin: 0 10px;
    }
  }
  .rightbox {
    width: 600px;
    height: 150px;
    background-color: #eee;
    margin: 20px 0;
    padding: 25px;
    .rightboxp {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      color: #b0b0b0;
      font-size: 22px;
    }
    .money {
      color: #ff6700;
      font-size: 28px;
      margin-top: 50px;
      display: block;
    }
  }
  .rightp {
    color: #b0b0b0;
    margin: 10px 0;
  }
  .rightspan {
    color: #ff6700;
    // margin-bottom: 5px;
    display: block;
  }
  .rightmoney {
    color: #ff6700;
    margin-bottom: 10px;
    font-style: normal;
  }
}
.s {
  color: #b0b0b0;
}
</style>