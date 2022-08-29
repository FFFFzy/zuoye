<template>
	<div class="login">
		<!-- 登录 -->
		<div class="login-box">
			<div class="login-head">OA登录系统</div>
			<!-- 登录表单 -->
			<div class="login-form">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
					<el-form-item prop="name">
						<el-input v-model="ruleForm.name" prefix-icon="el-icon-s-custom" placeholder="请输入用户名"></el-input>
					</el-form-item>

					<el-form-item prop="password" class="password">
						<el-input v-model="ruleForm.password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
						<div class="forgetPwd">忘记密码？</div>
					</el-form-item>

					<el-form-item prop="testing">
						<el-input v-model="ruleForm.testing" style="width: 60%" placeholder="验证码"></el-input>
					</el-form-item>
					<el-form-item style="text-align: center">
						<el-button type="primary" style="width: 80%" @click="submitForm('ruleForm')">登 录</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="foot-copyright">©2022美团版权所有京ICP证070791号北京公网安备11010502025545号</div>
	</div>
</template>

// 行为
<script>
export default {
	components: {},
	data() {
		return {
			// 登录表单
			ruleForm: {
				name: '',
				password: '',
				testing: ''
			},
			// 验证规则
			rules: {}
		}
	},
	created() {},
	mounted() {},
	methods: {
		// 提交
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					// alert('submit!')
				} else {
					console.log('error submit!!')
					return false
				}
			})
		}
	}
}
</script>

// 样式
<style scoped lang="scss">
.login {
	width: 100%;
	height: 100vh;
	background: url('../assets/loginBg.png');
	background-size: 100% 100%;
	position: relative;
	.login-box {
		position: absolute;
		width: 550px;
		background-color: #fff;
		height: 490px;
		border-radius: 20px;
		padding: 20px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		.password {
			position: relative;
			.forgetPwd {
				position: absolute;
				right: 0;
				top: 38px;
				color: #f4c438;
				font-size: 16px;
			}
		}
		.login-form {
			width: 80%;
			margin: 10px auto;
		}
		.login-head {
			width: 100%;
			text-align: center;
			font-size: 26px;
			margin: 30px 0;
		}
	}
	.foot-copyright {
		position: absolute;
		width: 100%;
		text-align: center;
		bottom: 20px;
		font-size: 14px;
		color: #9a9a9a;
	}
}
</style>
