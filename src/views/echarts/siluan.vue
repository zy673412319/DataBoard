<template>
  <div class="threeBarChart"></div>
</template>

<script>
export default {
  name: '',
  props: ['gcLineData'],
  data() {
    return {
      myChart: null,
      data1: [],  // 个数
      data2: [],
      dateList: [],
      timer: ''
    }
  },
  watch: {
    gcLineData(newValue, oldValue) {
      // monthBooks 【dataTime: '2024-01', itemCount: 1, itemAmount: 70000】
      var dataTime = [];
      var itemCount = [];
      var itemAmount = [];
      if(newValue.length > 0){
        for(var i = 0; i<newValue.length; i++){
          dataTime.push(newValue[i].dataTime);
          itemCount.push(newValue[i].itemCount);
          itemAmount.push(parseInt(Number(newValue[i].itemAmount) / 100));
        }
        this.dateList = dataTime;
        this.data1 = itemCount;
        this.data2 = itemAmount;
        this.setChart();
      }
    },
  },
  methods: {
    setChart() {
      var that = this;
      let option = {
        animationDuration: 3000,
        grid: {
          top: "26",
          bottom: "20",
          left: 35,
          right: 80,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false, //很重要！
          },
        },
        legend: {
          right: "8%",
          top: "6",
          itemWidth: 7,
          itemHeight: 7,
          textStyle: {
            color: '#9bc3d4',
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
              color: '#9bc3d4',   // x轴文本颜色
              showMaxLabel: false,
              fontSize: 14,
              fontFamily: 'MyFont',
              interval: 0,// 设置这个强制显示所有标签文字
              //   rotate: '-45',// 旋转度数
              //                 formatter:function(value){  
              //     return value.split("").join("\n");  
              // },
            },
            data: that.dateList
          }
        ],
        yAxis: [
          {
            position: 'left',
            type: 'value',
            // interval: 50,
            scale: true, //自适应
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
          {
            position: 'right',
            type: 'value',
            // interval: 200,
            scale: true, //自适应
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
            name: '项目个数',
            type: 'line',
            data: that.data1,
            smooth: true,   // 弧度显示
            lineStyle: {
              color: '#2efff3',
            },
            symbol: "circle",
            symbolSize: 10,
            yAxisIndex: 0,  //指定需要使用的Y轴
            itemStyle: {
              color: '#2efff3'
            },
          },
          {
            name: '投资基金（百万）',
            type: 'line',
            smooth: true,
            // showSymbol: false, 
            symbol: "circle",
            symbolSize: 10,
            data: that.data2,
            lineStyle: {
              color: '#026eed',
            },
            itemStyle: {
              color: '#026eed'
            },
            yAxisIndex: 1,  //指定需要使用的Y轴
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

      this.myChart.clear();
      // this.myChart.resize()
      this.myChart.setOption(option, { replaceMerge: ["series"] });
    },
    generateRandomArray(min, max) {
      // 生成一个5位的随机数组
      var randomArray = Array.from({ length: 8 }, () => this.generateRandomNumber(min, max));
      return randomArray;
    },
    generateRandomNumber(min, max) {
      // 生成一个随机数
      min = Math.ceil(min); // 确保min是整数
      max = Math.floor(max); // 确保max是整数
      return Math.floor(Math.random() * (max - min + 1)) + min; // 返回介于min和max之间的整数
    },
  },
  mounted() {
    this.setChart()
  },
}
</script>

<style  scoped>
.threeBarChart {
  height: 100%;
  width: 100%;
}
</style>