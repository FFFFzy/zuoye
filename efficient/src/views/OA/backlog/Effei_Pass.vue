<template>
	<el-dialog :visible.sync="passVisible">
		<el-form>
			<el-form-item :label-width="formLabelWidth">
				<el-col :sm="12" :lg="6">
					<el-result icon="success" title="确认通过该申请">
						<template slot="extra">
							<el-input autocomplete="off"></el-input>
						</template>
					</el-result>
				</el-col>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="passVisible = false">取 消</el-button>
			<el-button type="primary" @click="passVisible = false">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
export default {
	data() {
		return {
			formLabelWidth: '100px',
			passVisible: false
		}
	},
	methods: {
		init() {
			this.passVisible = true
		}
	}
}
</script>
