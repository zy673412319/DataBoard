<template>
  <div class="allPage">
    <div class="headerCls indexHeaderBg flexDiv" @click="closeIframeFun()">
      凤城市数据可视化系统
    </div>
    <div style="height: calc(100% - 160px)">
      <dv-border-box-1>
        <div class="flexDiv conetntDiv juspace" style="align-items: self-start;">
          <draggable v-model="draggablelist"  handle=".rightFloatItem"  animation="300" 
                style="width:100%;height:100%;" class="flexDiv juspace">
            <div class="rightFloatItem " v-for="(dl,index) in draggablelist" :key="index" :class="'rightFloatItem'+dl">
              <div class="contentLeft flexDiv" style="height: 100%;align-content: space-between;" v-if="dl==1" @click="showIframeFun('31')">
                <!-- 林草治理 -->
                <div class="newModule flexDiv modelBg01" style="height: 100%;">
                  <div class="newModuleTitle newModuleTitle01">
                    林草治理
                    <div class="lookIcon">
                      <img src="../assets/images/lookIcon.png">
                    </div>
                  </div>
                  <draggable v-model="itemDra4"  handle=".dragareaFour"  animation="300" style="width:100%;" class="flexDiv juspace alBetween">
                    <div class="dragareaFour widAll" v-for="(fourDl,index) in itemDra4" :key="index+'fourDl'">
                      <div class="three-levelCon widAll" v-if="fourDl==1">
                        <div class="three-levelTitle flexDiv">
                          <img src="../assets/images/titleImg/subHuodian.png">
                          疑似火点信息
                          <dv-decoration-3 style="width:130px;height:20x;" />
                        </div>
                        <div class="flexDiv">
                          <div class="flexDiv" style="width: 26%;margin: 14px 0">
                            <div class="numBig flexDiv" style="">
                              <img src="../assets/images/fire01.png" style="width: 98px">
                              <div>
                                <CountTo class="mainColor title34" :startVal='saveFireData.today' :endVal='fireData.today' :duration='duration' />
                                <p>当日火点数</p>
                              </div>
                            </div>
                            <div class="numBig flexDiv" style="">
                              <img src="../assets/images/fire02.png" style="width: 98px">
                              <div>
                                <CountTo class="blueColor title34" :startVal='saveFireData.yesterday' :endVal='fireData.yesterday' :duration='duration' />
                                <p>对比昨日火点数</p>
                              </div>
                            </div>
                          </div>
                          <div class="" style="width:68%;">
                            <dv-scroll-board :config="firePointconfig" style="width:100%;height:190px" class="firePointCls" ref="scrollBoard"/>
                          </div>
                        </div>
                        <div class="flexDiv juspace">
                          <div class="fireInfo" style="" v-for="(fl,index) in fireDetailData" :key="'fl'+index">
                            <div class="fireInfoHead flexDiv">
                              <img src="../assets/images/time.png" style="width:20px;margin-right: 4px">
                              {{fl.requireFinishTime}}
                            </div>
                            <div class="flexDiv fireInfoCon">
                              <div style="width: 30%;text-align:right;padding-right: 30px;">
                                <img src="../assets/images/huo2.png" style="width:80px">
                              </div>
                              <div style="width: 70%">
                                <p>{{fl.tfpPlace}}</p>
                                <p>地表类型：{{fl.surfaceType}}</P>
                                <p>火灾等级：<span class="title16 oneLevel">{{fl.checkStatus}}</span></P>
                              </div>
                            </div>
                            <dv-decoration-10 style="width:100%;height:5px;" />
                            <div class="fireInfoQh">
                              <div class="flexDiv">
                                <div class="leftDiv">经度：{{fl.tfpLongitude}}°</div>
                                <div>风向：{{fl.weather | direction}}</div>
                              </div>
                              <div class="flexDiv">
                                <div class="leftDiv">纬度：{{fl.tfpLatitude}}°</div>
                                <div>天气：{{fl.weather | tianqiFliter}}</div>
                              </div>
                              <div class="flexDiv">
                                <div class="leftDiv">风向：{{fl.weather | direction}}</div>
                                <div>可信度：{{fl.tfpReliability}}</div>
                              </div>
                            </div>
                            <dv-decoration-10 style="width:100%;height:5px;" />
                            <div class="fireInfoQh">
                              <div class="flexDiv">
                                行政区划：{{fl.tfpAdministrativeName}}
                              </div>
                              <div class="flexDiv">
                                任务状恋：{{fl.status}}
                              </div>
                              <div class="flexDiv">
                                处置时同：{{fl.checkRequireTime}}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="three-levelCon widAll" v-if="fourDl==2" @click="showIframeFun('33')">
                        <div class="three-levelTitle flexDiv">
                          <img src="../assets/images/titleImg/subYouhai.png">
                          有害生物检测线索列信息
                          <dv-decoration-3 style="width:130px;height:20x;" />
                        </div>
                        <div style="width:100%;padding: 14px">
                          <div class="flexDiv text12 colorWhite textCenter jusAround" style="margin-bottom:4px;">
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
                            <div style="width:100%;height:136px;overflow: hidden;">
                              <vue-seamless-scroll :data="wormGrassList" class="seamless-warp new-listCon" :class-option="classOption">
                                <div class="flexDiv text12 youhaiList" v-for="(rd,index) in wormGrassList" :key="index" style="padding:4px 0;color:#9bc3d4;">
                                  <p style="width: 13%" class="textCenter">{{rd.pestName}}</p>
                                  <p style="width: 13%" class="textCenter">{{rd.wormState}}</p>
                                  <p style="width: 18%" class="textCenter">{{rd.district}}</p>
                                  <p style="width: 18%" class="textCenter">{{rd.findTime}}</p>
                                  <p style="width: 38%" class="textCenter">{{rd.location}}</p>
                                </div>
                              </vue-seamless-scroll>
                            </div>
                          </div>
                          <!-- <echarts2 ref="echarts2"></echarts2> -->
                        </div>
                      </div>
                    </div>
                  </draggable>
                </div>
              </div>
              <div class="contentLeft flexDiv" style="height: 100%;align-content: space-between;" v-if="dl==2" :class="moduleTwo?'daoxu':''">
                <!-- <draggable v-model="itemDra3"  handle=".dragareaThree"  animation="300" style="width:100%;height:100%;" class="flexDiv juspace alBetween">
                  <div class="dragareaThree widAll" v-for="(threeDl,index) in itemDra3" :key="index+'threeDl'"> -->
                    <!-- 乱砍盗伐监管图斑  v-if="threeDl==1" -->
                    <div class="newModule modelBg02" @click="showIframeFun('32')">
                      <div class="newModuleTitle newModuleTitle02">
                        林草治理--乱砍乱伐
                        <div class="exchangeIcon" @click="moduleTwo = !moduleTwo">
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
                          <dv-decoration-3 style="width:130px;height:20x;" />
                        </div>
                        <div style="width:100%;height: 180px">
                          <echarts4 :lkfdDateList="lkfdDateList" :lkfdCountList="lkfdCountList"></echarts4>
                        </div>
                      </div>
                    </div>
                    <!-- 两违治理  v-if="threeDl==2" -->
                    <div class="newModule modelBg03" @click="showIframeFun('34')">
                      <div class="newModuleTitle newModuleTitle03">
                        两违治理
                        <div class="exchangeIcon" @click="moduleTwo = !moduleTwo">
                          <img src="../assets/images/exchange.png">
                        </div>
                        <div class="lookIcon">
                          <img src="../assets/images/lookIcon.png">
                        </div>
                      </div>
                      <div class="three-levelCon widAll" style="margin-top: 10px;">
                        <div class="three-levelTitle flexDiv">
                          <img src="../assets/images/titleImg/subLiangwei.png">
                          两违统计
                          <dv-decoration-3 style="width:130px;height:20x;" />
                        </div>
                        <div style="width:100%;height: 160px;margin:6px 0;" class="flexDiv jusAround">
                          <div style="width: 360px;height: 160px;" class="newWeifabg">
                            <newWeifa :liangweiParData="liangweiParData"></newWeifa>
                          </div>
                          <div class="liangweiData flexDiv">
                            <img src="../assets/images/newImg/lw01.png">
                            <div class="normalList">
                              <p class="blueColor title34">{{liangweiData.woodlandPer}}%</P>
                              <p>林地</P>
                            </div>
                          </div>
                          <div class="liangweiData flexDiv">
                            <img src="../assets/images/newImg/lw02.png">
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
                          <dv-decoration-3 style="width:130px;height:20x;" />
                        </div>
                        <div style="width:100%;height:428px;">
                          <newWeifa2 :liangweiBarData="liangweiBarData"></newWeifa2>
                        </div>
                      </div>
                    </div>
                  <!-- </div>
                </draggable> -->
              </div>
              <div class="contentCenter flexDiv" style="height: 100%;position: relative;" v-if="dl==3">
                <!-- <mapDitu ref="map_chartsN"></mapDitu> -->
                <div class="mapDiv">
                  <div class="mapDiv01">
                    <img src="../assets/images/map.png" />
                  </div>
                   <!-- @click="showIframeFun(dl)" -->
                  <div class="mapDiv02">
                    <chinaMap2 ref="map_chartsN" :mapFdData="mapFdData"></chinaMap2>
                  </div>
                  <div class="lookIconmap">
                    <img src="../assets/images/lookIcon.png">
                  </div>
                  <!-- <chinaMap ref="map_chartsN"></chinaMap> -->
                </div>
                <div class="mapData flexDiv" style="display:none;">
                  <div class="mapDataCon">
                    <div class="flexDiv">
                      <img src="../assets/images/huo2.png" style="width:30px;margin-right:6px;">
                      <p>丹东凤城市赛马镇双岭村某厂房，发现<span class="title18 oneLevel">1级</span>火灾，请紧急救助</P>
                    </div>
                    <div class="flexDiv">
                      <img src="../assets/images/huo2.png" style="width:30px;margin-right:6px;">
                      <p>翰墨大街岫凤干洗店，发现<span class="title18 oneLevel">2级</span>火灾，请紧急救助</P>
                    </div>
                    <div class="flexDiv">
                      <img src="https://easyv.assets.dtstack.com/data/assets/f52twmpoi6_1631781935466_4zgkxxi418.png" style="width:30px;margin-right:6px;">
                      <p>凤山街道，<span class="title18 oneLevel">预警</span>将发生特大雨，请注意防汛</P>
                    </div>
                    <div class="flexDiv">
                      <img src="https://easyv.assets.dtstack.com/data/assets/kiwp4v6dzs_1631781853502_e2fjmg2fx.png" style="width:30px;margin-right:6px;">
                      <p>刘家河镇，垃圾清运数达到最高点<span class="title18 oneLevel">7458</span></P>
                    </div>
                    <div class="flexDiv">
                      <img src="https://easyv.assets.dtstack.com/data/assets/0n4ontmyfo_1631781864607_uxuhsis93b.png" style="width:30px;margin-right:6px;">
                      <p>边门镇，发现有害物，请前往查看详情</P>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contentRight02 flexDiv" style="height: 100%;align-content: space-between;" v-if="dl==4" :class="moduleThree?'daoxu':''">
                <!-- <draggable v-model="itemDra"  handle=".dragareaOne"  animation="300" style="width:100%;height:100%;" class="flexDiv juspace alBetween">
                  <div class="dragareaOne widAll" v-for="(oneDl,index) in itemDra" :key="index+'oneDl'"> -->
                    <!--  v-if="oneDl==1" -->
                    <div class="newModule modelBg04" @click="showIframeFun('35')">
                      <div class="newModuleTitle newModuleTitle04">
                        河湖治理
                        <div class="exchangeIcon" @click="moduleThree = !moduleThree">
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
                            <dv-decoration-3 style="width:130px;height:20x;" />
                          </div>
                          <div style="width:100%;height:160px;margin-top:14px;">
                            <!-- siluanDataSend -->
                            <echarts8 :siluanDataSend="siluanDataSend"></echarts8>
                          </div>
                        </div>
                        <div style="width:49%">
                          <div class="three-levelTitle flexDiv" style="">
                            <img src="../assets/images/titleImg/subSiluan02.png">
                            四乱变化监测
                            <dv-decoration-3 style="width:130px;height:20x;" />
                          </div>
                          <div style="width:100%;height:180px;margin-top:14px;">
                            <!-- 河湖治理   四乱变化分析（所有使时间按年，月份）  -->
                            <siluan2 :hehuSLBHDateList="hehuSLBHDateList" :hehuSLBHNumList="hehuSLBHNumList"></siluan2>
                          </div>
                        </div>
                      </div>
                      <div class="three-levelCon widAll" style="margin: 24px 0 0;padding-bottom:24px;">
                        <div class="three-levelTitle flexDiv" style="">
                          <img src="../assets/images/titleImg/subSiluan03.png">
                          四乱详细分析
                          <dv-decoration-3 style="width:130px;height:20x;" />
                        </div>
                        <div style="width:100%;height:180px;">
                          <echarts3 :hehuSiLDetailData="hehuSiLDetailData"></echarts3>
                        </div>
                      </div>
                    </div>
                    <!--  v-if="oneDl==2" -->
                    <div class="newModule modelBg05" @click="showIframeFun('36')">
                      <div class="newModuleTitle newModuleTitle05">
                        垃圾治理
                        <div class="exchangeIcon" @click="moduleThree = !moduleThree">
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
                          <dv-decoration-3 style="width:130px;height:20x;" />
                        </div>
                        <div class="flexDiv jusAround" style="margin: 12px 0 8px 0;">
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
                              <p><CountTo class="mainColor title34" :startVal='saveLajiZhiliData.totalLoad' :endVal='lajiZhiliData.totalLoad' :duration='2000' />万升</p>
                              <p>容量</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flexDiv" style="margin-top: 26px;align-items: flex-start;">
                        <div class="three-levelCon" style="width:50%">
                          <div class="three-levelTitle flexDiv" style="">
                            <img src="../assets/images/titleImg/subLaji02.png">
                            垃圾处置信息
                            <dv-decoration-3 style="width:80px;height:16px;" />
                          </div>
                          <div style="width:100%;height:184px;margin:4px 0;">
                            <pie :lajipiData="lajipiData"></pie>
                            <!-- 3个街道分别为：凤凰城街道、凤山街道、草河街道；18个乡镇分别为：宝山镇、白旗镇、沙里寨镇、红旗镇、蓝旗镇、
                            边门镇、大堡蒙古族乡、东汤镇、石城镇、大兴镇、爱阳镇、赛马镇、弟兄山镇、鸡冠山镇、刘家河镇、通远堡镇、四门子镇、青城子镇。  -->
                          </div>
                        </div>
                        <div class="three-levelCon widAll" style="width:50%">
                          <div class="three-levelTitle flexDiv" style="">
                            <img src="../assets/images/titleImg/subJinsanyue.png">
                            近三月垃圾清理数量
                            <dv-decoration-3 style="width:80px;height:16px;" />
                          </div>
                          <div class="flexDiv" style="margin: 14px 0;">
                            <div style="width:32%">
                              <img src="../assets/images/newImg/oneLevelImg.png" style="width:90px;margin:0 auto;display:block;">
                              <p style="color:white;text-align:center;margin:-12px 0 0;">
                                <CountTo :startVal='startLast3monthsData[0].tonnage' :endVal='Last3monthsData[0].tonnage' :duration='300' class="title34"/>
                              </p>
                            </div>
                            <div style="width:32%">
                              <img src="../assets/images/newImg/twoLevelImg.png" style="width:90px;margin:0 auto;display:block;">
                              <p style="color:white;text-align:center;margin:-12px 0 0;">
                                <CountTo :startVal='startLast3monthsData[1].tonnage' :endVal='Last3monthsData[1].tonnage' :duration='300' class="title34"/>
                              </p>
                            </div>
                            <div style="width:32%">
                              <img src="../assets/images/newImg/threeLevelImg.png" style="width:90px;margin:0 auto;display:block;">
                              <p style="color:white;text-align:center;margin:-12px 0 0;">
                                <CountTo :startVal='startLast3monthsData[2].tonnage' :endVal='Last3monthsData[2].tonnage' :duration='300' class="title34"/>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  <!-- </div>
                </draggable> -->
              </div>
              <div class="contentRight02 flexDiv" style="height: 100%;align-content: space-between;" v-if="dl==5" 
                :class="moduleFour?'daoxu':''">
                <!-- <draggable v-model="itemDra2"  handle=".dragareaTwo"  animation="300" style="width:100%;height:100%;" class="flexDiv juspace alBetween">
                  <div class="dragareaTwo widAll" v-for="(twoDl,index) in itemDra2" :key="index+'twoDl'"> -->
                    <div class="newModule modelBg06" @click="showIframeFun('37')">
                      <div class="newModuleTitle newModuleTitle06">
                        重大工程治理
                        <div class="exchangeIcon" @click="moduleFour = !moduleFour">
                          <img src="../assets/images/exchange.png">
                        </div>
                        <div class="lookIcon">
                          <img src="../assets/images/lookIcon.png">
                        </div>
                      </div>
                      <div class="flexDiv" style="width:100%;">
                        <div class="zdCls flexDiv title28" style="">
                          重大工程总数：
                          <CountTo :startVal='startGcNum' :endVal='endGcNum' :duration='2000' style="font-size:44px;color:#f3cd6c" />
                        </div>
                        <div class="three-levelCon widAll" style="margin-top: 14px;height: 162px">
                          <siluan ref="siluan" id="bottom_3" :gcLineData="gcLineData"></siluan>
                        </div>
                        <div class="three-levelCon widAll" style="margin-top: 14px;">
                          <div class="three-levelTitle flexDiv" style="">
                            <img src="../assets/images/titleImg/subGongcheng.png">
                            工程类型分析
                            <dv-decoration-3 style="width:80px;height:16px;" />
                          </div>
                          <div style="width:100%;padding:14px;">
                            <dv-conical-column-chart :config="MajorConfig" style="width:100%;height:156px;" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="newModule modelBg07" @click="showIframeFun('38')">
                      <div class="newModuleTitle newModuleTitle07">
                        矿山治理
                        <div class="exchangeIcon" @click="moduleFour = !moduleFour">
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
                            <p class="title34 mainColor">{{quanshiKuNum}}</p>
                            <p class="">全市矿山</p>
                          </div>
                        </div>
                        <div class="flexDiv kfNum">
                          <img src="../assets/images/newImg/kuangshan02.png">
                          <div class="normalList">
                            <p class="title34 mainColor">{{weikaungKuNum}}</p>
                            <p class="">尾矿山</p>
                          </div>
                        </div>
                        <div class="flexDiv kfNum">
                          <img src="../assets/images/newImg/kuangshan03.png">
                          <div class="normalList">
                            <p class="title34 mainColor">{{yinhuanKuNum}}</p>
                            <p class="">地质隐患点</p>
                          </div>
                        </div>
                        <div class="flexDiv kfNum">
                          <img src="../assets/images/newImg/kuangshan04.png">
                          <div class="normalList">
                            <p class="title34 mainColor">{{lishizaihaidian}}</p>
                            <p class="">历史灾害点</p>
                          </div>
                        </div>
                      </div>
                      <div class="three-levelCon widAll" style="margin-top: 0px;display:none">
                        <div class="three-levelTitle flexDiv">
                          <img src="../assets/images/titleImg/subWeikuang.png">
                          尾矿库类型
                          <dv-decoration-3 style="width:80px;height:16px;" />
                        </div>
                        <div class="flexDiv" style="justify-content: flex-start;width:100%;flex-wrap: wrap;">
                          <div class="kuangDiv flexDiv">
                            <div class="kuangDivCirCle">
                              <dv-water-level-pond :config="kuangConfig01" style="width:100%;height:100%" />
                            </div>
                            <p class="widAll textCenter">铜</p>
                          </div>
                          <div class="kuangDiv flexDiv">
                            <div class="kuangDivCirCle">
                              <dv-water-level-pond :config="kuangConfig02" style="width:100%;height:100%" />
                            </div>
                            <p class="widAll textCenter">铁</p>
                          </div>
                          <div class="kuangDiv flexDiv">
                            <div class="kuangDivCirCle">
                              <dv-water-level-pond :config="kuangConfig03" style="width:100%;height:100%" />
                            </div>
                            <p class="widAll textCenter">金</p>
                          </div>
                          <div class="kuangDiv flexDiv">
                            <div class="kuangDivCirCle">
                              <dv-water-level-pond :config="kuangConfig04" style="width:100%;height:100%" />
                            </div>
                            <p class="widAll textCenter">铅</p>
                          </div>
                          <div class="kuangDiv flexDiv">
                            <div class="kuangDivCirCle">
                              <dv-water-level-pond :config="kuangConfig05" style="width:100%;height:100%" />
                            </div>
                            <p class="widAll textCenter">锌</p>
                          </div>
                        </div>
                      </div>
                      <div class="three-levelCon widAll" style="margin-top: 14px;">
                        <div class="three-levelTitle flexDiv">
                          <img src="../assets/images/titleImg/subWeikuang.png">
                          尾矿库数量
                          <dv-decoration-3 style="width:80px;height:16px;" />
                        </div>
                        <div style="width:100%;height:214px;" class="flexDiv">
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
                <!-- </draggable>
              </div> -->
            </div>
          </draggable>
        </div>
      </dv-border-box-1>
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
import siluan from './echarts/siluan';
import weifaJZ from './echarts/weifaJZ';
import pie from './echarts/pie';
import echarts2 from './echarts/echarts2';
import echarts3 from './echarts/echarts3';
import echarts4 from './echarts/echarts4';
import zdgczt from './echarts/zdgczt';
import newWeifa from './echarts/newWeifa';
import newWeifa2 from './echarts/newWeifa2';
import echarts8 from './echarts/echarts8';
import radarChart from './echarts/radar';
import siluan2 from './echarts/siluan2';
import siluan3 from './echarts/siluan3';
import mapDitu from './echarts/map';
import chinaMap from './echarts/chinaMap';
import chinaMap2 from './echarts/chinaMap2';
import haihuchart from './echarts/haihuchart';

