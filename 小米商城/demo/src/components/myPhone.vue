<template>
  <div>
    <div class="content">
      <div class="text">
        <div>
          <p v-if="!phone" >手机</p>
          <p v-else-if="phone.length == 2">家电</p>
          <p v-else>配件</p>
        </div>
        <div>
          <ul>
            <li
              :class="{ active: activeName == item.name }"
              v-for="(item, index) in phone"
              @mousemove="getList(item.name, item.categoryName)"
              :key="index"
              style="cursor:pointer"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="content-box">
        <img
          src="http://101.132.181.9:3000/public/imgs/phone/phone.png"
          alt=""
          class="i"
        />
        <ul>
          <li
            v-for="item in phonelist"
            :key="item.product_id"
            @click="$router.push(`/details?productID=${item.product_id}`)"
            style="cursor:pointer"
          >
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
          <li class="sixli" @click="$router.push('/goods')">浏览更多》</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["phone", "phonelist"],
  data() {
    return {
      //   phonelist: [],
      activeName: "",
    };
  },
  created() {},
  methods: {
    getList(name, val) {
      this.activeName = name;
      // 跳转切换
      axios.post("product/getHotProduct", { categoryName: val }).then((res) => {
        console.log(res);
        this.phonelist = res.data.Product;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.active {
  color: #ff6c0c;
  border-bottom: 2px solid #ff6c0c;
  font-weight: 400;
}
.family {
  width: 1190px;
  margin: auto;
  margin-top: 65px;
  p {
    font-size: 22px;
    font-weight: 100;
    margin: 10px;
  }
}
.text {
  width: 1190px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    // justify-content: space-between;
    li {
      margin: 0 10px;
    }
  }
  margin: auto;
  p {
    font-size: 22px;
    font-weight: 100;
    margin: 10px;
  }
}
.content {
  //   margin-top: 20px;
  width: 100%;
  background-color: #eee;
  height: 650px;
  .content-box {
    width: 1190px;
    height: 550px;
    margin: auto;
    display: flex;
    .i {
      height: 590px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 15px;
        text-align: center;
        width: 190px;
        height: 250px;
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
        box-shadow: 10px 10px 10px #d9d9d9;
      }
    }
  }
}
.sixli {
  line-height: 250px;
}
.sixli:hover {
  color: #ff6c0c;
}
</style>