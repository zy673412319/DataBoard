<template>
  <div class="affairAllPage">
    <div class="headerCls affairHeaderBg flexDiv" @click="closeIframeFun()">
      <img src="../assets/affairImg/headerTitle.png">
    </div>
    <div style="height: calc(100% - 130px);width:100%;">
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
                    <p>限时审批</p>
                  </div>
                  <div class="qydtConItem">
                    <div class="dzBarThree flexDiv">
                      <p>{{yukeNum}}</p>
                      <div class="dzBarOneCon"></div>
                    </div>
                    <p>收费项目占比</p>
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
                  <div class="flexDiv rzPointClsTitle">
                    <div class="oneLine textCenter" style="width: 18%">企业名称</div>
                    <div class="oneLine textCenter" style="width: 12%">入驻时间</div>
                    <div class="oneLine textCenter" style="width: 10%">投资规模</div>
                    <div class="oneLine textCenter" style="width: 10%">用地规模</div>
                    <div class="oneLine textCenter" style="width: 30%">行政区域</div>
                    <div class="oneLine textCenter" style="width: 10%">投资强度</div>
                    <div class="oneLine textCenter" style="width: 10%">建设计划</div>
                  </div>
                  <div class="rzPointClsCont flexDiv rzPointCls rzPointClsGundong">
                    <ul class="flexDiv" style="width:100%;height:100%;padding: 0;">
                      <li v-for="(rd,idex) in rzsxConfigData" :key="idex" class="flexDiv" style="width:100%;height:30px">
                        <div class="oneLine textCenter" style="width: 18%">{{rd['企业名称']}}</div>
                        <div class="oneLine textCenter" style="width: 12%">{{rd['入驻时间']}}</div>
                        <div class="oneLine textCenter" style="width: 10%">{{rd['投资规模']}}</div>
                        <div class="oneLine textCenter" style="width: 10%">{{rd['用地规模']}}</div>
                        <div class="oneLine textCenter" style="width: 30%">{{rd['行政区域']}}</div>
                        <div class="oneLine textCenter" style="width: 10%">{{rd['投资强度']}}</div>
                        <div class="oneLine textCenter" style="width: 10%">{{rd['建设计划']}}</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- 规章制度 -->
              <div class="gzzd">
                <div class="affairConHead flexDiv">
                  <img src="../assets/affairImg/gzzdIcon.png">
                  规章制度
                </div>
                <div class="flexDiv gzzdCon juspace">
                  <div class="rkslCon01 flexDiv">
                    <img src="../assets/affairImg/rzbmNumIcon.png">
                    <div>
                      <p class="zgNumCls">{{guizhangzhiduNum}}</p>
                      <p class="zgTextCls">规章制度数量</p>
                    </div>
                  </div>
                  <div class="rfwrcCon01">
                    <div class="flexDiv rzPointClsTitle">
                      <div class="oneLine textCenter" style="width: 18%">制度名称</div>
                      <div class="oneLine textCenter" style="width: 22%">考核范围</div>
                      <div class="oneLine textCenter" style="width: 60%">考核内容\制定原由</div>
                    </div>
                    <div class="rzPointClsCont flexDiv rzPointCls rzPointClsGundong02" style="height:88%">
                      <ul class="flexDiv" style="width:100%;height:100%;padding: 0;">
                        <li v-for="(rd,idex) in gzZdConfigData" :key="idex" class="flexDiv" style="width:100%;height:30px">
                          <div class="oneLine textCenter" style="width: 18%">{{rd['制度名称']}}</div>
                          <div class="oneLine textCenter" style="width: 22%">{{rd['考核范围']}}</div>
                          <div class="oneLine textCenter" style="width: 60%">{{rd['考核内容']}}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- <div class="rkslCon">
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
                  </div> -->
                </div>
              </div>
            </div>
            <div class="affairConterItem affairConCenter flexDiv" style="" v-if="dl==2" :class="moduleTwo?'daoxu':''">
              <div class="centerNumOne flexDiv juCenter">
                <div class="centerNumOneCon">
                  <p class="numTitle numTitle01">月业务受理量</p>
                  <div class="flexDiv numCOn">
                    <div v-for="(number, index) in showshouliNum" :key="index">
                      {{ number }}
                    </div>
                  </div>
                </div> 
              </div>
              <div class="centerNumTwo flexDiv">
                <div style="padding: 28px 28px 36px 28px">
                  <p class="numTitle numTitle02">月业务办结量</p>
                  <div class="flexDiv numCOn juCenterLeft">
                    <div v-for="(number, index) in showBanjieNum" :key="index">
                      {{ number }}
                    </div>
                  </div>
                </div>
                <div>
                  <p class="numTitle numTitle03">及时办结率</p>
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
                    <p class="textCenter">中小学升学率</p>
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
                    <p class="textCls">职业培训人次</p>
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
                    <p class="textCls2">月房产交易</p>
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
  </div>
