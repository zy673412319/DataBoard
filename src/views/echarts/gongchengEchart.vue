<template>
  <div class="threeBarChart"></div>
</template>

<script>
export default {
  name: '',
  props: ['MajorConfigData'],
  data() {
    return {
      myChart: null,
      dateList: [],
      data1: [],
      timer: ''
    }
  },
  watch: {
    MajorConfigData(newValue, oldValue) {
      this.dateList = newValue.nameList;
      this.data1 = newValue.countList;
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
        grid: {
          left: '10',
          right: '10',
          bottom: '5%',
          top: '26',
          containLabel: true
        },
        xAxis: {
          type: 'category', // category(坐标轴类型)
          data: that.dateList,
          axisTick: { // 坐标轴刻度相关配置
            show: false // 是否显示坐标轴刻度
          },
          axisLine: { // 坐标轴轴线相关配置
            lineStyle: { // 坐标轴轴线样式
              color: '#34445d'   // x轴颜色
            }
          },
          axisLabel: {
            color: '#fff',   // x轴文本颜色
            showMaxLabel: false,
            fontSize: 14,
            fontFamily: 'MyFont',
          },
        },
        yAxis: {
          type: 'value', // value(数值轴,适用于连续数据)
          axisTick: { // 坐标轴刻度相关配置
            show: false  // 是否显示坐标轴刻度
          },
          axisLine: { // 坐标轴轴线相关配置
            show: false // 是否显示坐标轴轴线
          },
          axisLabel: {
            color: '#9bc3d4',    // y轴文本颜色
            showMaxLabel: false,
            fontSize: 14,
            fontFamily: 'MyFont',
          },
          splitLine: {
            show: false,
          },
          nameTextStyle: {
            color: '#61B9C8',
            fontSize: 14,
            fontFamily: 'MyFont',
            align: 'right',
            padding: [0, 6, 0, 0]
          }
        },
        series: [
          {
            name: "hill",
            // 象柱形图
            type: "pictorialBar",
            // 同一系列的柱间距离
            barCategoryGap: "-60%",
            // 自定义svg 图标 (三角锥形的关键)
            symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            // 默认样式
            itemStyle: {
              label: {
                show: false
              },
              borderColor: "#206fde",
              borderWidth: 2,
              color: {
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 194, 255, 0.9)"
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 194, 255, 0.4)"
                  }
                ]
              }
            },
            data: that.data1,
            z: 10
          }
        ]
			};
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el, null, { devicePixelRatio: 3 });

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