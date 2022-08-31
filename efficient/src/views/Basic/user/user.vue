<template>
	<div>
		<!-- 搜索 -->
		<div class="search-box">
			<p>姓名:<el-input v-model="input" placeholder="请输入姓名" class="ipt"></el-input></p>
			<p>所属部门:<el-input v-model="input" placeholder="请输入部门" class="ipt"></el-input></p>
			<p>手机号:<el-input v-model="input" placeholder="请输入手机号" class="ipt"></el-input></p>
		</div>
		<!-- 按钮 -->
		<div class="btn-box">
			<el-button class="el-icon-search">查询</el-button>
			<el-button class="el-icon-refresh-left">重置</el-button>
			<el-button class="el-icon-circle-plus-outline" @click="add">新增用户</el-button>
		</div>
		<!-- 表格 -->
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column type="index" width="50" label="id"> </el-table-column>
			<el-table-column prop="date" label="用户名称"> </el-table-column>
			<el-table-column prop="name" label="账号"> </el-table-column>
			<el-table-column prop="address" label="手机号"> </el-table-column>
			<el-table-column prop="address" label="所属角色"> </el-table-column>
			<el-table-column prop="address" label="所属职级"> </el-table-column>
			<el-table-column prop="address" label="所属部门"> </el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)" class="el-icon-edit">修改</el-button>
					<el-button size="mini" type="danger" class="el-icon-delete" @click="handleDelete(scope.$index, scope.row)"
						>删除</el-button
					>
					<el-button size="mini" @click="details(scope.$index, scope.row)">详情</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 新增 -->
		<Dialog ref="show"></Dialog>
		<!-- 详情 -->
		<el-dialog title="" :visible.sync="dialogVisibles" width="30%">
			<!-- <span>这是一段信息</span> -->
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名称:" prop="name"> <el-input v-model="ruleForm.name"></el-input> </el-form-item>
				<el-form-item label="账号:" prop="name"> <el-input v-model="ruleForm.name"></el-input> </el-form-item>
				<el-form-item label="手机号:" prop="name"> <el-input v-model="ruleForm.name"></el-input> </el-form-item>
				<el-form-item label="角色名称" prop="region">
					<el-select v-model="ruleForm.region" placeholder="管理员角色">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属岗位" prop="region">
					<el-select v-model="ruleForm.region" placeholder="销售岗">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属职级" prop="region">
					<el-select v-model="ruleForm.region" placeholder="1">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属部门" prop="region">
					<el-select v-model="ruleForm.region" placeholder="1">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="dialogVisible = false" class="addbtn">新增</el-button>
				<el-button @click="dialogVisible = false">取 消</el-button>
			</span>
		</el-dialog>
	</div>
</template>
<script>
import Dialog from './Dialog.vue'
export default {
	data() {
		return {
			input: '',
			tableData: [],
			dialogVisibles: false,
			ruleForm: {
				name: ''
			},
			rules: {}
		}
	},
	components: {
		Dialog
	},
	methods: {
		add(item) {
			// this.dialogVisible = true
			this.$refs.show.dialogVisible = item
		},
		details() {
			this.dialogVisibles = true
		}
	}
}
</script>
<style lang="scss" scoped>
.search-box {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.ipt {
	width: 350px;
}
.btn-box {
	margin-top: 15px;
}
.el-icon-circle-plus-outline {
	background-color: #c2c2fb;
	color: #fff;
	float: right;
}
.el-icon-delete {
	color: #fff;
}
.el-icon-edit {
	color: #fff;
	background-color: #7aabf6;
}
.addbtn {
	background-color: #b886f8;
	color: #000;
	border: 1px solid #b886f8;
}
</style>
