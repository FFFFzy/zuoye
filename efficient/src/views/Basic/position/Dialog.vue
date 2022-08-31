<template>
	<div>
		<el-dialog title="新增岗位" :visible.sync="dialogVisible" width="30%">
			<!-- <span>这是一段信息</span> -->
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="职级名称" prop="name"> <el-input v-model="ruleForm.name"></el-input> </el-form-item>
				<el-form-item label="备注" prop="desc">
					<el-input type="textarea" v-model="ruleForm.desc"></el-input>
				</el-form-item>
			</el-form>

			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="submitForm('ruleForm')" class="addbtn">新增</el-button>
				<el-button @click="resetForm('ruleForm')">取 消</el-button>
			</span>
		</el-dialog>
	</div>
</template>
<script>
export default {
	data() {
		return {
			dialogVisible: false,
			ruleForm: {
				name: '',
				desc: '',
				region: '',
				resource: ''
			},
			rules: {
				name: [
					{ required: true, message: '请输入活动名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					alert('submit!')
					this.dialogVisible = false
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		resetForm(formName) {
			this.$refs[formName].resetFields()
			this.dialogVisible = false
		}
	}
}
</script>
