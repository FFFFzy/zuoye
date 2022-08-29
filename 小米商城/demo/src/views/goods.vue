<template>
  <div class="goods">
    <div class="box-goods">
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>全部商品</el-breadcrumb-item>
  <el-breadcrumb-item>分类</el-breadcrumb-item>
</el-breadcrumb>
        <!-- <p>
      <span @click="$router.push('/home')" class="shou">首页</span>>
      <span>全部商品</span>>
      <span>分类</span>
    </p> -->
    <p class="nav">
      <span class="fen">分类</span>
      <ul class="nav">
        <li style="cursor:pointer" @click="all(-1).slice((currentpage-1)*pageSize,pageSize*currentPage)" :class="{active:i==-1}">全部</li>
        <li style="cursor:pointer" v-for="item,index in arr"
         :key="index" 
         @click="screen(index,item.category_id)" 
         :class="{active:index==i}">{{item.category_name}}</li>
      </ul>
    </p>
    <div class="box">
        <ul>
            <li v-for="(item) in goodslist" 
            :key="item.product_id" 
            @click="$router.push(`/details?productID=${item.product_id}`)"
            style="cursor:pointer">
            <img :src="item.product_picture" alt="" />
            <p>{{ item.product_name }}</p>
            <i>{{ item.product_title }}</i
            ><br />
            <span
              >{{ item.product_selling_price }}元<s
                >{{ item.product_price }}元</s
              ></span
            >
          </li>
        </ul>
    </div>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 5, 10, 15]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      // 定义一个下标
      i: "-1",
      arr: [],
      currentPage: 1,
      pageSize: 15,
      total: 0,
      goodslist: [],
    };
  },
  created() {
    // 分类
    axios.post("product/getCategory").then((res) => {
      // console.log(res);
      this.arr = res.data.category;
    });
    this.all(this.currentPage, this.pageSize);
  },
  methods: {
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.all(this.currentPage, this.pageSize);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.all(this.currentPage, this.pageSize);
    },
    // 点击高亮
    screen(index, val) {
      // 跳转详情
      // this.$router.push(`/goods/details?productID=${item.product_id}`)
      this.i = index;
      axios
        .post("/product/getProductByCategory", {
          categoryID: [val],
          currentPage: 1,
          pageSize: 15,
        })
        .then((res) => {
          console.log(res);
          this.goodslist = res.data.Product;
        });
    },
    // 引用全部数据
    all() {
      this.i = -1;
      axios
        .post("product/getAllProduct", {
          currentPage: this.currentPage,
          pageSize: this.pageSize,
        })
        .then((res) => {
          console.log(res);
          this.total = res.data.total;
          this.goodslist = res.data.Product;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.goods {
  //   width: 100%;
  width: 1190px;
  margin: auto;
  background-color: #fff;
  .goodsbox {
    // width: 1190px;
    background-color: #eee;
    margin: auto;
  }
}
p {
  color: #606266;
  span {
    color: #606266;
  }
  .shou {
    font-weight: 600;
    color: #000;
  }
}
.fen {
  width: 40px;
  font-weight: 600;
  color: #000;
  //   margin: 10px;
  padding: 15px 10px;
}
.nav {
  margin-top: 15px;
  display: flex;
  align-items: center;
}
.nav {
  width: 800px;
  // border: 1px solid #eee;
  display: flex;
  li {
    padding: 10px 15px;
    border: 1px solid #eee;
  }
}
.active {
  color: #409eff;
  border-bottom: 0;
}
.box {
  width: 1190px;
  background-color: #eee;
  height: 830px;
  margin-top: 15px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 15px;
      text-align: center;
      width: 185px;
      height: 220px;
      background-color: #fff;
      margin: 10px;
      i {
        font-style: normal;
      }
      span {
        display: block;
        margin: 10px;
        color: #ff6c0c;
      }
      s {
        color: #ccc;
        margin-left: 5px;
      }
      img {
        width: 100px;
        // height: 200px;
      }
    }
    li:hover {
      box-shadow: 10px 10px 10px #ccc;
    }
  }
}
</style>