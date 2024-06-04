<!--
 * @Description:西安市地图
 -->
<template>
  <div :id="this.id" ref="map_charts" style="width: 100%;height: 100%"></div>
</template>

<script>
export default {
  name: "shanxiProvince",
  props: {
    personalStatistics: {
      type: Array,
      default: () => {
        return []
      }
    },
    typeOptions: {
      type: Array,
      default: () => {
        return []
      }
    },
    id: {
      type: String,
      value: ''
    }
  },
  watch: {
    personalStatistics: {
      handler(n, o) {
        this.drawMapLine()
      },
      deep: true// 深度监听父组件传过来对象变化
    }
  },
  data() {
    return {
      myChart: null,
      // mapData: require('./map.json'),
      maxNum: 1,
    }
  },
  mounted() {
    this.drawMapLine()
  },
  methods: {
    drawMapLine() {
      if (this.personalStatistics.length > 0) {
        this.maxNum = this.personalStatistics[0].value
      } else {
        this.maxNum = 1
      }
      let echarts = require('echarts/lib/echarts')
      const name = '西安市'
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el, null, {devicePixelRatio: 3});
      this.myChart.registerMap(name, this.mapData)
      let mapOption = {
        tooltip: {
          show: true,
          transitionDuration:0,
          formatter: function (params) {
            if (params.data) {
              return params.name + '<br />' +
                '总人数：&nbsp;&nbsp;&nbsp;&nbsp;' + params.data.value + '人' + '<br />'
      
            }
          }
        },
        visualMap: {
          show: true,
          right: 0,
          bottom: 0,
          min: 0,
          max: this.maxNum,
          calculable: true,
          inRange: {
            color: this.typeOptions
          }
        },
        series: [
          {
            type: "map",
            map: "西安市",
            roam: true, //是否缩放
            zoom: 1,
            left: "center",
            top: "middle",
            bottom: "auto",
            right: "auto",
            label: {
              show: false,
              color: "#ffffff",
              fontSize: 12,
              fontFamily: 'MyFont',
              fontWeight: "normal",
              fontStyle: "normal"
            },
            itemStyle: {
              areaColor: "rgba(21,53,104,0.23)", //地图没数据时候颜色
              borderWidth: 2,
              borderColor: "#fff", //地图边框颜色
              borderType: "solid",
              opacity: 1
            },
            emphasis: {
              label: {
                show: false,
                color: "#ffffff",
                fontSize: 12,
                fontFamily: 'MyFont',
                fontWeight: "normal",
                fontStyle: "normal"
              },
              itemStyle: {
                areaColor: "#fff000",
                borderWidth: 1.6,
                borderColor: "#F5F5F5",
                borderType: "solid",
                opacity: 1
              }
            },
            data: this.personalStatistics
          }
        ]
      }
      var Charts = echarts.init(document.getElementById(this.id))
      Charts.setOption(mapOption, true);
      let that = this
      // window.addEventListener('resize', function () {//执行
      //   Charts.resize();
      // })
    },

  }
}
</script>

<style lang="scss">

</style>