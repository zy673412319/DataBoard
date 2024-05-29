<template>
  <div class="threeBarChart"></div>
</template>

<script>
export default {
  name: '',
  props: ['hehuSLBHDateList', 'hehuSLBHNumList'],
  data() {
    return {
      myChart: null,
      dateList: [],
      data1: [],
      timer: ''
    }
  },
  watch: {
    hehuSLBHDateList(newValue, oldValue) {
      this.dateList = newValue;
      this.data1 = this.hehuSLBHNumList;
      this.setChart();
    },
    hehuSLBHNumList(newValue, oldValue) {
      this.dateList = this.hehuSLBHDateList;
      this.data1 = this.hehuSLBHNumList;
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
          top: "40",
          bottom: "30",
          left: 56,
          right: 30,
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          right: "8%",
          top: "4",
          itemWidth: 7,
          itemHeight: 7,
          textStyle: {
            color: '#9bc3d4',
            fontSize: 14
          }
        },
        calculable: true,
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
              color: '#9bc3d4',   // x轴文本颜色
              showMaxLabel: false,
              fontSize: 12,
              interval: 0,// 设置这个强制显示所有标签文字
              rotate: '25',// 旋转度数
              //                 formatter:function(value){  
              //     return value.split("").join("\n");  
              // },
            },
            boundaryGap: false,
            data: that.dateList
          }
        ],
        yAxis: [
          {
            type: 'value',
            interval: 50,
            // min: 0,
            // max: 400,
            // splitNumber: 7,
            axisLine: {
              symbol: ['none', 'arrow'],
              symbolSize: [6, 6],
              lineStyle: {
                color: '#34445d'    // y轴线颜色
              }
            },
            axisLabel: {
              color: '#9bc3d4',    // y轴文本颜色
              showMaxLabel: false,
              fontSize: 14
            },
            splitLine: {
              show: false,
            },
            nameTextStyle: {
              color: '#61B9C8',
              fontSize: 14,
              align: 'right',
              padding: [0, 6, 0, 0]
            }
          }
        ],
        series: [
          {
            name: '数量',
            type: 'line',
            data: that.data1,
            smooth: true,   // 弧度显示
            showSymbol: true,   // 不显示乖点
            lineStyle: {
              color: '#FE7C2F',
            },
            itemStyle: {
              color: '#FE7C2F'
            },
            label: {
              show: true,
              normal: {
                color: '#61B9C8',
                fontSize: 14,
                show: true,
                "position": "top"
              }
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(3,43,85,1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(3,43,85,0.6)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }, //背景渐变色
              origin: 'start'
            }
          },
        ]
      };
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el, null, {devicePixelRatio: 3});

      // this.myChart.clear();
      // this.myChart.resize()
      this.myChart.setOption(option);
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