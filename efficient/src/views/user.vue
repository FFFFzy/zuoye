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
			<el-button class="el-icon-circle-plus-outline">新增用户</el-button>
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
					<el-button size="mini" @click="details(scope.$index, scope.row)" >详情</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
export default {
	data() {
		return {
			input:"",
			tableData:[

			]
		}
	},
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
.el-icon-edit{
	color: #fff;
	background-color: #7aabf6;
}
</style>
