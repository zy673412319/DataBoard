<template>
  <div class="threeBarChart"></div>
</template>

<script>
export default {
  name: '',
  props: ['renkNumDateList', 'renkNumNumList'],
  data() {
    return {
      myChart: null,
      dateList: [],
      data1: [],
      timer: ''
    }
  },
  watch: {
    renkNumDateList(newValue, oldValue) {
      this.dateList = newValue;
      this.data1 = this.renkNumNumList;
      this.setChart();
    },
    renkNumNumList(newValue, oldValue) {
      this.dateList = this.renkNumDateList;
      this.data1 = this.renkNumNumList;
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
              fontSize: 12,
              fontFamily: 'MyFont',
              interval: 0,// 设置这个强制显示所有标签文字
              // rotate: '25',// 旋转度数
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
                fontFamily: 'MyFont',
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