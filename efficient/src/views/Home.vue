<template>
	<div class="Home-box">
		<div class="one">
			<div class="one-box">
				<p>
					<big>待办事项</big>
					<span class="look">查看更多</span>
				</p>
				<hr />
				<p>
					<small>[待办事项]您申请的报销还未审批，请及时查看，放置过期</small>
					<span>2022年8月</span>
				</p>
				<hr />
				<p>
					<small>[待办事项]您申请的报销还未审批，请及时查看，放置过期</small>
					<span>2022年8月</span>
				</p>
				<hr />
				<p>
					<small>[待办事项]您申请的报销还未审批，请及时查看，放置过期</small>
					<span>2022年8月</span>
				</p>
				<hr />
				<p class="wu">暂无待办事</p>
			</div>
			<!-- 日历 -->
			<div class="data">
				<el-date-picker v-model="value" type="date" placeholder="选择日期"> </el-date-picker>
			</div>
		</div>
		<!-- 第二排 -->
		<div class="two">
			<!-- 员工数据 -->
			<div class="two-box">
				<p>
					<big>员工数据</big>
				</p>
				<hr />
				<ul>
					<li>
						<span>员工总人数</span><br />
						<small>2000人</small>
					</li>
					<li>
						<span>员工总人数</span><br />
						<small>2000人</small>
					</li>
					<li class="li-3">
						<span>员工总人数</span><br />
						<small>2000人</small>
					</li>
					<li>
						<span>员工总人数</span><br />
						<small>2000人</small>
					</li>
					<li>
						<span>员工总人数</span><br />
						<small>2000人</small>
					</li>
					<li class="li-6">
						<span>员工总人数</span><br />
						<small>2000人</small>
					</li>
				</ul>
			</div>
			<div class="two-box2">
				<p>
					<big>员工地区分布</big>
				</p>
				<hr />
				<!-- earcharts -->
				<div id="main"></div>
			</div>
		</div>
		<div class="three">
			<p class="sheng">
				<big>员工生日</big>
			</p>
			<div id="mains"></div>
		</div>
	</div>
</template>
<script>
// 引入earcharts
import * as echarts from 'echarts'
export default {
	data() {
		return {
			value: ''
		}
	},
	mounted() {
		var chartDom = document.getElementById('main')
		var myChart = echarts.init(chartDom)
		var option

		option = {
			// title: {
			// 	left: 'center'
			// },
			tooltip: {
				trigger: 'item'
			},
			legend: {
				orient: 'vertical',
				left: 'right'
			},
			series: [
				{
					name: 'Access From',
					type: 'pie',
					radius: '50%',
					data: [
						{ value: 114, name: '河南' },
						{ value: 100, name: '山西' },
						{ value: 200, name: '河北' },
						{ value: 150, name: '内蒙' },
						{ value: 100, name: '东北' }
					],
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		}

		option && myChart.setOption(option)

		var chartDoms = document.getElementById('mains')
		var myCharts = echarts.init(chartDoms)
		var options

		options = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [
				{
					type: 'category',
					data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					axisTick: {
						alignWithLabel: true
					}
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					name: 'Direct',
					type: 'bar',
					barWidth: '60%',
					itemStyle: {
						color: '#b48af1'
					},
					data: [100, 140, 230, 150, 200, 250, 280, 150, 120, 20, 30, 170]
				}
			]
		}

		options && myCharts.setOption(options)
	}
}
</script>
<style lang="scss" scoped>
#main {
	width: 100%;
	height: 100%;
}
.three {
	width: 100%;
	height: 300px;
	border: 1px solid #827c9b;
	margin-top: 10px;
	p {
		margin: 5px;
	}
}
element.style {
	width: 1000px !important;
	height: 203px !important;
}
.two-box {
	width: 50%;
	height: 250px;
	border: 1px solid rgb(172, 169, 169);
	margin-right: 20px;
	p {
		margin: 10px;
	}
	ul {
		margin-top: 15px;
		display: flex;
		flex-wrap: wrap;
		color: #827c9b;
		font-size: 14px;
		li {
			list-style: none;
			width: 180px;
			height: 80px;
			border-right: 2px solid #d7d7d7;
			line-height: 35px;
			text-align: center;
			margin-top: 10px;
		}
		.li-6 {
			border-right: 0;
		}
		.li-3 {
			border-right: 0;
		}
	}
}
.two-box2 {
	width: 50%;
	height: 250px;
	border: 1px solid rgb(150, 149, 149);
	p {
		margin: 10px;
	}
}
.one {
	display: flex;
	margin-top: -10px;
	width: 100%;
}
.two {
	margin-top: 10px;
	display: flex;
}
.one-box {
	// float: left;
	margin-right: 15px;
	width: 80%;
	height: 220px;
	border: 1px solid rgb(198, 195, 195);
	.look {
		color: #458bf3;
	}
	.wu {
		justify-content: center;
	}
	p {
		margin: 10px;
		display: flex;
		justify-content: space-between;
	}
}
.sheng {
	padding-left: 40px;
}
#mains {
	width: 100%;
	height: 89%;
}
</style>
