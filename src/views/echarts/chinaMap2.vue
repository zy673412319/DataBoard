<template>
  <div style="width:100%;height:100%;position: relative;">
    <div class="chinaMap" ref="cityMap"></div>
    <div class="tooplie tooplie01" v-if="city0 && city0.length>0">
      <div class="tooplietitle flexDiv"><img src="../../assets/images/huo2.png" style="width:30px">{{city0[city0.length - 1].tfpTime}}</div>
      <P>{{city0[city0.length - 1].tfpPlace}}</P>
      <p>火灾等级：<span class="threeLevel">{{city0[city0.length - 1].checkStatus}}</span></p>
    </div>
    <div class="tooplie tooplie02" v-if="city1 && city1.length>0">
      <div class="tooplietitle flexDiv"><img src="../../assets/images/huo2.png" style="width:30px">{{city1[city1.length - 1].tfpTime}}</div>
      <P>{{city1[city1.length - 1].tfpPlace}}</P>
      <p>火灾等级：<span class="threeLevel">{{city1[city1.length - 1].checkStatus}}</span></p>
    </div>
    <div class="tooplie tooplie03" v-if="city2 && city2.length>0">
      <div class="tooplietitle flexDiv"><img src="../../assets/images/huo2.png" style="width:30px">{{city2[city2.length - 1].tfpTime}}</div>
      <P>{{city2[city2.length - 1].tfpPlace}}</P>
      <p>火灾等级：<span class="threeLevel">{{city2[city2.length - 1].checkStatus}}</span></p>
    </div>
    <div class="tooplie tooplie04" v-if="city3 && city3.length>0">
      <div class="tooplietitle flexDiv"><img src="../../assets/images/huo2.png" style="width:30px">{{city3[city3.length - 1].tfpTime}}</div>
      <P>{{city3[city3.length - 1].tfpPlace}}</P>
      <p>火灾等级：<span class="threeLevel">{{city3[city3.length - 1].checkStatus}}</span></p>
    </div>
    <div class="tooplie tooplie05" v-if="city4 && city4.length>0">
      <div class="tooplietitle flexDiv"><img src="../../assets/images/huo2.png" style="width:30px">{{city4[city4.length - 1].tfpTime}}</div>
      <P>{{city4[city4.length - 1].tfpPlace}}</P>
      <p>火灾等级：<span class="threeLevel">{{city4[city4.length - 1].checkStatus}}</span></p>
    </div>
    <div class="tooplie tooplie06" v-if="city5 && city5.length>0">
      <div class="tooplietitle flexDiv"><img src="../../assets/images/huo2.png" style="width:30px">{{city5[city5.length - 1].tfpTime}}</div>
      <P>{{city5[city5.length - 1].tfpPlace}}</P>
      <p>火灾等级：<span class="threeLevel">{{city5[city5.length - 1].checkStatus}}</span></p>
    </div>
    <div class="tooplie tooplie07" v-if="city6 && city6.length>0">
      <div class="tooplietitle flexDiv"><img src="../../assets/images/huo2.png" style="width:30px">{{city6[city6.length - 1].tfpTime}}</div>
      <P>{{city6[city6.length - 1].tfpPlace}}</P>
      <p>火灾等级：<span class="threeLevel">{{city6[city6.length - 1].checkStatus}}</span></p>
    </div>
    <div class="tooplie tooplie08" v-if="city7 && city7.length>0">
      <div class="tooplietitle flexDiv"><img src="../../assets/images/huo2.png" style="width:30px">{{city7[city7.length - 1].tfpTime}}</div>
      <P>{{city7[city7.length - 1].tfpPlace}}</P>
      <p>火灾等级：<span class="threeLevel">{{city7[city7.length - 1].checkStatus}}</span></p>
    </div>
    <div class="tooplie tooplie09" v-if="city8 && city8.length>0">
      <div class="tooplietitle flexDiv"><img src="../../assets/images/huo2.png" style="width:30px">{{city8[city8.length - 1].tfpTime}}</div>
      <P>{{city8[city8.length - 1].tfpPlace}}</P>
      <p>火灾等级：<span class="threeLevel">{{city8[city8.length - 1].checkStatus}}</span></p>
    </div>
    <div class="tooplie tooplie10" v-if="city9 && city9.length>0">
      <div class="tooplietitle flexDiv"><img src="../../assets/images/huo2.png" style="width:30px">{{city9[city9.length - 1].tfpTime}}</div>
      <P>{{city9[city9.length - 1].tfpPlace}}</P>
      <p>火灾等级：<span class="threeLevel">{{city9[city9.length - 1].checkStatus}}</span></p>
    </div>
    <div class="tooplie tooplie11" v-if="city10 && city10.length>0">
      <div class="tooplietitle flexDiv"><img src="../../assets/images/huo2.png" style="width:30px">{{city10[city10.length - 1].tfpTime}}</div>
      <P>{{city10[city10.length - 1].tfpPlace}}</P>
      <p>火灾等级：<span class="threeLevel">{{city10[city10.length - 1].checkStatus}}</span></p>
    </div>
   <div class="tooplie tooplie12" v-if="city11 && city11.length>0">
      <div class="tooplietitle flexDiv"><img src="../../assets/images/huo2.png" style="width:30px">{{city11[city11.length - 1].tfpTime}}</div>
      <P>{{city11[city11.length - 1].tfpPlace}}</P>
      <p>火灾等级：<span class="threeLevel">{{city11[city11.length - 1].checkStatus}}</span></p>
    </div>
    <div class="tooplie tooplie13" v-if="city12 && city12.length>0">
      <div class="tooplietitle flexDiv"><img src="../../assets/images/huo2.png" style="width:30px">{{city12[city12.length - 1].tfpTime}}</div>
      <P>{{city12[city12.length - 1].tfpPlace}}</P>
      <p>火灾等级：<span class="threeLevel">{{city12[city12.length - 1].checkStatus}}</span></p>
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
  props: ['mapFdData'],
  data() {
    return {
      geoJson: require('./map.json'),
      myChart: null,
      showCity: ['青城子镇', '刘家河镇', '沙里寨镇', '鸡冠山镇', '赛马镇', '大兴镇', '东汤镇', '石城镇', '四门子镇', '红旗镇', '边门镇', 
       '蓝旗镇', '凤山区'],
      showEd: [],
       // 草河区、凤山街道、鸡冠山镇、刘家河镇、凤凰城街道、石城镇、赛马镇、石城镇、通远堡镇、沙里寨镇、
      //  边门镇、蓝旗镇、爱阳镇、弟兄山镇、、爱阳镇、草河街道、四门子镇、大堡蒙古族乡、
      city0: [],
      city1: [],
      city2: [],
      city3: [],
      city4: [],
      city5: [],
      city6: [],
      city7: [],
      city8: [],
      city9: [],
      city10: [],
      city11: [],
      city12: [],
      city13: [],
      city14: [],
    }
  },
  watch: {
    mapFdData(newValue, oldValue) {
      if(newValue && newValue.length > 0){
        this.city0 = [];
        this.city1 = [];
        this.city2 = [];
        this.city3 = [];
        this.city4 = [];
        this.city5 = [];
        this.city6 = [];
        this.city7 = [];
        this.city8 = [];
        this.city9 = [];
        this.city10 = [];
        this.city11 = [];
        this.city12 = [];
        var count = 0;
        var countLanegh = 5;
        for(var key in newValue) {
          var str = newValue[key].tfpAdministrativeName.split('/');
          // 青城子镇
          if(str[1] == this.showCity[0] && count < countLanegh && this.city0.length == 0){
            count++;
            this.city0.push(newValue[key]);
          }
          // 刘家河镇
          if(str[1] == this.showCity[1] && count < countLanegh && this.city1.length == 0){
            count++;
            this.city1.push(newValue[key]);
          }
          // 沙里寨镇
          if(str[1] == this.showCity[2] && count < countLanegh && this.city2.length == 0){
            count++;
            this.city2.push(newValue[key]);
          }
          // 鸡冠山镇
          if(str[1] == this.showCity[3] && count < countLanegh && this.city3.length == 0){
            count++;
            this.city3.push(newValue[key]);
          }
          // 赛马镇
          if(str[1] == this.showCity[4] && count < countLanegh && this.city4.length == 0){
            count++;
            this.city4.push(newValue[key]);
          }
          // 大兴镇
          if(str[1] == this.showCity[5] && count < countLanegh && this.city5.length == 0){
            count++;
            this.city5.push(newValue[key]);
          }
          // 东汤镇
          if(str[1] == this.showCity[6] && count < countLanegh && this.city6.length == 0){
            count++;
            this.city6.push(newValue[key]);
          }
          // 石城镇
          if(str[1] == this.showCity[7] && count < countLanegh && this.city7.length == 0){
            count++;
            this.city7.push(newValue[key]);
          }
          // 四门子镇
          if(str[1] == this.showCity[8] && count < countLanegh && this.city8.length == 0){
            count++;
            this.city8.push(newValue[key]);
          }
          // 红旗镇
          if(str[1] == this.showCity[9] && count < countLanegh && this.city9.length == 0){
            count++;
            this.city9.push(newValue[key]);
          }
          // 边门镇
          if(str[1] == this.showCity[10] && count < countLanegh && this.city10.length == 0){
            count++;
            this.city10.push(newValue[key]);
          }
          // 蓝旗镇
          if(str[1] == this.showCity[11] && count < countLanegh && this.city11.length == 0){
            count++;
            this.city11.push(newValue[key]);
          }
          // 凤山区 
          if(str[1] == this.showCity[12] && count < countLanegh && this.city12.length == 0){
            count++;
            this.city12.push(newValue[key]);
          }
        } 
      }
    }
  },
  methods: {
    // 地图
    getCityMap() {
      this.cityChart = this.$echarts.init(this.$refs.cityMap, null, {devicePixelRatio: 3});
      this.$echarts.registerMap("zigong", this.geoJson);

      let option = {
        tooltip: {
          axisPointer: {
            animation: false, //很重要！
          },
        },
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
.noneCity {
  display: none !important;
}
</style>
