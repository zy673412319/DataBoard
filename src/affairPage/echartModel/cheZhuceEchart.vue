<template>
  <div class="threeBarChart"></div>
</template>

<script>
export default {
  name: '',
  props: ['cheZhuceData'],
  data() {
    return {
      myChart: null,
      dateList: [],
      data1: [],
      timer: ''
    }
  },
  watch: {
    cheZhuceData(newValue, oldValue) {
      this.dateList = newValue.DateList;
      this.data1 = newValue.oneDataList;
      this.setChart();
    },
  },
  mounted() {
    this.setChart()
  },
  methods: {
    setChart() {
      var that = this;
      let option = {
        grid: {
          left: '10',
          right: '10',
          bottom: '5%',
          top: '26',
          containLabel: true
        },
        xAxis: {
          type: 'category', // category(坐标轴类型)
          data: that.dateList,
          axisTick: { // 坐标轴刻度相关配置
            show: false // 是否显示坐标轴刻度
          },
          axisLine: { // 坐标轴轴线相关配置
            lineStyle: { // 坐标轴轴线样式
              color: '#34445d'   // x轴颜色
            }
          },
          axisLabel: {
            color: '#fff',   // x轴文本颜色
            showMaxLabel: false,
            fontSize: 14,
            fontFamily: 'MyFont',
            interval: 2,// 设置这个强制显示所有标签文字  中间间隔几个 显示X轴坐标内容
            // rotate: '25',// 旋转度数
            // formatter:function(value){  
            //     return value.split("").join("\n");  
            // },
          },
        },
        yAxis: {
          type: 'value', // value(数值轴,适用于连续数据)
          axisTick: { // 坐标轴刻度相关配置
            show: false  // 是否显示坐标轴刻度
          },
          axisLine: { // 坐标轴轴线相关配置
            show: false // 是否显示坐标轴轴线
          },
          axisLabel: { // 坐标轴刻度标签相关配置
            color: '#ffffff',
            fontSize: 14,
            fontFamily: 'MyFont',
          },
          splitLine: { // 坐标轴在 grid 区域中的分隔线
            lineStyle: { // 分割线配置
              color: 'rgba(255,255,255,0.15)' // 分割线颜色
            }
          }
        },
        series: [
          // 底部的椭圆形(象形柱图)
          {
            type: "pictorialBar",
            label: { // 图形上的文本标签,可用于说明图像的一些数据信息,比如值,名称等
              show: true, //是否显示标签
              position: 'top', // 标签的位置(可以是绝对的像素值或者百分比['50%','50%',也可以是top,left等])
              color: '#fff',
              fontSize: 14,
              fontFamily: 'MyFont',
            },
						symbol: "diamond",//底部组件形状，不写默认为椭圆
						symbolOffset: [0, "50%"],//与柱子的偏移角度
						symbolSize: [20, 6],//底面[宽，高]
            z: 12, // 象形柱状图组件的所有图形的 z 值.控制图形的前后顺序.z 值小的图形会被 z 值大的图形覆盖.
            itemStyle: { // 图形样式
              // 4个参数用于配置渐变色的起止位置,这4个参数依次对应右 下 左 上
              color: {
                type: 'linear',
                // x=0,y=1,柱子的颜色在垂直方向渐变
                x: 0,
                y: 1,
                colorStops: [
                  {
                    offset: 0, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                    color: '#05ADE7' // 起始位置设置此颜色，终止位置设置下面的颜色
                  },
                  {
                    offset: 1,
                    color: '#0062AB'
                  }
                ],
              }
            },
            data: that.data1
          },
          // 中间的长方形柱状图(柱状图):bar
          {
            type: 'bar', // 柱状图
            barWidth: 20, // 柱条的宽度,不设时自适应
            barGap: '0%', // 柱子与柱子之间的距离
            itemStyle: { // 图形样式
							borderRadius: [0, 0, 0, 0],//柱子四周圆角
              color: {
                type: 'linear',
                x: 0,
                y: 1,
                colorStops: [
                  {
                    offset: 0, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                    color: '#05ADE7' // 起始位置设置此颜色，终止位置设置下面的颜色
                  },
                  {
                    offset: 1,
                    color: '#0062AB'
                  }
                ],
              }
            },
            data: that.data1
          },
          // 顶部的椭圆形(象形柱图)
          {
            type: "pictorialBar",
            // symbol: 'path://M 0,0 l 90,0 l -60,60 l -90,0 z',
						symbol: "diamond",
						symbolSize: [20, 6],//底面[宽，高]
            symbolOffset: ['0', '-2'], // 控制顶部放行 左右和上下
            z: 12,
            symbolPosition: "end",
            itemStyle: {
              color: '#4AC2FF'
            },
            data: that.data1
          }
        ]
			};
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el, null, { devicePixelRatio: 3 });

      // this.myChart.clear();
      // this.myChart.resize()
      this.myChart.setOption(option);
    },
  },
}
</script>

<style  scoped>
.threeBarChart {
  height: 100%;
  width: 100%;
}
</style>