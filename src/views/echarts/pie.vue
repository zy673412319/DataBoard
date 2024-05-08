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
    initChartR2() {
      function getParametricEquation(
        startRatio,
        endRatio,
        isSelected,
        isHovered,
        k,
        height
      ) {
        // 计算
        const midRatio = (startRatio + endRatio) / 2

        const startRadian = startRatio * Math.PI * 2
        const endRadian = endRatio * Math.PI * 2
        const midRadian = midRatio * Math.PI * 2

        // 如果只有一个扇形，则不实现选中效果。
        if (startRatio === 0 && endRatio === 1) {
          isSelected = false
        }

        // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
        k = typeof k !== 'undefined' ? k : 1 / 3

        // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
        const offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0
        const offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0

        // 计算高亮效果的放大比例（未高亮，则比例为 1）
        const hoverRate = isHovered ? 1.05 : 1

        // 返回曲面参数方程
        return {
          u: {
            min: -Math.PI,
            max: Math.PI * 3,
            step: Math.PI / 32
          },

          v: {
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 20
          },

          x: function(u, v) {
            if (u < startRadian) {
              return (
                offsetX +
                Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
              )
            }
            if (u > endRadian) {
              return (
                offsetX +
                Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
              )
            }
            return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate
          },

          y: function(u, v) {
            if (u < startRadian) {
              return (
                offsetY +
                Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
              )
            }
            if (u > endRadian) {
              return (
                offsetY +
                Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
              )
            }
            return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate
          },

          z: function(u, v) {
            if (u < -Math.PI * 0.5) {
              return Math.sin(u)
            }
            if (u > Math.PI * 2.5) {
              return Math.sin(u)
            }
            return Math.sin(v) > 0 ? 1 * height : -1
          }
        }
      }
      // 生成模拟 3D 饼图的配置项
      function getPie3D(pieData, internalDiameterRatio) {
        const series = []
        let sumValue = 0
        let startValue = 0
        let endValue = 0
        const legendData = []
        const k =
          typeof internalDiameterRatio !== 'undefined'
            ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
            : 1 / 3

        // 为每一个饼图数据，生成一个 series-surface 配置
        for (let i = 0; i < pieData.length; i++) {
          sumValue += pieData[i].value

          const seriesItem = {
            name:
              typeof pieData[i].name === 'undefined'
                ? `series${i}`
                : pieData[i].name,
            type: 'surface',
            parametric: true,
            wireframe: {
              show: false
            },
            pieData: pieData[i],
            pieStatus: {
              selected: false,
              hovered: false,
              k: k
            },
            center: ["10%", "50%"],
          }

          if (typeof pieData[i].itemStyle !== 'undefined') {
            const itemStyle = {}

            typeof pieData[i].itemStyle.color !== 'undefined'
              ? (itemStyle.color = pieData[i].itemStyle.color)
              : null
            typeof pieData[i].itemStyle.opacity !== 'undefined'
              ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
              : null

            seriesItem.itemStyle = itemStyle
          }
          series.push(seriesItem)
        }

        // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
        // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
        for (let i = 0; i < series.length; i++) {
          endValue = startValue + series[i].pieData.value
          series[i].pieData.startRatio = startValue / sumValue
          series[i].pieData.endRatio = endValue / sumValue
          series[i].parametricEquation = getParametricEquation(
            series[i].pieData.startRatio,
            series[i].pieData.endRatio,
            false,
            false,
            k,
            2000
          )

          startValue = endValue

          legendData.push(series[i].name)
        }
        return series
      }
      // 传入数据生成 option
      const optionsData = [
        {
          name: '建筑垃圾',
          value: 26,
          itemStyle: {
            color: '#2A71FF',
          },
        },

        {
          name: '生活垃圾',
          value: 32,
          itemStyle: {
            //   opacity: 0.5,
            color: '#00EDFE',
          },
        },
        {
          name: '其他',
          value: 28,
          itemStyle: {
            //   opacity: 0.5,
            color: '#FEDB4B',
          },
        },
        {
          name: '工业垃圾',
          value: 24,
          itemStyle: {
            //   opacity: 0.5,
            color: '#FE7C2F',
          },
        },
      ]
      const series = getPie3D(optionsData.map(item => {
        if (item.value < 5) {
          item.value = 5
        }
        return item
      }), 0, 240, 28, 26, 0.5)
      series.push({
        name: 'pie2d',
        type: 'pie',
        label: {
          opacity: 1,
          position: 'outside',
          fontSize: 12,
          lineHeight: 20,
          textStyle: {
            fontSize: 12,
            color: '#fff'
          }
        },
        labelLine: {
          length: 30,
          length2: 30
        },
        minAngle: 10,
        startAngle: -50, // 起始角度，支持范围[0, 360]。
        clockwise: false, // 饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
        radius: ['0', '35%'],
        center: ['50%', '50%'],
        data: optionsData.map(item => {
          item.itemStyle.opacity = 0
          return item
        })
      })
      // 准备待返回的配置项，把准备好的 legendData、series 传入。
      const option = {
        legend: {
          orient: 'vertical',
          // x: 'left',o
          right: 40,
          top: 30,
          align: 'right',
          textStyle: {
            color: "#fff"
          },
          itemGap: 10,
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: '#fff',
            fontSize: 12
          }
        },
        animation: true,
        tooltip: {
          formatter: (params) => {
            if (
              params.seriesName !== 'mouseoutSeries' &&
              params.seriesName !== 'pie2d'
            ) {
              return `${
                params.seriesName
              }<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                params.color
              };"></span>${
                option.series[params.seriesIndex].pieData.value + '%'
              }`
            }
          },
          textStyle: {
            fontSize: 14
          }
        },
        title: {
          x: 'center',
          top: '20',
          textStyle: {
            color: '#fff',
            fontSize: 22
          }
        },
        // backgroundColor: '#0E3567',
        // 指示线 宽高
        labelLine: {
          lineStyle: {
            color: '#7BC0CB'
          },
          length: 5,
          length2: 10,
        },
        label: {
          // 线
          opacity: 1,
          fontSize: 12,
          lineHeight: 20,
          textStyle: {
            fontSize: 12,
            color: '#fff',
          },
          formatter: (item) => {
            return '{top|' + item.percent + '%}' + '\n' + '{bottom| ' + item.name + '} '
          },
          rich: {
            top: {
              verticalAlign: 'bottom',
              align: 'center',
              fontSize: 12,
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
              color: '#ffffff',
            }
          }
        },
        xAxis3D: {
          min: -1,
          max: 1
        },
        yAxis3D: {
          min: -1,
          max: 1
        },
        zAxis3D: {
          min: -1,
          max: 1
        },
        grid3D: {
          show: false,
          boxHeight: 0.03,
          // top: '30%',
          bottom: '50%',
          // environment: "rgba(255,255,255,0)",
          viewControl: {
            distance: 300,
            alpha: 35,
            beta: 60,
            autoRotate: false // 自动旋转
          }
        },
        series: series
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
    },

  },
  mounted() {
    this.initChartR2();
  },
}
</script>

