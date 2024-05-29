<template>
  <div ref="echart" class="echartDiv"></div>
</template>
 
<script>
import * as echarts from 'echarts'
import 'echarts-gl'
import { onMounted, toRefs, ref, reactive } from 'vue'
export default {
  setup() {
    let state = reactive({
      echart: ref(),
    })
    const echartInit = () => {
      var myChart = echarts.init(state.echart)
      const series = getPie3D(optionsData, 0.8, 240, 28, 26, 0.5)
      series.push({
        name: 'pie2d',
        type: 'pie',
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
            return '{top|' + item.value + '%}' + '\n' + '{bottom| ' + item.name + '} '
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
        // 指示线 宽高
        labelLine: {
          length: 5,
          length2: 10,
        },
        startAngle: -30, //起始角度，支持范围[0, 360]。
        clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
        radius: ['40%', '60%'],
        center: ['50%', '50%'],
        data: optionsData,
        itemStyle: {
          opacity: 0,
        },
      })
      // 准备待返回的配置项，把准备好的 legendData、series 传入。
      let option = {
        legend: {
          tooltip: {
            show: true,
          },
          orient: 'vertical',
          data: ['规划中', '建设中',],
          top: 'center',
          itemGap: 14,
          itemHeight: 8,
          itemWidth: 17,
          right: '2%',
          textStyle: {
            color: '#fff',
            fontSize: 10,
          },
        },
        grid: {
          top: "0",
          bottom: "30",
          left: 35,
          right: 20,
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
                option.series[params.seriesIndex].pieData.value + '人'
                }`
            }
          },
          textStyle: {
            fontSize: 14,
          },
        },
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
          formatter: '{b} \n{d}%',
          textStyle: {
            color: '#fff',
            fontSize: '14px',
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
        postEffect: {
          enable: true,
          bloom: {
            enable: true,
            bloomIntensity: 0.1
          }
        },
        grid3D: {
          show: false,
          boxHeight: 0.01,
          bottom: '40%',
          // environment: "rgba(255,255,255,0)",
          viewControl: {
            distance: 180,
            alpha: 25,   // //角度(这个很重要 调节角度的)
            beta: 60,
            // autoRotate: true, // 自动旋转
            autoRotateSpeed: 36, // 转速  物体自转的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈。
            rotateSensitivity: 0, // 禁止旋转
            zoomSensitivity: 0, // 禁止缩放
          },
        },
        series: series,
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }

    function getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, height,) {

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
    }
    // 生成模拟 3D 饼图的配置项
    function getPie3D(pieData, internalDiameterRatio) {
      let series = []
      let sumValue = 0
      let startValue = 0
      let endValue = 0
      let legendData = []
      let k =
        typeof internalDiameterRatio !== 'undefined'
          ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
          : 1 / 3

      // 为每一个饼图数据，生成一个 series-surface 配置
      for (let i = 0; i < pieData.length; i++) {
        sumValue += pieData[i].value

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
      for (let i = 0; i < series.length; i++) {
        endValue = startValue + series[i].pieData.value;
        series[i].pieData.startRatio = startValue / sumValue
        series[i].pieData.endRatio = endValue / sumValue
        series[i].parametricEquation = getParametricEquation(
          series[i].pieData.startRatio,
          series[i].pieData.endRatio,
          false,
          false,
          k,
          series[i].pieData.value *100,
        )

        startValue = endValue

        legendData.push(series[i].name)
      }
      return series
    }
    // 传入数据生成 option
    var optionsData = [
      {
        name: '规划中',
        value: 26,
        itemStyle: {
          color: '#FE7C2F',
        },
      },

      {
        name: '建设中',
        value: 32,
        itemStyle: {
          //   opacity: 0.5,
          // color: '#FEDB4B',
          // color: '#FE7C2F',
          color: '#2A71FF',
        },
      },
    ]

    function generateRandomNumber(min, max) {
      min = Math.ceil(min); // 确保min是整数
      max = Math.floor(max); // 确保max是整数
      return Math.floor(Math.random() * (max - min + 1)) + min; // 返回介于min和max之间的整数
    }
    var timer;
    function updataChart() {
      // 每次执行前清楚定时器
      timer && clearInterval(timer)
      timer = setInterval(() => {
        optionsData = [
          {
            name: '规划中',
            value: generateRandomNumber(20, 30),
            itemStyle: {
              color: '#FE7C2F',
            },
          },

          {
            name: '建设中',
            value: generateRandomNumber(30, 40),
            itemStyle: {
              color: '#2A71FF',
            },
          },
        ]
        echartInit()
      }, 5000)
    }

    //挂载
    onMounted(() => {
      echartInit();
      // updataChart();
    })

    return {
      ...toRefs(state),
      echartInit,
    }
  },
}
</script>
 
<style scoped>
.echartDiv {
  width: 100%;
  height: 100%;
}
</style>
