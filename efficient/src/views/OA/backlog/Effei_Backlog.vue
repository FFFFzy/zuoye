<template>
	<div class="backlog-wrapper">
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
		<div class="button-box">
			<div class="left-box">
				<el-button icon="el-icon-search">查询</el-button>
				<el-button icon="el-icon-refresh-right">重置</el-button>
			</div>
		</div>
		<div class="table-box">
			<el-table border :data="tableData" stripe style="width: 100%">
				<el-table-column prop="id" label="id" align="center"> </el-table-column>
				<el-table-column prop="name" label="申请人" align="center"> </el-table-column>
				<el-table-column prop="type" label="审批类型" align="center"> </el-table-column>
				<el-table-column prop="time" label="申请时间" align="center"> </el-table-column>
				<el-table-column prop="nowName" label="当前审批人" align="center"> </el-table-column>
				<el-table-column prop="status" label="申请状态" align="center"> </el-table-column>
				<el-table-column prop="department" label="所属部门" align="center"> </el-table-column>
				<el-table-column label="操作" align="center" width="330px">
					<template slot-scope="scope">
						<el-button type="primary" icon="el-icon-circle-check" @click="pass(scope.row)">通过</el-button>
						<el-button type="danger" icon="el-icon-circle-close" @click="rejected(scope.row)">驳回</el-button>
						<el-button type="warning" icon="el-icon-chat-dot-round" @click="goDetail(scope.row)">详情</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<!-- 详情 -->
		<effei-detail v-if="detailsVisible" ref="detailsForm" @close="close" />
		<!-- 通过 -->
		<effei-pass v-if="passVisible" ref="passForm" @close="close" />
		<!-- 驳回 -->
		<effei-rejected v-if="rejectVisible" ref="rejectForm" @close="close" />
		<!-- 分页 -->
		<!-- <div class="footer-box">
			<effei-page :pageSize="page.pageSize" :pageNum="page.pageNum" :total="total" />
		</div> -->
	</div>
</template>
<script>
// import EffeiPage from '../../common/Effei_Page.vue'
import EffeiDetail from './Effei_Details.vue'
import EffeiPass from './Effei_Pass.vue'
import EffeiRejected from './Effei_Rejected.vue'
export default {
	components: { EffeiDetail, EffeiPass, EffeiRejected },
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
			/**分页数据 */
			page: {
				pageSize: 1,
				pageNum: 1
			},
			/**总条数 */
			total: 1,
			/**详情模态框标识 */
			detailsVisible: false,
			/**通过模态框标识 */
			passVisible: false,
			/**驳回模态框标识 */
			rejectVisible: false
		}
	},
	methods: {
		/**关闭模态框 */
		close() {
			;(this.dialogFormVisible = false), (this.passVisible = false), (this.detailsVisible = false)
		},
		/**详情模态框 */
		goDetail(row) {
			this.detailsVisible = true
			this.$nextTick(() => {
				this.$refs.detailsForm.init(row)
			})
		},
		/**通过模态框 */
		pass(row) {
			this.passVisible = true
			this.$nextTick(() => {
				this.$refs.passForm.init(row)
			})
		},
		/**驳回模态框 */
		rejected(row) {
			this.rejectVisible = true
			this.$nextTick(() => {
				this.$refs.rejectForm.init(row)
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.backlog-wrapper {
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
