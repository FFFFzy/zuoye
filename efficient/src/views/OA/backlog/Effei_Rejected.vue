<template>
	<el-dialog :visible.sync="rejectVisible">
		<el-form>
			<el-form-item :label-width="formLabelWidth">
				<el-col :sm="12" :lg="6">
					<el-result icon="error" title="确认驳回该申请">
						<template slot="extra">
							<el-input autocomplete="off"></el-input>
						</template>
					</el-result>
				</el-col>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="rejectVisible = false">取 消</el-button>
			<el-button type="primary" @click="rejectVisible = false">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
export default {
	data() {
		return {
			formLabelWidth: '100px',
			rejectVisible: false
		}
	},
	methods: {
		init() {
			this.rejectVisible = true
		}
	}
}
</script>
