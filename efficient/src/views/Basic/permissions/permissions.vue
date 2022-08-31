<template>
	<div>
		<div class="search-box">
			权限名称:<el-input v-model="input" placeholder="请输入姓名" class="ipt"></el-input>
			<el-button class="el-icon-search">查询</el-button>
			<el-button class="el-icon-refresh-left">重置</el-button>
			<el-button class="el-icon-circle-plus-outline" @click="add">新增权限</el-button>
		</div>
		<!-- 表格 -->
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column type="index" label="id"> </el-table-column>
			<el-table-column prop="date" label="角色名称"> </el-table-column>
			<el-table-column prop="name" label="备注"> </el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)" class="edit">修改</el-button>
					<el-button size="mini" type="danger" class="el-icon-share" @click="handleDelete(scope.$index, scope.row)"
						>删除</el-button
					>
				</template>
			</el-table-column>
		</el-table>
		<Dialog :dialogVisible="dialogVisible" @OK="OK" @NO="NO"></Dialog>
	</div>
</template>
<script>
import Dialog from './Dialog.vue'
export default {
	data() {
		return {
			input: '',
			tableData: [
				{
					date: '1',
					name: '无'
				}
			],
			dialogVisible: false
		}
	},
	methods: {
		add() {
			this.dialogVisible = !this.dialogVisible
		},
		OK() {
			this.dialogVisible = false
		},
		NO() {
			this.dialogVisible = false
		},
		handleEdit(index, row) {
			console.log(index, row)
		},
		handleDelete(index, row) {
			console.log(index, row)
		}
	},
	components: {
		Dialog
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
