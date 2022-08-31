// 结构
<template>
  <div id="area"></div>
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
    var chartDom = document.getElementById('area')
    var myChart = echarts.init(chartDom)
    var option
    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        right: 'right'
      },
      series: [
        {
          name: '地区',
          type: 'pie',
          radius: '80%',
          data: [
            { value: 100, name: '东北' },
            { value: 150, name: '内蒙' },
            { value: 200, name: '河北' },
            { value: 100, name: '山西' },
            { value: 114, name: '河南' }
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
  },
  methods: {}
}
</script>

// 样式
<style scoped lang="scss">
#area {
  width: 100%;
  height: 200px;
  padding: 10px;
}
</style>