import draggable from 'vuedraggable'

import CountTo from 'vue-count-to'
export default {
  name: 'test',
  components: {
    siluan, weifaJZ, CountTo, vueSeamlessScroll, pie, echarts2, zdgczt, echarts3,
    echarts4, newWeifa2, newWeifa, echarts8, haihuchart,
    siluan2, radarChart, mapDitu, chinaMap, chinaMap2, siluan3,
    draggable
  },
  filters: {
    direction(value) {
      // temperature: '12.4℃', direction: '东北风', probability: '0.0mm', skycon: '晴'
      return JSON.parse(value).direction
    },
    tianqiFliter(value) {
      return JSON.parse(value).skycon+' / '+JSON.parse(value).temperature
    }
  },
  data() {
    return {
      webSocket: null,
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
      // 垃圾治理 垃圾站点统计(村庄数量站点数量，容量)
      lajiZhiliData: {
        villageNum: 0,
        siteNum: 0,
        totalLoad: 0,
      },
      saveLajiZhiliData: {
        villageNum: 0,
        siteNum: 0,
        totalLoad: 0,
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
        {tonnage: 0},
      ],
      Last3monthsData: [
        {tonnage: 0},
        {tonnage: 0},
        {tonnage: 0},
      ],
      // 虫草信息
      startwormGrassFacility: {detectTotal: 0, runTotal: 0, total: 0},
      wormGrassFacility: {detectTotal: 0, runTotal: 0, total: 0},
      wormGrassList: [],
      // 经纬度、行政区划负责人、时间
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
      closeNum: 0,
      firstData: {},
      changeData: {},
    }
  },
  computed: {
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
    this.connectWebSocket();
    // 每5秒发送一个空消息到WebSocket服务器
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
          this.hehuSLBHDateList = countTimeList;
          this.hehuSLBHNumList = slnumList;
        }
      }
      // 垃圾治理 垃圾站点统计(村庄数量站点数量，容量)
      if(data.num == 5){
        // 操作成功  "data":{"villageNum":238,"siteNum":22,"totalLoad":43204276}
        if(data.data.code == 200){
          this.saveLajiZhiliData = JSON.parse(JSON.stringify(this.lajiZhiliData))
          this.lajiZhiliData = data.data.data;
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
              // item.push(fireListD[key].tfpReliability);
              // item.push(fireListD[key].surfaceType);
              data.push(item);
            }
            const { firePointconfig } = this;
            this.firePointconfig.data = data;
            this.firePointconfig = { ...this.firePointconfig };

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
          this.liangweiData.cropsPer = ((this.liangweiData.cropsNum) / allNum).toFixed(2) * 100;
          this.liangweiData.woodlandPer = ((this.liangweiData.woodlandNum) / allNum).toFixed(2) * 100;
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
        if(data.data.code == 200){
          this.startGcNum = this.endGcNum;
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
          var dataH = [];
          for(var i = 0; i<data.data.data.length; i++){
            dataH.push({
              name: data.data.data[i].itemTypeName,
              value: data.data.data[i].typeCount,
            })
          }
          const { MajorConfig } = this
          this.MajorConfig.data = dataH
          /**
           * 使用ES6拓展运算符生成新的props对象
           * 组件侦知数据变化 自动刷新状态
           */
          this.MajorConfig = { ...this.MajorConfig }
        }
      }
      // 垃圾类型和占比
      if(data.num == 16){
        if(data.data.code == 200){
          this.lajipiData= data.data.data;
        }
      }
      // 近三月处理数量
      if(data.num == 17){
        if(data.data.code == 200){
          this.startLast3monthsData = this.Last3monthsData;
          this.Last3monthsData = data.data.data
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
      setTimeout(() => {
        if (!this.webSocket || this.webSocket.readyState === WebSocket.CLOSED) {
          this.connectWebSocket(); // 尝试重新连接
        }
      }, 2000); // 等待2秒后重试
    },
    changeSetData() {
      var changeData = this.changeData;
    },
    changePaixu4(){
      this.moduleFour = !this.moduleFour;
    },
    showIframeFun(type){
      if (this.webSocket && this.webSocket.readyState === WebSocket.OPEN) {
        console.log('showIframeFunshowIframeFun')
        this.webSocket.send(
          JSON.stringify({num: Number(type)})
        );
      }
    },
    closeIframeFun(){
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
