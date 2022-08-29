<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读消息" name="first">
        <!-- 列表 -->
        <div
          class="box"
          v-for="(item, index) in tabData1.slice(
            (currentpage - 1) * pages,
            pages * currentpage
          )"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <p>{{ item.create_time }}</p>
          <el-button @click="toread(index)">标记已读</el-button>
        </div>
        <!-- 分页 -->
        <div class="block">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentpage"
            :page-size="pages"
            layout="prev, pager, next, jumper"
            :total="tabData1.length"
          >
          </el-pagination>
        </div>
        <!-- 按钮 -->
        <el-button
          type="primary"
          style="margin-top: 20px"
          @click="allread(tabData1)"
          >全部标为已读</el-button
        >
      </el-tab-pane>
      <el-tab-pane label="已读消息" name="second">
        <!-- 列表 -->
        <div
          class="box"
          v-for="(item, index) in this.$store.state.readData.slice(
            (currentpage - 1) * pages,
            pages * currentpage
          )"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <p>{{ item.create_time }}</p>
          <el-button type="danger" @click="del(index)">删除</el-button>
          <el-button type="info" @click="tounread(index)">还原未读</el-button>
        </div>
        <!-- 分页 -->
        <div class="block">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentpage"
            :page-size="pages"
            layout="prev, pager, next, jumper"
            :total="this.$store.state.readData.length"
          >
          </el-pagination>
        </div>
        <!-- 按钮 -->
        <el-button
          type="danger"
          style="margin-top: 20px"
          @click="alldel(this.$store.state.readData)"
          >删除全部</el-button
        >
      </el-tab-pane>
      <el-tab-pane label="回收站" name="third">
        <div
          class="box"
          v-for="(item, index) in this.$store.state.delData.slice(
            (currentpage - 1) * pages,
            pages * currentpage
          )"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <p>{{ item.create_time }}</p>
          <el-button @click="todel(index)">还原</el-button>
        </div>
        <!-- 分页 -->
        <div class="block">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentpage"
            :page-size="pages"
            layout="prev, pager, next, jumper"
            :total="this.$store.state.delData.length"
          >
          </el-pagination>
        </div>
        <!-- 按钮 -->
        <el-button type="danger" style="margin-top: 20px" @click="clear"
          >清空回收站</el-button
        >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "",
  components: {},
  data() {
    return {
      pages: 5,
      currentpage: 1,
      activeName: "unread",
      tabData1: [],
    };
  },
  created() {
    console.log(this.a);
    this.getdata();
  },
  computed: {},
  methods: {
    // 清空购物车
    clear() {
      this.$store.state.delData = [];
    },
    // 恢复
    todel(i) {
      const item = this.$store.state.delData.find((item, index) => {
        return index == i;
      });
      this.$store.state.readData.push(item);
      this.$store.state.delData.splice(i, 1);
    },
    // 全部删除
    alldel(arr) {
      console.log(arr);
      this.$store.state.readData = [];
      this.$store.state.delData.push(...arr);
    },
    // 标记已读
    toread(i) {
      const item = this.tabData1.find((item, index) => {
        return index == i;
      });
      this.$store.state.readData.push(item);
      this.tabData1.splice(i, 1);
    },
    // 删除
    del(i) {
      const item = this.$store.state.readData.find((item, index) => {
        return index == i;
      });
      this.$store.state.delData.push(item);
      this.$store.state.readData.splice(i, 1);
    },
    // 还原未读
    tounread(i) {
      const item = this.$store.state.readData.find((item, index) => {
        return index == i;
      });
      this.tabData1.push(item);
      this.$store.state.readData.splice(i, 1);
    },
    // 全部标记已读
    allread(arr) {
      this.tabData1 = [];
      this.$store.state.readData.push(...arr);
    },

    // 获取数据
    getdata() {
      axios.get("/text.json").then((res) => {
        console.log(res.data);
        this.tabData1 = res.data;
      });
    },
    // 选项卡
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pages = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentpage = val;
    },
  },
};
</script>
<style scoped lang='scss'>
.box {
  height: 50px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  p {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p:nth-child(1) {
    width: 55%;
  }
  p:nth-child(2) {
    width: 15%;
  }
}
</style>
