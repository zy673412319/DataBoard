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
      this.data3 = newValue.ThreeDataList;
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
        grid: {
          top: "46",
          left: 60,
          right: 60,
          bottom: "10",
          // bottom: '0',
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
            fontSize: 14,
            fontFamily: 'MyFont',
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
              fontFamily: 'MyFont',
              interval: 0,// 设置这个强制显示所有标签文字  中间间隔几个 显示X轴坐标内容
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
          }
        ],
        series: [
          {
            name: '小学',
            type: "bar", // 设置图表类型为柱状
            data: that.data1,
            itemStyle: {
              borderRadius: [4,4,0,0],
              emphasis: {
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
                      color: 'rgba(110, 184, 223, 0.4)' // 起始位置设置此颜色，终止位置设置下面的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(110, 184, 223, 1)'
                    }
                  ],
                }
              },
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
                    color: 'rgba(110, 184, 223, 0.4)' // 起始位置设置此颜色，终止位置设置下面的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(110, 184, 223, 1)'
                  }
                ],
              }
            },
            label: {
              show: true,
              position: 'inside',
              normal: {
                color: '#fff',
                fontSize: 14,
                fontFamily: 'MyFont',
                show: true,
                formatter: (item) => {
                  return item.value + '%'
                },
              }
            },
            barMaxWidth: 38,
          },
          {
            name: '初中',
            type: "bar", // 设置图表类型为柱状
            data: that.data2,
            itemStyle: {
              borderRadius: [4,4,0,0],
              emphasis: {
                color: {
                  type: 'linear',
                  // x=0,y=1,柱子的颜色在垂直方向渐变
                  x: 0,
                  y: 1,
                  colorStops: [
                    {
                      offset: 0, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                      color: 'rgba(255, 242, 166, 0)' // 起始位置设置此颜色，终止位置设置下面的颜色
                    },
                    {
                      offset: 0.5, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                      color: 'rgba(255, 242, 166, 0.4)' // 起始位置设置此颜色，终止位置设置下面的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(255, 242, 166, 1)'
                    }
                  ],
                }
              },
              color: {
                type: 'linear',
                // x=0,y=1,柱子的颜色在垂直方向渐变
                x: 0,
                y: 1,
                colorStops: [
                  {
                    offset: 0, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                    color: 'rgba(255, 242, 166, 0)' // 起始位置设置此颜色，终止位置设置下面的颜色
                  },
                  {
                    offset: 0.5, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                    color: 'rgba(255, 242, 166, 0.4)' // 起始位置设置此颜色，终止位置设置下面的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(255, 242, 166, 1)'
                  }
                ],
              }
            },
            label: {
              show: true,
              position: 'inside',
              normal: {
                color: '#fff',
                fontSize: 14,
                fontFamily: 'MyFont',
                show: true,
                formatter: (item) => {
                  return item.value + '%'
                },
              }
            },
            barMaxWidth: 38,
          },
          // {
          //   name: '高中',
          //   type: "bar", // 设置图表类型为柱状
          //   data: that.data3,
          //   itemStyle: {
          //     borderRadius: [4,4,0,0],
          //     emphasis: {
          //       color: {
          //         type: 'linear',
          //         // x=0,y=1,柱子的颜色在垂直方向渐变
          //         x: 0,
          //         y: 1,
          //         colorStops: [
          //           {
          //             offset: 0, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
          //             color: 'rgba(20, 252, 226, 0)' // 起始位置设置此颜色，终止位置设置下面的颜色
          //           },
          //           {
          //             offset: 0.5, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
          //             color: 'rgba(20, 252, 226, 0.4)' // 起始位置设置此颜色，终止位置设置下面的颜色
          //           },
          //           {
          //             offset: 1,
          //             color: 'rgba(20, 252, 226, 1)'
          //           }
          //         ],
          //       }
          //     },
          //     color: {
          //       type: 'linear',
          //       // x=0,y=1,柱子的颜色在垂直方向渐变
          //       x: 0,
          //       y: 1,
          //       colorStops: [
          //         {
          //           offset: 0, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
          //           color: 'rgba(20, 252, 226, 0)' // 起始位置设置此颜色，终止位置设置下面的颜色
          //         },
          //         {
          //           offset: 0.5, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
          //           color: 'rgba(20, 252, 226, 0.4)' // 起始位置设置此颜色，终止位置设置下面的颜色
          //         },
          //         {
          //           offset: 1,
          //           color: 'rgba(20, 252, 226, 1)'
          //         }
          //       ],
          //     }
          //   },
          //   label: {
          //     show: true,
          //     position: 'inside',
          //     normal: {
          //       color: '#fff',
          //       fontSize: 14,
          //       fontFamily: 'MyFont',
          //       show: true,
          //       formatter: (item) => {
          //         return item.value + '%'
          //       },
          //     }
          //   },
          //   barMaxWidth: 38,
          // }
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