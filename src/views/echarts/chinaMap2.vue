<template>
  <div style="width:100%;height:100%;position: relative;">
    <div class="chinaMap" ref="cityMap"></div>
    <div class="tooplie tooplie01">
      <p class="tooplietitle">青城子镇</p>
      <P>近1月来未来发生火灾</P>
      <p>所在地区存在3个违规建筑</p>
    </div>
    <div class="tooplie tooplie02">
      <p class="tooplietitle">刘家河镇</p>
      <P>近1月来发生<span class="orgColor">2次火灾</span></P>
      <p>所在地区存在3个违规建筑</p>
    </div>
    <div class="tooplie tooplie03">
      <p class="tooplietitle">沙里寨镇</p>
      <P>近1月来发生<span class="orgColor">2次火灾</span></P>
      <p>所在地区存在3个违规建筑</p>
      <p>近一个月最高降雨达到120km</p>
    </div>
    <div class="tooplie tooplie04">
      <p class="tooplietitle">鸡冠山镇</p>
      <P>近1月来未来发生火灾</P>
      <p>所在地区存在3个违规建筑</p>
      <p>近一个月最高降雨达到120km</p>
    </div>
    <div class="tooplie tooplie05">
      <p class="tooplietitle">赛马镇</p>
      <P>近1月来未来发生火灾</P>
      <p>所在地区存在3个违规建筑</p>
      <p>近一个月最高降雨达到120km</p>
    </div>
    <div class="tooplie tooplie06">
      <p class="tooplietitle">大兴镇</p>
      <P>近1月来未来发生火灾</P>
      <p>所在地区存在3个违规建筑</p>
      <p>近一个月最高降雨达到120km</p>
    </div>
    <div class="tooplie tooplie07">
      <p class="tooplietitle">东汤镇</p>
      <P>近1月来未来发生火灾</P>
      <p>所在地区存在3个违规建筑</p>
      <p>近一个月最高降雨达到120km</p>
    </div>
    <div class="tooplie tooplie08">
      <p class="tooplietitle">石城镇</p>
      <P>近1月来未来发生火灾</P>
      <p>所在地区存在3个违规建筑</p>
      <p>近一个月最高降雨达到120km</p>
    </div>
  </div>
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
    // 地图
    getCityMap() {
      this.cityChart = this.$echarts.init(this.$refs.cityMap, null, {devicePixelRatio: 3});
      this.$echarts.registerMap("zigong", this.geoJson);

      let option = {
        tooltip: {},
        textStyle: {
          color: '#fff', // 高亮时标签颜色变为 白色
          fontSize: 16, // 高亮时标签字体 变大
          fontFamily: 'MyFont',
        },
        geo3D: {
          map: "zigong", //注册地图的名字
          regionHeight: 6, //修改整个地图的三维高度
          roam: false, //开启鼠标缩放和平移漫游。默认不开启
          // 禁用缩放
          zoom: false,
          // 禁用旋转
          rotateEnable: false,
          //鼠标放入高亮时地图板块的样式
          emphasis: {
            color: 'transparent',
            label: {
              show: false //是否显示
            }
          },
          zlevel: 3,
          itemStyle: {
            // color: "#4189f2", // 背景颜色
            color: 'transparent',
            opacity: 1, //透明度
            borderWidth: 4,
            // borderColor: "#fff",
            borderColor: 'transparent',
            emphasis: {
              areaColor: 'transparent', // 鼠标悬浮时区域颜色
              color: 'transparent' // 鼠标悬浮时区域颜色
            }
          },
          //地图单个板块标签样式
          label: {
            show: false,
            textStyle: { // 字体样式
              color: '#ffffff',
              opacity: 1,
            },
          },
          //光照阴影
          // shading: "lambert",
          realisticMaterial: {
            detailTexture: 'https://cdn.polyhaven.com/asset_img/primary/painted_concrete.png?height=780', // 纹理贴图
            textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
            roughness: 1, // 材质粗糙度，0完全光滑，1完全粗糙
            metalness: 0, // 0材质是非金属 ，1金属
            roughnessAdjust: 0
          },
          light: {
            main: {
              color: "#fff", //光照颜色
              intensity: 1, //光照强度
              shadow: true, //是否显示阴影
              alpha: 60,
              beta: 10,
            },
          },
          //鼠标控制地图旋转
          viewControl: {
            projection: "perspective", // 投影方式
            autoRotate: false, // 是否开启地图自动旋转
            autoRotateDirection: "cw", // 地图自动旋转的方向
            autoRotateSpeed: 5, // 地图自动旋转的速度
            autoRotateAfterStill: 3, // 鼠标离开后多少秒自动开启旋转
            damping: 0, // 鼠标进行旋转，缩放等操作时延迟时间
            rotateSensitivity: 0, // 旋转操作的灵敏度
            zoomSensitivity: 0, // 缩放操作的灵敏度  禁止
            panSensitivity: 0, // 平移操作的灵敏度
            panMouseButton: "left", // 平移操作使用的鼠标按键
            rotateMouseButton: "right", // 旋转操作使用的鼠标按键
            distance:140, // 默认视角距离主体的距离
            minDistance: 40, // 视角通过鼠标控制能拉近到主体的最小距离
            maxDistance: 145, // 视角通过鼠标控制能拉远到主体的最大距离
            alpha: 74, // 视角绕 x 轴，即上下旋转的角度
            beta: 28, // 视角绕 y 轴，即左右旋转的角度
            minAlpha: -700, // 上下旋转的最小 alpha 值
            maxAlpha: 720, // 上下旋转的最大 alpha 值
            minBeta: -720, // 左右旋转的最小 beta 值
            maxBeta: 720, // 左右旋转的最大 beta 值
            center: [-1, -20, 0], // 视角中心点
            // animation: true, // 是否开启动画
            animationDurationUpdate: 1000, // 过渡动画的时长
            animationEasingUpdate: "cubicInOut", // 过渡动画的缓动效果
          },
          silent: false,
        },
        // 3d柱状图实现
        // visualMap: {
        //   // max: 20,
        //   inRange: {
        //     color: ['#97ccf6', '#61b6f9','#3271b0', '#2f519b', '#245ce9' ]
        //   }
        // },
        series: [
          // {
          //   type: 'scatter3D',
          //   coordinateSystem: 'geo3D',
          //   symbol: require('../../assets/images/huo.png'),
          //   data: [
          //     {name: '凤凰城街道', value: [124.07432, 40.46582, 100], symbolSize: 14},
          //     {name: '石城镇', value: [124.320498, 40.646548, 92], symbolSize: 10},
          //     {name: '爱阳镇', value: [124.456199, 40.90916, 24], symbolSize: 5},
          //     {name: '弟兄山镇', value: [124.090107, 40.804709, 39], symbolSize: 7},
          //     {name: '鸡冠山镇', value: [123.9325, 40.530225, 56], symbolSize: 9},
          //     {name: '刘家河镇', value: [124.054142, 40.624711, 120], symbolSize: 15},
          //     {name: '四门子镇', value: [123.81998, 40.741332, 45], symbolSize: 8},
          //     {name: '大兴镇', value: [124.267571,40.741548, 178], symbolSize: 18},
          //     {name: '沙里寨镇', value: [123.672949,40.17495, 28], symbolSize: 6},
          //   ],
          //   symbolSize: 10,
          //   rippleEffect: {
          //     period: 3,
          //     scale: 10, // 波纹的最大缩放比例
          //     brushType: "fill", // 波纹的绘制方式 stroke
          //   },
          //   // hoverAnimation: true,
          //   label: {
          //     //图形上的文本标签
          //     show: true,
          //     formatter: "{b}",
          //     position: "right",
          //     fontWeight: 500,
          //     fontSize: 10,
          //   },
          //   //默认样式
          //   itemStyle: {
          //     shadowBlur: 10,
          //     shadowColor: "#333",
          //     color: function(params) {
          //       return {
          //         type: 'linear',
          //         // x=0,y=1,柱子的颜色在垂直方向渐变
          //         x: 0,
          //         y: 1,
          //         colorStops: [
          //           {
          //           offset: 0,
          //           color: "3ff0000",
          //         },
          //         {
          //           offset: 1,
          //           color: '#00ff00'
          //         },
          //         ],
          //       }
          //     }
          //   },
          //   animationDelay: function(idx) {
          //     return idx * 5;
          //   },
          //   label: {
          //     formatter: '{b}',
          //     position: 'right',
          //     color: '#fff',
          //     show: false
          //   },
          // },
          // {
          //   name: 'bar3D',
          //   type: 'bar3D',
          //   shading: 'color',
          //   // 设置3D柱状图的样式
          //   style: {
          //     opacity: 0.8
          //   },
          //   coordinateSystem: 'geo3D',
          //   barSize: 1, //柱子粗细
          //   // shading: 'lambert',
          //   opacity: .7, // 柱子透明度
          //   bevelSize: 0.1,
          //   // 柱子上标签样式
          //   label: {
          //     show: true,
          //     distance: 0, //文字离柱子的距离
          //     formatter(param) {
          //       let num = param.data.value[2]
          //       return param.name + num;
          //     },
          //     // 文字样式
          //     textStyle: {
          //       color: 'red',
          //       fontSize: 16,
          //     }
          //   },
          //   emphasis: {//柱子高亮状态的标签和样式配置。
          //     label: {
          //       show: false,
          //       textStyle: {
          //         fontSize: 20,
          //       }
          //     }
          //   },
          //   // 柱子样式
          //   itemStyle: {
          //     color: 'red',
          //     opacity: 1
          //   },
          //   data: [
          //     {
          //       name: "凤凰城街道", //柱子的名字
          //       value: [124.07432, 40.46582, 30] //柱子显示在地图的位置（经纬度），柱子的值
          //     },
          //     {
          //       name: "石城镇",
          //       value: [124.320498, 40.646548, 147]
          //     },
          //     {
          //       name: "爱阳镇",
          //       value: [124.456199, 40.90916, 99]
          //     },
          //     {
          //       name: "弟兄山镇",
          //       value: [124.090107, 40.804709, 160]
          //     },
          //     {
          //       name: "鸡冠山镇",
          //       value: [123.9325, 40.530225, 240]
          //     },
          //     {
          //       name: "刘家河镇",
          //       value: [124.054142, 40.624711, 167]
          //     },
          //     {
          //       name: "四门子镇",
          //       value: [123.81998, 40.741332, 107]
          //     },
          //     {
          //       name: "大兴镇",
          //       value: [124.267571,40.741548, 687]
          //     },
          //     {
          //       name: "沙里寨镇",
          //       value: [123.672949,40.17495, 160]
          //     },
          //     {
          //       name: "红旗镇",
          //       value: [123.809578,40.103367, 206]
          //     },
          //     {
          //       name: "边门镇",
          //       value: [124.040169,40.349226, 206]
          //     },
          //     {
          //       name: "大堡蒙古族乡",
          //       value: [124.22818,40.55484, 302]
          //     },
          //     // 大兴镇  124.247571,40.741548
          //     // 凤山街道   124.070552,40.434803 
          //     // 草河街道   124.138438,40.477426
          //     // 沙里寨镇   123.702949,40.19495
          //     // 宝山镇     123.879551,40.372625
          //     // 白旗镇  123.858405,40.319098
          //     // 红旗镇  123.889578,40.143367
          //     // 蓝旗镇  123.794467,40.106485
          //     // 边门镇  124.110169,40.349226
          //     // 东汤镇  124.312691,40.424926
          //     // 石城镇  124.320487,40.64651
          //     // 爱阳镇  124.456198,40.90916
          //     // 赛马镇  124.263744,40.983042
          //     // 通远堡镇  123.931945,40.802232
          //     // 四门子镇  123.82379,40.739911
          //     // 青城子镇  123.628818,40.740226
          //     // 大堡蒙古族乡    124.25818,40.55484 
          //   ]
          // }
        ],
      }

      this.cityChart.setOption(option);
    },
  },
  mounted() {
    this.getCityMap();
  }
}
</script>

<style  scoped>
.chinaMap {
  height: 100%;
}
</style>
