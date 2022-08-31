// 结构
<template>
  <div id="main">员工生日</div>
</template>

// 行为
<script>
import * as echarts from 'echarts'
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {
    var chartDom = document.getElementById('main')
    var myChart = echarts.init(chartDom)
    var option

    option = {
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [100, 145, 220, 200, 70, 110, 130, 90, 40, 70, 110, 30],
          type: 'bar',
          barWidth: '50%',
          itemStyle: {
            color: '#b886f8'
          }
        }
      ]
    }

    option && myChart.setOption(option)
  },
  methods: {}
}
</script>

// 样式
<style scoped lang="scss">
#main {
  width: 100%;
  height: 250px;
}
</style>
