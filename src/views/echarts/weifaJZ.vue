<template>
  <div class="threeBarChart"></div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      myChart: null,
      timer: '',
      xData: ["学校建筑", "地铁", "基础设施", "水厂", "电厂", "企业大楼", "医院"],
      // 计划数据数组
      otherData: [328, 1488, 360, 22, 922, 582, 148],
      // 完成数据数组
      completeData: [320, 132, 101, 0, 90, 450, 260],
      color: [
        {
          type: "linear",
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          //给菱形上色
          colorStops: [
            {
              offset: 0,
              color: "#54a2d3",
            },
            {
              offset: 0.5,
              color: "#54a2d3",
            },
            {
              offset: 0.5,
              color: "#7ed1e3",
            },
            {
              offset: 1,
              color: "#7ed1e3",
            },
          ],
        },
        {
          type: "linear",
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          //给菱形上色
          colorStops: [
            {
              offset: 0,
              color: "#a3a418",
            },
            {
              offset: 0.5,
              color: "#a3a418",
            },
            {
              offset: 0.5,
              color: "#cdbf38",
            },
            {
              offset: 1,
              color: "#cdbf38",
            },
          ],
        },
      ],
      barWidth: 20,
      constData: [],
      showData: [],
    }
  },
  mounted() {
    this.setChart();
    this.timer && clearInterval(this.timer)
    this.timer = setInterval(()=>{
      this.changeDta();
    }, 3000)
  },
  methods: {
    generateRandomArray() {
      // 生成一个5位的随机数组
      var randomArray = Array.from({ length: 7 }, () => this.generateRandomNumber());
      return randomArray;
    },
    generateRandomNumber() {
      // 生成一个随机数
      var min = 150;
      var max = 800;
      min = Math.ceil(min); // 确保min是整数
      max = Math.floor(max); // 确保max是整数
      return Math.floor(Math.random() * (max - min + 1)) + min; // 返回介于min和max之间的整数
    },
    changeDta(){
      this.otherData = this.generateRandomArray();
      this.completeData = this.generateRandomArray();
      this.setChart();
    },
    setChart() {
      var that = this;
      let option = {
        //调整光标移入，展示数据的样式
        tooltip: {
          trigger: "axis",
          // formatter: function (params) {
          //   return params[0].axisValue + "：" +
          //     "<br/>计划：" + that.otherData[params[0].dataIndex] +
          //     "<br/>完成：" + that.completeData[params[0].dataIndex];
          // },
        },
        //调整图例
        legend: {
          right: "8%",
          top: "6",
          itemWidth: 7,
          itemHeight: 7,
          textStyle: {
            color: '#9bc3d4',
            fontSize: 10
          }
        },
        //调整图表距边框的距离
        grid: {
          left: "3%",
          right: "3%",
          top: "40",
          bottom: "5%",
          containLabel: true,
        },
        // 调整图像x轴
        xAxis: {
          data: that.xData,
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              showMaxLabel: false,
              color: "#9bc3d4",
              fontSize: 10,
              interval: 0,
              rotate: '-45',// 旋转度数
            },
          },
          axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [6, 6],
            lineStyle: {
              color: '#173046'   // x轴颜色
            }
          },
        },
        //调整图像y轴
        yAxis: {
          axisTick: {
            show: false,
          },
          axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [6, 6],
            lineStyle: {
              color: '#9bc3d4'    // y轴线颜色
            },
            color: '#9bc3d4',    // y轴文本颜色
            showMaxLabel: false,
            fontSize: 10
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#1a3c56',
              width: 1,
              opacity: 0.11,
              width: "1", //坐标线的宽度
              type: "dashed",
            }
          },
          nameGap: -10,
          nameTextStyle: {
            color: '#61B9C8',
            fontSize: 9,
            align: 'right',
            padding: [0, 6, 0, 0]
          }
        },
        //图像的关键显示部分，此处5个拼接一个堆叠柱子，注意此处的调整
        series: [
          {
            z: 1,
            name: "计划",
            type: "bar",
            stack: '1',
            barWidth: that.barWidth,
            // stack: "总量",
            color: that.color[0],
            data: that.otherData,
          },
          {
            z: 2,
            name: "完成",
            type: "bar",
            stack: '1',
            barWidth: that.barWidth,
            // stack: "总量",
            color: that.color[1],
            data: that.completeData,
          },
          //柱形底部
          {
            z: 3,
            name: "项目",
            type: "pictorialBar",
            data: that.constData,
            symbol: "diamond",
            symbolOffset: ["0%", "50%"],
            symbolSize: [that.barWidth, 10],
            itemStyle: {
              normal: {
                color: that.color[0],
              },
            },

            tooltip: {
              show: false,
            },
          },
          //某个柱形的底部
          {
            z: 4,
            name: "项目",
            type: "pictorialBar",
            data: that.otherData,
            symbol: "diamond",
            symbolPosition: "end",
            symbolOffset: ["0%", "-50%"],
            symbolSize: [that.barWidth, 10],
            itemStyle: {
              normal: {
                color: that.color[1],
              },
            },
            tooltip: {
              show: false,
            },
          },
          {
            z: 5,
            name: "项目",
            type: "pictorialBar",
            symbolPosition: "end",
            data: that.showData,
            symbol: "diamond",
            symbolOffset: ["0%", "-50%"],
            symbolSize: [that.barWidth - 4, (10 * (that.barWidth - 4)) / that.barWidth],
            tooltip: {
              show: false,
            },
            itemStyle: {
              normal: {
                label: {
                  formatter: "{c}",
                  show: true,
                  position: "top",
                  textStyle: {
                    fontWeight: 400,
                    fontSize: "13",
                    color: "#F2F7FA",
                    lineHeight: 20,
                  },
                },
              }
            }
          },

        ],
      };
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el);

      // this.myChart.clear();
      // this.myChart.resize()
      this.myChart.setOption(option);
    }
  },
}
</script>

<style  scoped>
.threeBarChart {
  height: 100%;
  width: 100%;
}
</style>