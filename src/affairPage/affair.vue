<template>
  <div class="affairAllPage">
    <div class="headerCls affairHeaderBg flexDiv" @click="closeIframeFun()">
      <img src="../assets/affairImg/headerTitle.png">
    </div>
    <div style="height: calc(100% - 160px);width:100%;">
      <div class="flexDiv affairConetntDiv juspace" style="align-items: self-start;">
        <draggable v-model="draggablelist"  handle=".affairDragg"  animation="300" 
              style="width:100%;height:100%;" class="flexDiv juspace">
          <div class="affairDragg " v-for="(dl,index) in draggablelist" :key="index" :class="'affairDragg'+dl">
            <div class="affairConterItem affairConLeft flexDiv" style="" v-if="dl==1" @click="showIframeFun(dl)">
              <!-- 中心概况 -->
              <div class="zxgk">
                <div class="affairConHead flexDiv">
                  <img src="../assets/affairImg/zxgkIcon.png">
                  中心概况
                </div>
                <div class="flexDiv jusAround" style="padding: 22px 40px 0 40px;">
                  <div style="width:40%;height:184px;margin:4px 0;" class="zxgkEchart">
                    <centerGaikuang :centerGaikuangData="centerGaikuangData"></centerGaikuang>
                    <!-- 3个街道分别为：凤凰城街道、凤山街道、草河街道；18个乡镇分别为：宝山镇、白旗镇、沙里寨镇、红旗镇、蓝旗镇、
                    边门镇、大堡蒙古族乡、东汤镇、石城镇、大兴镇、爱阳镇、赛马镇、弟兄山镇、鸡冠山镇、刘家河镇、通远堡镇、四门子镇、青城子镇。  -->
                  </div>
                  <div class="zxgkNumCon">
                    <div class="flexDiv">
                      <img src="../assets/affairImg/rzbmNumIcon.png">
                      <div>
                        <p class="zgNumCls">{{centerGaikuangData.rzbmNum}}</p>
                        <p class="zgTextCls">入驻部门数量</p>
                      </div>
                    </div>
                    <div class="flexDiv" style="margin-top:10px;">
                      <img src="../assets/affairImg/kbckNumIcon.png">
                      <div>
                        <p class="zgNumCls">{{centerGaikuangData.kbckNum}}</p>
                        <p class="zgTextCls">开办窗口数量</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 企业动态 -->
              <div class="qydt">
                <div class="affairConHead flexDiv">
                  <img src="../assets/affairImg/qydtIcon.png">
                  企业动态
                </div>
                <div class="flexDiv qydtCon juCenter">
                  <div class="qydtConItem">
                    <div class="dzBarOne flexDiv">
                      <p>{{shenpiNum}}</p>
                      <div class="dzBarOneCon"></div>
                    </div>
                    <p>审批数量</p>
                  </div>
                  <div class="qydtConItem">
                    <div class="dzBarTwo flexDiv">
                      <p>{{pizhunNum}}</p>
                      <div class="dzBarOneCon"></div>
                    </div>
                    <p>批准数量</p>
                  </div>
                  <div class="qydtConItem">
                    <div class="dzBarThree flexDiv">
                      <p>{{yukeNum}}</p>
                      <div class="dzBarOneCon"></div>
                    </div>
                    <p>许可数量</p>
                  </div>
                </div>
              </div>
              <!-- 入驻事项 -->
              <div class="rzsx">
                <div class="affairConHead flexDiv">
                  <img src="../assets/affairImg/rzsxIcon.png">
                  入驻事项
                </div>
                <div class="affBotCOn" style="width:100%;padding: 0 40px">
                  <dv-scroll-board :config="rzsxConfig" style="width:100%;height:100%" class="rzPointCls" />
                </div>
              </div>
              <!-- 规章制度 -->
              <div class="gzzd">
                <div class="affairConHead flexDiv">
                  <img src="../assets/affairImg/gzzdIcon.png">
                  规章制度
                </div>
                <div class="flexDiv gzzdCon juspace">
                  <div class="rkslCon">
                    <div class="rkslEchart">
                      <renkouEchart :renkNumDateList="renkNumDateList" :renkNumNumList="renkNumNumList"></renkouEchart>
                    </div>
                    <p class="textCenter">人口数量</p>
                  </div>
                  <div class="rfwrcCon">
                    <div class="rfwrcEchart">
                      <rfwEchart :rfwEchartData="rfwEchartData"></rfwEchart>
                    </div>
                    <p class="textCenter">日服务人次</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="affairConterItem affairConCenter flexDiv" style="" v-if="dl==2" :class="moduleTwo?'daoxu':''">
              <div class="centerNumOne">
                <p class="numTitle numTitle01">业务受理数</p>
                <div class="flexDiv numCOn">
                  <div v-for="(number, index) in showshouliNum" :key="index">
                    {{ number }}
                  </div>
                </div>
              </div>
              <div class="centerNumTwo flexDiv">
                <div>
                  <p class="numTitle numTitle02">业务办结量</p>
                  <div class="flexDiv numCOn juCenterLeft">
                    <div v-for="(number, index) in showBanjieNum" :key="index">
                      {{ number }}
                    </div>
                  </div>
                </div>
                <div>
                  <p class="numTitle numTitle03">业务办结率</p>
                  <div class="flexDiv numCOn juCenterRight">
                    <div v-for="(number, index) in showJAl" :key="index">
                      {{ number }}
                    </div>
                    <div>%</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="affairConterItem affairConRight flexDiv" style="height: 100%;position: relative;" v-if="dl==3">
              <!-- 教育服务 -->
              <div class="jyfw">
                <div class="affairConHead flexDiv">
                  <img src="../assets/affairImg/jyfwIcon.png">
                  教育服务
                </div>
                <div class="flexDiv gzzdCon juspace">
                  <div class="zxxNumCon">
                    <div class="zxxNumEchart">
                      <zxxNumEchart :zxxNumParData="zxxNumParData"></zxxNumEchart>
                    </div>
                    <p class="textCenter">中小学校数量</p>
                  </div>
                  <div class="jyfwRiDataCon">
                    <div class="jyfwRiDataEchart">
                      <jyfwrfwEchart :jyfwData="jyfwData"></jyfwrfwEchart>
                    </div>
                    <p class="textCenter">日服务人次</p>
                  </div>
                </div>
              </div>
              <!-- 就业服务 -->
              <div class="jiuyefw">
                <div class="affairConHead flexDiv">
                  <img src="../assets/affairImg/jiuyefwIcon.png">
                  就业服务
                </div>
                <div class="flexDiv imgTextThree">
                  <div>
                    <img src="../assets/affairImg/zhidaoNumIcon.png">
                    <p class="textCls">就业指导</p>
                    <p class="numCls">{{zhidaoNum}}</p>
                  </div>
                  <div>
                    <img src="../assets/affairImg/peixunNumIcon.png">
                    <p class="textCls">职业培训次数</p>
                    <p class="numCls">{{peixunNum}}</p>
                  </div>
                  <div>
                    <img src="../assets/affairImg/zhaopinNumIcon.png">
                    <p class="textCls">组织招聘数量</p>
                    <p class="numCls">{{zhaopinNum}}</p>
                  </div>
                </div>
              </div>
              <!-- 住房服务 -->
              <div class="zfFw">
                <div class="affairConHead flexDiv">
                  <img src="../assets/affairImg/zfFwIcon.png">
                  住房服务
                </div>
                <div class="flexDiv imgTextThree">
                  <div>
                    <img src="../assets/affairImg/yueFangClIcon.png" class="imgwid93">
                    <p class="textCls2">月房产交易数量</p>
                    <p class="numCls">{{yueFangCl}}</p>
                  </div>
                  <div>
                    <img src="../assets/affairImg/zufngDjIcon.png" class="imgwid93">
                    <p class="textCls2">租房登记数量面积</p>
                    <p class="numCls">{{zufngDj}}</p>
                  </div>
                  <div>
                    <img src="../assets/affairImg/daishouLpIcon.png" class="imgwid93">
                    <p class="textCls2">代售楼盘</p>
                    <p class="numCls">{{daishouLp}}</p>
                  </div>
                </div>
              </div>
              <!-- 交通服务 -->
              <div class="jtFw">
                <div class="affairConHead flexDiv">
                  <img src="../assets/affairImg/jtFwIcon.png">
                  交通服务
                </div>
                <div class="flexDiv juspace modelConBtn" style="padding: 0 56px">
                  <div class="banzCon flexDiv">
                    <img src="../assets/affairImg/banZImg.png">
                    <div class="banZtext">
                      <p class="zgNumCls">{{banzNum}}</p>
                      <p class="zgTextCls">办证</p>
                    </div>
                  </div>
                  <div class="jiaotongZC">
                    <div class="jiaotongZCEchart">
                      <cheZhuceEchart :cheZhuceData="cheZhuceData"></cheZhuceEchart>
                    </div>
                    <p class="textCenter">车辆注册等日服务人次</p>
                  </div>
                  <div class="jiaotonRf">
                    <div class="jiaotonRfEchart">
                      <riweifaEchart :riweifaData="riweifaData"></riweifaEchart>
                    </div>
                    <p class="textCenter">日违法处罚人次</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </draggable>
      </div>
    </div>
    <div class="iframeDiv flexDiv" v-if="showIframe">
      <div>
        <iframe :src="iframeSrc" style="width:100%;height:100%;"></iframe>
        <div class="imfDiv" @click="closeIframeFun()">
          <img src="../assets/images/closeIframe.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
