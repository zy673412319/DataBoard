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
  props: ['lajipiData'],
  data() {
    return {
      myChart: null,
      // 传入数据生成 option
      optionsData: []
    }
  },
  watch: {
    lajipiData(newValue, oldValue) {
      var data = [];
      if(newValue && newValue.length > 0){
        for(var key in newValue){
          newValue[key].itemStyle = {};
        }
        this.optionsData = newValue;
        this.initChartR2();
      }
    },
  },
  mounted() {
    if(this.optionsData.length > 0){
      this.initChartR2();
    }
  },
  methods: {
    initChartR2() {
      var that = this;
      function getParametricEquation(startRatio,endRatio,isSelected,isHovered, k, height ) {
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
        // var colorList = ['#2A71FF', '#00EDFE', '#FEDB4B', '#FE7C2F', '#fc8251', '#5470c6', '#9A60B4', '#ef6567', '#f9c956'];
        var colorList = ['#FFD86F', '#0275CB', '#15D4E4', '#FE7C2F', '#fc8251', '#5470c6', '#9A60B4', '#ef6567', '#f9c956'];
        for (let i = 0; i < pieData.length; i++) {
          sumValue += pieData[i].value

          const seriesItem = {
            name:
              typeof pieData[i].name === 'undefined'
                ? `series${i}`
                : pieData[i].name,
            type: 'surface',
            label: {
              opacity: 1,
              position: 'outside',
              fontSize: 12,
              fontFamily: 'MyFont',
              lineHeight: 20,
              textStyle: {
                fontSize: 12,
                color: '#fff',
                fontFamily: 'MyFont',
              }
            },
            labelLine: {
              length: 30,
              length2: 30
            },
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
            const itemStyle = {}
          itemStyle.color = colorList[i];
            seriesItem.itemStyle = itemStyle;
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
      const series = getPie3D(that.optionsData.map(item => {
        item.name = item.garbageName;
        item.value = item.count;
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
          fontFamily: 'MyFont',
          lineHeight: 20,
          textStyle: {
            fontSize: 12,
            color: '#fff',
            fontFamily: 'MyFont',
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
        itemStyle: {
          normal: {
            // color: 'rgba(0, 0, 0, 0)' // 设置透明色
          }
        },
        data: that.optionsData.map(item => {
          item.itemStyle.opacity = 0;
          return item
        })
      })
      // 准备待返回的配置项，把准备好的 legendData、series 传入。
      const option = {
        legend: {
          orient: 'vertical',
          // x: 'left',o
          right: 0,
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
            fontSize: 12,
            fontFamily: 'MyFont',
          }
        },
        animation: true,
        tooltip: {
          axisPointer: {
            animation: false, //很重要！
          },
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
            fontSize: 14,
            fontFamily: 'MyFont',
          }
        },
        title: {
          x: 'center',
          top: '20',
          textStyle: {
            color: '#fff',
            fontSize: 22,
            fontFamily: 'MyFont',
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
          fontFamily: 'MyFont',
          lineHeight: 20,
          textStyle: {
            fontSize: 12,
            color: '#fff',
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
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el, null, {devicePixelRatio: 3});

      this.myChart.clear();
      // this.myChart.resize(
      //   {
      //     width: this.$el.offsetWidth,
      //     height: this.$el.offsetHeight
      //   }
      // )
      this.myChart.setOption(option, { replaceMerge: ["series"] });
    },

  },
}
</script>

