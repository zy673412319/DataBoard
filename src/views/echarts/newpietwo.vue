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
  props: ['lajipiData'],
  name: '',
  data() {
    return {
      myChart: null,
      optionsData: [],
    }
  },
  watch: {
    lajipiData(newValue, oldValue) {
      this.optionsData = newValue;
      this.setChart();
    },
  },
  mounted() {
    this.setChart();
  },
  methods: {
    // 渠道分析
    setChart() {
      var that = this;
      let option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            animation: false, //很重要！
          },
        },
        legend: {
          // icon: "circle",
          orient: 'vertical',
          right: 30,
          top: 30,
          align: 'right',
          textStyle: {
            color: "#fff"
          },
          itemGap: 10,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontFamily: 'MyFont',
          }
        },
        series: [
          {
            name: '垃圾处置',
            type: 'pie',
            radius: ['40%', '72%'],
            center: ['50%', '50%'],
            itemStyle: {
              borderRadius: 4,
              borderColor: 'transparent',
              borderWidth: 1
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontFamily: 'MyFont',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true,
              lineStyle: {
                color: '#7BC0CB',
              },
              normal: {
                show: true,
                length: 6,
                length2: 6,
              },
            },
            label: {
              show: true,
              position: 'outside',
              textStyle: {
                color: '#fff',
                fontSize: '14px',
                fontFamily: 'MyFont',
              },
              formatter: (item) => {
                return '{top|' + item.percent + '%}' + '\n' + '{bottom| ' + item.name + '} '
              },
              rich: {
                top: {
                  verticalAlign: 'bottom',
                  align: 'center',
                  fontSize: 12,
                  fontFamily: 'MyFont',
                  color: 'inherit',
                  padding: [0, 0, 3, 0]
                },
                hr: {
                  borderColor: 'inherit',
                  width: '100%',
                  borderWidth: 1,
                  height: 0
                },
                bottom: {
                  padding: [2, 0, 0, 0],
                  verticalAlign: 'top',
                  align: 'center',
                  fontSize: 12,
                  fontFamily: 'MyFont',
                  color: '#ffffff',
                }
              }
            },
            color: ['#FFD86F', '#0275CB', '#15D4E4', '#FE7C2F', '#fc8251', '#5470c6', '#9A60B4', '#ef6567', '#f9c956'],// 色块填充颜色
            data: that.optionsData,
          }
        ]
      }

      if (!this.myChart) this.myChart = this.$echarts.init(this.$el, null, {devicePixelRatio: 3});
      this.myChart.clear();
      this.myChart.setOption(option, { replaceMerge: ["series"] });
    },
  },
}
</script>
