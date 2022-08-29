<template>
  <div>
    <el-aside :width="isCollapse ? '48px' : '200px'">
      <el-menu
        :default-active="path"
        class="el-menu-vertical-demo"
        background-color="#fff"
        text-color="#333"
        active-text-color="red"
        :collapse="isCollapse"
        router
      >
        <el-menu-item
          v-for="(item, index) in tablist"
          :key="index"
          :index="item.path"
          @click="to(item)"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  props: ["isCollapse", "tablist", "path"],
  name: "",
  components: {},
  data() {
    return {};
  },
  methods: {
    to(item) {
      this.$emit("topath", item);
    },
  },
};
</script>
<style scoped lang='scss'>
.el-aside {
  height: calc(100vh - 60px);
}
</style>
