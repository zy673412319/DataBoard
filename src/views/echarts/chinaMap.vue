<template>
  <div class="chinaMap"></div>
</template>

<script>
import "@/lib/china.js"
import echarts from 'echarts'
import 'echarts-extension-amap'
// import geoJson from './map.js';

export default {
  name: '',
  data() {
    return {
      geoJson: require('./map.json'),
      myChart: null
    }
  },
  methods: {
    setMap() {
      let option = {
        title: [
        ],
        geo3D: {
          map: 'fengcheng',
          regionHeight: 6, //地图厚度
          emphasis: {
            label: {
              show: false
            },
          },
          roam: true,
          // itemStyle: {
          //   color: '#2588ce',  // 地图颜色
          //   color: {
          //     type: "linear-gradient",
          //     x: 0,
          //     y: 400,
          //     x2: 0,
          //     y2: 0,
          //     colorStops: [
          //       {
          //         offset: 0,
          //         color: "rgba(37,108,190,0.3)", // 0% 处的颜色
          //         // color: "#3674CC", // 0% 处的颜色
          //       },
          //       {
          //         offset: 1,
          //         color: "rgba(15,169,195,0.3)", // 50% 处的颜色
          //         // color: "#3674CC", // 50% 处的颜色
          //       },
          //     ],
          //     global: true, // 缺省为 false
          //   },
          //   borderColor: "#4ecee6",
          //   borderWidth: 1,
          //   emphasis: {
          //     areaColor: {
          //       //tooltip时的背景色设置
          //       type: "linear-gradient",
          //       x: 0,
          //       y: 300,
          //       x2: 0,
          //       y2: 0,
          //       colorStops: [
          //         {
          //           offset: 0,
          //           color: "#3671C9", // 0% 处的颜色
          //         },
          //         {
          //           offset: 1,
          //           color: "#3671C9", // 50% 处的颜色
          //         },
          //       ],
          //       global: true, // 缺省为 false
          //     },
          //   },
          // },
          // emphasis: {
          //   itemStyle: {
          //     areaColor: "#3671C9",
          //   },
          //   label: {
          //     show: 0,
          //     color: "#fff",
          //   },
          // },
          // select: {
          //   itemStyle: {
          //     areaColor: "transparent",
          //   },
          //   label: {
          //     show: false,
          //   },
          // },
          // zlevel: 3,
          // shading: 'lambert',
          // label: {
          //   show: true,
          //   alignText: 'center',
          //   color: '#fff', //文字颜色
          //   fontSize: 18, //文字大小
          //   position: [100, 100],
          //   padding: [5, 10],
          //   alignText: 'center',
          //   lineHeight: 24,
          //   backgroundColor: 'rgba(0,0,0,0.35)', //透明度0清空文字背景
          //   borderWidth: 1.5, //分界线宽度
          //   borderRadius: 5,
          //   borderColor: '#F2A451', //分界线颜色
          // },
          // // 设置单独区域样式
          // regions: [],
          // // hover高亮颜色
          // emphasis: {
          //   label: {
          //     formatter: function (params) {
          //       return params.name
          //     }
          //   },
          //   itemStyle: {
          //     color: '#1341BE',
          //     opacity: 0.9, // 透明度
          //     borderWidth: 1, //分界线宽度
          //     borderColor: '#00EBFF', //分界线颜色
          //   },
          // },
          shading: 'lambert',
          // 真实感材质相关配置 shading: 'realistic'时有效
          // realisticMaterial: {
          //   detailTexture: 'https://cdn.polyhaven.com/asset_img/primary/painted_concrete.png?height=780', // 纹理贴图
          //   textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
          //   roughness: 1, // 材质粗糙度，0完全光滑，1完全粗糙
          //   metalness: 0, // 0材质是非金属 ，1金属
          //   roughnessAdjust: 0
          // },
          // // shading 为color 时无效
          // light: {
          //   //光照阴影
          //   main: {
          //     color: "#fff", //光照颜色
          //     intensity: 5, //光照强度
          //     shadowQuality: 'high', //阴影亮度
          //     shadow: true, //是否显示阴影
          //     shadowQuality: "medium", //阴影质量 ultra //阴影亮度
          //     alpha: 55,
          //     beta: 10
          //   },
          //   ambient: {
          //     intensity: 0.7
          //   }
          // },
          // // viewControl: viewControl,
          viewControl: {
            distance: 150,
            beta: 15, //旋转视角
            alpha: 40, //视角
            panMouseButton: 'left',
            rotateMouseButton: 'right',
            center: [5, -10, 0],
          },
        },
        series: [
          // {
          //   type: 'line',
          //   smooth: true,
          //   lineStyle: {
          //     color: 'rgba(161,23,128,1)',
          //     width: 1
          //   },
          //   areaStyle: {
          //     color: {
          //       type: 'linear',
          //       x: 0,
          //       y: 0,
          //       x2: 0,
          //       y2: 1,
          //       colorStops: [{
          //         offset: 0, color: 'rgba(161,23,128,1)' // 0% 处的颜色
          //       }, {
          //         offset: 1, color: 'rgba(161,23,128,0)' // 100% 处的颜色
          //       }],
          //       globalCoord: false // 缺省为 false
          //     }
          //   },
          //   //4,5,3,9,2,4,8,3,4,5
          //   data: [
          //     {
          //       value: 4, symbol: 'circle',
          //       symbolSize: 5,
          //       itemStyle: {
          //         color: '#293880',
          //         borderColor: 'rgba(161,23,128,1)',
          //         borderWidth: 1,
          //       },
          //     },
          //     { value: 5, symbol: 'none' },
          //     { value: 3, symbol: 'none' },
          //     { value: 9, symbol: 'none' },
          //     { value: 2, symbol: 'none' },
          //     { value: 4, symbol: 'none' },
          //     { value: 8, symbol: 'none' },
          //     { value: 3, symbol: 'none' },
          //     { value: 4, symbol: 'none' },
          //     { value: 4, symbol: 'none' },

          //   ]
          // },
          // {
          //   type: 'line',
          //   symbol: "none",
          //   smooth: true,
          //   xAxisIndex: 1,
          //   yAxisIndex: 1,
          //   lineStyle: {
          //     color: 'rgba(196,103,20,1)',
          //     width: 1
          //   },
          //   areaStyle: {
          //     color: {
          //       type: 'linear',
          //       x: 0,
          //       y: 0,
          //       x2: 0,
          //       y2: 1,
          //       colorStops: [{
          //         offset: 0, color: 'rgba(196,103,20,1)' // 0% 处的颜色
          //       }, {
          //         offset: 1, color: 'rgba(196,103,20,0)' // 100% 处的颜色
          //       }],
          //       globalCoord: false // 缺省为 false
          //     }
          //   },
          //   data: [
          //     {
          //       value: 4, symbol: 'circle',
          //       symbolSize: 5,
          //       itemStyle: {
          //         color: '#293880',
          //         borderColor: 'rgba(196,103,20,1)',
          //         borderWidth: 1,
          //       },
          //     },
          //     { value: 5, symbol: 'none' },
          //     { value: 3, symbol: 'none' },
          //     { value: 9, symbol: 'none' },
          //     { value: 2, symbol: 'none' },
          //     { value: 4, symbol: 'none' },
          //     { value: 8, symbol: 'none' },
          //     { value: 3, symbol: 'none' },
          //     { value: 4, symbol: 'none' },
          //     { value: 4, symbol: 'none' },

          //   ]
          // },
          // {
          //   type: 'line',
          //   xAxisIndex: 2,
          //   yAxisIndex: 2,
          //   smooth: true,
          //   lineStyle: {
          //     color: 'rgba(181,174,28,1)',
          //     width: 1
          //   },
          //   areaStyle: {
          //     color: {
          //       type: 'linear',
          //       x: 0,
          //       y: 0,
          //       x2: 0,
          //       y2: 1,
          //       colorStops: [{
          //         offset: 0, color: 'rgba(181,174,28,1)' // 0% 处的颜色
          //       }, {
          //         offset: 1, color: 'rgba(181,174,28,0)' // 100% 处的颜色
          //       }],
          //       globalCoord: false // 缺省为 false
          //     }
          //   },
          //   //4,5,3,9,2,4,8,3,4,5
          //   data: [
          //     {
          //       value: 4, symbol: 'circle',
          //       symbolSize: 5,
          //       itemStyle: {
          //         color: '#293880',
          //         borderColor: 'rgba(181,174,28,1)',
          //         borderWidth: 1,
          //       },
          //     },
          //     { value: 5, symbol: 'none' },
          //     { value: 3, symbol: 'none' },
          //     { value: 9, symbol: 'none' },
          //     { value: 2, symbol: 'none' },
          //     { value: 4, symbol: 'none' },
          //     { value: 8, symbol: 'none' },
          //     { value: 3, symbol: 'none' },
          //     { value: 4, symbol: 'none' },
          //     { value: 4, symbol: 'none' },

          //   ]
          // },
          // {
          //   type: 'line',
          //   symbol: "none",
          //   smooth: true,
          //   xAxisIndex: 3,
          //   yAxisIndex: 3,
          //   lineStyle: {
          //     color: 'rgba(165,15,71,1)',
          //     width: 1
          //   },
          //   areaStyle: {
          //     color: {
          //       type: 'linear',
          //       x: 0,
          //       y: 0,
          //       x2: 0,
          //       y2: 1,
          //       colorStops: [{
          //         offset: 0, color: 'rgba(165,15,71,1)' // 0% 处的颜色
          //       }, {
          //         offset: 1, color: 'rgba(165,15,71,0)' // 100% 处的颜色
          //       }],
          //       globalCoord: false // 缺省为 false
          //     }
          //   },
          //   data: [
          //     {
          //       value: 4, symbol: 'circle',
          //       symbolSize: 5,
          //       itemStyle: {
          //         color: '#293880',
          //         borderColor: 'rgba(165,15,71,1)',
          //         borderWidth: 1,
          //       },
          //     },
          //     { value: 5, symbol: 'none' },
          //     { value: 3, symbol: 'none' },
          //     { value: 9, symbol: 'none' },
          //     { value: 2, symbol: 'none' },
          //     { value: 4, symbol: 'none' },
          //     { value: 8, symbol: 'none' },
          //     { value: 3, symbol: 'none' },
          //     { value: 4, symbol: 'none' },
          //     { value: 4, symbol: 'none' },

          //   ]
          // },
          // {
          //   type: 'line',
          //   xAxisIndex: 4,
          //   yAxisIndex: 4,
          //   smooth: true,
          //   lineStyle: {
          //     color: 'rgba(16,182,165,1)',
          //     width: 1
          //   },
          //   areaStyle: {
          //     color: {
          //       type: 'linear',
          //       x: 0,
          //       y: 0,
          //       x2: 0,
          //       y2: 1,
          //       colorStops: [{
          //         offset: 0, color: 'rgba(16,182,165,1)' // 0% 处的颜色
          //       }, {
          //         offset: 1, color: 'rgba(16,182,165,0)' // 100% 处的颜色
          //       }],
          //       globalCoord: false // 缺省为 false
          //     }
          //   },
          //   //4,5,3,9,2,4,8,3,4,5
          //   data: [
          //     {
          //       value: 4, symbol: 'circle',
          //       symbolSize: 5,
          //       itemStyle: {
          //         color: '#293880',
          //         borderColor: 'rgba(16,182,165,1)',
          //         borderWidth: 1,
          //       },
          //     },
          //     { value: 5, symbol: 'none' },
          //     { value: 3, symbol: 'none' },
          //     { value: 9, symbol: 'none' },
          //     { value: 2, symbol: 'none' },
          //     { value: 4, symbol: 'none' },
          //     { value: 8, symbol: 'none' },
          //     { value: 3, symbol: 'none' },
          //     { value: 4, symbol: 'none' },
          //     { value: 4, symbol: 'none' },

          //   ]
          // },
          // {
          //   type: 'line',
          //   symbol: "none",
          //   smooth: true,
          //   xAxisIndex: 5,
          //   yAxisIndex: 5,
          //   lineStyle: {
          //     color: 'rgba(9,83,176,1)',
          //     width: 1
          //   },
          //   areaStyle: {
          //     color: {
          //       type: 'linear',
          //       x: 0,
          //       y: 0,
          //       x2: 0,
          //       y2: 1,
          //       colorStops: [{
          //         offset: 0, color: 'rgba(9,83,176,1)' // 0% 处的颜色
          //       }, {
          //         offset: 1, color: 'rgba(9,83,176,0)' // 100% 处的颜色
          //       }],
          //       globalCoord: false // 缺省为 false
          //     }
          //   },
          //   data: [
          //     {
          //       value: 4, symbol: 'circle',
          //       symbolSize: 5,
          //       itemStyle: {
          //         color: '#293880',
          //         borderColor: 'rgba(9,83,176,1)',
          //         borderWidth: 1,
          //       },
          //     },
          //     { value: 5, symbol: 'none' },
          //     { value: 3, symbol: 'none' },
          //     { value: 9, symbol: 'none' },
          //     { value: 2, symbol: 'none' },
          //     { value: 4, symbol: 'none' },
          //     { value: 8, symbol: 'none' },
          //     { value: 3, symbol: 'none' },
          //     { value: 4, symbol: 'none' },
          //     { value: 4, symbol: 'none' },

          //   ]
          // }
        ]
      };
      if (!this.myChart) this.myChart = this.$echarts.init(this.$el, null, {devicePixelRatio: 3});
      // 初始化echarts图表

      var that = this;
      this.$echarts.registerMap('fengcheng', that.geoJson);
      this.myChart.clear();
      // this.myChart.resize()
      this.myChart.setOption(option);
      // setTimeout(()=>{
      //   var map = this.myChart.getModel().getComponent("amap").getAMap()
      //   // 设置显示卫星图
      //   var Satellite = new window.AMap.TileLayer.Satellite({
      //     zIndex: 10,
      //   })
      //   map.add(Satellite)
      // }, 2000)

    },
  },
  mounted() {
    this.setMap();
  }
}
</script>

<style  scoped>
.chinaMap {
  height: 100%;
}
</style>
