<template>
	<div>
		<div class="search-box">
			菜单名称:<el-input v-model="input" placeholder="请输入姓名" class="ipt"></el-input>
			<el-button class="el-icon-search">查询</el-button>
			<el-button class="el-icon-refresh-left">重置</el-button>
			<el-button class="el-icon-circle-plus-outline" @click="add">新增菜单</el-button>
		</div>
		<!-- 表格 -->
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="date" label="菜单名称"> </el-table-column>
			<el-table-column prop="name" label="菜单路径"> </el-table-column>
			<el-table-column prop="address" label="排序"> </el-table-column>
			<el-table-column prop="address" label="菜单图标"> </el-table-column>
			<el-table-column prop="address" label="菜单类型"> </el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<Dialog :dialogVisible="dialogVisible" :flag="flag" @add="add1" @esc="esc"></Dialog>
	</div>
</template>
<script>
import Dialog from './Dialog.vue'
export default {
	data() {
		return {
			flag: false, //模态框转换
			input: '',
			tableData: [
				{
					date: '1',
					name: '哈哈',
					address: '1234'
				}
			],
			dialogVisible: false,
			ruleForm: {
				name: '',
				desc: '',
				region: '',
				resource: ''
			}
		}
	},
	components: {
		Dialog
	},
	methods: {
		add() {
			this.dialogVisible = !this.dialogVisible,
			this.flag = false
		},
		add1() {
			this.dialogVisible = false
		},
		esc() {
			this.dialogVisible = false
		},
		handleEdit(index, row) {
			console.log(index, row)
			this.dialogVisible = true
			this.flag = true
		},
		handleDelete(index, row) {
			console.log(index, row)
		}
	}
}
</script>
<style lang="scss" scoped>
.ipt {
	width: 350px;
	margin-right: 10px;
}
.el-icon-circle-plus-outline {
	background-color: #c2c2fb;
	color: #fff;
}
.edit {
	background-color: #7aabf6;
	color: #fff;
}
.el-icon-share {
	background-color: #f77d6c;
	color: #fff;
}
.addbtn {
	background-color: #b886f8;
	border: 1px solid #b886f8;
	color: #000;
}
</style>
