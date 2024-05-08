<template>
  <div class="allPage">
    <div class="headerCls flexDiv">
      数据大屏
    </div>
    <div style="height: calc(100% - 160px)">
      <dv-border-box-1>
        <div class="flexDiv conetntDiv juspace" style="align-items: self-start;">
          <div class="contentLeft flexDiv" style="height: 100%;align-content: space-between;">
            <!-- 林草治理 -->
            <div class="newModule flexDiv modelBg01" style="height: 100%;">
              <div class="newModuleTitle newModuleTitle01">
                林草治理
              </div>
              <div class="three-levelCon widAll">
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
                        <CountTo class="mainColor title34" :startVal='startVal' :endVal='endVal' :duration='duration' />
                        <p>当日火点数</p>
                      </div>
                    </div>
                    <div class="numBig flexDiv" style="">
                      <img src="../assets/images/fire02.png" style="width: 98px">
                      <div>
                        <CountTo class="blueColor title34" :startVal='startVal' :endVal='endVal' :duration='duration' />
                        <p>对比昨日火点数</p>
                      </div>
                    </div>
                  </div>
                  <div class="" style="width:62%;">
                    <dv-scroll-board :config="firePointconfig" style="width:100%;height:190px" class="firePointCls" />
                  </div>
                </div>
                <div class="flexDiv juspace">
                  <div class="fireInfo" style="">
                    <div class="fireInfoHead flexDiv">
                      <img src="../assets/images/time.png" style="width:20px;margin-right: 4px">
                      2024-04-29 15:25:47
                    </div>
                    <div class="flexDiv fireInfoCon">
                      <div style="width: 30%;text-align:right;padding-right: 30px;">
                        <img src="../assets/images/huo2.png" style="width:80px">
                      </div>
                      <div style="width: 70%">
                        <p>丹东凤城市赛马镇双岭村某厂房</p>
                        <p>地表类型:草地50.34% 耕地46%</P>
                        <p>火灾等级：<span class="title18 oneLevel">1级</span></P>
                      </div>
                    </div>
                    <dv-decoration-10 style="width:100%;height:5px;" />
                    <div class="fireInfoQh">
                      <div class="flexDiv">
                        <div class="leftDiv">经度：124.17°</div>
                        <div>天气：雾</div>
                      </div>
                      <div class="flexDiv">
                        <div class="leftDiv">纬度：40.91°</div>
                        <div>气涨：-18/-2°C</div>
                      </div>
                      <div class="flexDiv">
                        <div class="leftDiv">风向：北风</div>
                        <div>可信度：高</div>
                      </div>
                    </div>
                    <dv-decoration-10 style="width:100%;height:5px;" />
                    <div class="fireInfoQh">
                      <div class="flexDiv">
                        行政区划：寒马镇
                      </div>
                      <div class="flexDiv">
                        任务状恋；处置中
                      </div>
                      <div class="flexDiv">
                        处置时同：2023-12-23
                      </div>
                    </div>
                  </div>
                  <div class="fireInfo" style="">
                    <div class="fireInfoHead flexDiv">
                      <img src="../assets/images/time.png" style="width:20px;margin-right: 4px">
                      2024-04-29 15:25:47
                    </div>
                    <div class="flexDiv fireInfoCon">
                      <div style="width: 30%;text-align:right;padding-right: 30px;">
                        <img src="../assets/images/huo2.png" style="width:80px">
                      </div>
                      <div style="width: 70%">
                        <p>丹东凤城市赛马镇双岭村某厂房</p>
                        <p>地表类型:草地50.34% 耕地46%</P>
                        <p>火灾等级：<span class="title18 twoLevel">2级</span></P>
                      </div>
                    </div>
                    <dv-decoration-10 style="width:100%;height:5px;" />
                    <div class="fireInfoQh">
                      <div class="flexDiv">
                        <div class="leftDiv">经度：124.17°</div>
                        <div>天气：雾</div>
                      </div>
                      <div class="flexDiv">
                        <div class="leftDiv">纬度：40.91°</div>
                        <div>气涨：-18/-2°C</div>
                      </div>
                      <div class="flexDiv">
                        <div class="leftDiv">风向：北风</div>
                        <div>可信度：高</div>
                      </div>
                    </div>
                    <dv-decoration-10 style="width:100%;height:5px;" />
                    <div class="fireInfoQh">
                      <div class="flexDiv">
                        行政区划：寒马镇
                      </div>
                      <div class="flexDiv">
                        任务状恋；处置中
                      </div>
                      <div class="flexDiv">
                        处置时同：2023-12-23
                      </div>
                    </div>
                  </div>
                  <div class="fireInfo" style="">
                    <div class="fireInfoHead flexDiv">
                      <img src="../assets/images/time.png" style="width:20px;margin-right: 4px">
                      2024-04-29 15:25:47
                    </div>
                    <div class="flexDiv fireInfoCon">
                      <div style="width: 30%;text-align:right;padding-right: 30px;">
                        <img src="../assets/images/huo2.png" style="width:80px">
                      </div>
                      <div style="width: 70%">
                        <p>翰墨大街岫凤干洗店</p>
                        <p>地表类型:草地50.34% 耕地46%</P>
                        <p>火灾等级：<span class="title18 threeLevel">3级</span></P>
                      </div>
                    </div>
                    <dv-decoration-10 style="width:100%;height:5px;" />
                    <div class="fireInfoQh">
                      <div class="flexDiv">
                        <div class="leftDiv">经度：124.07°</div>
                        <div>天气：雾</div>
                      </div>
                      <div class="flexDiv">
                        <div class="leftDiv">纬度：40.46°</div>
                        <div>气涨：-18/-2°C</div>
                      </div>
                      <div class="flexDiv">
                        <div class="leftDiv">风向：北风</div>
                        <div>可信度：高</div>
                      </div>
                    </div>
                    <dv-decoration-10 style="width:100%;height:5px;" />
                    <div class="fireInfoQh">
                      <div class="flexDiv">
                        行政区划：寒马镇
                      </div>
                      <div class="flexDiv">
                        任务状恋；处置中
                      </div>
                      <div class="flexDiv">
                        处置时同：2023-12-23
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="three-levelCon widAll" style="margin-top: 4px;">
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
                      <p class="textCenter title24 colorBlue">26</p>
                    </div>
                    <div>
                      <p>运行设备</p>
                      <p class="textCenter title24 colorBlue">23</p>
                    </div>
                    <div>
                      <p>监测到设备</p>
                      <p class="textCenter title24 colorBlue" style="color:#f3cd6c">6</p>
                    </div>
                  </div>
                  <div style="width:100%;">
                    <div class="flexDiv text12 youhaiList" style="color:#9bc3d4;">
                      <p style="width: 25%" class="flexDiv juCenter"><img src="../assets/images/shengwu.png" style="width:22px;">有害生物</p>
                      <p style="width: 24%" class="flexDiv juCenter"><img src="../assets/images/diqu.png" style="width:18px;">责任区</p>
                      <p style="width: 24%" class="flexDiv juCenter"><img src="../assets/images/time.png" style="width:18px;">发现时间</p>
                      <p style="width: 25%" class="flexDiv juCenter"><img src="../assets/images/diqu.png" style="width:18px;">位置</p>
                    </div>
                    <div style="width:100%;height:136px;overflow: hidden;">
                      <vue-seamless-scroll :data="regionConfig.data" class="seamless-warp new-listCon" :class-option="classOption">
                        <div class="flexDiv text12 youhaiList" v-for="(rd,index) in regionConfig.data" :key="index" style="padding:4px 0;color:#9bc3d4;">
                          <p style="width:25%" class="textCenter">{{rd.name}}</p>
                          <p style="width: 24%" class="textCenter">{{rd.value}}</p>
                          <p style="width: 24%" class="textCenter">{{rd.value}}</p>
                          <p style="width: 25%" class="textCenter">
                            <img src="../assets/images/diqu.png" style="width:20px;">
                          </p>
                        </div>
                      </vue-seamless-scroll>
                    </div>
                  </div>
                  <!-- <echarts2 ref="echarts2"></echarts2> -->
                </div>
              </div>

            </div>
          </div>
          <div class="contentLeft flexDiv" style="height: 100%;align-content: space-between;">
            <!-- 乱砍盗伐监管图斑 -->
            <div class="newModule modelBg02">
              <div class="newModuleTitle newModuleTitle02">
                林草治理--乱砍盗伐
              </div>
              <div class="three-levelCon widAll" style="">
                <div class="three-levelTitle flexDiv">
                  <img src="../assets/images/titleImg/subLuankan.png">
                  乱砍盗伐监管图斑
                  <dv-decoration-3 style="width:130px;height:20x;" />
                </div>
                <div style="width:100%;height: 180px">
                  <echarts4></echarts4>
                </div>
              </div>
            </div>
            <!-- 两违治理 -->
            <div class="newModule modelBg03">
              <div class="newModuleTitle newModuleTitle03">
                两违治理
              </div>
              <div class="three-levelCon widAll" style="margin-top: 10px;">
                <div class="three-levelTitle flexDiv">
                  <img src="../assets/images/titleImg/subLiangwei.png">
                  两违统计
                  <dv-decoration-3 style="width:130px;height:20x;" />
                </div>
                <div style="width:100%;height: 160px;margin:6px 0;" class="flexDiv jusAround">
                  <div style="width: 360px;height: 160px;" class="newWeifabg">
                    <newWeifa></newWeifa>
                  </div>
                  <div class="liangweiData flexDiv">
                    <img src="../assets/images/newImg/lw01.png">
                    <div class="normalList">
                      <p class="mainColor title34">35.63%</P>
                      <p>违法建筑</P>
                    </div>
                  </div>
                  <div class="liangweiData flexDiv">
                    <img src="../assets/images/newImg/lw02.png">
                    <div class="normalList">
                      <p class="blueColor title34">64.37%</P>
                      <p>违法占地</P>
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
                  <newWeifa2></newWeifa2>
                </div>
              </div>
            </div>
          </div>
          <div class="contentCenter flexDiv" style="height: 100%;position: relative;">
            <!-- <mapDitu ref="map_chartsN"></mapDitu> -->
            <div class="mapDiv">
              <div class="mapDiv01">
                <img src="../assets/images/map.png" />
              </div>
              <div class="mapDiv02">
                <chinaMap2 ref="map_chartsN"></chinaMap2>
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
          <div class="contentRight02 flexDiv">
            <div class="newModule modelBg04">
              <div class="newModuleTitle newModuleTitle04">
                河湖治理
              </div>
              <div class="three-levelCon widAll flexDiv juspace alItemStart" style="margin-top:4px;">
                <div style="width:49%">
                  <div class="three-levelTitle flexDiv">
                    <img src="../assets/images/titleImg/subSiluan.png">
                    四乱类型分析
                    <dv-decoration-3 style="width:130px;height:20x;" />
                  </div>
                  <div style="width:100%;height:160px;margin-top:14px;">
                    <echarts8></echarts8>
                  </div>
                </div>
                <div style="width:49%">
                  <div class="three-levelTitle flexDiv" style="">
                    <img src="../assets/images/titleImg/subSiluan02.png">
                    四乱变化监测
                    <dv-decoration-3 style="width:130px;height:20x;" />
                  </div>
                  <div style="width:100%;height:180px;margin-top:14px;">
                    <siluan2></siluan2>
                  </div>
                </div>
              </div>
              <div class="three-levelCon widAll" style="margin: 24px 0;">
                <div class="three-levelTitle flexDiv" style="">
                  <img src="../assets/images/titleImg/subSiluan03.png">
                  四乱详细分析
                  <dv-decoration-3 style="width:130px;height:20x;" />
                </div>
                <div style="width:100%;height:180px;">
                  <echarts3></echarts3>
                </div>
              </div>
            </div>
            <div class="newModule modelBg05">
              <div class="newModuleTitle newModuleTitle05">
                垃圾治理
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
                      <p><span class="title34 mainColor">256</span>个</p>
                      <p>村庄</p>
                    </div>
                  </div>
                  <div class="lajiNum flexDiv">
                    <img src="../assets/images/newImg/laji.png">
                    <div class="normalList">
                      <p><span class="title34 mainColor">2986</span>个</p>
                      <p>站点</p>
                    </div>
                  </div>
                  <div class="lajiNum flexDiv">
                    <img src="../assets/images/newImg/rongliang.png">
                    <div class="normalList">
                      <p><span class="title34 mainColor">256</span>万升</p>
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
                    <pie></pie>
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
                        <CountTo :startVal='200' :endVal='1200' :duration='300' class="title34"/>
                      </p>
                    </div>
                    <div style="width:32%">
                      <img src="../assets/images/newImg/twoLevelImg.png" style="width:90px;margin:0 auto;display:block;">
                      <p style="color:white;text-align:center;margin:-12px 0 0;">
                        <CountTo :startVal='200' :endVal='1026' :duration='300' class="title34"/>
                      </p>
                    </div>
                    <div style="width:32%">
                      <img src="../assets/images/newImg/threeLevelImg.png" style="width:90px;margin:0 auto;display:block;">
                      <p style="color:white;text-align:center;margin:-12px 0 0;">
                        <CountTo :startVal='200' :endVal='1523' :duration='300' class="title34"/>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="contentRight02 flexDiv">
            <div class="newModule modelBg06">
              <div class="newModuleTitle newModuleTitle06">
                重大工程治理
              </div>
              <div class="flexDiv" style="width:100%;">
                <div class="zdCls flexDiv title28" style="">
                  重大工程总数：
                  <CountTo :startVal='startVal' :endVal='endVal' :duration='duration' style="font-size:44px;color:#f3cd6c" />
                </div>
                <div class="three-levelCon widAll" style="margin-top: 14px;height: 162px">
                  <siluan ref="siluan" id="bottom_3"></siluan>
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
                <!-- <div class="three-levelCon widAll" style="margin-top: 14px;">
                  <div class="three-levelTitle flexDiv" style="">
                    <img src="../assets/images/fireIcon.png" style="width:16px">
                    工程状态分析
                    <dv-decoration-3 style="width:80px;height:16px;" />
                  </div>
                  <div style="width:100%;height:160px;padding: 0 14px 16px 14px;">
                    <zdgczt></zdgczt>
                  </div>
                </div> -->
                <!-- <div class="three-levelCon widAll" style="margin-top: 14px;">
                  <div class="three-levelTitle flexDiv" style="">
                    <img src="../assets/images/fireIcon.png" style="width:16px">
                    重点工程项目进度示例
                    <dv-decoration-3 style="width:80px;height:16px;" />
                  </div>
                  <div style="width:100%;height:252px;padding:14px; align-content: space-between;" class="flexDiv">
                    <div style="width: 48%;color:white">
                      <dv-percent-pond :config="percentConfig01" style="width:200px;height:66px;" />
                      <p class="title16 textCenter orgColor" style="width:100%;margin-top:8px;">
                        防潮坝工程
                      </p>
                    </div>
                    <div style="width: 48%;color:white">
                      <dv-percent-pond :config="percentConfig02" style="width:200px;height:66px;" />
                      <p class="title16 textCenter orgColor" style="width:100%;margin-top:8px;">
                        规划工厂
                      </p>
                    </div>
                    <div style="width: 48%;color:white">
                      <dv-percent-pond :config="percentConfig03" style="width:200px;height:66px;" />
                      <p class="title16 textCenter orgColor" style="width:100%;margin-top:8px;">
                        科研研究所
                      </p>
                    </div>
                    <div style="width: 48%;color:white">
                      <dv-percent-pond :config="percentConfig04" style="width:200px;height:66px;" />
                      <p class="title16 textCenter orgColor" style="width:100%;margin-top:8px;">
                        凤凰城区文化小学
                      </p>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
            <div class="newModule modelBg07">
              <div class="newModuleTitle newModuleTitle07">
                矿山治理
              </div>
              <div class="flexDiv juspace">
                <div class="flexDiv kfNum">
                  <img src="../assets/images/newImg/kuangshan01.png">
                  <div class="normalList">
                    <p class="title34 mainColor">68</p>
                    <p class="">全市矿山</p>
                  </div>
                </div>
                <div class="flexDiv kfNum">
                  <img src="../assets/images/newImg/kuangshan02.png">
                  <div class="normalList">
                    <p class="title34 mainColor">54</p>
                    <p class="">尾矿山</p>
                  </div>
                </div>
                <div class="flexDiv kfNum">
                  <img src="../assets/images/newImg/kuangshan03.png">
                  <div class="normalList">
                    <p class="title34 mainColor">58</p>
                    <p class="">地质隐患点</p>
                  </div>
                </div>
                <div class="flexDiv kfNum">
                  <img src="../assets/images/newImg/kuangshan04.png">
                  <div class="normalList">
                    <p class="title34 mainColor">0</p>
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
                  <!-- <div class="kuangDiv flexDiv">
                    <div class="kuangDivCirCle">
                      <dv-water-level-pond :config="kuangConfig06" style="width:100%;height:100%" />
                    </div>
                    <p class="widAll textCenter">钠</p>
                  </div> -->
                </div>
              </div>
              <div class="three-levelCon widAll" style="margin-top: 14px;">
                <div class="three-levelTitle flexDiv">
                  <img src="../assets/images/titleImg/subWeikuang.png">
                  尾矿库数量
                  <dv-decoration-3 style="width:80px;height:16px;" />
                </div>
                <div style="width:100%;height:218px;" class="flexDiv">
                  <div style="width: 50%;height:100%">
                    <radar-chart ref="chart4" id="left_4" :data="officeRadarData"></radar-chart>
                  </div>
                  <div style="width: 40%;height:100%;padding:12px" class="normalList">
                    <div class="flexDiv " style="padding:4px 0;color:#9bc3d4;">
                      <p style="width: 50%" class="textCenter">拟闭库</p>
                      <p style="width: 50%" class="textCenter">413</p>
                    </div>
                    <div class="flexDiv " style="padding:4px 0;color:#9bc3d4;">
                      <p style="width: 50%" class="textCenter">在建</p>
                      <p style="width: 50%" class="textCenter">190</p>
                    </div>
                    <div class="flexDiv " style="padding:4px 0;color:#9bc3d4;">
                      <p style="width: 50%" class="textCenter">停产</p>
                      <p style="width: 50%" class="textCenter">137</p>
                    </div>
                    <div class="flexDiv " style="padding:4px 0;color:#9bc3d4;">
                      <p style="width: 50%" class="textCenter">生产</p>
                      <p style="width: 50%" class="textCenter">99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dv-border-box-1>
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

