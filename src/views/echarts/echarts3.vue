<template>
  <div class="redPocket"></div>
</template>

<script>
export default {
  name: 'redPocket',
  props: ['hehuSiLDetailData'],
  data() {
    return {
      myChart: null,
      huddleList: [],
      occupyList: [],
      exploitList: [],
      constructList: [],
    }
  },
  watch: {
    hehuSiLDetailData(newValue, oldValue) {
      this.huddleList = newValue['乱堆'];
      this.occupyList = newValue['乱占'];
      this.exploitList = newValue['乱采'];
      this.constructList = newValue['乱建'];
      this.setPocket();
    },
  },
  mounted() {
    this.setPocket();
  },
  methods: {
    setPocket() {
      var that = this;
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        title: {
          // text: "散点图数据分析",
          top: "6%",
          left: '2%',
          textStyle: {
            color: '#fff',
            fontFamily: 'MyFont',
            fontSize: 14
          }
        },
        legend: {
          show: true,
          tooltip: {
            show: true,
          },
          orient: 'vertical',
          // 乱堆   乱占  乱采  乱建
          top: 'center',
          itemGap: 14,
          itemHeight: 8,
          itemWidth: 17,
          right: '2%',
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'MyFont',
          },
        },
        grid: {
          right: '90px',
          top: "20px",
          bottom: '20px',
          left: 60
        },
        xAxis: {
          type: 'time',
          axisLabel: {
            color: '#0FB9CD',
            fontSize: 14,
            fontFamily: 'MyFont',
            formatter: '{yyyy}-{MM}-{dd}'
          },
          scale: true,
          // name: '次数',
          nameTextStyle: {
            color: "#0FB9CD",
            fontSize: 14,
            fontFamily: 'MyFont',
          },
          axisLine: {
            show: false
          },
          axisTick: {
            color: '#14336D'
          },
          splitLine: {
            lineStyle: {
              color: '#14336D'
            }

          }
        },
        yAxis: {
          scale: true,
          name: '数量',
          nameTextStyle: {
            color: "#0FB9CD",
            fontSize: 14,
            fontFamily: 'MyFont',
            padding: [0, 65, -10, 0]
          },
          axisTick: { show: false },
          axisLabel: {
            color: '#0FB9CD',
            fontSize: 14,
            fontFamily: 'MyFont',
          },
          axisLine: {
            lineStyle: {
              color: '#134076'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#14336D'
            }
          }
        },
        series: [
          {
            name: '乱占',
            type: 'scatter',
            itemStyle: {
              color: '#2A71FF'
            },
            data: that.occupyList,
          },
          {
            name: '乱堆',
            type: 'scatter',
            itemStyle: {
              color: '#FE7C2F'
            },
            data: that.huddleList,
          },
          {
            name: '乱采',
            type: 'scatter',
            itemStyle: {
              color: '#00EDFE'
            },
            data: that.exploitList,
          },
          {
            name: '乱建',
            type: 'scatter',
            itemStyle: {
              color: '#FEDB4B'
            },
            data: that.constructList,
          },
        ]
      };
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el, null, {devicePixelRatio: 3});

      // this.myChart.clear();
      // this.myChart.resize();
      this.myChart.setOption(option);
    },
  }, 
}
</script>

<style  scoped>
.redPocket {
  height: 100%;
}
</style>
