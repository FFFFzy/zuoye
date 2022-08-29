<template>
  <div class="footer">
    <div class="box">
      <p class="p">
        <a href="#" class="el-icon-circle-check">7天无理由退换货</a>
        <a href="#" class="el-icon-circle-check">满99元全场免邮</a>
        <a href="#" class="el-icon-circle-check">100%品质保证</a>
      </p>
      <img src="../../public/111.png" alt="" class="img" /><br />
      <p class="footernav">
        <span @click="$router.push('/home')">首页</span>|
        <span @click="$router.push('/goods')">全部商品</span>|
        <span @click="$router.push('/mine')">关于我们</span>
      </p>
      <p>商城版权所有&copy;2012-2021</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.footer {
  color: #fff;
  text-align: center;
  width: 100%;
  background-color: #2f2f2f;
  //   margin: auto;
  .box {
    width: 1190px;
    background-color: #2f2f2f;
    height: 420px;
    margin: auto;
    .p {
      height: 250px;
      display: flex;
      justify-content: space-between;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 26px;
        line-height: 250px;
      }
    }
  }
}
.footernav {
  margin: 15px;
  color: #878787;
}
p {
  color: #878787;
}
</style>
