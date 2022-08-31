<template>
	<div>
		<!-- 新增角色 -->
		<el-dialog :title="flag ? '编辑' : '新增菜单'" :visible.sync="dialogVisible" width="30%">
			<!-- <span>这是一段信息</span> -->
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="菜单类型" prop="resource">
					<el-radio-group v-model="ruleForm.resource">
						<el-radio label="菜单"></el-radio>
						<el-radio label="目录"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="菜单名称" prop="name"> <el-input v-model="ruleForm.name"></el-input> </el-form-item>
				<el-form-item label="菜单路径" prop="route"> <el-input v-model="ruleForm.name"></el-input> </el-form-item>
				<el-form-item label="菜单图标" prop="icon"> <el-input v-model="ruleForm.name"></el-input> </el-form-item>
				<el-form-item label="上级菜单" prop="data">
					<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
				</el-form-item>

				<el-form-item label="排序" prop="sort"> <el-input v-model="ruleForm.name"></el-input> </el-form-item>
				<el-form-item label="备注" prop="remarks">
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
	props: ['dialogVisible', 'flag'],
	data() {
		return {
			rules: {

				name: [
					{ required: true, message: '请输入活动名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				icon: [
					{ required: true, message: '请输入活动名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				route: [
					{ required: true, message: '请输入活动名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				jurisdiction: [
					{ required: true, message: '请输入活动名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				sort: [
					{ required: true, message: '请输入活动名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }]
			},
			ruleForm: {
				resource: '',
				icon: '',
				route: '',
				jurisdiction: '',
				sort: '',
				remarks: '',
				data: [
					{
						label: '一级 1',
						children: [
							{
								label: '二级 1-1',
								children: [
									{
										label: '三级 1-1-1'
									}
								]
							}
						]
					},
					{
						label: '一级 2',
						children: [
							{
								label: '二级 2-1',
								children: [
									{
										label: '三级 2-1-1'
									}
								]
							},
							{
								label: '二级 2-2',
								children: [
									{
										label: '三级 2-2-1'
									}
								]
							}
						]
					},
					{
						label: '一级 3',
						children: [
							{
								label: '二级 3-1',
								children: [
									{
										label: '三级 3-1-1'
									}
								]
							},
							{
								label: '二级 3-2',
								children: [
									{
										label: '三级 3-2-1'
									}
								]
							}
						]
					}
				],
			}
		}
	},
	methods: {
		resetForm(formName) {
			this.$refs[formName].resetFields()
			this.$emit('esc')
		},
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					alert('submit!')
					this.$emit('add')
				} else {
					console.log('error submit!!')
					return false
				}
			})
		}
	}
}
</script>
