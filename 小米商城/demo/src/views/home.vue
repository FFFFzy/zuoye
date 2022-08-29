<template>
  <div class="box">
    <div class="block">
      <el-carousel height="350px">
        <el-carousel-item v-for="(item, index) in imglist" :key="index">
          <img :src="item.imgPath" alt="" class="img" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <my-phone :phonelist="phonelist1"></my-phone>
    <my-phone :phone="phone" :phonelist="phonelist2"></my-phone>
    <my-phone :phone="phone2" :phonelist="phonelist3"></my-phone>
  </div>
</template>
<script>
import myPhone from "../components/myPhone.vue";
import axios from "axios";
export default {
  data() {
    return {
      activeName: "",
      imglist: [],
      phonelist1: [],
      phonelist2: [],
      phonelist3: [],
      phone: [
        {
          name: "热门",
          categoryName: ["电视机", "空调", "洗衣机"],
        },
        {
          name: "电视影音",
          categoryName: ["电视机"],
        },
      ],
      phone2: [
        {
          name: "热门",
          categoryName: ["保护套", "保护膜", "充电器", "充电宝"],
        },
        {
          name: "保护套",
          categoryName: ["保护套"],
        },
        {
          name: "充电器",
          categoryName: ["充电器"],
        },
      ],
    };
  },
  components: {
    myPhone,
  },

  created() {
    // 轮播图
    axios.post("resources/carousel").then((res) => {
      // console.log(res);
      this.imglist = res.data.carousel;
    });
    // 家电
    axios
      .post("product/getHotProduct", {
        categoryName: ["电视机", "空调", "洗衣机"],
      })
      .then((res) => {
        this.phonelist2 = res.data.Product;
      });
    // 手机
    axios
      .post("product/getPromoProduct", { categoryName: "手机" })
      .then((res) => {
        this.phonelist1 = res.data.Product;
      });
    // 配件
    axios
      .post("product/getHotProduct", {
        categoryName: ["保护套", "保护膜", "充电器", "充电宝"],
      })
      .then((res) => {
        this.phonelist3 = res.data.Product;
      });
  },
};
</script>
<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
}
.block {
  width: 1190px;
  margin: auto;
  margin-bottom: 20px;
}
</style>