import centerGaikuang from '@/affairPage/echartModel/centerGaikuang';
import renkouEchart from '@/affairPage/echartModel/renkouEchart';
import rfwEchart from '@/affairPage/echartModel/rfwEchart';
import zxxNumEchart from '@/affairPage/echartModel/zxxNumEchart';
import jyfwrfwEchart from '@/affairPage/echartModel/jyfwrfwEchart';
import cheZhuceEchart from '@/affairPage/echartModel/cheZhuceEchart';
import riweifaEchart from '@/affairPage/echartModel/riweifaEchart';

import draggable from 'vuedraggable'

import CountTo from 'vue-count-to'
export default {
  name: 'test',
  components: {
    centerGaikuang, renkouEchart, rfwEchart,zxxNumEchart,jyfwrfwEchart,riweifaEchart,cheZhuceEchart,
    
    CountTo, vueSeamlessScroll,  
    draggable
  },
  data() {
    return {
      // 中心概况
      centerGaikuangData: {
        rzbmNum: 33,
        kbckNum: 30,
      },
      // 企业动态
      shenpiNum: 458,
      pizhunNum: 524,
      yukeNum: 412,
      // 入驻事项
      rzsxConfig: {
        header: ['企业名称', '入驻时间', '投资规模', '用地规模', '行政区域', '投资强度', '建设计划'],
        data: [
          ['北京青松建化科技股份有限公司', '2024年01月14日', '4000万', '15600平', '香港特别行政区新界离岛区仁廉胡同293号', '500万', '2021年08月06日'],
          ['陕西亚太航股份有限公司', '2023年09月12日', '5600万', '15600平', '安徽省宣城市宣州区桂花胡同454号', '500万', '2021年08月06日'],
          ['上海中联重科', '2023年02月27日', '800万', '15600平', '黑龙江省齐齐哈尔市依安县牡丹大道421号', '500万', '2021年08月06日'],
          ['四川诩翔国家集团', '2019年02月18日', '2100万', '15600平', '天津天津市河东区桂花胡同500号', '500万', '2021年08月06日'],
          ['西安鑫博科技有限公司', '2019年01月11日', '6000万', '15600平', '河北省廊坊市永清县竹子路908号', '500万', '2021年08月06日'],
          ['北京青松建化科技股份有限公司', '2024年01月14日', '4000万', '15600平', '香港特别行政区新界离岛区仁廉胡同293号', '500万', '2021年08月06日'],
          ['陕西亚太航股份有限公司', '2023年09月12日', '5600万', '15600平', '安徽省宣城市宣州区桂花胡同454号', '500万', '2021年08月06日'],
          ['上海中联重科', '2023年02月27日', '800万', '15600平', '黑龙江省齐齐哈尔市依安县牡丹大道421号', '500万', '2021年08月06日'],
        ],
        // columnWidth: [150, , ,],
        rowNum: 5,    // 表列数
        oddRowBGC: 'transparent', // 奇数行背景色
        evenRowBGC: 'transparent',   // 偶数行背景色
        waitTime: 2000,    // 轮播时间间隔(ms)
      },
      // 人口数据
      renkNumDateList: [],
      renkNumNumList: [],
      // 日服务人次
      rfwEchartData: {},
      // 教育服务   中小学数量
      zxxNumParData: {},
      // 教育服务>日服务人次
      jyfwData: {},
      // 中间数据
      shouliNum: 1258,
      BanjieNum: 958,
      // 就业服务
      zhidaoNum: 89407,
      peixunNum: 45789,
      zhaopinNum: 41257,
      //  住房服务
      yueFangCl: 4769,
      zufngDj: 14587,
      daishouLp: 4785,
      // 办证数
      banzNum: 29,
      // 日违法处罚人次    
      riweifaData: {},
      // 车辆注册
      cheZhuceData: {},
      showIframe: false,
      iframeSrc: 'https://b2b.baidu.com/',
      sidebarDialDataOptions: {
        animation: 300,
        handle: ".rightFloatItem",   // 拖拽对象类名
        group: "navList",
        ghostClass: "ghost",
        chosenClass: "sortable",
        forceFallback: true,
        filter: ".addBanner",
      },
      draggablelist: [1,2,3],
      resizeFn: null,
      
      moduleTwo: false,
      moduleThree: false,
      moduleFour: false,
      closeNum: 0,
      firstData: {},
      changeData: {},
    }
  },
  computed: {
    showshouliNum(){
      let numStr = this.shouliNum.toString();
      let arr = numStr.split('').map(Number);
      return arr;
    },
    showBanjieNum(){
      let numStr = this.BanjieNum.toString();
      let arr = numStr.split('').map(Number);
      return arr;
    },
    showJAl(){
      var per = Number(this.BanjieNum) / Number(this.shouliNum);
      var num = parseInt(per * 100);
      let arr = num.toString().split('').map(Number);
      return arr;
    },
    classOption: function () {
      return {
        step: 0.4, // 数值越大速度滚动越快
        limitMoveNum: 4, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    },
  },
  mounted() {
    document.title = '凤城市数据可视化系统';
    var that = this;
    // const documentWidth = document.body.offsetWidth;
    // const ratio = documentWidth / 1920;
    // if (documentWidth > 1920) {
    //   document.body.style.transform = `scale(${ratio}, ${ratio})`
    // }
    // this.resizeFn = this.$debounce(function () {
    //   const documentWidth = document.body.offsetWidth;
    //   const ratio = documentWidth / 1920;
    //   if (documentWidth > 1920) {
    //     document.body.style.transform = `scale(${ratio}, ${ratio})`
    //   }
    // }, 200)
    // window.addEventListener('resize', this.resizeFn);
    setTimeout(()=>{
      this.centerGaikuangData = {
        rzbmNum: 28,
        kbckNum: 98,
      }
      this.renkNumDateList = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'];
      this.renkNumNumList = [25,62,47,56,48,120,96,78,36,140];
      this.rfwEchartData = {
        DateList: ['2024-02-01','2024-02-02','2024-02-03','2024-02-04','2024-02-05','2024-02-06','2024-02-07','2024-02-08','2024-02-09',
        '2024-02-10','2024-02-11','2024-02-12','2024-02-13','2024-02-14','2024-02-15','2024-02-16'],
        oneDataList: [58,45,12,147,56,98,102,45,98,68,140,53,78,61,89,45],
        TwoDataList:[106,147,26,95,78,58,14,36,74,19,25,86,75,84,26,70]
          //  oneDataList  TwoDataList
      }
      this.zxxNumParData = {
        crops: 125,
        woodland: 410,
        gzNum: 260
      }
      this.jyfwData = {
        DateList: ['2024-02-01','2024-02-02','2024-02-03','2024-02-04','2024-02-05','2024-02-06','2024-02-07','2024-02-08','2024-02-09',
        '2024-02-10','2024-02-11','2024-02-12','2024-02-13','2024-02-14','2024-02-15','2024-02-16'],
        oneDataList: [58,45,12,147,56,98,102,45,98,68,140,53,78,61,89,45],
        TwoDataList:[106,147,26,95,78,58,14,36,74,19,25,86,75,84,26,70]
      }
      this.riweifaData = {
        DateList: ['2024-02-01','2024-02-02','2024-02-03','2024-02-04','2024-02-05','2024-02-06','2024-02-07','2024-02-08','2024-02-09',
        '2024-02-10','2024-02-11','2024-02-12','2024-02-13','2024-02-14','2024-02-15','2024-02-16'],
        oneDataList: [58,45,12,147,56,98,102,45,98,68,140,53,78,61,89,45],
      }
      this.cheZhuceData = {
        DateList: ['2024-02-01','2024-02-02','2024-02-03','2024-02-04','2024-02-05','2024-02-06','2024-02-07','2024-02-08','2024-02-09',
        '2024-02-10','2024-02-11','2024-02-12'],
        oneDataList: [58,45,12,147,56,98,102,45,98,68,140,53],
      }   
    }, 1500)

    // this.connectWebSocket();
    // // 每5秒发送一个空消息到WebSocket服务器
    // setInterval(() => {
    //   if (this.webSocket && this.webSocket.readyState === WebSocket.OPEN) {
    //     this.webSocket.send('');
    //   }
    // }, 5000);
  },
  methods: {
    connectWebSocket() {
      // 假设WebSocket服务器地址是ws://localhost:8080
      this.webSocket = new WebSocket('ws://47.101.217.219:8080');
 
      this.webSocket.onopen = () => {
        console.log('WebSocket 连接成功');
      };
 
      this.webSocket.onmessage = (message) => {
        this.setData(message.data);
        // console.log('收到消息:', message.data);
      };
 
      this.webSocket.onerror = (error) => {
        console.error('WebSocket 出错:', error);
        this.reconnect();
      };
 
      this.webSocket.onclose = () => {
        console.log('WebSocket 连接关闭');
        this.reconnect();
      };
    },
    setData(val) {
      var data = JSON.parse(val);
    },
    showIframeFun(type){
      // this.iframeSrc = '';
      this.showIframe = true;
    },
    closeIframeFun(){
      console.log('showIframe')
      
      this.showIframe = false;
    },
    generateRandomNumber(min, max) {
      // 生成一个随机数
      min = Math.ceil(min); // 确保min是整数
      max = Math.floor(max); // 确保max是整数
      return Math.floor(Math.random() * (max - min + 1)) + min; // 返回介于min和max之间的整数
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeFn);
  }
}
</script>

<style lang="less">
</style>
