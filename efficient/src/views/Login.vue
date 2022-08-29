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
						<el-input
							v-model="ruleForm.password"
							type="password"
							prefix-icon="el-icon-lock"
							placeholder="请输入密码"
						></el-input>
						<div class="forgetPwd" @click="dialogVisible = true">忘记密码？</div>
					</el-form-item>

					<el-form-item prop="testing">
						<el-input v-model="ruleForm.testing" style="width: 60%" placeholder="验证码"></el-input>
					</el-form-item>
					<el-form-item style="text-align: center">
						<el-button
							type="primary"
							style="width: 80%; background-color: #b886f8; border: #b886f8"
							@click="submitForm('ruleForm')"
							>登 录</el-button
						>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="foot-copyright">©2022美团版权所有京ICP证070791号北京公网安备11010502025545号</div>
		<!-- 忘记密码弹框 -->
		<el-dialog title="修改密码" :visible.sync="dialogVisible" width="30%">
			<!-- <span>这是一段信息</span> -->
			<p>
				<span>用户名:&emsp;</span>
				<el-input v-model="input" placeholder="请输入用户名" class="ipt"></el-input>
			</p>
			<p>
				<span>新密码:&emsp;</span>
				<el-input v-model="input" placeholder="请输入密码" class="ipt"></el-input>
			</p>
			<p>
				<span>再次输入:</span>
				<el-input v-model="input" placeholder="请再次输入密码" class="ipt"></el-input>
			</p>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="dialogVisible = false" class="submit">确 定</el-button>
				<el-button @click="dialogVisible = false">取 消</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import axios from 'axios'
export default {
	components: {},
	data() {
		return {
			input: '',
			dialogVisible: false,
			// 登录表单
			ruleForm: {
				name: '',
				password: '',
				testing: ''
			},
			// 验证规则
			rules: {
				name: [
					{ required: true, message: '请输入用户名', trigger: 'blur' }
					// { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
					// { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				]
			}
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
					this.$router.push('/')
					axios.post('/effect/user/login',this.loginForm).then(res=>{
						console.log(res);
					})
				} else {
					console.log('error submit!!')
					return false
				}
			})
		}
	}
}
</script>

<!-- 样式 -->
<style scoped lang="scss">
// 确定按钮
.submit {
	background-color: #b886f8;
	border: 1px solid #b886f8;
}
p {
	display: flex;
	margin: 15px 0px;
	align-items: center;
	span {
		margin-right: 10px;
	}
}
.ipt {
	width: 320px;
}
.login {
	width: 100%;
	height: 100vh;
	background: url('../../public/banner.png');
	background-size: 100% 100%;
	position: relative;
	.login-box {
		position: absolute;
		width: 500px;
		background-color: #fff;
		height: 400px;
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
