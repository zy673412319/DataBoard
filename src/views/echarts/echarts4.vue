<template>
  <div id="" style="width: 100%;height:100%;"></div>
</template>
<script>
import echarts from 'echarts'
export default {

  data() {
    return {
      myChart: null,
      charts: '',
      barVal: [235, 274, 156, 500, 450, 125],
      lineVal: [368, 125, 254, 178, 369, 398]
    }
  },

  mounted() {
    this.init()
    this.uodateData()
  },

  methods: {
    generateRandomNumber() {
      var min = 100,max = 401;
      min = Math.ceil(min); // 确保min是整数
      max = Math.floor(max); // 确保max是整数
      return Math.floor(Math.random() * (max - min + 1)) + min; // 返回介于min和max之间的整数
    },
    generateRandomArray() {
      // 生成一个5位的随机数组
      var randomArray = Array.from({ length: 6 }, () => this.generateRandomNumber());
      return randomArray;
    },

    uodateData(){
      var that = this;
      this.timer && clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.barVal = this.generateRandomArray();
        this.lineVal = this.generateRandomArray();
        this.init();
      }, 3000);
    },

    init() {
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el);
      var that = this;
      let option = {
        title: {
          show: false,
          text: "柱状图",
          textStyle: {
            color: "pink", // 标题颜色
            fontSize: 14, // 默认值：18
            fontStyle: "italic", // normal:正常风格（默认值）,italic:倾斜体
            fontWeight: "bold" // normal:正常粗细（默认值）,bold/bolder:粗体,lighter:正常粗细
          },
          subtext: "柱状图副标题"
        },
        legend: {
          right: "8%",
          top: "6",
          itemWidth: 7,
          itemHeight: 7,
          textStyle: {
            color: '#9bc3d4',
            fontSize: 14
          }
        },
        grid: {
          top: "20",
          bottom: "30",
          left: 35,
          right: 20,
        },
        xAxis: {
          type: 'category',
          axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [6, 6],
            lineStyle: {
              color: '#34445d'   // x轴颜色
            }
          },
          boundaryGap: false,
          axisLabel: {
            color: '#9bc3d4',   // x轴文本颜色
            showMaxLabel: false,
            fontSize: 14,
            interval: 0,// 设置这个强制显示所有标签文字
            //   rotate: '-45',// 旋转度数
            //                 formatter:function(value){  
            //     return value.split("").join("\n");  
            // },
          },
          data: ['2023-11', '2023-12', '2024-1', '2024-2', '2024-3', '2024-4',]
        },
        yAxis: {
          type: 'value',
          interval: 100,
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
            // 'solid'，实线。 'dotted'，点型虚线。 'dashed'，线性虚线。
            lineStyle: {
              type: "dashed",
              color: "#34445d", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          name: '',
          nameGap: -10,
          nameTextStyle: {
            color: '#61B9C8',
            fontSize: 14,
            align: 'right',
            padding: [0, 6, 0, 0]
          }
        },
        series: [
          {
            name: '偷盗',
            type: "line", // 设置图表类型为柱状
            data: that.lineVal,
            smooth: true,
            showSymbol: false,
            lineStyle: {
              color: '#ffe000',
            },
            // 
            // itemStyle: {
            //   color: '#ffe000'
            // },

            symbol: "circle",
            symbolSize: 10,
            smooth: true,
            itemStyle: {
              normal: {
                color: "rgba(3,240,254,1)",
                lineStyle: {
                  color: "rgba(3,240,254,1)",
                  width: 2,
                },
                areaStyle: {
                  color: {
                    type: 'linear',
                    // x=0,y=1,柱子的颜色在垂直方向渐变
                    x: 0,
                    y: 1,
                    colorStops: [
                      {
                      offset: 0,
                      color: "rgba(3,240,254,.4)",
                    },
                    {
                      offset: 1,
                      color: "rgba(3,240,254,0)",
                    },
                    ],
                  }
                },
                shadowColor: "rgba(3,240,254,1)",
                shadowBlur: 20,
              },
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: "red",
                },
              },
            },
          },
          {
            name: '砍伐',
            type: "bar", // 设置图表类型为柱状
            data: that.barVal,
            barWidth: "12",
            itemStyle: {
              normal: {
                barBorderRadius: [8, 8, 0, 0],
              },
            },
            color: {
              type: 'linear',
              // x=0,y=1,柱子的颜色在垂直方向渐变
              x: 0,
              y: 1,
              colorStops: [
                {
                  offset: 0, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                  color: 'rgba(11,42,84,.3)' // 起始位置设置此颜色，终止位置设置下面的颜色
                },
                {
                  offset: 0.5, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                  color: 'rgba(0, 108, 237,.6)' // 起始位置设置此颜色，终止位置设置下面的颜色
                },
                {
                  offset: 1,
                  color: '#00cfff'
                }
              ],
              // global: false // 缺省为 false
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      // this.myChart.clear();
      // this.myChart.resize()
      this.myChart.setOption(option);
    }
  },

}
</script>
<style scoped>
</style>
