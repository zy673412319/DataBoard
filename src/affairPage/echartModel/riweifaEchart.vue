<template>
  <div class="threeBarChart"></div>
</template>

<script>
export default {
  name: '',
  props: ['riweifaData'],
  data() {
    return {
      myChart: null,
      dateList: [],
      data1: [],
      timer: ''
    }
  },
  watch: {
    riweifaData(newValue, oldValue) {
      this.dateList = newValue.DateList;
      this.data1 = newValue.oneDataList;
      this.setChart();
    },
  },
  mounted() {
    this.setChart()
  },
  methods: {
    setChart() {
      var that = this;
      let option = {
        animation: false, // 关闭动画
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              margin: -20,
              backgroundColor: 'transparent'
            }
          }
        },
        grid: {
          left: '10',
          right: '10',
          bottom: '5%',
          top: '26',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              symbol: ['none', 'arrow'],
              symbolSize: [6, 6],
              lineStyle: {
                color: '#34445d'   // x轴颜色
              }
            },
            axisLabel: {
              color: '#fff',   // x轴文本颜色
              showMaxLabel: false,
              fontSize: 14,
              fontFamily: 'MyFont',
              interval: 1,// 设置这个强制显示所有标签文字  中间间隔几个 显示X轴坐标内容
              // rotate: '25',// 旋转度数
              // formatter:function(value){  
              //     return value.split("").join("\n");  
              // },
            },
            axisTick: { // 坐标轴刻度
              // show: false
            },
            splitLine: { // 坐标轴在 grid 区域中的分隔线。
              show: false
            },
            data: that.dateList
          }
        ],
        yAxis: [
          {
            type: 'value',
            minInterval: 1, // 自动计算的坐标轴最小间隔大小。设置成1保证坐标轴分割刻度显示成整数
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: '#33638f'
              }
            },
            axisLabel: {
              show: true,
              color: '#fff',   // x轴文本颜色
              fontSize: 14,
              fontFamily: 'MyFont',
              formatter: '{value}',
              color: '#c8e1f7',
            },
          }
        ],
        series: [
          {
            name: '',
            type: 'pictorialBar', // 象形柱图
            // symbol: 'triangle', // 图形类型
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            z: 100, // 象形柱图组件的所有图形的z值
            tooltip: {
              show: true,
            },
            label: {
              show: true,
              position: 'top',
              color: '#ffffff',
              formatter: '{c}'
            },
            itemStyle: { // 图形样式,若想给每个柱图都设置单独的颜色则需要单独在data中设置
               color: {
                 type: 'linear',
                 x: 0,
                 y: 0,
                 x2: 0,
                 y2: 1,
                 colorStops: [{
                   offset: 1, color: '#6EB8DF' // 100% 处的颜色
                 }, {
                   offset: 0, color: '#96F8FF'// 0% 处的颜色
                 }],
                 global: false // 缺省为 false
               }
             },
            barCategoryGap: "20%", // 同一系列的柱间距离
            smooth: true,
            data: that.data1
          }
        ]
      };
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el, null, {devicePixelRatio: 3});

      this.myChart.clear();
      this.myChart.setOption(option, { replaceMerge: ["series"] });
    },
  },
}
</script>

<style  scoped>
.threeBarChart {
  height: 100%;
  width: 100%;
}
</style>