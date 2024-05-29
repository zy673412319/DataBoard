<template>
  <div class="leftBar"></div>
</template>

<style  scoped>
.leftBar {
  height: 100%;
  width: 100%;
}
</style>

<script>
export default {
  props: {
    title: String,
    data: Array,
  },
  name: '',
  data() {
    return {
      myChart: null
    }
  },
  methods: {
    setTrenchData(type) { // 数据
      let arr = [];
      let obj = {};
      for (let i = 0; i < this.data.length; i++) {
        switch (type) {
          case 't':
            obj = {
              subtext: this.data[i].subtitle,
              top: this.data[i].top,
              left: 10,
              subtextStyle: {
                color: '#8CBCCD',
                fontSize: 9
              }
            }
            break;
          case 'd':
            obj = this.data[i].data
            break;
          case 'b':
            obj = 100;
            break;
          default:
            break;
        }

        arr.push(obj);
      }
      if (type === 't') {
        arr.unshift({
          text: this.title,
          top: '8%',
          left: '5%',
          textStyle: {
            color: '#fff',
            fontSize: 12
          }
        });
      }
      return arr;
    },

    // 渠道分析
    setChart() {
      let option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        title: this.setTrenchData('t'),
        grid: {
          top: '0',
          bottom: '3%',
          left: '5%',
        },
        yAxis: {
          data: [],
          inverse: true,
          axisLabel: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
        },
        xAxis: {
          splitLine: { show: false },
          axisLabel: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
        },
        series: [{
          type: 'bar',
          silent: true,
          barWidth: 32,
          barGap: '-100%', // Make series be overlap
          itemStyle: {
            normal: {
              color: 'rgba(9,53,109,0.6)',
              barBorderRadius: 6,
            },
          },
          data: this.setTrenchData('b')
        }, {
          type: 'bar',
          barWidth: 32,
          z: 2,
          label: {
            show: true,
            position: "insideLeft",
            color: "#fff",
            offset: [0, 1],
            fontSize: 14,
            formatter: function (params) {
              return params.name
            },
          },
          itemStyle: {
            normal: {
              color: function (params) {
                return params.data.color;
              },
              barBorderRadius: [6, 0, 0, 6],
            },
          },
          data: this.setTrenchData('d')
        }]
      };
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el, null, {devicePixelRatio: 3});

      this.myChart.clear();
      // this.myChart.resize();
      this.myChart.setOption(option);
    },

  },
  mounted() {
    this.setChart();
  },
}
</script>
