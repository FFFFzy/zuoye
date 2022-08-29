<template>
  <div class="box">
    <div class="smallbox">
      <div class="collect-top">
        <i class="el-icon-collection-tag" style="color: #ff6700"></i> 我的收藏
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
.collect-top {
  padding: 20px 0;
  font-size: 30px;
  border-bottom: 3px solid #ff6700;
}
</style>