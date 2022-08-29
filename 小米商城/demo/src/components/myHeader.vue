<template>
  <div class="header">
    <p>
      <span v-if="user.userName">欢迎</span>
      <span style="cursor: pointer" @click="logon" v-else>登录</span>/
      <span v-if="user.userName">
        <el-popover
          placement="bottom"
          title="确定退出登录吗？"
          width="200"
          trigger="manual"
          v-model="visible"
        >
          <el-button @click="visible = !visible">取消</el-button>
          <el-button type="primary">确定</el-button>
        </el-popover>

        <span @click="dianname">{{ user.userName }}</span>
      </span>
      <span style="cursor: pointer" @click="register">注册</span>
      <span style="cursor: pointer" @click="ding">我的订单</span>
      <span style="cursor: pointer" @click="ding1">我的收藏</span>
      <span style="cursor: pointer" @click="ding2"
        ><i class="el-icon-shopping-cart-2"></i>购物车<s>(0)</s></span
      >
    </p>
    <!-- 登录弹出框 -->
    <el-dialog title="登录" :visible.sync="dialogVisible" width="30%">
      <!-- <span>这是一段信息</span> -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="10px"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" prefix-icon="el-icon-user">
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="logoncertain">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 注册弹出框 -->
    <el-dialog title="注册" :visible.sync="dialogVisible1" width="30%">
      <!-- <span>这是一段信息</span> -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="10px"
        class="demo-ruleForm"
      >
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" prefix-icon="el-icon-user">
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="pwd">
          <el-input
            v-model="ruleForm.pwd"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item label="" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="certain">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      visible: false,
      flag: false,
      ruleForm: {
        username: "",
        password: "",
        pass: "",
        name: "",
        pwd: "",
      },
      user: {},
      dialogVisible: false,
      dialogVisible1: false,
      // 校验
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        pass: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        name: [{ required: true, message: "请输入密码", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    dianname() {},
    ding() {
      this.$router.push("/order");
      let token = localStorage.getItem("user");
      if (!token) {
        this.dialogVisible = true;
      }
    },
    ding1() {
      this.$router.push("/collect");
      let token = localStorage.getItem("user");
      if (!token) {
        this.dialogVisible = true;
      }
    },
    ding2() {
      this.$router.push("/cart");
      let token = localStorage.getItem("user");
      if (!token) {
        this.dialogVisible = true;
      }
    },
    // 登录确定
    logoncertain() {
      this.dialogVisible = false;
      axios
        .post("users/login", {
          userName: this.ruleForm.username,
          password: this.ruleForm.password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code == "001") {
            localStorage.setItem("user", JSON.stringify(res.data.user));
            this.getUser();
            if (res.data.code == "001") {
              this.$notify({
                title: "成功",
                message: "登录成功",
                type: "success",
              });
              this.dialogVisible1 = false;
              this.ruleForm = "";
            } else {
              this.$notify.error({
                title: "错误",
                message: res.data.msg,
              });
              this.ruleForm = "";
            }
          }
        });
      this.getUser();
    },
    // 注册确定
    certain() {
      axios
        .post("users/register", {
          userName: this.ruleForm.name,
          password: this.ruleForm.pwd,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code == "001") {
            this.$notify({
              title: "成功",
              message: "注册成功",
              type: "success",
            });
            this.dialogVisible1 = false;
            this.ruleForm = "";
          } else {
            this.$notify.error({
              title: "错误",
              message: res.data.msg,
            });
            this.ruleForm = "";
          }
        });
      this.getUser();
    },
    //
    getUser() {
      this.user = JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user"))
        : { username: "", user_id: "" };
    },
    logon() {
      this.dialogVisible = true;
    },
    register() {
      this.dialogVisible1 = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  height: 50px;
  width: 100%;
  background-color: #3d3d3d;
  color: #a5b0a5;
  p {
    float: right;
    line-height: 50px;
    margin-right: 150px;
    span {
      margin: 0 7px;
    }
    span:hover {
      color: aliceblue;
    }
    span:nth-child(5):hover {
      padding: 10px;
      background-color: #fff;
      color: orange;
    }
  }
  s {
    text-decoration: none;
  }
}
</style>