</template>

<script>
import draggable from 'vuedraggable'

import centerGaikuang from '@/affairPage/echartModel/centerGaikuang';
import renkouEchart from '@/affairPage/echartModel/renkouEchart';
import rfwEchart from '@/affairPage/echartModel/rfwEchart';
import zxxNumEchart from '@/affairPage/echartModel/zxxNumEchart';
import jyfwrfwEchart from '@/affairPage/echartModel/jyfwrfwEchart';
import cheZhuceEchart from '@/affairPage/echartModel/cheZhuceEchart';
import riweifaEchart from '@/affairPage/echartModel/riweifaEchart';

import CountTo from 'vue-count-to'

export default {
  name: 'affair',
  components: {
    centerGaikuang, 
    renkouEchart, 
    rfwEchart,
    zxxNumEchart,
    jyfwrfwEchart,
    riweifaEchart,
    cheZhuceEchart,
    CountTo, 
    draggable
  },
  computed: {
  },
  data() {
    return {
      // 中心概况
      centerGaikuangData: {
        rzbmNum: 0,
        kbckNum: 0,
      },
      // 企业动态
      shenpiNum: 186,
      pizhunNum: 158,
      yukeNum: '91%',
      webSocket: null,
      guizhangzhiduNum: 0,
      // 入驻事项
      rzsxConfigData: [
        // ['北京青松建化科技股份有限公司', '2024年01月14日', '4000万', '15600平', '香港特别行政区新界离岛区仁廉胡同293号', '500万', '2021年08月06日'],
        // ['陕西亚太航股份有限公司', '2023年09月12日', '5600万', '15600平', '安徽省宣城市宣州区桂花胡同454号', '500万', '2021年08月06日'],
        // ['上海中联重科', '2023年02月27日', '800万', '15600平', '黑龙江省齐齐哈尔市依安县牡丹大道421号', '500万', '2021年08月06日'],
        // ['四川诩翔国家集团', '2019年02月18日', '2100万', '15600平', '天津天津市河东区桂花胡同500号', '500万', '2021年08月06日'],
        // ['西安鑫博科技有限公司', '2019年01月11日', '6000万', '15600平', '河北省廊坊市永清县竹子路908号', '500万', '2021年08月06日'],
        // ['北京青松建化科技股份有限公司', '2024年01月14日', '4000万', '15600平', '香港特别行政区新界离岛区仁廉胡同293号', '500万', '2021年08月06日'],
        // ['陕西亚太航股份有限公司', '2023年09月12日', '5600万', '15600平', '安徽省宣城市宣州区桂花胡同454号', '500万', '2021年08月06日'],
        // ['上海中联重科', '2023年02月27日', '800万', '15600平', '黑龙江省齐齐哈尔市依安县牡丹大道421号', '500万', '2021年08月06日'],
      ],
      // 规章制度
      gzZdConfigData: [
        // ['政务公开制度', '遵循合法、全面、真实、及时、便民的原则', '规范行为，增强工作透明度，保证行为的公正性，维护办事群众和相对人的知情权，营造廉洁、廉政的服务环境'],
        // ['窗口单位排队叫号制度', '遵守排队叫号程序：取票、休息等待、工作人员叫号、到窗口办理业务', '工作人员应按叫号顺序提供服务，严禁无号或未排到号的服务对象插队'],
        // ['咨询引导制度', '负责咨询引导工作', '做到仪表端庄，衣着整洁，精力集中，主动热情，文明用语，微笑服务，不得出现吸烟或玩手机等违反工作纪律的行为；做到有问必答，有求必应，不得推诿扯皮，敷衍了事'],
        // ['预约服务制度', '严格按照预约的时间为服务对象提供服务', '按照与服务对象约定的时间提供咨询辅导或办理业务。确因特殊原因失约的，应事先向服务对象说明理由并另行预约服务时间'],
        // ['窗口考核办法', '进驻中心的各单位窗口', '项目入驻、窗口管理、事项办理、投诉管理等方面'],
        // ['窗口工作人员考核办法', '进驻中心的各窗口工作人员', '“德、能、勤、绩、廉”五方面内容'],
        // ['工作岗位规范', '工作人员在岗规范', '大声喧哗、串岗聊天、办公窗口整齐、禁止与服务对象发生争吵等'],
        // ['窗口服务文明用语', '工作人员窗口服务文明用语', '口齿清楚，条理清晰，言简意赅，用语文明，提倡工作人员讲普通话等'],
        // ['工作人员行为规范', '工作人员在岗行为规范', '仪容仪表、行为举止、文明用语、严格执行“五禁止”规定'],
        // ['投诉问责制度', '在岗期间投诉问责制度', '提高审批效率，保证窗口工作人员正确、及时、公正、高效地实施审批和政务服务'],
        // ['首问负责制度', '首位接待的工作人员必须履行规定的服务职责', '改进工作作风，提高工作效率、服务水平和作风效能建设的要求'],
        // ['一次性告知制度', '窗口工作人员热情接待每位当事人', '体现服务中心便民、利民的服务宗旨，加强对受理审批事项的规范化管理'],
        // ['限时办结制', '在承诺的时限内办结其所请求事项', '体现服务中心便民、利民的服务宗旨，转变 机关作风和作风效能建设的要求'],
        // ['首席代表制度', '派驻服务中心窗口的负责人，全权负责审批服务事项等', '加强政务服务管理，规范窗口审批行为，提高审批服务效率和质量，确保“一站式”服务承诺得到落实'],
        // ['责任追究制度', '管理机构及窗口全体工作人员违反各种制度的问责', '强化责任意识，保证政令畅通，根据作风效能建设的有关要求'],
        // ['“AB岗”工作制度', '服务中心的每一个窗口都必须实行“AB岗”工作制度', '全面推进“作风建设”，优化办事环境，方便群众办事，提高办事效能'],
        // ['工作人员轮换制度', '为推进规范化服务型政府建设，规范窗口工作人员选派轮换工作', '保证政务服务中心规范、高效运转，为社会公众提供优质高效服务'],
        // ['考勤和请销假制度', '管理办公室和部门派驻窗口全体工作人员考核、请假制度', '病假、事假、旷工、迟到、早退、脱岗、空岗及因公外出情况'],
        // ['集中学习制度', '中心管理机构及窗口全体同志学习制度', '学习：法律法规、政策文件、重要讲话、相关会议精神'],
        // ['办公环境制度', '确保办公环境整洁卫生', '具有环境卫生意识，搞好办公区域的绿化、美化、净化，做到每天打扫整理；服务大厅内所有办公用品（包括花卉、绿植）应按统一标准摆放；'],
        // ['便民服务制度', '法定工作时间结束后，当前业务未完成或仍有服务对象等候的，应继续提供政务服务', '窗口工作人员应按照与服务对象约定的时间、地点为其提供政务服务。约定办理时间不受休息日、节假日限制。'],
        // ['容缺受理办法', '处理好服务容缺受理制度', '窗口单位要逐项理清政务服务事项申办的法定主要条件、应当提交的主要申报材料、允许容缺受理的次要条件及可以补齐补正的资料，并编制容缺受理事项清单'],
        // ['“好差评”制度', '在服务窗口设置好差评二维码，并在各楼层咨询引导台上放置好差评二维码和评议箱', '服务对象对窗口工作人员在实施政务服务过程中的咨询答复、文明接待、办事方便、按时办结、综合评价等方面进行评议'],
        // ['项目审批代办服务办法', '代办服务工作应按照“及时介入、一口受理、专人承办、联合审批”的程序进行', '各审批窗口在办理代办事项审批业务时,要主动配合代办机构的工作,做到急事急办、特事特办,为代办项目审批提供优质快捷的服务'],
        // ['项目审批“绿色通道”制度', '对进入“绿色通道”的项目，实行“一门受理、抄告相关、同步审批、提前办结”的运行机制,给予优先办理', '对进入“绿色通道”的项目，实行“一门受理、抄告相关、同步审批、提前办结”的运行机制,给予优先办理'],
        // ['行政审批否定报备制度', '各类专业性政务服务机构，应参照本制度规定，建立否定报备制度', '深入推进放管服改革，加强对政务服务行为的监管，杜绝不作为、乱作为及推诿、拖延等问题的发生，根据《中华人民共和国行政许可法》有关要求'],
      ],
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
      shouliNum: 0,
      BanjieNum: 0,
      jalNum: 0,
      // 就业服务
      zhidaoNum: 1407,
      peixunNum: 869,
      zhaopinNum: 32,
      //  住房服务
      yueFangCl: 47,
      zufngDj: 14587,
      daishouLp: 2,
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
      time1: '',
      time2: '',
      time3: '',
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
      let numStr = this.jalNum.toString();
      let arr = numStr.split('').map(Number);
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
    this.WebSocketAffair();
    // // 每5秒发送一个空消息到WebSocket服务器
    // setInterval(() => {
    //   if (this.webSocket && this.webSocket.readyState === WebSocket.OPEN) {
    //     this.webSocket.send('');
    //   }
    // }, 5000);
  },
  methods: {
    WebSocketAffair() {
      this.webSocket = new WebSocket('ws://47.101.217.219:3302');
      // this.webSocket = new WebSocket('ws://192.168.100.119:3302');
 
      this.webSocket.onopen = () => {
        // console.log('WebSocket 连接成功');
      };
 
      this.webSocket.onmessage = (message) => {
        this.setDataAffair(JSON.parse(message.data));
        // console.log('收到消息:', message.data);
      };
 
      this.webSocket.onerror = (error) => {
        console.error('WebSocket 出错:', error);
        // this.reconnectAffair();
      };
 
      this.webSocket.onclose = () => {
        // console.log('WebSocket 连接关闭');
        this.reconnectAffair();
      };
    },
    setDataAffair(data){
      var that = this;
      for(var key in data){
        if(data[key].name == '数量'){
          if(data[key].data && data[key].data[0]){
            var numData = data[key].data[0];
            this.centerGaikuangData = {
              rzbmNum: numData['入驻部门数量'] || 0,
              kbckNum: numData['开办窗口数量'] || 0,
            }
            this.shenpiNum = numData['审批数量'] || 0;
            this.pizhunNum = numData['限时审批'] || 0;
            this.yukeNum = numData['收费项目占比'] || 0;
            this.BanjieNum = numData['月业务办结量'] || 0;
            this.shouliNum = numData['月业务受理量'] || 0;
            this.jalNum = numData['及时办结率'] || 0;
            this.zhidaoNum = numData['就业指导'] || 0;
            this.peixunNum = numData['职业培训人次'] || 0;
            this.zhaopinNum = numData['组织招聘数量'] || 0;
            this.yueFangCl = numData['月房产交易'] || 0;
            this.zufngDj = numData['租房登记数量面积'] || 0;
            this.daishouLp = numData['代售楼盘'] || 0;
            this.banzNum = numData['办证数量'] || 0;
            this.guizhangzhiduNum = numData['规章制度数量'] || 0;
            this.zxxNumParData = {
              crops: numData['小学'] || 0,   // 小学  
              woodland: numData['初中'] || 0,   // 初中
              gzNum: numData['高中'] || 0    // 高中
            }
          }
        }
        if(data[key].name == '入驻事项'){
          this.rzsxConfigData = data[key].data;
          this.$nextTick(()=>{
            that.gundongFun("div.rzPointClsGundong") 
            // var mit = setInterval(() => {
            //   that.gundongFun("div.rzPointClsGundong") 
            // }, 6000);
            // $('div.rzPointClsGundong ul').find('li').mousemove(function () {
            //   clearInterval(mit);
            // }).mouseout(function () { 
            //   mit = setInterval(() => { that.gundongFun("div.rzPointClsGundong") }, 6000);
            // });
          })
        }
        if(data[key].name == '规章制度'){
          this.gzZdConfigData = data[key].data;
          this.$nextTick(()=>{
            that.gundongFun02("div.rzPointClsGundong02") 
            // var mit02 = setInterval(() => { that.gundongFun02("div.rzPointClsGundong02") }, 6000);
            // $('div.rzPointClsGundong02 ul').find('li').mousemove(function () {
            //   clearInterval(mit02);
            // }).mouseout(function () { 
            //   mit02 = setInterval(() => { that.gundongFun02("div.rzPointClsGundong02") }, 6000);
            // });
          })
        }
        if(data[key].name == '中小学升学率'){
          var chuliData = data[key].data;
          var dateList = [];
          var oneDataList = [];
          var TwoDataList = [];
          for(var item in chuliData){
            dateList.push(chuliData[item]['时间']);
            oneDataList.push(chuliData[item]['小学']);
            TwoDataList.push(chuliData[item]['初中']);
          }
          this.jyfwData = {
            DateList: dateList,
            oneDataList: oneDataList,
            TwoDataList: TwoDataList,
          }
        }
        if(data[key].name == '车辆注册等日服务人次'){
          var chuliData02 = data[key].data;
          // console.log(chuliData02,'===chuliData02 车辆注册等日服务人次')
          var DateList2 = [];
          var oneDataList2 = [];
          for(var item in chuliData02){
            DateList2.push(chuliData02[item]['日期']);
            oneDataList2.push(chuliData02[item]['数量']);
          }
          this.cheZhuceData = {
            DateList: DateList2,
            oneDataList: oneDataList2,
          }   
        }
        if(data[key].name == '日违法处罚人次'){
          var chuliData03 = data[key].data;
          var DateList3 = [];
          var oneDataList3 = [];
          for(var item2 in chuliData03){
            DateList3.push(chuliData03[item]['日期']);
            oneDataList3.push(chuliData03[item]['数量']);
          } 
          this.riweifaData = {
            DateList: DateList3,
            oneDataList: oneDataList3,
          }
        }
      }
    },
    reconnectAffair(){
      if(this.time3){
        window.clearTimeout(this.time3);
      }
      this.time3 = setTimeout(() => {
        if (!this.webSocket || this.webSocket.readyState === WebSocket.CLOSED) {
          this.WebSocketAffair(); // 尝试重新连接
        }
      }, 2000); // 等待2秒后重试
    },
    gundongFun(opj) {
      var that = this;
      $(opj).find('ul').animate({
        marginTop: "-30px"
      }, 600, function () {
        $(this).css({ marginTop: "0px" });
        var firstLi = $(this).find('li:first'); // 获取第一个 li 元素
        firstLi.detach(); // 从当前位置移除 li 元素
        firstLi.appendTo($(this));
        $(this).stop(); // 停止当前正在进行的动画
        // $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
      })
      if(this.time1){
        window.clearTimeout(this.time1);
      }
      this.time1 = setTimeout(()=>{
        that.gundongFun("div.rzPointClsGundong") 
      }, 6000)
    },
    gundongFun02(opj) {
      var that = this;
      $(opj).find('ul').animate({
        marginTop: "-30px"
      }, 600, function () {
        $(this).css({ marginTop: "0px" });
        var firstLi02 = $(this).find('li:first'); // 获取第一个 li 元素
        firstLi02.detach(); // 从当前位置移除 li 元素
        firstLi02.appendTo($(this));
        $(this).stop(); // 停止当前正在进行的动画
        // $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
      })
      if(this.time2){
        window.clearTimeout(this.time2);
      }
      this.time2 = setTimeout(()=>{
        that.gundongFun02("div.rzPointClsGundong02") 
      }, 6000)
    }
  }
}
</script>