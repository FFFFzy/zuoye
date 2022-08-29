<template>
  <div class="home">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-main>
        <div class="nav">
          <ul>
            <li>
              <img src="http://101.132.181.9/img/logo.c8999c02.png" alt="" />
            </li>
            <li>
              <el-menu class="el-menu-demo" :default-active="activeName" mode="horizontal" router>
                <el-menu-item index="/home">首页</el-menu-item>
                <el-menu-item index="/goods">全部商品</el-menu-item>
                <el-menu-item index="/mine">关于我们</el-menu-item>
              </el-menu>
            </li>
            <li>
              <el-input placeholder="请输入内容" class="ipt">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </li>
          </ul>
        </div>
        <div class="div">
          <router-view />
        </div>
      </el-main>
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myFooter from '../components/myFooter.vue'
import axios from "axios";
import myHeader from "../components/myHeader.vue";
export default {
  data() {
    return {
      activeName:'/home',
      imglist: [],
    };
  },
  methods: {
    // activeName() {},
  },
  watch:{
    $route:{
      deep:true,
      immediate:true,
      handler(val){
        this.activeName=val.path
      }
    }
  },
  components: {
    myHeader,
    myFooter
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  .nav {
    width: 1190px;
    margin: auto;
    // display: flex;
    // justify-content: center;
    ul {
      width: 600px;
      display: flex;
    }
  }
}
.ipt {
  width: 250px;
}
</style>
