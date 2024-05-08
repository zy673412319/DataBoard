// 生成模拟 3D 饼图的配置项
// pieData（object）：饼图数据
// internalDiameterRatio（0~1之间的浮点数）：内径/外径的值（默认值 1/2），当该值等于 0 时，
// heigth配置每个数据生成的高度
export function getPie3D(pieData, internalDiameterRatio, height) {
  let series = [];
  let sumValue = 0;
  let startValue = 0;
  let endValue = 0;
  let legendData = [];
  let k =
      typeof internalDiameterRatio !== "undefined"
          ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
          : 1 / 3;
  // 为每一个饼图数据，生成一个 series-surface 配置
  for (let i = 0; i < pieData.length; i++) {

      sumValue += pieData[i].value;

      let seriesItem = {
          name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
          type: 'surface',
          parametric: true,
          wireframe: {
              show: false
          },
          pieData: pieData[i],
          pieStatus: {
              selected: false,
              hovered: false,
              k: k
          }
      };

      if (typeof pieData[i].itemStyle != 'undefined') {

          let itemStyle = {};

          typeof pieData[i].itemStyle.color != 'undefined' ? itemStyle.color = pieData[i].itemStyle.color : null;
          typeof pieData[i].itemStyle.opacity != 'undefined' ? itemStyle.opacity = pieData[i].itemStyle.opacity : null;

          seriesItem.itemStyle = itemStyle;
      }
      series.push(seriesItem);
  }

  // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
  for (let i = 0; i < series.length; i++) {
      endValue = startValue + series[i].pieData.value;
      series[i].pieData.startRatio = startValue / sumValue;
      series[i].pieData.endRatio = endValue / sumValue;
      series[i].parametricEquation = getParametricEquation(series[i].pieData.startRatio, series[i].pieData.endRatio, false, false, k,series[i].pieData.value);

      startValue = endValue;

      legendData.push(series[i].name);
  }

  return series;
}
// startRatio（浮点数）: 当前扇形起始比例，取值区间[0, endRatio)
// endRatio（浮点数）: 当前扇形结束比例，取值区间(startRatio, 1]
// isSelected（布尔值）: 是否选中，效果参照二维饼图选中效果（单选）
// isHovered（布尔值）: 是否放大，效果接近二维饼图高亮（放大）效果（未能实现阴影）
// k（0~1之间的浮点数）：用于参数方程的一个参数，取值 0~1 之间，通过「内径 / 外径」的值换算而来。
// height配置3d扇形高度
export function getParametricEquation(
  startRatio,
  endRatio,
  isSelected,
  isHovered,
  k,
  height
) {
  // 计算
  let midRatio = (startRatio + endRatio) / 2;

  let startRadian = startRatio * Math.PI * 2;
  let endRadian = endRatio * Math.PI * 2;
  let midRadian = midRatio * Math.PI * 2;

  // 如果只有一个扇形，则不实现选中效果。
  if (startRatio === 0 && endRatio === 1) {
      isSelected = false;
  }

  // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
  k = typeof k !== 'undefined' ? k : 1 / 3 ;

  // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
  let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
  let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;

  // 计算高亮效果的放大比例（未高亮，则比例为 1）
  let hoverRate = isHovered ? 1.05 : 1;

  // 返回曲面参数方程
  return {
      u: {
          min: -Math.PI,
          max: Math.PI * 3,
          step: Math.PI / 32
      },

      v: {
          min: 0,
          max: Math.PI * 2,
          step: Math.PI / 20
      },

      x: function(u, v) {
          if (u < startRadian) {
              return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
          }
          if (u > endRadian ){
              return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
          }
          return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
      },

      y: function(u, v) {
          if (u < startRadian) {
              return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
          }
          if (u > endRadian ){
              return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
          }
          return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
      },

      z: function(u, v) {
          if (u < - Math.PI * 0.5 ) {
              return Math.sin(u);
          }
          if (u > Math.PI * 2.5 ){
              return Math.sin(u);
          }
          return Math.sin(v) > 0 ? 1 * height * .1 : -1;
      }
  };
}
//label指引线
export function labelLine(option, optionData) {
  //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
  option.series.push({
      name: "pie2d",
      type: "pie",
      minAngle: 10,
      roseType: 'radius',
      hoverOffset: 15,
      
      label: {
          opacity: 1,
          show: true,
          distanceToLabelLine: 0,
          formatter: (item) => {
              return '{top|'+item.value+'%}' + '\n'+ '{bottom| '+item.name+'} '
          },
          align: 'center',
          // 线
          fontSize: 12,
          lineHeight: 20,
          textStyle: {
            fontSize: 12,
            color: '#fff',
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
      labelLine: {
        length: 5,
        length2: 10,
          showAbove: false,
          lineStyle: {
              width: 1.5,
          },
      },
      startAngle: 321, //起始角度，支持范围[0, 360]。 //重要
      clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
      radius: ["25%", "50%"],
      center: ["50%", "50%"],
      data: optionData,
      itemStyle: {
        opacity: 0,
      },
      top: "20%",
      avoidLabelOverlap: true, //防止标签重叠
  });
  return option
}