import CountTo from 'vue-count-to'
export default {
  name: 'test',
  components: {
    siluan, weifaJZ, CountTo, vueSeamlessScroll, pie, echarts2, zdgczt, echarts3,
    echarts4, newWeifa2, newWeifa, echarts8, haihuchart,
    siluan2, radarChart, mapDitu, chinaMap, chinaMap2, siluan3,
  },
  data() {
    return {
      resizeFn: null,
      warnUnreadTotal: 0,
      startVal: 0,
      endVal: 1200,
      duration: 3000,
      // 经纬度、行政区划负责人、时间
      firePointconfig: {
        header: ['经纬度', '行政区划', '负责人', '时间', '火点数'],
        data: [
          ['108.2369,34.259', '雁塔区', '张三', '2024-01-20', 30],
          ['108.2369,34.259', '雁塔区', '李四', '2024-01-20', 50],
          ['108.2369,34.259', '雁塔区', '王瑜', '2024-01-20', 68],
          ['108.2369,34.259', '雁塔区', '田静', '2024-01-20', 120],
          ['108.2369,34.259', '雁塔区', '苏舒', '2024-01-20', 68],
          ['108.2369,34.259', '雁塔区', '可乐', '2024-01-20', 78],
          ['108.2369,34.259', '雁塔区', '刘莎', '2024-01-20', 96],
          ['108.2369,34.259', '雁塔区', '田辉', '2024-01-20', 75],
          ['108.2369,34.259', '雁塔区', '王盼', '2024-01-20', 168],
        ],
        columnWidth: [150, , ,],
        rowNum: 5,    // 表列数
        // headerBGC: '#152f65', // 表头背景色
        oddRowBGC: 'transparent', // 奇数行背景色
        evenRowBGC: 'transparent',   // 偶数行背景色
        waitTime: 2000,    // 轮播时间间隔(ms)
      },
      shuikuData: [
        //             
        { name: '互助水库', num1: 12.6, num2: 26.3, num3: 14.3, num3: 45.6 },
        { name: '新力水库', num1: 23, num2: 36.4, num3: 16, num3: 34 },
        { name: '立新水库', num1: 20.7, num2: 34.3, num3: 27, num3: 46.9 },
        { name: '赫家水库', num1: 16, num2: 26.3, num3: 14.3, num3: 45.6 },
        { name: '互助水库', num1: 31, num2: 78, num3: 20, num3: 46 }
      ],
      firePointconfig2: {
        header: ['当前水位', '汛限水位', '当前库容', '汛期库容'],
        data: [
          ['石城镇', 120, 115, '大雨'],
          ['爱阳镇', 69, 385, '特大雨'],
          ['东汤镇', 193, 69, '小雨'],
          ['大兴镇', 257, 115, '大雨'],
          ['赛马镇', 167, 100, '中雨'],
          ['草河街道', 25, 45, '小雨'],
          ['鸡冠山镇', 67, 24, '小雨'],
          ['蓝旗镇', 95, 102, '大雨'],
          ['凤凰城街道', 125, 67, '中雨'],
        ],
        columnWidth: [120, , ,],
        rowNum: 5,    // 表列数
        // headerBGC: '#152f65', // 表头背景色
        oddRowBGC: 'transparent', // 奇数行背景色
        evenRowBGC: 'transparent',   // 偶数行背景色
        waitTime: 2000,    // 轮播时间间隔(ms)

      },
      // 区域违章
      regionConfig: {
        // activeRadius	环半径（动态）	String|Number	'55%'|110	'55%'
        // data	环数据	Array<Object>	data属性	[]
        // activeTimeGap	切换间隔(ms)	Number	---	3000
        // color	环颜色	Array<String>	[1]	[]
        // digitalFlopToFixed	数字翻牌器小数位数	Number	---	0
        // animationCurve	动效曲线	String	Transition(opens new window)	'easeOutCubic'
        // animationFrame	动效帧数	Number	[3]	50
        // #config注释
        radius: 54,   // 环半径
        lineWidth: 14,   // 环线条宽度
        digitalFlopStyle: {   // 数字翻牌器样式
          fontSize: 14,
          fill: '#9bc3d4'
        },
        digitalFlopUnit: '',    // 数字翻牌器单位
        showOriginValue: true,  // 显示原始值
        data: [
          { name: '周口', value: 55 },
          { name: '南阳', value: 120 },
          { name: '西峡', value: 78 },
          { name: '驻马店', value: 66 },
          { name: '新乡', value: 80 }
        ]
      },
      // 重点工程 
      MajorConfig: {
        data: [
          { name: '学校', value: 55 },
          { name: '机场', value: 120 },
          { name: '地铁', value: 71 },
          { name: '桥梁', value: 66 },
          { name: '公路', value: 80 },
          { name: '乡村', value: 35 },
          { name: '游泳馆', value: 15 },
          { name: '水库', value: 35 },
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
      percentConfig01: {
        value: 66,
        lineDash: [10, 2]
      },
      percentConfig02: {
        value: 72,
        lineDash: [10, 2]
      },
      percentConfig03: {
        value: 48,
        lineDash: [10, 2]
      },
      percentConfig04: {
        value: 90,
        lineDash: [10, 2]
      },
      timer: '',
      timer1: '',
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
        // colors: ['rgba(83,219,155,0)', '#23A668', '#14A35F']
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
      // 模块二雷达图数据
      officeRadarData: {
        // title: '标题',
        position: ['center', '85%'],
        center: ['50%', '50%'],
        indicator: [
          { text: '拟闭库' },
          { text: '在建' },
          { text: '停产' },
          { text: '生产' },
        ],
        data: [
          {
            name: '数量',
            color: '#FE7C2F',
            value: [413, 190, 137, 99],
          }
        ]
      },
      //分析标题数据
      data1: [
        {
          subtitle: '',
          top: '23%',
          data: { name: "宝山镇", value: 12, color: '#0E4CFF' },
        },
        {
          subtitle: '',
          top: '39%',
          data: { name: "凤山街道", value: 9, color: '#B405FD' },
        },
        {
          subtitle: '',
          top: '56%',
          data: { name: "大堡蒙古族乡", value: 8, color: '#FE9900' },
        },
        {
          subtitle: '',
          top: '72%',
          data: { name: "蓝旗镇", value: 8, color: '#FF6600' },
        },
        {
          subtitle: '',
          top: '88%',
          data: { name: "白旗镇", value: 8, color: '#2A71FF' }
        },
        {
          subtitle: '',
          top: '88%',
          data: { name: "红旗镇", value: 26, color: '#00EDFE' }
        },
        {
          subtitle: '',
          top: '88%',
          data: { name: "小四门子镇", value: 34, color: '#FEDB4B' }
        }
      ],
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
    const documentWidth = document.body.offsetWidth;
    const ratio = documentWidth / 1920;
    if (documentWidth > 1920) {
      document.body.style.transform = `scale(${ratio}, ${ratio})`
    }
    this.resizeFn = this.$debounce(function () {
      const documentWidth = document.body.offsetWidth;
      const ratio = documentWidth / 1920;
      if (documentWidth > 1920) {
        document.body.style.transform = `scale(${ratio}, ${ratio})`
      }
    }, 200)
    window.addEventListener('resize', this.resizeFn);
    this.timer && clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.startVal = this.endVal;
      this.endVal = this.endVal + this.generateRandomNumber(100, 200);
    }, 8000)

    this.timer1 && clearInterval(this.timer1)
    this.timer1 = setInterval(() => {
      const { MajorConfig } = this
      this.MajorConfig.data = [
        { name: '学校', value: that.generateRandomNumber(50, 110) },
        { name: '机场', value: that.generateRandomNumber(80, 200) },
        { name: '地铁', value: that.generateRandomNumber(120, 160) },
        { name: '桥梁', value: that.generateRandomNumber(40, 100) },
        { name: '公路', value: that.generateRandomNumber(30, 200) },
        { name: '乡村', value: that.generateRandomNumber(50, 120) },
        { name: '游泳馆', value: that.generateRandomNumber(60, 100) },
        { name: '水库', value: that.generateRandomNumber(50, 120) },
      ]
      /**
       * 使用ES6拓展运算符生成新的props对象
       * 组件侦知数据变化 自动刷新状态
       */
      this.MajorConfig = { ...this.MajorConfig }
    }, 3000)
  },
  methods: {
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
