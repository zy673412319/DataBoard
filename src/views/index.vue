<template>
  <div class="allPage" ref="mySelect">
    <div class="headerCls indexHeaderBg flexDiv" @click="closeIframeFun()">
      凤城市基层社会治理数字化应用平台
    </div>
    <div style="height: calc(100% - 130px)" id="mySelect">
      <!-- <dv-border-box-1> -->
      <div class="flexDiv numBg01 conetntDiv juspace" style="align-items: self-start;">
        <draggable v-model="draggablelist"  handle=".rightFloatItem"  animation="300" 
              style="width:100%;height:100%;" class="flexDiv juspace">
        <!-- <div style="width:100%;height:100%;" class="flexDiv juspace"> -->
          <div class="rightFloatItem " v-for="(dl,index) in draggablelist" :key="index" :class="'rightFloatItem'+dl">
            <div class="contentLeft flexDiv" style="height: 100%;align-content: space-between;" v-if="dl==1" :class="moduleFive?'daoxu':''">
              <div class="newModule flexDiv modelBg01" style="height:auto;padding-bottom: 12px;" @click="showIframeFun('31')">
                <div class="newModuleTitle newModuleTitle01">
                  林草治理--火点监测
                  <div class="exchangeIcon" @click.stop="moduleFive = !moduleFive">
                    <img src="../assets/images/exchange.png">
                  </div>
                  <div class="lookIcon">
                    <img src="../assets/images/lookIcon.png">
                  </div>
                </div>
                <div class="three-levelCon widAll">
                  <div class="three-levelTitle flexDiv" style="margin-top: 0px;">
                    <img src="../assets/images/titleImg/subHuodian.png">
                    疑似火点信息
                  </div>
                  <div class="flexDiv">
                    <div class="flexDiv" style="width: 28%;margin: 4px 0">
                      <div class="numBig flexDiv" style="">
                        <img src="../assets/images/fire01.png" style="width: 98px">
                        <div>
                          <!-- <p class="mainColor title34">{{fireData.today}}</p> -->
                          <CountTo class="mainColor title34" :startVal='saveFireData.today' :endVal='fireData.today' :duration='duration' />
                          <p>当日火点数</p>
                        </div>
                      </div>
                      <div class="numBig flexDiv" style="">
                        <img src="../assets/images/fire02.png" style="width: 98px">
                        <div>
                          <!-- <p class="mainColor title34">{{fireData.yesterday}}</p> -->
                          <CountTo class="blueColor title34" :startVal='saveFireData.yesterday' :endVal='fireData.yesterday' :duration='duration' />
                          <p>对比昨日火点数</p>
                        </div>
                      </div>
                    </div>
                    <div class="" style="width:66%;height:160px">
                      <div class="flexDiv rzPointClsTitle">
                        <div class="oneLine textCenter" style="width: 25%">经纬度</div>
                        <div class="oneLine textCenter" style="width: 25%">行政区划</div>
                        <div class="oneLine textCenter" style="width: 25%">火灾等级</div>
                        <div class="oneLine textCenter" style="width: 25%">观测时间</div>
                      </div>
                      <div class="rzPointClsCont flexDiv rzPointCls rzPointClsGundong03">
                        <!--  :class="{ anim: animUp == true }" -->
                        <ul class="flexDiv" style="width:100%;height:100%;padding: 0;">
                          <li v-for="(rd,idex) in firePointconfigData" :key="idex" class="flexDiv" style="width:100%;height:32px">
                            <div class="oneLine textCenter" style="width: 25%">{{rd[0]}}</div>
                            <div class="oneLine textCenter" style="width: 25%">{{rd[1]}}</div>
                            <div class="oneLine textCenter" style="width: 25%">{{rd[2]}}</div>
                            <div class="oneLine textCenter" style="width: 25%">{{rd[3]}}</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="flexDiv juspace">
                    <div class="fireInfo" style="" v-for="(fl,index) in fireDetailData" :key="'fl'+index">
                      <div class="fireInfoHead flexDiv">
                        <img src="../assets/images/time.png" style="width:20px;margin-right: 4px">
                        {{fl.tfpTime}}
                      </div>
                      <div class="flexDiv fireInfoCon">
                        <div style="width: 30%;text-align:right;padding-right: 30px;">
                          <img src="../assets/images/huo2.png" style="width:80px">
                        </div>
                        <div style="width: 70%">
                          <p class="twoLine">{{fl.tfpPlace}}</p>
                          <p>地表类型：{{fl.surfaceType}}</P>
                          <p style="height:38px">火灾等级：<span class="title16 oneLevel">{{fl.checkStatus}}</span></P>
                        </div>
                      </div>
                      <div class="fireInfoQh">
                        <div class="flexDiv">
                          <div style="width: 48%" class="leftDiv">经度：{{fl.tfpLongitude}}°</div>
                          <div style="width: 52%">风向：{{fl.weather | direction}}</div>
                        </div>
                        <div class="flexDiv">
                          <div style="width: 48%" class="leftDiv">纬度：{{fl.tfpLatitude}}°</div>
                          <div style="width: 52%">天气：{{fl.weather | tianqiFliter}}</div>
                        </div>
                        <div class="flexDiv">
                          <div style="width: 48%">降雨量：{{fl.weather | jiangshuil}}</div>
                          <div style="width: 52%">任务状恋：{{fl.status}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="newModule flexDiv modelBg01" style="height:auto;padding:6px 0 18px 0" @click="showIframeFun('33')">
                <div class="newModuleTitle newModuleTitle01">
                  林草治理--有害生物
                  <div class="exchangeIcon" @click.stop="moduleFive = !moduleFive">
                    <img src="../assets/images/exchange.png">
                  </div>
                  <div class="lookIcon">
                    <img src="../assets/images/lookIcon.png">
                  </div>
                </div>
                <div class="three-levelCon widAll">
                  <div class="three-levelTitle flexDiv" style="margin-top: 0px;">
                    <img src="../assets/images/titleImg/subYouhai.png">
                    有害生物检测线索列信息
                    <!-- <dv-decoration-3 style="width:130px;height:30px;" /> -->
                  </div>
                  <div style="width:100%;padding: 0 14px">
                    <div class="flexDiv text12 colorWhite textCenter jusAround" style="margin-bottom:0px;">
                      <div class="shebei">
                        <img src="../assets/images/youhaiIcon.png">
                      </div>
                      <div>
                        <p class="textCenter">监测设备总数</p>
                        <p class="textCenter title24 colorBlue">{{wormGrassFacility.total}}</p>
                      </div>
                      <div>
                        <p>运行设备</p>
                        <p class="textCenter title24 colorBlue">{{wormGrassFacility.runTotal}}</p>
                      </div>
                      <div>
                        <p>监测到设备</p>
                        <p class="textCenter title24 colorBlue" style="color:#f3cd6c">{{wormGrassFacility.detectTotal}}</p>
                      </div>
                    </div>
                    <div style="width:100%;">
                      <div class="flexDiv text12 youhaiList" style="color:#9bc3d4;">
                        <p style="width: 13%;line-height:1;" class="flexDiv juCenter"><img src="../assets/images/shengwu.png" style="width:22px;">种类</p>
                        <p style="width: 13%;line-height:1;" class="flexDiv juCenter"><img src="../assets/images/shengwu.png" style="width:22px;">虫态</p>
                        <p style="width: 18%;line-height:1;" class="flexDiv juCenter"><img src="../assets/images/diqu.png" style="width:18px;">责任区</p>
                        <p style="width: 18%;line-height:1;" class="flexDiv juCenter"><img src="../assets/images/time.png" style="width:18px;">发现时间</p>
                        <p style="width: 38%;line-height:1;" class="flexDiv juCenter"><img src="../assets/images/diqu.png" style="width:18px;">位置</p>
                      </div>
                      <div style="width:100%;height:82px;overflow: hidden;">
                        <div class="flexDiv text12 youhaiList" v-for="(rd,index) in wormGrassList" :key="index" style="padding:4px 0;color:#9bc3d4;">
                          <p style="width: 13%" class="textCenter">{{rd.pestName}}</p>
                          <p style="width: 13%" class="textCenter">{{rd.wormState}}</p>
                          <p style="width: 18%" class="textCenter">{{rd.district}}</p>
                          <p style="width: 18%" class="textCenter">{{rd.findTime}}</p>
                          <p style="width: 38%" class="textCenter">{{rd.location}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentLeft flexDiv" style="height: 100%;align-content: space-between;" v-if="dl==2" :class="moduleTwo?'daoxu':''">
              <div class="newModule modelBg02" @click="showIframeFun('32')">
                <div class="newModuleTitle newModuleTitle02">
                  林草治理--乱砍盗伐
                  <div class="exchangeIcon" @click.stop="moduleTwo = !moduleTwo">
                    <img src="../assets/images/exchange.png">
                  </div>
                  <div class="lookIcon">
                    <img src="../assets/images/lookIcon.png">
                  </div>
                </div>
                <div class="three-levelCon widAll" style="">
                  <div class="three-levelTitle flexDiv">
                    <img src="../assets/images/titleImg/subLuankan.png">
                    乱砍盗伐监管图斑
                  </div>
                  <div style="width:100%;height: 170px">
                    <echarts4 :lkfdDateList="lkfdDateList" :lkfdCountList="lkfdCountList"></echarts4>
                  </div>
                </div>
              </div>
              <div class="newModule modelBg03" @click="showIframeFun('34')">
                <div class="newModuleTitle newModuleTitle03">
                  两违治理
                  <div class="exchangeIcon" @click.stop="moduleTwo = !moduleTwo">
                    <img src="../assets/images/exchange.png">
                  </div>
                  <div class="lookIcon">
                    <img src="../assets/images/lookIcon.png">
                  </div>
                </div>
                <div class="three-levelCon widAll" style="margin-top: 10px;">
                  <div class="three-levelTitle flexDiv">
                    <img src="../assets/images/titleImg/subLiangwei.png">
                    占地类型统计
                  </div>
                  <div style="width:100%;height: 140px;margin:6px 0;" class="flexDiv jusAround">
                    <div style="width: 300px;height: 140px;" class="newWeifabg">
                      <!-- <newWeifa :liangweiParData="liangweiParData"></newWeifa> -->
                      <newpieone :liangweiParData="liangweiParData"></newpieone>
                    </div>
                    <div class="liangweiData flexDiv">
                      <img src="../assets/images/shulin2.png">
                      <div class="normalList">
                        <p class="blueColor title34">{{liangweiData.woodlandPer}}%</P>
                        <p>林地</P>
                      </div>
                    </div>
                    <div class="liangweiData flexDiv">
                      <img src="../assets/images/lincao2.png">
                      <div class="normalList">
                        <p class="blueColor title34">{{liangweiData.cropsPer}}%</P>
                        <p>耕地</P>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="three-levelCon widAll" style="margin-top: 14px;">
                  <div class="three-levelTitle flexDiv">
                    <img src="../assets/images/titleImg/subWeifa.png">
                    违法区域统计
                  </div>
                  <div style="width:100%;height:344px;">
                    <newWeifa2 :liangweiBarData="liangweiBarData"></newWeifa2>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentCenter flexDiv" style="height: 100%;position: relative;" v-if="dl==3">
              <div class="mapDiv">
                <div class="mapDiv01">
                  <img src="../assets/images/map3.png" />
                </div>
                <div class="lookIconmap">
                  <img src="../assets/images/lookIcon.png">
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
            </div>
            <div class="contentRight02 flexDiv" style="height: 100%;align-content: space-between;" v-if="dl==4" :class="moduleThree?'daoxu':''">
              <div class="newModule modelBg04" @click="showIframeFun('35')">
                <div class="newModuleTitle newModuleTitle04">
                  河湖治理
                  <div class="exchangeIcon" @click.stop="moduleThree = !moduleThree">
                    <img src="../assets/images/exchange.png">
                  </div>
                  <div class="lookIcon">
                    <img src="../assets/images/lookIcon.png">
                  </div>
                </div>
                <div class="three-levelCon widAll flexDiv juspace alItemStart" style="margin-top:4px;">
                  <div style="width:49%">
                    <div class="three-levelTitle flexDiv">
                      <img src="../assets/images/titleImg/subSiluan.png">
                      四乱类型分析
                    </div>
                    <div style="width:100%;height:140px;margin-top:8px;">
                      <echarts8 :siluanDataSend="siluanDataSend"></echarts8>
                    </div>
                  </div>
                  <div style="width:49%">
                    <div class="three-levelTitle flexDiv" style="">
                      <img src="../assets/images/titleImg/subSiluan02.png">
                      四乱变化监测
                    </div>
                    <div style="width:100%;height:150px;margin-top:8px;">
                      <siluan2 :hehuData="hehuData"></siluan2>
                    </div>
                  </div>
                </div>
                <div class="three-levelCon widAll" style="margin: 24px 0 0;padding-bottom:24px;">
                  <div class="three-levelTitle flexDiv" style="">
                    <img src="../assets/images/titleImg/subSiluan03.png">
                    四乱详细分析
                  </div>
                  <div style="width:100%;height:130px;">
                    <echarts3 :hehuSiLDetailData="hehuSiLDetailData"></echarts3>
                  </div>
                </div>
              </div>
              <!--  人居环境治理 -->
              <div class="newModule modelBg05" @click="showIframeFun('36')">
                <div class="newModuleTitle newModuleTitle05">
                  人居环境治理
                  <div class="exchangeIcon" @click.stop="moduleThree = !moduleThree">
                    <img src="../assets/images/exchange.png">
                  </div>
                  <div class="lookIcon">
                    <img src="../assets/images/lookIcon.png">
                  </div>
                </div>
                <div class="three-levelCon widAll" style="margin-top: 14px;">
                  <div class="three-levelTitle flexDiv">
                    <img src="../assets/images/titleImg/subLaji.png">
                    垃圾信息
                  </div>
                  <div class="flexDiv jusAround" style="margin: 4px 0 8px 0;">
                    <div class="lajiNum flexDiv">
                      <img src="../assets/images/newImg/cunzhuang.png">
                      <div class="normalList">
                        <p><CountTo class="mainColor title34" :startVal='saveLajiZhiliData.villageNum' :endVal='lajiZhiliData.villageNum' :duration='2000' />个</p>
                        <p>村庄</p>
                      </div>
                    </div>
                    <div class="lajiNum flexDiv">
                      <img src="../assets/images/newImg/laji.png">
                      <div class="normalList">
                        <p><CountTo class="mainColor title34" :startVal='saveLajiZhiliData.siteNum' :endVal='lajiZhiliData.siteNum' :duration='2000' />个</p>
                        <p>站点</p>
                      </div>
                    </div>
                    <div class="lajiNum flexDiv" style="width:40%">
                      <img src="../assets/images/newImg/rongliang.png">
                      <div class="normalList">
                        <p><CountTo class="mainColor title34" :startVal='saveLajiZhiliData.totalLoad' :decimals="2" :endVal='lajiZhiliData.totalLoad' :duration='2000' />万升</p>
                        <p>容量</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flexDiv" style="margin-top: 6px;align-items: flex-start;">
                  <div class="three-levelCon" style="width:50%">
                    <div class="three-levelTitle flexDiv" style="">
                      <img src="../assets/images/titleImg/subLaji02.png">
                      垃圾处置信息
                    </div>
                    <div style="width:100%;height:154px;margin: 14px 0 4px 0;">
                      <!-- <pie :lajipiData="lajipiData"></pie> -->
                      <newpietwo :lajipiData="lajipiData"></newpietwo>
                    </div>
                  </div>
                  <div class="three-levelCon widAll" style="width:50%">
                    <div class="three-levelTitle flexDiv" style="">
                      <img src="../assets/images/titleImg/subJinsanyue.png">
                      垃圾清理数量
                    </div>
                    <div class="flexDiv" style="margin: 14px 0;">
                      <div style="width:100%" v-for="(ld, index) in Last3monthsData" :key="index+'ld'" class="flexDiv">
                        <img src="../assets/images/newImg/oneLevelImg.png" style="width:18%;" v-if="index == 0">
                        <img src="../assets/images/newImg/twoLevelImg.png" style="width:18%;" v-if="index == 1">
                        <img src="../assets/images/newImg/threeLevelImg.png" style="width:18%;" v-if="index == 2">
                        <div style="width:80%;margin-left: 2%">
                          <p style="text-align:left;">{{ld.businessName}}</p>
                          <p style="color:white;text-align:left;margin:-12px 0 0;">
                            <CountTo :startVal='startLast3monthsData[index].tonnage' :endVal='ld.tonnage' :duration='3000' class="title34"/>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentRight02 flexDiv" style="height: 100%;align-content: space-between;" v-if="dl==5" :class="moduleFour?'daoxu':''">
              <div class="newModule modelBg06" @click="showIframeFun('37')">
                <div class="newModuleTitle newModuleTitle06">
                  重大工程治理
                  <div class="exchangeIcon" @click.stop="moduleFour = !moduleFour">
                    <img src="../assets/images/exchange.png">
                  </div>
                  <div class="lookIcon">
                    <img src="../assets/images/lookIcon.png">
                  </div>
                </div>
                <div class="flexDiv" style="width:100%;">
                  <div class="zdCls flexDiv title28" style="">
                    重大工程总数：
                    <CountTo :startVal='startGcNum' :endVal='endGcNum' :duration='3000' style="font-size:44px;color:#f3cd6c" />
                  </div>
                  <div class="three-levelCon widAll" style="margin-top: 14px;height: 142px">
                    <siluan ref="siluan" id="bottom_3" :gcLineData="gcLineData"></siluan>
                  </div>
                  <div class="three-levelCon widAll" style="margin-top: 14px;">
                    <div class="three-levelTitle flexDiv" style="">
                      <img src="../assets/images/titleImg/subGongcheng.png">
                      工程类型分析
                    </div>
                    <div style="width:100%;padding:14px;">
                      <gongchengEchart :MajorConfigData="MajorConfigData" style="width:100%;height:126px;"></gongchengEchart>
                    </div>
                  </div>
                </div>
              </div>
              <div class="newModule modelBg07" @click="showIframeFun('38')">
                <div class="newModuleTitle newModuleTitle07">
                  矿山治理
                  <div class="exchangeIcon" @click.stop="moduleFour = !moduleFour">
                    <img src="../assets/images/exchange.png">
                  </div>
                  <div class="lookIcon">
                    <img src="../assets/images/lookIcon.png">
                  </div>
                </div>
                <div class="flexDiv juspace">
                  <div class="flexDiv kfNum">
                    <img src="../assets/images/newImg/kuangshan01.png">
                    <div class="normalList">
                      <CountTo :startVal='0' :endVal='quanshiKuNum' :duration='3000' class="title34 mainColor"/>
                      <p class="">全市矿山</p>
                    </div>
                  </div>
                  <div class="flexDiv kfNum">
                    <img src="../assets/images/newImg/kuangshan02.png">
                    <div class="normalList">
                      <CountTo :startVal='0' :endVal='weikaungKuNum' :duration='3000' class="title34 mainColor"/>
                      <p class="">尾矿山</p>
                    </div>
                  </div>
                  <div class="flexDiv kfNum">
                    <img src="../assets/images/newImg/kuangshan03.png">
                    <div class="normalList">
                      <CountTo :startVal='0' :endVal='yinhuanKuNum' :duration='3000' class="title34 mainColor"/>
                      <p class="">地质隐患点</p>
                    </div>
                  </div>
                  <div class="flexDiv kfNum">
                    <img src="../assets/images/newImg/kuangshan04.png">
                    <div class="normalList">
                      <CountTo :startVal='0' :endVal='lishizaihaidian' :duration='3000' class="title34 mainColor"/>
                      <p class="">历史灾害点</p>
                    </div>
                  </div>
                </div>
                <div class="three-levelCon widAll" style="margin-top: 14px;">
                  <div class="three-levelTitle flexDiv">
                    <img src="../assets/images/titleImg/subWeikuang.png">
                    尾矿库数量
                  </div>
                  <div style="width:100%;height:180px;" class="flexDiv">
                    <div style="width: 50%;height:100%">
                      <radar-chart ref="chart4" id="left_4" :weikaungData="weikaungData"></radar-chart>
                    </div>
                    <div style="width: 40%;height:100%;padding:12px" class="normalList">
                      <div class="flexDiv " style="padding:4px 0;color:#9bc3d4;" v-for="(kei, index) in weikaungData.key" :key="'sd'+index">
                        <p style="width: 50%" class="textCenter">{{kei}}</p>
                        <p style="width: 50%" class="textCenter">{{weikaungData.values[index]}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="rightFloatItem rightFloatItem1">
          </div> -->
          <!-- <div class="rightFloatItem rightFloatItem2">
          </div> -->
          <!-- <div class="rightFloatItem rightFloatItem3">
          </div> -->
          <!-- <div class="rightFloatItem rightFloatItem4">
          </div> -->
          <!-- <div class="rightFloatItem rightFloatItem5">
          </div> -->
        <!-- </div> -->
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import siluan from './echarts/siluan';
import echarts3 from './echarts/echarts3';
import echarts4 from './echarts/echarts4';
import newWeifa2 from './echarts/newWeifa2';
import echarts8 from './echarts/echarts8';
import siluan2 from './echarts/siluan2';
import gongchengEchart from './echarts/gongchengEchart';
import radarChart from './echarts/radar';
import newpieone from './echarts/newpieone';
import newpietwo from './echarts/newpietwo';
// import newWeifa from './echarts/newWeifa';
// import pie from './echarts/pie';

import CountTo from 'vue-count-to' 
import draggable from 'vuedraggable'
export default {
  name: 'test',
  components: {
    CountTo,
    draggable,

    siluan,
    echarts3,
    echarts4, 
    newWeifa2, 
    echarts8, 
    siluan2, 
    gongchengEchart,
    radarChart, 
    newpieone,
    newpietwo,

    // 3d图表
    // newWeifa, 
    // pie,  
  },
  filters: {
    direction(value) {
      // temperature: '12.4℃', direction: '东北风', probability: '0.0mm', skycon: '晴'
      return JSON.parse(value).direction
    },
    tianqiFliter(value) {
      return JSON.parse(value).skycon+' / '+JSON.parse(value).temperature
    },
    jiangshuil(value){
      return JSON.parse(value).probability
    }
  },
  data() {
    return {
      timeSEv: 0,
      webSocket: null,
      showIframe: false,
      iframeSrc: '',
      sidebarDialDataOptions: {
        animation: 300,
        handle: ".rightFloatItem",   // 拖拽对象类名
        group: "navList",
        ghostClass: "ghost",
        chosenClass: "sortable",
        forceFallback: true,
        filter: ".addBanner",
      },
      draggablelist: [1,2,3,4,5],
      itemDra: [1,2],
      itemDra2: [1,2],
      itemDra3: [1,2],
      itemDra4: [1,2],
      resizeFn: null,
      duration: 3000,
      
      // <!--  乱砍盗伐监管图斑   lkfdCountList  -->
      lkfdDateList: [],
      lkfdCountList: [],
      // 河湖治理 -- 四乱类型分析占比
      siluanDataSend: [],
      // 河湖治理","desc":"四乱七天内统计分析（按日期）  hehuSiLDetailData
      hehuSiLDetailData: [],
      // 河湖治理   四乱变化分析（所有使时间按年，月份）   hehuSLBHDateList   hehuSLBHNumList
      hehuSLBHDateList: [],
      hehuSLBHNumList: [],
      hehuData: {
        dateList: [],
        numlist: []
      },
      // 垃圾治理 垃圾站点统计(村庄数量站点数量，容量)
      lajiZhiliData: {
        villageNum: 0,
        siteNum: 0,
        totalLoad: 0,
        isdayu: false,
      },
      saveLajiZhiliData: {
        villageNum: 0,
        siteNum: 0,
        totalLoad: 0,
        isdayu: false,
      },
      // 林草治理 火点数  saveFireData   "today":0,"yesterday":1
      fireData: {
        today: 0,
        yesterday: 0,
      },
      saveFireData: {
        today: 0,
        yesterday: 0,
      },
      // 林草治理   火点信息  
      fireDetailData: [],
      // 两违治理  林地、耕地 数量   liangweiData   crops   woodland
      liangweiData: {
        cropsNum: 0,
        cropsPer: 0,
        woodlandNum: 0,
        woodlandPer: 0,
      },
      liangweiParData: [],
      // 两违治理   柱状图  林地、耕地 数量  
      liangweiBarData: [],
      // 矿山治理 矿山、尾矿库、地质隐患点 数量 
      lishizaihaidian: 0,
      weikaungKuNum: 0,
      quanshiKuNum: 0,
      yinhuanKuNum: 0,
      // // 矿山治理  尾矿库数量
      weikaungData:  {
        values:[],
        key:[]
      },
      // 重大工程数量
      startGcNum: 0,
      endGcNum: 0,
      gcLineData: [],
      // 垃圾统计信息
      lajipiData: [],
      // 近三月处理数量
      startLast3monthsData: [
        {tonnage: 0},
        {tonnage: 0},
      ],
      Last3monthsData: [
        {tonnage: 0},
        {tonnage: 0},
      ],
      // 虫草信息
      startwormGrassFacility: {detectTotal: 0, runTotal: 0, total: 0},
      wormGrassFacility: {detectTotal: 0, runTotal: 0, total: 0},
      wormGrassList: [],
      // 经纬度、行政区划负责人、时间
      animUp: false,
      firePointconfigData: [],
      firePointconfig: {
        // '可信度',  , '地表类型'
        header: ['经纬度', '行政区划', '火灾等级', '观测时间'],
        data: [],
        columnWidth: [150, , ,],
        rowNum: 5,    // 表列数
        // headerBGC: '#152f65', // 表头背景色
        oddRowBGC: 'transparent', // 奇数行背景色
        evenRowBGC: 'transparent',   // 偶数行背景色
        waitTime: 2000,    // 轮播时间间隔(ms)
      },
      mapFdData: [],
      // 重点工程
      MajorConfigData: {
        nameList: [], 
        countList: []
      },
      MajorConfig: {
        data: [
          // { name: '学校', value: 55 },
          // { name: '机场', value: 120 },
          // { name: '地铁', value: 71 },
          // { name: '桥梁', value: 66 },
          // { name: '公路', value: 80 },
          // { name: '乡村', value: 35 },
          // { name: '游泳馆', value: 15 },
          // { name: '水库', value: 35 },
        ],
        img: [
          require('../assets/images/xuexiao.png'),
          'http://datav.jiaminghi.com/img/conicalColumnChart/2st.png',
          'http://datav.jiaminghi.com/img/conicalColumnChart/3st.png',
          'http://datav.jiaminghi.com/img/conicalColumnChart/4st.png',
          'http://datav.jiaminghi.com/img/conicalColumnChart/5st.png',
          'http://datav.jiaminghi.com/img/conicalColumnChart/6st.png',
          'http://datav.jiaminghi.com/img/conicalColumnChart/7st.png'
        ],
        showValue: true,   // 显示数值
        fontSize: 14,    //	文字大小	Number	---	12
        columnColor: 'rgba(0, 194, 255, 0.4)',   //柱颜色
        textColor: '#fff',    // 文字颜色
        // imgSideLength	图片边长	Number	---	30
        // showValue	显示数值	Boolean	---	false
      },
      // 矿
      kuangConfig01: {
        data: [55],
        shape: 'round',
        // colors:'', //	水位图配色	Array<String>	[3]	[4]
        // waveNum: 5,  //	波浪数量	Number	---	3
        // waveHeight: 10,  //	波浪高度	Number	---	40
        // waveOpacity: 0.6, //	波浪透明度	Number	---	0.4
      },
      kuangConfig02: {
        data: [46],
        shape: 'round',
      },
      kuangConfig03: {
        data: [46],
        shape: 'round',
      },
      kuangConfig04: {
        data: [46],
        shape: 'round',
      },
      kuangConfig05: {
        data: [46],
        shape: 'round',
      },
      kuangConfig06: {
        data: [46],
        shape: 'round',
      },
      moduleTwo: false,
      moduleThree: false,
      moduleFour: false,
      moduleFive: false,
      closeNum: 0,
      firstData: {},
      changeData: {},
      time1: '',
      time2: '',
      currentTime: '',
      timer: '',
      timer2: '',
    }
  },
  computed: {
  },
  beforeUnmount() {
  },
  methods: {
    updateTime() {
      var that = this;
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
      var hour = this.currentTime.split(":")[0];
      var mintu = this.currentTime.split(":")[1];
      var reload = window.localStorage.getItem('reload') || '';
      if((hour == '3' || hour == '03')){
        if(reload != 'reload'){
          this.mainCOn = false;
          if(this.time1){
            window.clearTimeout(this.time1);
          }
          window.localStorage.setItem("reload", 'reload');
          var time = new Date().getTime();
          window.location.reload(true);
        }
      } else if(reload == 'reload'){
        window.localStorage.removeItem('reload');
      }
    },
    gundongFun(opj) {
      var that = this;
      $(opj).find('ul').animate({
        // 你的动画属性
        marginTop: "-32px"
      }, 600, function () {
        // 动画完成后执行的回调函数
        // 其他可能需要执行的清理工作
        $(this).css({ marginTop: "0px" });
        var firstLi = $(this).find('li:first'); // 获取第一个 li 元素
        firstLi.detach(); // 从当前位置移除 li 元素
        firstLi.appendTo($(this));
        // $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
        $(this).stop(); // 停止当前正在进行的动画
      }).queue(function() {
        // 如果有更多动画要执行，可以在这里排队
        // 注意这个 queue 函数可以用来在动画完成后连续执行多个动画
        $(this).dequeue(); // 继续执行队列中的下一个动画
      });
      if(this.time1){
        window.clearTimeout(this.time1);
      }
      this.time1 = setTimeout(()=>{
        that.gundongFun("div.rzPointClsGundong03") 
      }, 6000)
    },
    connectWebSocket() {
      // 假设WebSocket服务器地址是ws://localhost:8080
      this.webSocket = new WebSocket('ws://47.101.217.219:8080');
      // this.webSocket = new WebSocket('ws://192.168.100.119:8080');
 
      this.webSocket.onopen = () => {
        // console.log('WebSocket 连接成功');
      };
 
      this.webSocket.onmessage = (message) => {
        this.setData(message.data);
        // console.log('收到消息:', message.data);
      };
 
      this.webSocket.onerror = (error) => {
        console.error('WebSocket 出错:', error);
        // this.reconnect();
      };
 
      this.webSocket.onclose = () => {
        // console.log('WebSocket 连接关闭');
        this.reconnect();
      };
    },
    setData(val){
      var data = JSON.parse(val);
      var that = this;
      // 林草治理--乱砍盗伐
      if(data.num == 1){
        // 操作成功
        if(data.data.code == 200){
          var dateList = [];
          var countList = [];
          for(var key in data.data.data){
            dateList.push(data.data.data[key].date);
            countList.push(data.data.data[key].count);
          }
          this.lkfdDateList = dateList;
          this.lkfdCountList = countList;
          this.updateTime();
        }
      }
      // 河湖治理   四乱类型分析
      if(data.num == 2){
        // 操作成功
        if(data.data.code == 200){
          var typeList = [];
          for(var key in data.data.data){
            typeList.push({
              value: data.data.data[key].num,
              name: data.data.data[key].typeName
            });
          }
          this.siluanDataSend = typeList;
        }
      }
      // 河湖治理","desc":"四乱七天内统计分析（按日期）  hehuSiLDetailData
      if(data.num == 3){
        // 操作成功
        if(data.data.code == 200){
          this.hehuSiLDetailData = data.data.data;
        }
      }
      // 河湖治理   四乱变化分析（所有使时间按年，月份）
      if(data.num == 4){
        // 操作成功
        if(data.data.code == 200){
          var countTimeList = [];
          var slnumList = [];
          for(var key in data.data.data){
            countTimeList.push(data.data.data[key].countTime);
            slnumList.push(data.data.data[key].num);
          }
          this.hehuData = {
            dateList: countTimeList,
            numlist: slnumList
          }
        }
      }
      // 垃圾治理 垃圾站点统计(村庄数量站点数量，容量)
      if(data.num == 5){
        // 操作成功  "data":{"villageNum":238,"siteNum":22,"totalLoad":43204276}
        if(data.data.code == 200){
          this.saveLajiZhiliData = JSON.parse(JSON.stringify(this.lajiZhiliData));
          var setData = data.data.data;
          setData.totalLoad = Number((setData.totalLoad / 10000 ).toFixed(2));
          setData.isdayu = setData.totalLoad > 10000;
          this.lajiZhiliData = setData;
        }
      }
      // 林草治理 火点数  saveFireData
      if(data.num == 6){
        // 操作成功 "data":{"today":0,"yesterday":1}
        if(data.data.code == 200){
          this.saveFireData = JSON.parse(JSON.stringify(this.fireData))
          this.fireData = data.data.data;
        }
      }
      if(data.num == 7){
        // 操作成功 "data":{"today":0,"yesterday":1}
        if(data.data.code == 200){
          // rows    tfpLongitude  tfpLatitude
          if(data.data.rows && data.data.rows.length > 0){
            var fireListD = data.data.rows;
            var data = [];
            var mapFdData = [];
            for(var key in fireListD){
              var item = [];
              var oneData = fireListD[key].tfpLongitude+'/'+fireListD[key].tfpLatitude;
              item.push(oneData);
              item.push(fireListD[key].tfpAdministrativeName);
              item.push(fireListD[key].checkStatus);
              item.push(fireListD[key].tfpTime);
              mapFdData.push({
                tfpAdministrativeName: fireListD[key].tfpAdministrativeName,
                tfpPlace: fireListD[key].tfpPlace,
                checkStatus: fireListD[key].checkStatus,
                tfpTime: fireListD[key].tfpTime
              })
              data.push(item);
            }
            this.firePointconfigData = data;
            this.$nextTick(()=>{
              that.gundongFun("div.rzPointClsGundong03")
              // var mit = setInterval(() => { that.gundongFun("div.rzPointClsGundong03") }, 4000);
              // $('div.rzPointClsGundong03 ul').find('li').mousemove(function () {
              //   clearInterval(mit);
              // }).mouseout(function () { 
              //   mit = setInterval(() => { that.gundongFun("div.rzPointClsGundong03") }, 4000);
              // });
            })

            this.mapFdData = mapFdData;
          }
        }
      }
      // 林草治理   火点信息  fireDetailData
      if(data.num == 8){
        if(data.data.code == 200){
          this.fireDetailData = data.data.data;
        }
      }
      // 两违治理  林地、耕地 数量   liangweiData   crops   woodland
      if(data.num == 9){
        if(data.data.code == 200){
          console.log(data.data.data,'===占地类型统计data.data.data')
          this.liangweiParData = data.data.data;
          // "data":[{"name":"crops","count":676},{"name":"woodland","count":2183}]
          for(var key in data.data.data){
            if(data.data.data[key].name == 'crops'){
              this.liangweiData.cropsNum = data.data.data[key].count;
            }
            if(data.data.data[key].name == 'woodland'){
              this.liangweiData.woodlandNum = data.data.data[key].count;
            }
          }
          var allNum = Number(this.liangweiData.cropsNum) + Number(this.liangweiData.woodlandNum)
          this.liangweiData.cropsPer = ((this.liangweiData.cropsNum) / allNum * 100).toFixed(2);
          this.liangweiData.woodlandPer = ((this.liangweiData.woodlandNum) / allNum * 100).toFixed(2);
        }
      }
      // 两违治理   柱状图  林地、耕地 数量  liangweiBarData
      if(data.num == 10){
        if(data.data.code == 200){
          this.liangweiBarData = data.data.data;
        }
      }
      // 矿山治理 矿山、尾矿库、地质隐患点 数量
      if(data.num == 11){
        if(data.data.code == 200){
          for(var key in data.data.data){
            if(data.data.data[key].label == '历史灾害点'){
              this.lishizaihaidian = data.data.data[key].data.count
            }
            if(data.data.data[key].label == '尾矿库'){
              this.weikaungKuNum = data.data.data[key].data.count
            }
            if(data.data.data[key].label == '全市矿山'){
              this.quanshiKuNum = data.data.data[key].data.count
            }
            if(data.data.data[key].label == '地质隐患点'){
              this.yinhuanKuNum = data.data.data[key].data.count
            }
          }
        }
      }
      // 矿山治理  尾矿库数量     {"data":{"values":[6,16,15,17],"key":["拟闭库","停产","在建","生产"]}}}
      if(data.num == 12){
        if(data.data.code == 200){
          this.weikaungData = data.data.data;
        }
      }
      // 重大工程数量   13
      if(data.num == 13){
        this.startGcNum = 0;
        this.endGcNum = 0;
        if(data.data.code == 200){
          this.startGcNum = JSON.parse(JSON.stringify(this.endGcNum));
          this.endGcNum = data.data.data;
        }
      }
      // 重大工项目数，投资基金   14
      if(data.num == 14){
        if(data.data.code == 200){
          this.gcLineData = data.data.data.monthBooks;
        }
      }
      // 重大工工程类分析   15
      if(data.num == 15){
        if(data.data.code == 200){
          // var dataH = [];
          var nameList = [];
          var countList = [];
          for(var i = 0; i<data.data.data.length; i++){
            nameList.push(data.data.data[i].itemTypeName);
            countList.push(data.data.data[i].typeCount);
          }
          this.MajorConfigData = {
            nameList, 
            countList
          }
        }
      }
      // 垃圾类型和占比
      if(data.num == 16){
        if(data.data.code == 200){
          if(data.data.data && data.data.data.length > 0){
            var deh = data.data.data;
            for(var key in deh){
              deh[key].value = deh[key].count;
              if(deh[key].garbageType == 1){
                deh[key].garbageName = '工业垃圾';
                deh[key].name = '工业垃圾';
              }
              if(deh[key].garbageType == 2){
                deh[key].garbageName = '建筑垃圾';
                deh[key].name = '建筑垃圾';
              }
              if(deh[key].garbageType == 3){
                deh[key].garbageName = '生活垃圾';
                deh[key].name = '生活垃圾';
              }
              if(deh[key].garbageType == 4){
                deh[key].garbageName = '河道垃圾';
                deh[key].name = '河道垃圾';
              }
            }
            this.lajipiData= deh;
          }
        }
      }
      // 近三月处理数量
      if(data.num == 17){
        if(data.data.code == 200){
          this.startLast3monthsData = JSON.parse(JSON.stringify(this.Last3monthsData));
          this.Last3monthsData = data.data.data;
        }
      }
      // 虫情站统计   18
      if(data.num == 18){
        if(data.data.code == 200){
          this.startwormGrassFacility = this.wormGrassFacility;
          this.wormGrassFacility = data.data.data;
        }
      }
      // 虫情站统计列表   19
      if(data.num == 19){
        if(data.data.code == 200){
          this.wormGrassList = data.data.data;
        }
      }
      // 林草治理	31	跳转的url
      // 乱砍乱伐	32	跳转的url
      // 有害生物	33	跳转的url
      // 两违治理	34	跳转的url
      // 河湖治理	35	跳转的url
      // 垃圾治理	36	跳转的url
      // 重大工程	37	跳转的url
      // 矿山治理	38	跳转的url
      if(data.num == 31 || data.num == 32 || data.num == 33 || data.num == 34 || data.num == 35 || data.num == 36 || data.num == 37 || data.num == 38){
        this.iframeSrc = data.data.url;
        this.showIframe = true;
      }
    },
    reconnect(){
      return;
      if(this.time2){
        window.clearTimeout(this.time2)
      }
      this.time2 = setTimeout(() => {
        if (!this.webSocket || this.webSocket.readyState === WebSocket.CLOSED) {
          this.connectWebSocket(); // 尝试重新连接
        }
      }, 2000); // 等待2秒后重试
    },
    showIframeFun(type){
      if (this.webSocket && this.webSocket.readyState === WebSocket.OPEN) {
        // console.log('showIframeFunshowIframeFun')
        this.webSocket.send(
          JSON.stringify({num: Number(type)})
        );
      }
    },
    closeIframeFun(){
      this.showIframe = false;
    },
  },
  mounted() {
    document.title = '凤城市基层社会治理数字化应用平台';
    // document.title='测试 222'
    this.connectWebSocket();
  },
}
</script>

<style lang="less">
</style>
