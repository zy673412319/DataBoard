<template>
  <div class="redPocket"></div>
</template>

<script>
export default {
  name: 'redPocket',
  data() {
    return {
      myChart: null
    }
  },
  methods: {
    // 红包装账
    setPocket() {
      const fillStr = (val) => (`${val}`.length < 2 ? `0${val}` : val);
      const data = [
        ['2024-04-01', 4],
        ['2024-04-05', 4],
        ['2024-04-10', 4],
        ['2024-04-15', 4],
        ['2024-04-20', 4],
        ['2024-04-25', 4],
        ['2024-04-30', 4]
      ].map(function (item) {
        const date = new Date(item[0]);
        const h = date.getHours();
        const m = date.getMinutes();
        return [item[0], h * 60 + m, item[1]];
      });
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
          // data: ['乱堆', '乱占', '乱采', '乱建'],
          top: 'center',
          itemGap: 14,
          itemHeight: 8,
          itemWidth: 17,
          right: '2%',
          textStyle: {
            color: '#fff',
            fontSize: 14,
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
            formatter: '{yyyy}-{MM}-{dd}'
          },
          scale: true,
          // name: '次数',
          nameTextStyle: {
            color: "#0FB9CD",
            fontSize: 14
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
            padding: [0, 65, -10, 0]
          },
          axisTick: { show: false },
          axisLabel: {
            color: '#0FB9CD',
            fontSize: 14
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
            data: [
              ['2024-04-01', 58],
              ['2024-04-06', 150],
              ['2024-04-11', 36],
              ['2024-04-15', 398],
              ['2024-04-22', 56],
              ['2024-04-26', 189],
              ['2024-04-29', 69],
            ],
          },
          {
            name: '乱堆',
            type: 'scatter',
            itemStyle: {
              color: '#FE7C2F'
            },
            data: [
              ['2024-04-03', 75],
              ['2024-04-07', 96],
              ['2024-04-13', 86],
              ['2024-04-15', 150],
              ['2024-04-24', 146],
              ['2024-04-26', 97],
              ['2024-04-30', 140]
            ],
          },
          {
            name: '乱采',
            type: 'scatter',
            itemStyle: {
              color: '#00EDFE'
            },
            data: [
              ['2024-04-01', 260],
              ['2024-04-06', 174],
              ['2024-04-11', 156],
              ['2024-04-15', 69],
              ['2024-04-22', 120],
              ['2024-04-24', 157],
              ['2024-04-26', 98],
              ['2024-04-29', 100],
              ['2024-04-30', 78],
            ],
          },
          {
            name: '乱建',
            type: 'scatter',
            itemStyle: {
              color: '#FEDB4B'
            },
            data: [
              ['2024-04-02', 75],
              ['2024-04-06', 96],
              ['2024-04-09', 86],
              ['2024-04-12', 150],
              ['2024-04-16', 146],
              ['2024-04-19', 257],
              ['2024-04-23', 56],
              ['2024-04-26', 97],
              ['2024-04-30', 140]
            ],
          },
        ]
      };
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el);

      this.myChart.clear();
      // this.myChart.resize();
      this.myChart.setOption(option);
    },
  }, mounted() {
    this.setPocket();
  },
}
</script>

<style  scoped>
.redPocket {
  height: 100%;
}
</style>
