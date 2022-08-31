<template>
	<div class="launch-wrapper">
		<!-- 搜索 -->
		<div class="search-box">
			<div class="name-box">
				<span>审批类型：</span>
				<el-select v-model="examineType" placeholder="请选择活动区域">
					<el-option label="请假" value="请假"></el-option>
					<el-option label="车贷" value="车贷"></el-option>
					<el-option label="出差" value="出差"></el-option>
					<el-option label="加班" value="加班"></el-option>
				</el-select>
			</div>
			<div class="department-box">
				<span>申请人：</span>
				<el-input placeholder="请输入账号"></el-input>
			</div>
			<div class="tel-box">
				<span>审批状态：</span>
				<el-input placeholder="请输入状态"></el-input>
			</div>
		</div>
		<!-- 按钮 -->
		<div class="button-box">
			<div class="left-box">
				<el-button icon="el-icon-search">查询</el-button>
				<el-button icon="el-icon-refresh-right">重置</el-button>
			</div>
			<div class="right-box">
				<el-button type="primary" icon="el-icon-plus" @click="add">新增申请</el-button>
			</div>
		</div>
		<!-- 表格 -->
		<div class="table-box">
			<el-table border :data="tableData" stripe style="width: 100%">
				<el-table-column prop="id" label="id" align="center"> </el-table-column>
				<el-table-column prop="name" label="申请人" align="center"> </el-table-column>
				<el-table-column prop="type" label="审批类型" align="center"> </el-table-column>
				<el-table-column prop="time" label="申请时间" align="center"> </el-table-column>
				<el-table-column prop="nowName" label="当前审批人" align="center"> </el-table-column>
				<el-table-column prop="status" label="申请状态" align="center"> </el-table-column>
				<el-table-column prop="department" label="所属部门" align="center"> </el-table-column>
				<el-table-column label="操作" align="center" width="280px">
					<template slot-scope="scope">
						<el-button type="warning" icon="el-icon-chat-dot-round" @click="goDetail(scope.row)">详情</el-button>
						<el-button type="danger" icon="el-icon-refresh-left" @click="del">撤回</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<!-- 新增申请 -->
		<effei-pass v-if="dialogFormVisible" ref="dialogForm" @close="close" />
		<!-- 详情 -->
		<effei-detail v-if="detailsVisible" ref="detailsForm" @close="close" />
		<!-- 分页 -->
		<!-- <div class="footer-box">
			<effei-page :pageSize="page.pageSize" :pageNum="page.pageNum" :total="total" />
		</div> -->
	</div>
</template>
<script>
// import EffeiPage from '../../common/Effei_Page.vue'
import EffeiPass from './Effei_Add.vue'
import EffeiDetail from './Effei_Details.vue'
export default {
	components: { EffeiPass, EffeiDetail },
	data() {
		return {
			/**审批类型 */
			examineType: '请假',
			/**表格数据 */
			tableData: [
				{
					id: 1,
					name: '王晓诺',
					type: '产假',
					time: 1523,
					nowName: '小明',
					status: '已通过',
					department: '总经办'
				}
			],
			/**发起申请的数据 */
			row: {},
			/**分页数据 */
			page: {
				pageSize: 1,
				pageNum: 1
			},
			/**总条数 */
			total: 1,
			/**添加模态框标识 */
			dialogFormVisible: false,
			/**详情模态框标识 */
			detailsVisible: false
		}
	},
	methods: {
		/**撤回 */
		del() {
			this.$confirm('此操作将撤销该信息, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			})
				.then(() => {
					this.$message({
						type: 'success',
						message: '撤销成功!'
					})
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消撤销'
					})
				})
		},
		/**添加 */
		add(row) {
			this.dialogFormVisible = true
			this.$nextTick(() => {
				this.$refs.dialogForm.init(row)
			})
		},
		/**关闭模态框 */
		close() {
			this.dialogFormVisible = false
		},
		/**详情模态框 */
		goDetail(row) {
			this.detailsVisible = true
			this.$nextTick(() => {
				this.$refs.detailsForm.init(row)
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.launch-wrapper {
	padding: 0 50px;
	.search-box {
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.name-box,
		.department-box,
		.tel-box {
			width: 27%;
			.el-input {
				width: 220px;
			}
		}
	}
	.button-box {
		margin-top: 15px;
		display: flex;
		.right-box {
			border-radius: 10px;
			color: #fff;
			margin-left: 15px;
		}
		.el-button {
			border-radius: 10px;
		}
	}
	.table-box {
		margin-top: 20px;
	}
	// .footer-box {
	// 	margin-top: 20px;
	// 	float: right;
	// }
}
</style>
