<template>
	<el-dialog title="新增申请" :visible.sync="dialogFormVisible">
		<el-form>
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
			<el-form-item label="审批流程" :label-width="formLabelWidth">
				<el-steps :space="200" :active="1" finish-status="success">
					<el-step title="已完成"></el-step>
					<el-step title="审批中"></el-step>
					<el-step title="已驳回"></el-step>
				</el-steps>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
export default {
	data() {
		return {
			/**审批类型 */
			examineType: '请假申请',
			formLabelWidth: '80px',
			dialogFormVisible: false,
			/**添加信息 */
			addForm: {}
		}
	},
	methods: {
		init(row) {
			this.dialogFormVisible = true
			this.addForm = row
		}
	}
}
</script>
