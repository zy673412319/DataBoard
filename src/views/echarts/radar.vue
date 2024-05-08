<template>
  <div class="chart"></div>
</template>

<style  scoped>
.chart {
  height: 100%;
}
</style>

<script>
export default {
  name: '',
  props: {
    data: Object
  },
  data() {
    return {
      myChart: null
    }
  },
  methods: {
    setChart() {
      let seriesData = []
      this.data.data.forEach(item => {
        seriesData.push(
          {
            value: item.value,
            name: item.name,
            symbol: 'none',
            symbolSize: 5,
            itemStyle: {
              color: item.color
            },
            lineStyle: {
              color: item.color,
              width: 1,
            },
            emphasis: {
              lineStyle: {
                width: 2
              }
            }
          }
        )
      })
      let option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        title: {
          text: this.data.title,
          top: "5%",
          left: this.data.position[0],
          textStyle: {
            color: '#fff',
            fontSize: 16,
          }
        },
        legend: {
          tooltip: {
            show: true,
          },
          orient: 'vertical',
          data: this.data.data.map(item => {
            return { name: item.name, icon: 'circle' }
          }),
          top: 'center',
          itemGap: 14,
          itemHeight: 12,
          itemWidth: 20,
          right: '6%',
          textStyle: {
            color: '#fff',
            fontSize: 14,
          },
        },
        radar: {
          indicator: this.data.indicator,
          center: this.data.center,
          radius: "74%",
          startAngle: 90,
          splitNumber: 4,
          shape: 'circle',
          axisName: {
            textStyle: {
              color: '#fff',
              fontSize: 14,
            }
          },
          axisNameGap: 3,
          splitArea: {
            areaStyle: {
              color: ['#3be5cc', '#1c6877',
                '#0d5d85', '#094362',],
            }
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: {
          name: '雷达图',
          type: 'radar',
          emphasis: {
            // color: 各异,
            lineStyle: {
              width: 4
            }
          },
          data: seriesData
        }
      };
      if (this.id == 'bottom_1_2') {
        option.legend.left = '5%';
      }
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el);

      this.myChart.clear();
      this.myChart.resize(
        {
          width: this.$el.offsetWidth,
          height: this.$el.offsetHeight
        }
      )
      this.myChart.setOption(option);
    }
  },
  mounted() {
    this.setChart();
  },
}
</script>

