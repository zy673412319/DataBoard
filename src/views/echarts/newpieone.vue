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
  props: ['liangweiParData'],
  name: '',
  data() {
    return {
      myChart: null,
      optionsData: [],
    }
  },
  watch: {
    liangweiParData(newValue, oldValue) {
      var cropsNum = 0;
      var woodlandNum = 0;
      for(var i = 0; i<newValue.length; i++){
        if(newValue[i].name == 'crops'){
          cropsNum = newValue[i].count;
        }
        if(newValue[i].name == 'woodland'){
          woodlandNum = newValue[i].count;
        }
      }
      this.optionsData = [
        {
          name: '耕地',
          value: cropsNum,
        },
        {
          name: '林地',
          value: woodlandNum,
        },
      ];
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
          show: false,
          icon: "circle",
          orient: 'vertical',
          right: 40,
          top: 30,
          align: 'right',
          textStyle: {
            color: "#fff"
          },
          itemGap: 10,
          itemWidth: 16,
          itemHeight: 16,
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontFamily: 'MyFont',
          }
        },
        series: [
          {
            name: '占地类型统计',
            type: 'pie',
            // roseType: 'radius',
            radius: ['20%', '84%'],
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
                length: 16,
                length2: 16,
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
            color: ['#FEAF3C', '#0275CB'],// 色块填充颜色
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
