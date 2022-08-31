<!-- // 操作日志 -->
<template>
	<div>
		<div class="header">
			<span>操作人<input type="text" placeholder="请输入操作人姓名" /></span>
			<span
				><span>时间</span
				><el-time-picker
					is-range
					v-model="value1"
					range-separator="至"
					start-placeholder="开始时间"
					end-placeholder="结束时间"
					placeholder="选择时间范围"
					align="center"
				>
				</el-time-picker
			></span>
		</div>
		<div class="but">
			<el-button icon="el-icon-search" size="mini">查询</el-button>
			<el-button icon="el-icon-refresh-right" size="mini">重置</el-button>
		</div>
		<div>
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="date" label="id" width="180"> </el-table-column>
				<el-table-column prop="name" label="登录IP" width="180"> </el-table-column>
				<el-table-column prop="address" label="账号名称"> </el-table-column>
				<el-table-column prop="address" label="登录设备"> </el-table-column>
				<el-table-column prop="address" label="登录时间"> </el-table-column>
			</el-table>
		</div>
		<paging :page="page" @reduce="reduce" @add="add"></paging>
	</div>
</template>

<script>
import paging from '../../../components/paging.vue'
export default {
	name: '',
	components: {
		paging
	},
	data() {
		return {
			page: 1,
			value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}
			]
		}
	},
	created() {},
	mounted() {},
	methods: {
		reduce(val) {
			val--
			if (this.page == 1) return
			this.page = val
		},
		add(val) {
			val++
			if (this.page == 5) return
			this.page = val
		}
	}
}
</script>
<style scoped lang="scss">
.header {
	span:nth-child(1) {
		margin-right: 30px;
		input {
			padding: 3px 5px;
			outline: none;
		}
	}
	span:nth-child(2) {
		span {
			margin-right: 20px;
		}
	}
}
.but {
	margin: 20px;
}
</style>
