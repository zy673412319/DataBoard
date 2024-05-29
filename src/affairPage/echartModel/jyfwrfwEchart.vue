<template>
  <div class="threeBarChart"></div>
</template>

<script>
export default {
  name: '',
  props: ['jyfwData'],
  data() {
    return {
      myChart: null,
      dateList: [],
      data1: [],
      data2: [],
      timer: ''
    }
  },
  watch: {
    jyfwData(newValue, oldValue) {
      this.dateList = newValue.DateList;
      this.data1 = newValue.oneDataList;
      this.data2 = newValue.TwoDataList;
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
          top: "46",
          left: 20,
          right: 20,
          // bottom: "20",
          bottom: '0',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          right: "6%",
          top: "6",
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            color: '#ffffff',
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
              color: '#fff',   // x轴文本颜色
              showMaxLabel: false,
              fontSize: 14,
              interval: 0,// 设置这个强制显示所有标签文字  中间间隔几个 显示X轴坐标内容
              // rotate: '25',// 旋转度数
              // formatter:function(value){  
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
            axisLine: {
              show: false,
              symbol: ['none', 'arrow'],
              symbolSize: [6, 6],
              lineStyle: {
                color: '#34445d'    // y轴线颜色
              }
            },
            axisLabel: {
              show: false,
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
              color: '#FFC544',
            },
            itemStyle: {
              color: '#FFC544'
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
            // border: 1px solid #FFC544;
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(255, 197, 68, 0)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(255, 197, 68, 0.20)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }, //背景渐变色
              origin: 'start'
            }
          },
          {
            name: '总量',
            type: "bar", // 设置图表类型为柱状
            data: that.data2,
            itemStyle: {
              borderRadius: [4,4,0,0],
            },
            label: {
              show: true,
              position: 'inside',
              normal: {
                color: '#fff',
                fontSize: 14,
                show: true,
              }
            },
            barMaxWidth: 28,
            color: {
              type: 'linear',
              // x=0,y=1,柱子的颜色在垂直方向渐变
              x: 0,
              y: 1,
              colorStops: [
                {
                  offset: 0, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                  color: 'rgba(150, 248, 255, 0)' // 起始位置设置此颜色，终止位置设置下面的颜色
                },
                {
                  offset: 0.5, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                  color: 'rgba(110, 184, 223, 0.8)' // 起始位置设置此颜色，终止位置设置下面的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(110, 184, 223, 1)'
                }
              ],
            }
          }
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