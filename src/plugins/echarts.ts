
import VabChart from 'vue-echarts'
import * as echarts from "echarts";
const theme = {
  "color": ["#1890FF", "#36CBCB", "#4ECB73"],
  "backgroundColor": "rgba(252,252,252,0)",
  "textStyle": {},
  "title": {
    "textStyle": {
      "color": "#666666"
    },
    "subtextStyle": {
      "color": "#999999"
    }
  },
  "tooltip": {
    "extraCssText": "box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.15);",
    "show": true,
    "backgroundColor": "#344158",
    "borderColor": "#344158",
    "borderWidth": 1,
    "textStyle": { "color": "#fff", "fontSize": "12", "lineHeight": 18 },
    "axisPointer": {
      "type": "shadow",
      "lineStyle": {
        "color": "#e5e5e5",
        "width": 1
      }
    },
    "padding": [4],
    "trigger": "axis"  // 显示同一时间所有数据
  },
  "legend": {
    "show": true,
    "bottom": "0",
    "textStyle": {
      "color": "#999999"
    },
    "itemWidth": 14,
    "itemHeight": 8
  },
  "line": {
    areaStyle: {
      normal: {
        //  阴影颜色
        color: new echarts.graphic.LinearGradient(0, 0, 0, 0.3, [
          { offset: 0, color: "rgba(255, 255, 255, 0.16)" },
          { offset: 1, color: "rgba(253, 231, 211, 0.16)" },
        ]),
      }
    },
    "itemStyle": {
      "normal": {
        "lineStyle": {
          "width": 1,
          "type": "dotted"
        }
      }
    },
    "zlevel": 4,
    "symbolSize": "4",
    "symbol": "emptyCircle"
  },
  "radar": {
    "itemStyle": {
      "normal": {
        "borderWidth": "2"
      }
    },
    "lineStyle": {
      "normal": {
        "width": "3"
      }
    },
    "symbolSize": "8",
    "symbol": "emptyCircle",
    "smooth": false
  },
  "bar": {
    "zlevel": 4,
    "barWidth": "6",
    "barMinHeight": 3
  },
  "pie": {
    "itemStyle": {
      "normal": {
        "borderWidth": 0,
        "borderColor": "#ccc"
      },
      "emphasis": {
        "label": {
          "show": false
        },
        "borderWidth": 0,
        "borderColor": "#ccc"
      }
    }
  },
  "categoryAxis": {
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#cccccc"
      }
    },
    "axisTick": {
      "show": false,
      "lineStyle": {
        "color": "#222222"
      }
    },
    "axisLabel": {
      "show": true,
      "textStyle": {
        "color": "#ACACAC"
      }
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "color": ["#eeeeee"]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"]
      }
    }
  },
  "valueAxis": {
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#cccccc"
      }
    },
    "axisTick": {
      "show": true,
      "lineStyle": {
        "color": "#cccccc"
      }
    },
    "axisLabel": {
      "show": true,
      "textStyle": {
        "color": "#ACACAC"
      }
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "color": ["#eeeeee"]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"]
      }
    }
  },
  "logAxis": {
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#cccccc"
      }
    },
    "axisTick": {
      "show": false,
      "lineStyle": {
        "color": "#222222"
      }
    },
    "axisLabel": {
      "show": true,
      "textStyle": {
        "color": "#ACACAC"
      }
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "color": ["#eeeeee"]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"]
      }
    }
  },
  "timeAxis": {
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#cccccc"
      }
    },
    "axisTick": {
      "show": false,
      "lineStyle": {
        "color": "#222222"
      }
    },
    "axisLabel": {
      "show": true,
      "textStyle": {
        "color": "#ACACAC"
      }
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "color": ["#eeeeee"]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"]
      }
    }
  },
  "toolbox": {
    "iconStyle": {
      "normal": {
        "borderColor": "#999999"
      },
      "emphasis": {
        "borderColor": "#666666"
      }
    }
  },
  "timeline": {
    "lineStyle": {
      "color": "#4ECB73",
      "width": 1
    },
    "itemStyle": {
      "normal": {
        "color": "#4ECB73",
        "borderWidth": 1
      },
      "emphasis": {
        "color": "#4ECB73"
      }
    },
    "controlStyle": {
      "normal": {
        "color": "#4ECB73",
        "borderColor": "#4ECB73",
        "borderWidth": 0.5
      },
      "emphasis": {
        "color": "#4ECB73",
        "borderColor": "#4ECB73",
        "borderWidth": 0.5
      }
    },
    "checkpointStyle": {
      "color": "#1890FF",
      "borderColor": "rgba(63,177,227,0.15)"
    },
    "label": {
      "normal": {
        "textStyle": {
          "color": "#4ECB73"
        }
      },
      "emphasis": {
        "textStyle": {
          "color": "#4ECB73"
        }
      }
    }
  },
  "visualMap": {
    "color": ["#1890FF", "#afe8ff"]
  },
  "dataZoom": {
    "backgroundColor": "rgba(255,255,255,0)",
    "dataBackgroundColor": "rgba(222,222,222,1)",
    "fillerColor": "rgba(114,230,212,0.25)",
    "handleColor": "#cccccc",
    "handleSize": "100%",
    "textStyle": {
      "color": "#999999"
    }
  },
  "markPoint": {
    "label": {
      "normal": {
        "textStyle": {
          "color": "#ffffff"
        }
      },
      "emphasis": {
        "textStyle": {
          "color": "#ffffff"
        }
      }
    }
  },
  "geo": {
    "itemStyle": {
      "normal": {
        // 区块背景色
        "areaColor": "rgba(255, 141, 80, 0)",
        "borderColor": "rgba(255, 141, 80, 0)",
        "borderWidth": 0.5
      },
      "emphasis": {
        "areaColor": "rgba(255, 141, 80, 0)",
        "borderColor": "rgba(255, 141, 80, 0)",
        "borderWidth": 1.5
      }
    },
    "label": {
      "normal": {
        "textStyle": {
          "color": "#ffffff"
        }
      },
      "emphasis": {
        "textStyle": {
          "color": "red"
        }
      }
    }
  },
  "map": {
    "itemStyle": {
      "normal": {
        "areaColor": "rgba(255, 141, 80, 0.16)",
        "borderColor": "rgba(255, 141, 80, 0.7)",
        "borderWidth": 0.5
      },
      "emphasis": {
        "areaColor": "rgba(255, 141, 80, 1)",
        "borderColor": "rgba(255, 141, 80, 0.7)",
        "borderWidth": 1.5
      }
    },
    "label": {
      "normal": {
        "textStyle": {
          "color": "#ffffff"
        }
      },
      "emphasis": {
        "textStyle": {
          "color": "red"
        }
      }
    }
  },
};

VabChart.registerTheme('echartsTheme', theme)
export default VabChart