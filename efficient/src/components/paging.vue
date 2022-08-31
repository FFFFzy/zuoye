// 分页
<template>
	<div>
		<div class="paging">
			<span>共20条</span>
			<el-button size="mini" @click="reduce">上一页</el-button>
			<span
				><span>{{ page }}</span
				>/5</span
			>
			<el-button size="mini" @click="add">下一页</el-button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['page'],
	name: '',
	components: {},
	data() {
		return {}
	},
	created() {},
	mounted() {},
	methods: {
		reduce() {
			this.$emit('reduce', this.page)
		},
		add() {
			this.$emit('add', this.page)
		}
	}
}
</script>
<style scoped lang="scss">
.paging {
	float: right;
	margin-top: 20px;
	margin-right: 50px;
	span {
		font-size: 12px;
		margin: 0 20px;
		span {
			color: turquoise;
			margin: 0;
		}
	}
}
</style>
