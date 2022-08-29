<template>
  <div>
    <div class="block">
      <el-carousel height="500px">
        <el-carousel-item v-for="item,index in imglist" :key="index">
            <img :src="item.imgPath" alt="" >
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
        imglist:[]
    };
  },
  created() {
    axios.post("resources/carousel").then((res) => {
      console.log(res);
      this.imglist = res.data.carousel;
    });
  },
};
</script>
<style lang="scss" scoped>
.img{
  width: 100%;
  height: 100%;
}
</style>