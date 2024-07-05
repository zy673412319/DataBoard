<template>
  <div id="" style="width: 100%;height:100%;"></div>
</template>
<script>
export default {

  data() {
    return {
      myChart: null,
      charts: '',
      lwBarDateList: [],
      lwBarJianzhuList: [],
      lwBarZhandiList: [],
    }
  },
  props: ['rfwEchartData'],
  watch: {
    rfwEchartData(newValue, oldValue) {
      this.lwBarDateList = newValue.DateList;
      this.lwBarJianzhuList = newValue.oneDataList;
      this.lwBarZhandiList = newValue.TwoDataList;
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
      let option = {
        animation: false, // 关闭动画
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        title: {
          show: false,
          text: "柱状图",
          textStyle: {
            color: "pink", // 标题颜色
            fontSize: 14, // 默认值：18
            fontFamily: 'MyFont',
            fontStyle: "italic", // normal:正常风格（默认值）,italic:倾斜体
            fontWeight: "bold" // normal:正常粗细（默认值）,bold/bolder:粗体,lighter:正常粗细
          },
          subtext: "柱状图副标题"
        },
        legend: {
          right: "6%",
          top: "6",
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            color: '#ffffff',
            fontSize: 14,
            fontFamily: 'MyFont',
          }
        },
        grid: {
          top: "20",
          bottom: '16',
          containLabel: true,
          left: 30,
          right: 40,
        },
        xAxis: {
          type: 'category',
          axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [6, 6],
            lineStyle: {
              color: '#34445d'   // x轴颜色
            }
          },
          boundaryGap: false,
          splitLine: {     //网格线
            show: false
          },
          axisLabel: {
            color: '#fff',   // x轴文本颜色
            showMaxLabel: false,
            fontSize: 14,
            fontFamily: 'MyFont',
            interval: 1,// 设置这个强制显示所有标签文字  中间间隔几个 显示X轴坐标内容
            // rotate: '-45',// 旋转度数
            // formatter:function(value){  
            //     return value.split("").join("\n");  
            // },
          },
          data: that.lwBarDateList,
        },
        yAxis: {
          type: 'value',
          interval: 100,
          axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [6, 6],
            lineStyle: {
              color: '#34445d'    // y轴线颜色
            }
          },
          axisLabel: {
            show: false,
            color: '#00EDFE',    // y轴文本颜色
            showMaxLabel: false,
            fontSize: 14,
            fontFamily: 'MyFont',
          },
          splitLine: {
            // 'solid'，实线。 'dotted'，点型虚线。 'dashed'，线性虚线。
            lineStyle: {
              type: "dashed",
              color: "#34445d", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisTick:{
            show: true //不显示坐标轴刻度线
          },
          name: '',
          nameGap: -10,
          nameTextStyle: {
            color: '#61B9C8',
            fontSize: 14,
            fontFamily: 'MyFont',
            align: 'right',
            padding: [0, 6, 0, 0]
          }
        },
        series: [
          {
            name: '违法建筑',
            type: "bar", // 设置图表类型为柱状
            stack: '总量',
            data: that.lwBarJianzhuList,
            itemStyle: {
              borderRadius: [4,4,0,0],
              // color: '#00EDFE',
            },
            color: 'rgba(110, 159, 223, 1)',
            label: {
              show: true,
              position: 'inside',
              color: '#fff',
              fontWeight: '500'
            },
          },
          {
            name: '违法占地',
            type: "bar", // 设置图表类型为柱状
            stack: '总量',
            data: that.lwBarZhandiList,
            itemStyle: {
              borderRadius: [4,4,0,0],
              // color: '#2A71FF',
            },
            label: {
              show: true,
              position: 'inside'
            },
            barMaxWidth: 28,
            color: {
              type: 'linear',
              // x=0,y=1,柱子的颜色在垂直方向渐变
              x: 0,
              y: 1,
              colorStops: [
                {
                  offset: 0, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                  color: 'rgba(150, 248, 255, 0)' // 起始位置设置此颜色，终止位置设置下面的颜色
                },
                {
                  offset: 0.5, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                  color: 'rgba(110, 184, 223, 0.6)' // 起始位置设置此颜色，终止位置设置下面的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(110, 184, 223, 1)'
                }
              ],
            }
          }
        ]
      };

      this.myChart.clear();
      this.myChart.setOption(option, { replaceMerge: ["series"] });
    }
  },

}
</script>
<style scoped>
</style>
