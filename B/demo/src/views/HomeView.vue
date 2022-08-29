<template>
  <div class="home">
    <el-container>
      <el-header>
        <!-- 头部 -->
        <my-header :isCollapse="isCollapse" @open="open"></my-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- 侧边栏 -->
          <my-list
            :isCollapse="isCollapse"
            :tablist="tablist"
            :path="path"
          ></my-list>
        </el-aside>
        
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import myHeader from "../components/myHeader.vue";
import myList from "../components/myList.vue";
export default {
  data() {
    return {
      tablist: [
        {
          path: "/books",
          title: "图书管理",
          icon: "el-icon-c-scale-to-original",
        },
        {
          path: "/back",
          title: "后台管理",
          icon: "el-icon-edit-outline",
        },
        {
          path: "/country",
          title: "国际化",
          icon: "el-icon-s-flag",
        },
        {
          path: "/table",
          title: "基础表格",
          icon: "el-icon-s-grid",
        },
        {
          path: "/tab",
          title: "tab选项卡",
          icon: "el-icon-s-promotion",
        },
      ],
      isCollapse: false,
    };
  },
  methods: {
    open() {
      this.isCollapse = !this.isCollapse;
    },
  },
  components: {
    myHeader,
    myList,
  },
};
</script>
<style lang="scss" scoped>
.el-header {
  background-color: #232e42;
  color: #fff;
  line-height: 60px;
}
</style>
