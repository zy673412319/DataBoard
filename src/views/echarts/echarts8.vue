<template>
  <div class="leftBar"></div>
</template>

<style  scoped>
.leftBar {
  height: 100%;
  width: 100%;
}
</style>

<script>
export default {
  props: ['siluanDataSend'],
  name: '',
  data() {
    return {
      myChart: null,
      siluanData: [],
      // [
      //   { value: 65, name: '乱堆', },
      //   { value: 48, name: '乱占' },
      //   { value: 98, name: '乱采' },
      //   { value: 32, name: '乱建' }
      // ]
    }
  },
  watch: {
    siluanDataSend(newValue, oldValue) {
      this.siluanData = newValue;
      this.setChart();
    },
  },
  mounted() {
    this.setChart();
  },
  methods: {
    // 渠道分析
    setChart() {
      var that = this;
      var centerImg = "https://easyv.assets.dtstack.com/data/assets/ye0x8u2o6e_1630499352687_3ubg4uvuje.png";
      let option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          icon: "circle",
          orient: 'vertical',
          // x: 'left',o
          right: 40,
          top: 30,
          align: 'right',
          textStyle: {
            color: "#fff"
          },
          itemGap: 10,
          itemWidth: 16,
          itemHeight: 16,
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontFamily: 'MyFont',
          }
        },
        //中心图片配置(关键代码)
        // graphic: [
        //   {
        //     z: 4,
        //     type: "image",
        //     id: "logo",
        //     left: "29%", //调整图片位置
        //     top: "24%", //调整图片位置
        //     z: -10,
        //     bounding: "raw",
        //     rotation: 0, //旋转
        //     origin: [64.5, 32.5], //中心点
        //     scale: [1.0, 1.0], //缩放
        //     //设置图片样式
        //     style: {
        //       image: centerImg,
        //       width: 136,
        //       height: 136,
        //       opacity: 1,
        //     },
        //   },
        // ],
        series: [
          {
            name: 'border',
            type: 'pie',
            clockWise: false,
            radius: ['50%', '94%'],
            center: ['50%', '50%'],
            animation: false,
            data: [{
              value: 0,
              color: '#fff',
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              emphasis: {
                disabled: true,
              },
              select: {
                disabled: true,
              },
              tooltip: {
                show: false,
              },
              itemStyle: {
                color: 'rgba(114, 136, 180, 0.8)',
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 15,
                shadowOffsetX: 2,
                shadowOffsetY: 2,
              },
            },],
          },
          {
            name: '四乱类型',
            type: 'pie',
            radius: ['40%', '84%'],
            center: ['50%', '50%'],
            itemStyle: {
              borderRadius: 4,
              borderColor: '#fff',
              borderWidth: 1
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontFamily: 'MyFont',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true,
              lineStyle: {
                color: '#7BC0CB',
              },
              normal: {
                show: true,
                length: 16,
                length2: 16,
              },
            },
            label: {
              show: true,
              position: 'outside',
              textStyle: {
                color: '#fff',
                fontSize: '14px',
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
            color: ['#00F0FF', '#00FFD8', '#00FF78', '#0083FE', '#00BFFF'],// 色块填充颜色
            data: that.siluanData,
          }
        ]
      }

      if (!this.myChart) this.myChart = this.$echarts.init(this.$el, null, {devicePixelRatio: 3});

      // this.myChart.clear();
      // this.myChart.resize();
      this.myChart.setOption(option);
    },

  },
}
</script>
