<template>
  <div class="threeBarChart"></div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      myChart: null,
      data1: [],
      data2: [],
      timer: ''
    }
  },
  methods: {
    setChart() {
      var that = this;
      let option = {
        grid: {
          top: "20",
          bottom: "20",
          left: 35,
          right: 20,
        },
        tooltip: {
          trigger: 'axis'
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
              interval: 0,// 设置这个强制显示所有标签文字
              //   rotate: '-45',// 旋转度数
              //                 formatter:function(value){  
              //     return value.split("").join("\n");  
              // },
            },
            data: ['2023-10','2023-11', '2023-12', '2024-1', '2024-2', '2024-3', '2024-4','2024-5',]
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
            name: '项目个数',
            type: 'line',
            data: that.data1,
            smooth: true,   // 弧度显示
            showSymbol: false,   // 不显示乖点
            lineStyle: {
              color: '#2efff3',
            },
            itemStyle: {
              color: '#2efff3'
            },
          },
          {
            name: '投资基金（百W）',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: that.data2,
            lineStyle: {
              color: '#026eed',
            },
            itemStyle: {
              color: '#026eed'
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
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el);

      // this.myChart.clear();
      // this.myChart.resize()
      this.myChart.setOption(option);
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
    changeData(){
      this.data1 = this.generateRandomArray(10, 20);
      this.data2 = this.generateRandomArray(30, 60);
      this.setChart()
    }
  },
  mounted() {
    this.data1 = this.generateRandomArray(10, 20);
    this.data2 = this.generateRandomArray(20, 60);
    this.setChart()
    this.timer && clearInterval(this.timer)
    this.timer = setInterval(()=>{
      this.changeData();
    }, 3000)
  },
}
</script>

<style  scoped>
.threeBarChart {
  height: 100%;
  width: 100%;
}
</style>