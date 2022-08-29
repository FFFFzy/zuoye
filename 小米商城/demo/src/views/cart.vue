<template>
  <div class="box">
    <div class="smallbox">
      <div class="cart-top">
        <div>
          <i class="el-icon-collection-tag" style="color: #ff6700"></i>
          我的购物车
        </div>
        <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
      </div>
      <emptyCom></emptyCom>
    </div>
  </div>
</template>
<script>
import emptyCom from "../components/emptyCom.vue";
export default {
  name: "",
  components: {
    emptyCom,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.box {
  width: 100%;
  .smallbox {
    width: 1190px;
    margin: auto;
  }
}
.cart-top {
  padding: 20px 0;
  font-size: 30px;
  border-bottom: 3px solid #ff6700;
  display: flex;
  align-items: center;
  p {
    font-size: 16px;
    margin-top: 20px;
    margin: 20px 0 0 20px;
  }
}
</style>