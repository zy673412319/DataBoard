<template>
  <div id="" style="width: 100%;height:100%;"></div>
</template>
<script>
import echarts from 'echarts'
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
  props: ['liangweiBarData'],
  watch: {
    liangweiBarData(newValue, oldValue) {
      var lwBarDateList = [];
      var lwBarJianzhuList = [];
      var lwBarZhandiList = [];
      for(var key in newValue){
        lwBarDateList.push(key);
        for(var i =0; i<newValue[key].length; i++){
          if(newValue[key][i].type == '违法建筑'){
            lwBarJianzhuList.push(newValue[key][i].count);
          }
          if(newValue[key][i].type == '违法占地'){
            lwBarZhandiList.push(newValue[key][i].count);
          }
        }
      }
      this.lwBarDateList = lwBarDateList;
      this.lwBarJianzhuList = lwBarJianzhuList;
      this.lwBarZhandiList = lwBarZhandiList;
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
        animationDuration: 3000,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            animation: false, //很重要！
          },
        },
        title: {
          show: false,
          text: "柱状图",
          textStyle: {
            color: "pink", // 标题颜色
            fontSize: 14, // 默认值：18
            fontStyle: "italic", // normal:正常风格（默认值）,italic:倾斜体
            fontWeight: "bold", // normal:正常粗细（默认值）,bold/bolder:粗体,lighter:正常粗细
            fontFamily: 'MyFont'
          },
          subtext: "柱状图副标题"
        },
        legend: {
          right: "8%",
          top: "6",
          itemWidth: 7,
          itemHeight: 7,
          textStyle: {
            color: '#9bc3d4',
            fontSize: 14,
            fontFamily: 'MyFont'
          }
        },
        grid: {
          top: "20",
          bottom: 110,
          left: 30,
          right: 20,
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
            interval: 0,// 设置这个强制显示所有标签文字
            //   rotate: '-45',// 旋转度数
            formatter:function(value){  
                return value.split("").join("\n");  
            },
          },
          // data: ['2023-11', '2023-12', '2024-1', '2024-2', '2024-3', '2024-4',]
          data: that.lwBarDateList,
        },
        yAxis: {
          // 3个街道分别为：凤凰城街道、凤山街道、草河街道；18个乡镇分别为：宝山镇、白旗镇、沙里寨镇、红旗镇、蓝旗镇、边门镇、
          // 大堡蒙古族乡、东汤镇、石城镇、大兴镇、爱阳镇、赛马镇、弟兄山镇、鸡冠山镇、刘家河镇、通远堡镇、四门子镇、青城子镇。 
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
            fontFamily: 'MyFont'
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
              // color: '#00EDFE',
            },
            color: {
              type: 'linear',
              // x=0,y=1,柱子的颜色在垂直方向渐变
              x: 0,
              y: 1,
              colorStops: [
                {
                  offset: 0, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                  color: 'rgba(0,237,254,.3)' // 起始位置设置此颜色，终止位置设置下面的颜色
                },
                {
                  offset: 0.5, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                  color: 'rgba(0,237,254,.6)' // 起始位置设置此颜色，终止位置设置下面的颜色
                },
                {
                  offset: 1,
                  color: '#00EDFE'
                }
              ],
              // global: false // 缺省为 false
            },
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
              // color: '#2A71FF',
            },
            label: {
              show: true,
              position: 'inside'
            },
            color: {
              type: 'linear',
              // x=0,y=1,柱子的颜色在垂直方向渐变
              x: 0,
              y: 1,
              colorStops: [
                {
                  offset: 0, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                  color: 'rgba(11,42,84,.3)' // 起始位置设置此颜色，终止位置设置下面的颜色
                },
                {
                  offset: 0.5, //offset表示位置【0,1】范围，0表示起始位置，1表示结束位置
                  color: 'rgba(0, 108, 237,.6)' // 起始位置设置此颜色，终止位置设置下面的颜色
                },
                {
                  offset: 1,
                  color: '#2A71FF'
                }
              ],
              // global: false // 缺省为 false
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      this.myChart.clear();
      // clear和dispose是echarts提供的用于解决内存溢出的方法。
      // echarts.clear()是清空当前实例，会移除实例中所有的组件和图表。
      // echarts.dispose()是销毁实例，销毁后实例无法再被使用。

      // this.myChart.resize()
      // this.myChart.setOption(option);
      this.myChart.setOption(option, { replaceMerge: ["series"] });
    }
  },

}
</script>
<style scoped>
</style>
