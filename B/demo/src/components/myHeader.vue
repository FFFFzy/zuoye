<template>
  <div>
    <span class="el-icon-s-fold" @click="open" v-if="!isCollapse"></span>
    <span class="el-icon-s-unfold" @click="open" v-else></span>
    后台管理系统
    <span class="btn">
      <button @click="screen" class="el-icon-rank"></button>
    </span>
  </div>
</template>
<script>
export default {
  props: ["isCollapse"],
  data() {
    return {
      fullscreen: false,
    };
  },
  methods: {
    screen() {
      // 如果不允许进入全屏，发出不允许提示
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    open() {
      this.$emit("open", this.fullscreen);
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  float: right;
}
</style>