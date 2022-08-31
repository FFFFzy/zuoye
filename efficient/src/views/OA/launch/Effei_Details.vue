<template>
	<el-dialog title="审批详情" :visible.sync="detailsVisible">
		<el-form>
			<el-form-item label="审批流程" :label-width="formLabelWidth">
				<el-steps :space="200" :active="1" finish-status="success">
					<el-step title="已完成"></el-step>
					<el-step title="审批中"></el-step>
					<el-step title="已驳回"></el-step>
				</el-steps>
			</el-form-item>
			<el-form-item label="申请人" :label-width="formLabelWidth">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="审批类型" :label-width="formLabelWidth">
				<el-select v-model="examineType">
					<el-option label="请假申请" value="请假申请"></el-option>
					<el-option label="出差申请" value="出差申请"></el-option>
					<el-option label="换车申请" value="换车申请"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="申请时间" :label-width="formLabelWidth">
				<el-date-picker type="date" placeholder="选择日期"> </el-date-picker>-
				<el-time-select
					:picker-options="{
						selectableRange: '18:30:00 - 20:30:00'
					}"
					placeholder="选择时间"
				>
				</el-time-select>
			</el-form-item>
			<el-form-item label="所属部门" :label-width="formLabelWidth">
				<el-select v-model="branch">
					<el-option label="人事部" value="人事部"></el-option>
					<el-option label="总经办" value="总经办"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="审批状态" :label-width="formLabelWidth">
				<el-select v-model="status">
					<el-option label="已审批" value="已审批"></el-option>
					<el-option label="已驳回" value="已驳回"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="当前审批人" :label-width="formLabelWidth">
				<el-input placeholder="当前审批人"></el-input>
			</el-form-item>
			<el-form-item label="理由" :label-width="formLabelWidth">
				<el-input type="textarea" :rows="2" placeholder="请输入内容"> </el-input>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="detailsVisible = false">撤回</el-button>
			<el-button type="primary" @click="detailsVisible = false">取消</el-button>
		</div>
	</el-dialog>
</template>

<script>
export default {
	data() {
		return {
			/**审批类型 */
			examineType: '请假申请',
			/**所属部门 */
			branch: '人事部',
			/**审批状态 */
			status: '已审批',
			formLabelWidth: '90px',
			detailsVisible: false,
			/**添加信息 */
			addForm: {}
		}
	},
	methods: {
		init(row) {
			this.detailsVisible = true
			this.addForm = row
		}
	}
}
</script>
