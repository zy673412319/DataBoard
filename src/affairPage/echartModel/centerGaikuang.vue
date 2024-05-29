<template>
  <div ref="echart" class="echartDiv"></div>
</template>
 
<script>
export default {
  name: '',
  props: ['centerGaikuangData'],
  data() {
    return {
      myChart: null,
      charts: '',
      timer: '',
      optionsData: []
    }
  },
  watch: {
    centerGaikuangData(newValue, oldValue) {
      var cropsNum = newValue.rzbmNum;
      var woodlandNum = newValue.kbckNum;
      this.optionsData = [
        {
          name: '开办窗口数量',
          value: cropsNum,
          itemStyle: {
            color: '#2DFEF3',
          },
        },
        {
          name: '入驻部门数量',
          value: woodlandNum,
          itemStyle: {
            color: '#05ADE7',
          },
        },
      ];
      this.echartInit();
    },
  },
  mounted() {
    this.echartInit()
  },
  
  methods: {
    echartInit() {
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el, null, {devicePixelRatio: 3});
      var that = this;
      const series = that.getPie3D(this.optionsData, 0);
      series.push({
        name: 'pie2d',
        type: 'pie',
        label: {
          show: true,
          // 线
          opacity: 1,
          fontSize: 14,
          lineHeight: 30,
          textStyle: {
            fontSize: 14,
            color: '#fff',
          },
          formatter: (item) => {
            return '{top|' + item.percent + '%}' + '\n' + '{bottom| ' + item.name + '} '
          },
          rich: {
            top: {
              verticalAlign: 'bottom',
              align: 'center',
              fontSize: 14,
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
              fontSize: 14,
              color: '#ffffff',
            }
          }
        },
        // 指示线 宽高
        labelLine: {
          show: true,
          length: 25,
          length2: 30,
        },
        startAngle: -30, //起始角度，支持范围[0, 360]。
        clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
        radius: ['0%', '60%'],
        center: ['50%', '50%'],
        data: that.optionsData,
        itemStyle: {
          opacity: 0,
        },
      })
      // 准备待返回的配置项，把准备好的 legendData、series 传入。
      let option = {
        legend: {
          show: false,
          tooltip: {
            show: true,
          },
          orient: 'vertical',
          top: 'center',
          itemGap: 8,
          itemHeight: 8,
          itemWidth: 17,
          right: '2%',
          textStyle: {
            color: '#fff',
            fontSize: 14,
          },
        },
        grid: {
          top: "0",
          bottom: "30",
          left: 15,
          right: 20,
        },
        animation: true,
        title: {
          x: 'center',
          top: '20',
          textStyle: {
            color: '#fff',
            fontSize: 22,
          },
        },
        // backgroundColor: '#0E3567',
        labelLine: {
          show: true,
          lineStyle: {
            color: '#7BC0CB',
          },
          normal: {
            show: true,
            length: 10,
            length2: 10,
          },
        },
        label: {
          show: true,
          position: 'outside',
          formatter: (item) => {
            return '{top|' + item.percent + '%}' + '\n' + '{bottom| ' + item.name + '} '
          },
          textStyle: {
            color: '#fff',
            fontSize: '14px',
          },
        },
        tooltip: {
          show: false,
          formatter: (params) => {
            if (
              params.seriesName !== "mouseoutSeries" &&
              params.seriesName !== "pie2d"
            ) {
              let bfb = (
                (option.series[params.seriesIndex].pieData.endRatio -
                  option.series[params.seriesIndex].pieData.startRatio) *
                100
              ).toFixed(2);
              return (
                `${params.seriesName}<br/>` +
                `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>` +
                `${bfb}%`
              );
            }
          },
        },
        xAxis3D: {
          min: -1,
          max: 1,
        },
        yAxis3D: {
          min: -1,
          max: 1,
        },
        zAxis3D: {
          min: -1,
          max: 1,
        },
        grid3D: {
          show: false,
          boxHeight: 0.8,
          bottom: '40%',
          // environment: "rgba(255,255,255,0)",
          viewControl: {
            distance: 260,
            alpha: 30,   // //角度(这个很重要 调节角度的)
            beta: 40,
            // autoRotate: true, // 自动旋转
            autoRotateSpeed: 36, // 转速  物体自转的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈。
            rotateSensitivity: 0, // 禁止旋转
            zoomSensitivity: 0, // 禁止缩放
          },
        },
        series: series,
      }
      // 使用刚指定的配置项和数据显示图表。
      // this.myChart.resize()
      this.myChart.setOption(option);
    },

    getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, height,) {
      // 计算
      let midRatio = (startRatio + endRatio) / 2

      let startRadian = startRatio * Math.PI * 2
      let endRadian = endRatio * Math.PI * 2
      let midRadian = midRatio * Math.PI * 2

      // 如果只有一个扇形，则不实现选中效果。
      if (startRatio === 0 && endRatio === 1) {
        isSelected = false
      }

      // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
      k = typeof k !== 'undefined' ? k : 1 / 3

      // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
      let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0
      let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0

      // 计算高亮效果的放大比例（未高亮，则比例为 1）
      let hoverRate = isHovered ? 1.05 : 1

      // 返回曲面参数方程
      return {
        u: {
          min: -Math.PI,
          max: Math.PI * 3,
          step: Math.PI / 32,
        },

        v: {
          min: 0,
          max: Math.PI * 2,
          step: Math.PI / 20,
        },

        x: function (u, v) {
          if (u < startRadian) {
            return (
              offsetX +
              Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
            )
          }
          if (u > endRadian) {
            return (
              offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
            )
          }
          return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate
        },

        y: function (u, v) {
          if (u < startRadian) {
            return (
              offsetY +
              Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
            )
          }
          if (u > endRadian) {
            return (
              offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
            )
          }
          return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate
        },

        z: function (u, v) {
          if (u < -Math.PI * 0.5) {
            return Math.sin(u)
          }
          if (u > Math.PI * 2.5) {
            return Math.sin(u)
          }
          return Math.sin(v) > 0 ? 1 * height : -1
        },
      }
    },
    // 生成模拟 3D 饼图的配置项
    getPie3D(pieData, internalDiameterRatio) {
      var that = this;
      let series = [];
      let sumValue = 0;
      let startValue = 0;
      let endValue = 0;
      let legendData = [];
      let legendBfb = [];
      let k =
        typeof internalDiameterRatio !== 'undefined'
          ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
          : 1 / 3
      pieData.sort((a, b) => {
        return b.value - a.value;
      });
      // 为每一个饼图数据，生成一个 series-surface 配置
      for (let i = 0; i < pieData.length; i++) {
        sumValue += pieData[i].value;
        let seriesItem = {
          name:
            typeof pieData[i].name === 'undefined'
              ? `series${i}`
              : pieData[i].name,
          type: 'surface',
          parametric: true,
          wireframe: {
            show: false,
          },
          pieData: pieData[i],
          pieStatus: {
            selected: false,
            hovered: false,
            k: k,
          },
          center: ["0%", "40%"],
        }

        if (typeof pieData[i].itemStyle != 'undefined') {
          let itemStyle = {}

          typeof pieData[i].itemStyle.color != 'undefined'
            ? (itemStyle.color = pieData[i].itemStyle.color)
            : null
          typeof pieData[i].itemStyle.opacity != 'undefined'
            ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
            : null

          seriesItem.itemStyle = itemStyle
        }
        series.push(seriesItem)
      }

      // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
      // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
      legendData = [];
      legendBfb = [];
      for (let i = 0; i < series.length; i++) {
        endValue = startValue + series[i].pieData.value;
        series[i].pieData.startRatio = startValue / sumValue
        series[i].pieData.endRatio = endValue / sumValue
        series[i].parametricEquation = that.getParametricEquation(
          series[i].pieData.startRatio,
          series[i].pieData.endRatio,
          false,
          false,
          k,
          series[i].pieData.value,
        )
        startValue = endValue
        let bfb = that.fomatFloat(series[i].pieData.value / sumValue, 4);
        legendData.push({
          name: series[i].name,
          value: bfb,
        });
        legendBfb.push({
          name: series[i].name,
          value: bfb,
        });
      }
      return series
    },
    fomatFloat(num, n) {
      var f = parseFloat(num);
      if (isNaN(f)) {
        return false;
      }
      f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); // n 幂
      var s = f.toString();
      var rs = s.indexOf(".");
      //判定如果是整数，增加小数点再补0
      if (rs < 0) {
        rs = s.length;
        s += ".";
      }
      while (s.length <= rs + n) {
        s += "0";
      }
      return s;
    },
    generateRandomNumber(min, max) {
      min = Math.ceil(min); // 确保min是整数
      max = Math.floor(max); // 确保max是整数
      return Math.floor(Math.random() * (max - min + 1)) + min; // 返回介于min和max之间的整数
    },
  }
}
</script>
 
<style scoped>
.echartDiv {
  width: 100%;
  height: 100%;
}
</style>