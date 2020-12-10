<template>
  <div id="index">
  <Header></Header>
  <Banner></Banner>
  <div class="container">
    <!--one-->
    <div>
      <!--标题-->
      <div class="Graphic"><img src="../assets/img/index/message.png" alt=""></div>
        <!--内容-->
        <div class="contOne">
          <!--内容 left-->
          <div class="col-md-8 col-xs-12">
            <el-tabs :tab-position="tabPosition">
              <el-tab-pane label="最新公告通知"><img class="onePrint" src="../assets/img/index/111.png" alt=""></el-tab-pane>
              <el-tab-pane label="最新公告通知"><img class="onePrint" src="" alt="">2</el-tab-pane>
              <el-tab-pane label="最新公告通知"><img class="onePrint" src="" alt="">3</el-tab-pane>
              <el-tab-pane label="最新公告通知"><img class="onePrint" src="" alt="">4</el-tab-pane>
              <el-tab-pane label="最新公告通知"><img class="onePrint" src="" alt="">5</el-tab-pane>
            </el-tabs>
          </div>
          <!--内容 right-->
          <div id="tab col-md-4 col-xs-12">
            <!--选项-->
            <div class="tab-bar clearfix">
              <a href="javascript:;" @click="tab(index)" v-for="(item,index) in items" :key="index" :class="{active : index===curId}">{{item.item}}</a>
            </div>
            <!--内容-->
            <table class="tableCont">
              <tr class="trCont">
                <th class="firstLine">12月10日 官方最新公告发布通知:这是最新通知12月10日 官方最新公告发布通知:这是最新通知</th>
              </tr>
              <tr class="trCont">
                <td class="oneNew">最新</td>
                <td class="tdCont">12月10日 官方最新公告发布通知:这是最...</td>
                <td class="tdMess">11-11</td>
              </tr>
              <tr class="trCont">
                <td class="twoNew">最新</td>
                <td class="tdCont">12月10日 官方最新公告发布通知:这是最...</td>
                <td class="tdMess">11-11</td>
              </tr>
            </table>
            <!--阅读更多-->
            <div class="read">阅读更多<span>最新资讯→</span></div>
          </div>

        </div>

    </div>
    <!--one 结束-->
    
    <!--two-->
    <div class="contTwo">
      <!--标题-->
      <img class="twoBj" src="../assets/img/index/two.png" alt="">
      <img class="recommend" src="../assets/img/index/recommend.png" alt="">
      <!--选项-->
      <div id="tabTwo">
        <div class="barTwo clearfix">
          <a href="javascript:;" @click="toggle(index)" v-for="(item,index) in lists" :key="index" :class="{actives : index===checkindex}">{{item.item}}</a>
        </div>
        <!--内容-->
        <div class="tabCont">
          <img class="tabLeft" src="../assets/img/index/left.png" alt="">
          <div class="tabmess">
            <div class="tabRight">
              <!--图片-->
              <img class="tabPrint" src="" alt="">
              <!--相册-->
              <div class="intersection">
                <img src="../assets/img/index/intersection.png" alt="">
                <span class="count">12</span>
              </div>
              <div class="tabCaption">
                <p class="tabTitle">合肥九味钓场</p>
                <img class="location" src="../assets/img/index/location.png" alt="">
                <span class="distance">3.2KM</span>
              </div>
              <div class="tabCaption">
                <div class="score"><img src="../assets/img/index/score1.png" alt=""></div>
                <span class="grade">4.0</span>
              </div>
              <p class="cero">路亚 | 鱼塘 | 鲈鱼鲤鱼等</p>
              <p class="site">地点：高新产业园</p>
              <p class="apply">报名</p>
            </div>
            <div style="display: flex;flex-direction: row; margin:auto">
              <div class="leftIcon">上一页</div>
              <div class="rightIcon">下一页</div>
            </div>

          </div>
          
          <img class="tabLeft" src="../assets/img/index/right.png" alt="">
        </div>
        
      </div>
      <div class="check">查看更多 》</div>
    </div>
    <!--two 结束-->

    <!--three-->
    <div class="contThree">
      <!--标题-->
      <img class="threeBj" src="../assets/img/index/events.png" alt="">
      <!--内容-->
      <div class="threeOver">
        <!--内容 left-->
        <!--内容 left 选项-->
        <div id="tabThree">
          <div class="barThree clearfix">
            <a href="javascript:;" @click="event(index)" v-for="(item,index) in eventsList" :key="index" :class="{activeThree : index===eventsindex}">{{item.name}}</a>
          </div>
          <!--内容-->
          <div>
            <div class="leftOne">
              <div class="picture"></div>
              <div class="matter">
                <div class="topic">大师赛-上海·阳光路亚基地（第一场)</div><span class="gameOne">报名中</span>
                <div class="contmes" style="display: flex;flex-direction: row;margin-top: 21px;">
                  <div class="substance">地点：大团镇徐邵路</div><span class="angle">钓法：路亚</span>
                </div>
                <div style="display: flex;flex-direction: row;margin-top: 11px;">
                  <div class="substance">限制报名人数：50</div><span class="bonus">奖金：28000</span>
                </div>
                
                <div class="subcont">联系方式：12345678900</div>
                <div class="subcont">截止时间：2020.12.12 12:00:00</div>
                <img class="into" src="@/assets/img/competition/into.png" alt="">
              </div>
            </div>
            <div class="leftOne">
              <div class="picture"></div>
              <div class="matter">
                <div class="topic">大师赛-上海·阳光路亚基地（第一场)</div><span class="gameOne">报名中</span>
                <div class="contmes" style="display: flex;flex-direction: row;margin-top: 21px;">
                  <div class="substance">地点：大团镇徐邵路</div><span class="angle">钓法：路亚</span>
                </div>
                <div  style="display: flex;flex-direction: row;margin-top: 11px;">
                  <div class="substance">限制报名人数：50</div><span class="bonus">奖金：28000</span>
                </div>
                
                <div class="subcont">联系方式：12345678900</div>
                <div class="subcont">截止时间：2020.12.12 12:00:00</div>
                <img class="into" src="@/assets/img/competition/into.png" alt="">
              </div>
            </div>
            <div class="mores">查看更多 》</div>
            <div class="switchover switcleft">《</div>
            <div style="padding-left: 12px;" class="switchover switcright">》</div>
            <div style="display: flex;flex-direction: row;">
              <div class="pre">上一页</div>
              <div class="next">下一页</div>
            </div>
            
          </div>
        </div>
        <!--内容 right-->
        <div class="threeRight">
          <div class="rightTop col-md-4 col-xs-1">
            <span>赛事</span> <span style="color:#C5C5C5">|</span>
            <span>时间</span> <span style="color:#C5C5C5">|</span>
            <span>状态</span>
          </div>
          <!--table内容-->
          <table class="tableOver">
            <tr class="trOver">
              <th>2020路亚官方赛 合肥星河分赛</th>
              <th>2020-12-11 12:00</th>
              <th>未开始</th>
            </tr>
            <tr class="trOver">
              <th>2020路亚官方赛 合肥星河分赛</th>
              <th>2020-12-11 12:00</th>
              <th>未开始</th>
            </tr>
            <tr class="trOver">
              <th>2020路亚官方赛 合肥星河分赛</th>
              <th>2020-12-11 12:00</th>
              <th>未开始</th>
            </tr>
          </table>
          <!--内容 right bottom-->
          <div class="threePrint"><img src="" alt=""></div>
        </div>
        
      </div>
      
    </div>
    <!--three 结束-->

    <!--four-->
    <div class="contFour">
      <!--标题-->
      <img class="threeBj" src="../assets/img/index/video.png" alt="">
      <div class="fourOver">
        <!--选项-->
        <div id="tabFour">
          <div class="barFour clearfix">
            <a href="javascript:;" @click="videoTab(index)" v-for="(item,index) in videoList" :key="index" :class="{active : index===videoIndex}">{{item.name}}</a>
          </div>
          <!--内容-->
          <div class="fourVideo-over">
            <div>
              <video class="fourVideo" src=""></video>
              <p class="fourTitle">某某最新赛事精彩瞬间分享叫人拍案惊奇某某最新赛事精彩瞬间分享叫人拍案惊奇</p>
              <span class="transmit">2560次播放</span>
              <span class="transmit time">1小时前</span>
            </div>
            <video class="fourVideo" src=""></video>
            <video class="fourVideo" src=""></video>
            <video class="fourVideo" src=""></video>
          </div>
        </div>
      </div>
    </div>
    <!--four 结束-->

    <!--five-->
    <!--five 结束-->
  </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Banner from '../components/Banner.vue';
export default {
    name: 'index',
    components: { Banner },
    data(){
        return{
          tabPosition: 'bottom',// one 内容left
          curId: 0, // one 内容right
          items: [
            {item: '公告'},
            {item: '赛事'},
            {item: '钓场'},
            {item: '攻略'},
          ],
          checkindex: 0, // two
          lists: [ // two
            {item: '收费钓点'},
            {item: '免费钓点'},
            {item: '发布钓点'},
          ],
          eventsindex: 0, // three
          eventsList:[
            {name:'官方赛'},
            {name:'主题赛'},
            {name:'公益赛'},
          ],
          videoIndex:0, //four
          videoList:[
            {name:'推荐'},
            {name:'赛事'},
            {name:'活动锦集'},
            {name:'教学'}
          ]
          
        }  
    },
    mounted(){

    },
    methods:{
      //one 内容 right
      tab (index) {
        this.curId = index;
      },
      //two
      toggle (index) {
        this.checkindex = index
      },
      //three
      event(index){
        this.eventsindex = index
      },
      //four
      videoTab(index){
        this.videoIndex = index
      }
    }

}
</script>

<style scoped>
/**one */
/**标题 */
.Graphic{
  width: 100%;
  margin-bottom: 30px;
}
.Graphic>img{
  margin: auto;
}
/**内容 */
.contOne{
  display: flex;
  flex-direction: row;
}
/**one 内容 left */
.onePrint{
  width: 100%;
}
/deep/ .el-tabs--bottom{
  height: 480px !important;
  margin-right: 20px;
}
/deep/ .el-tabs__content{
  height: 428px;
}
/deep/ .el-tabs--bottom .el-tabs__header.is-bottom{
  margin-top: 0px;
}
/deep/ .el-tabs__item.is-active{
  color: #6C98FE;
  font-family: 'AlibabaPuHuiTi-Regular';
  background: #fff;
}
/deep/ .el-tabs__active-bar{
  background: #6C98FE;
}
/deep/ .el-tabs__item{
  color: #666;
  font-family: 'AlibabaPuHuiTi-Regular';
}
/deep/ .el-tabs__item:hover{
  color: #6C98FE;
}
/deep/ .el-tabs__nav-wrap::after{
  width: 692px;
  height: 36px;
  background-color: #F8F8F8;
}
/deep/ .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2){
  padding-left: 50px;
}
/deep/ .el-tabs--bottom .el-tabs__item.is-bottom:last-child{
  padding-right: 62px;
}
/**one 内容 right */
/**选项 */
  #tab {
    width: 411px;
  }
  .tab-bar {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }
  .tab-bar a {
    float: left;
    height: 40px;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    color: #666;
    font-size: 14px;
    font-family: 'AlibabaPuHuiTi-Medium';
  }
  .tab-bar a:hover{
    color: #6C98FE;
  }
  .tab-bar .active {
    background-color: #fff;
    color: #6C98FE;
    border-bottom: 2px solid #6C98FE;   
  }
  .tab-bar .active:after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #6C98FE;
    position: absolute;
    margin-top: 39px;
    margin-left: -19px;
  }
  /**内容 */
  .tableCont{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .firstLine{
    width: 411px; height: 24px;
    font-size: 18px;
    font-family: 'AlibabaPuHuiTi-Bold';
    color: #3B72F1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .trCont{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
  }
  .oneNew{   
    font-size: 12px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #29D339;  
    border: 1px solid #29D339;
    border-radius: 2px;
    width: 40px;
    height: 20px;
    text-align: center;
    line-height: 16px;
    margin-top: 2px;
  }
  .twoNew{
    font-size: 12px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #D32931;  
    border: 1px solid #D32931;
    border-radius: 2px;
    width: 40px;
    height: 20px;
    text-align: center;
    line-height: 16px;
    margin-top: 2px;
  }
  .tdCont{    
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #333333;
  }
  .tdMess{    
    font-size: 14px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #999999;
    margin-top: 2px;
  }
  /**阅读更多 */
  .read{
    width: 100%;
    height: 50px;
    background: #F4F4F4;
    font-size: 14px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #333333;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    margin: 0 auto;
  }
  .read>span{
    color: #6C98FE;
    cursor: pointer;
  }
  /** */
  /**two */
  .contTwo{
    height: 606px;
  }
  /**背景 */
  .twoBj{
    margin-left: -34%;
    margin-top: 100px;
  }
  /**标题 */
  .recommend{
    position: relative;
    top: -575px;
    margin: auto;
  }
  /**选项 */
  #tabTwo{
    display: flex;
    flex-direction: row;
    position: relative;
    top: -504px;
  }
  .barTwo{
    width: 134px;
    display: flex;
    flex-direction: column;
    margin-top: -8px;
  }
  .barTwo a {
    float: left;
    height: 40px;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    color: #666;
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Medium';
    margin-bottom: 26px;
    padding-right: 10px;
  }
  .barTwo .actives {
    background-image:url('../assets/img/pitch.png');
    background-repeat: no-repeat;
    background-size: 128px 39px;
    z-index: 1;
    color: #fff  !important; 
  }
  .barTwo a:hover{
    color: #6C98FE;
  }
  .barTwo .actives:after {
    content: "";
    width: 6px;
    height: 48px;
    background: linear-gradient(266deg, #6C98FE, #4D7AFF);
    position: absolute;
    border-radius: 2px;
    margin-top: -4px;
    margin-left: 45px;
    
  }
  /**内容 */
  .tabCont{
    width: 1054px;
    height: 448px;
    background: #FFFFFF;
    border-radius: 8px;
    margin-left: 6px;
    margin-top: -44px;
    display: flex;
    flex-direction: row;
  }
  .tabmess{
    display: flex;
    flex-direction: row;
  }
  .tabLeft{
    width: 12px; height: 40px;
    margin: 165px 34px; 
  }
  .tabRight{
    width: 220px;
    height: 342px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(54, 56, 63, 0.11);
    border-radius: 8px;
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    margin-right: 16px;
  }
  .tabPrint{
    width: 220px;
    height: 237px;
    opacity: 0.1;
    border-radius: 8px 8px 0px 0px;
    background: #000;
  }
  .intersection{
    width: 36px;
    height: 18px;
    background: #000000;
    opacity: 0.3;
    border-radius: 4px;
    margin-top: -24px;
    margin-left: 174px;
    padding: 3px 4px;
    display: flex;
    flex-direction: row;
  }
  .count{
    font-size: 12px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #fff;
    margin-top: -3px;
    margin-left: 1px;
  }
  .tabCaption{
    display: flex;
    flex-direction: row;
  }
  .tabTitle{
    font-size: 18px;
    font-family:'AlibabaPuHuiTi-Medium' ;
    color: #444444;
    margin-top: 6px;
    margin-left: 8px;
    margin-right: 45px;
  }
  .distance{
    font-size: 12px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #C5C5C5;
    margin-top: 12px;
    margin-left: 3px;
  }
  .location{
    display: inline;
    width: 10px; height: 12px;
    margin-top: 14px;
  }
  .score{
    margin-left: 8px;
    margin-top: -6px;
  }
  .grade{    
    font-size: 10px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #F6BC4C;
    margin-left: 84px;
    margin-top: -6px;
  }
  .cero{
    font-size: 12px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #666666;
    margin-left: 10px;
    margin-top: 4px;
  }
  .site{
    font-size: 12px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #666666;
    margin-top: -8px;
    margin-left: 10px;
  }
  .apply{
    width: 60px;
    height: 28px;
    background: linear-gradient(266deg, #6C98FE, #4D7AFF);
    border-radius: 12px;
    color: #fff;
    text-align: center;
    line-height: 28px;
    margin-top: -39px;
    margin-left: 148px;
    box-shadow: 0px 2px 10px 0px rgba(54, 56, 63, 0.25);
    cursor: pointer;
  }
  .check{   
    font-size: 14px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #4B7BEB;
    cursor: pointer;
    position: relative;
    top: -550px;
    left: 600px;
  }
  /** */
  /**three */
  .threeOver{
    display: flex;
    flex-direction: row;
    margin-left: 18%;
  }
  /**背景 */
  .contThree{
    background: #F1F1F1;
    width: 1920px;
    position: relative;
    left: -34%;
    right: 0;
    overflow:hidden
  }
  .threeBj{
    margin: 0 auto;
    margin-top: 70px;
  }
  /**选项 left*/
  #tabThree{
    display: flex;
    flex-direction: column;
  }
  .barThree{
    width: 680px;
    height: 44px;
    display: flex;
    flex-direction: row;
    background: #E9E9E9;
    border-radius: 4px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 18px;
    justify-content: space-between;
  }
  .barThree a {
    width: 52px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    text-decoration: none;
    font-family: 'AlibabaPuHuiTi-Regular';
    font-size: 14px;
    color: #999999;
  }
  .barThree .activeThree {
    color: #6C98FE; 
    font-family: 'AlibabaPuHuiTi-Medium';
    border-bottom: 2px solid #6C98FE;
  }
  .barThree a:hover{
    color: #6C98FE;
    font-family: 'AlibabaPuHuiTi-Medium';
  }
    /**内容*/
  .leftOne{
    width: 678px;
    height: 220px;
    background: #FFFFFF;
    border-radius: 14px;
    display: flex;
    flex-direction: row;
    padding-right: 12px;
    margin: 0 auto;
    margin-bottom: 13px;
  }
  .picture{
    width: 180px;
    height: 170px;
    background: #E1E1E1;
    border-radius: 4px;
    margin-top: 25px;
    margin-left: 28px;
  }
  .matter{
    margin-top:24px;
    white-space: nowrap;
  }
  .topic{
    font-size: 22px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #444444;
    display: inline;
    margin-left: 27px;
  }
  .gameOne{ 
    font-size: 14px;
    font-family: 'PingFang-SC-Bold';
    color: #6C98FE;
    border: 2px solid #6C98FE;   
    border-radius: 4px;
    padding: 2px;
    margin-left: 11px;
  }
  .substance{ 
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #999999;
    margin-left: 27px;
  }
  .angle{
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #999999;
    margin-left: 110px;
  }
  .bonus{
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #999999;
    margin-left: 122px;
  }
  .subcont{
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #999999;
    margin-top: 11px;
    margin-left: 27px;
  }
  .into{
    margin-top: -14%;
    margin-left: 86%; 
    cursor: pointer;
  }
  /**查看更多 */
  .mores{   
    font-size: 14px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #4B7BEB;
    cursor: pointer;
    margin-left: 84%;
    margin-top: 25px;
    margin-bottom: 63px;
  }
    /**切换 */
  .switchover{
    width: 34px;
    height: 63px;
    background: #DCDCDC;
    opacity: 0.58;
    border-radius: 4px;
    color: #fff;
    line-height: 63px;
    font-size: 20px;
  }
  .switcleft{
    position: absolute;
    top: 53%;
    left: 15%;
  }
  .switcright{
    position: absolute;
    top: 53%;
    left: 55%;
  }
  /**three right */
  .threeRight{
    margin-left: 7%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
  }
  /**内容 right */
  .rightTop{
    width: 432px;
    height: 44px;
    background: #E9E9E9;
    border-radius: 4px;
    font-size: 14px;
    font-family: 'AlibabaPuHuiTi-Regular';
    font-weight: 400;
    color: #999999;
    line-height: 44px;
    display: flex;
    justify-content: space-evenly;
  }
  .tableOver{
    width: 432px;
    height: 234px;
    margin-bottom: 30px;
  }
  .trOver{
    border-bottom: 1px solid #F0F0F0;
  }
  .trOver>th{
    padding: 0 20px;
    width: 144px;
    text-align: center; 
    font-size: 14px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #666666;
  }
  .trOver img{
    margin-left: 26%;
  }
  .more{
    color: #C7C7C7;
    font-size: 14px;
    margin-left: 48%;
    cursor: pointer;
  }
  /**right bottom */
  .threePrint{
    width: 425px;
    height: 217px;
    border-radius: 2px;
    background: #f5f5f5;
  }
  /** */
  /**four */
  .contFour{
    background: #f5f5f5;
    width: 1920px;
    position: relative;
    left: -34%;
    right: 0;
    overflow:hidden
  }
  .fourOver{
    display: flex;
    flex-direction: row;
    margin-left: 18%;
    margin-top: 36px;
  }
  /**选项 */
  #tabFour {
    width: 898px;
  }
  .barFour {
    display: flex;
    justify-content: space-between;
    margin-left: 34%;
  }
  .barFour a {
    float: left;
    height: 40px;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    color: #666;
    font-size: 14px;
    font-family: 'AlibabaPuHuiTi-Medium';
  }
  .barFour a:hover{
    color: #6C98FE;
  }
  .barFour .active {
    color: #6C98FE;
    border-bottom: 2px solid #6C98FE;   
  }
  .barFour .active:after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #6C98FE;
    position: absolute;
    top: 200px;
    margin-left: -1%;
  }
  /**内容 */
  .fourVideo-over{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
  }
  .fourVideo{
    width: 196px;
    height: 108px;
    background: #000;
    margin-top: 25px;
    margin-left: 7px;
  }
  .fourTitle{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;    
    font-size: 14px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #333333;
    width: 174px;
    margin-left: 18px;
    margin-top: 8px;
  }
  .transmit{    
    font-size: 12px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #999999;
    margin-left: 18px;
    margin-bottom: 17px;
  }
  .time{
    margin-left: 60px;
  }
  
 

@media (min-width: 1200px){
/**one 内容  right */
  /deep/ .el-icon-arrow-right{
    display: none;
  }
  .leftIcon{
    display: none;
  }
  .rightIcon{
    display: none;
  }
  /**three */
  .pre{
    display: none;
  }
  .next{
    display: none;
  }
}
/** */
@media (min-width: 993px) and (max-width: 1200px){
  /**内容 one */
  .contOne{
    display: flex;
    flex-direction: column;
  }
  .leftIcon{
    display: none;
  }
  .rightIcon{
    display: none;
  }
  /**two */
  .barTwo{
    width: 168px;
  }
  /**three */
  .pre{
    display: none;
  }
  .next{
    display: none;
  }
}
/** */
@media screen and (max-width: 992px){
  /**one */
  /**标题 */
  .Graphic{
    margin-top: -15%;
  }
  .Graphic>img{
    width: 50%;
    margin: auto;
  }
  /**内容 one */
  .contOne{
    display: flex;
    flex-direction: column;
  }
  /**left */
  /deep/ .el-tabs__content{
    height: 195px;
  }
  /deep/ .el-tabs__nav-wrap::after{
    width: 0;
    height: 0;
  }
  /deep/ .el-tabs--bottom{
    height: 100% !important;
    margin-bottom: 24px;
    margin-right: 0;
  }
  /deep/ .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2){
    padding-left: 0;
  }
  /**right */
  .tab-bar{
    border-top: 1px solid #eee;
    margin-top: 28px;
  }
  .firstLine{
    font-size: 16px;
  }
  .tdCont{
    font-size: 14px;
    padding-top: 2px;
  }
  .tdMess{
    font-size: 12px;
  }
  .read{
    height: 44px;
    line-height: 44px;
    font-size: 12px;
  }
  /** */
  /**two */
  .contTwo{
    height: 606px;
  }
  .twoBj{
    display: none;
  }
  /**标题 */
  .recommend{
    position: relative;
    top: 40px;
    margin: auto;
    width: 50%;
  }
  /**选项 */
  #tabTwo{
    display: flex;
    flex-direction: column;
    margin-top: 552px;
  }
  .barTwo{
    flex-direction: row;
    width: 100%;
    margin-top: 38px;
  }
  .barTwo .actives{  
    background: linear-gradient(266deg, #6C98FE, #4D7AFF);
    border-radius: 21px;
  }
  .barTwo .actives:after{
    display: none;
  }
  .barTwo a{
    font-size: 14px;
    padding-right: 0;
    height: 22px;
    line-height: 22px;
    margin-top: -22px;
    margin-bottom: 56px;
    width: 120px;
  }
  .tabCont{
    width: 100%;
    height: 100%;
    margin-left: 0;
    background: rgba(230, 227, 225, 0.3);
  }
  .tabmess{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  .tabLeft{
    display: none;
  }
  .tabRight{
    margin-right: 0;
  }
  .leftIcon{
    color: #fff;   
    background: linear-gradient(266deg, #6C98FE, #4D7AFF);
    width: 84px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 8px;
    margin-top: 30px;
  }
  .rightIcon{
    color: #fff;
    background: linear-gradient(266deg, #6C98FE, #4D7AFF);
    width: 84px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 8px;
    margin-top: 30px;
    margin-left: 16px;
    margin-bottom: 20px;
  }
  /** */
  /** */
  /**three */
  .threeOver{
    display: flex;
    flex-direction:column;
    margin-left: 0%;
  }
  /**背景 */
  .contThree{
    background: #F1F1F1;
    width: 100%;
    position: relative;
    left: 0;
    right: 0;
    border-radius: 8px;
    overflow:hidden
  }
  .threeBj{
    margin: 0 auto;
    margin-top: 36px;
    width: 50%;
  }
  /**选项 */
  .barThree{
    width: 100%;
    height: 44px;
    display: flex;
    flex-direction: row;
    background: #E9E9E9;
    border-radius: 4px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 18px;
    justify-content: space-between;
  }
  .barThree a {
    width: 52px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    text-decoration: none;
    font-family: 'AlibabaPuHuiTi-Regular';
    font-size: 14px;
    color: #999999;
  }
  .barThree .activeThree {
    color: #6C98FE; 
    font-family: 'AlibabaPuHuiTi-Medium';
    border-bottom: 2px solid #6C98FE;
  }
  .barThree a:hover{
    color: #6C98FE;
    font-family: 'AlibabaPuHuiTi-Medium';
  }
  /**内容*/
  .leftOne{
    width: 310px;
    height: 208px;
    background: #FFFFFF;
    border-radius: 14px;
    display: flex;
    flex-direction: row;
    padding-right: 12px;
    margin: 0 auto;
    margin-bottom: 13px;
  }
  .picture{
    display: none;
  }
  .topic{
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #444444;
    display: block;
    margin-left: 27px;
    margin-top: -10px;
    margin-bottom: 10px;
  }
  .gameOne{ 
    font-size: 12px;
    font-family: 'PingFang-SC-Bold';
    color: #6C98FE;
    border: 2px solid #6C98FE;   
    border-radius: 4px;
    padding: 2px;
    margin-left: 27px;
  }
  .contmes{
    margin-top: 10px  !important;
  }
  .substance{ 
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #999999;
    margin-left: 27px;
  }
  .angle{
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #999999;
    margin-left: 30px;
  }
  .bonus{
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #999999;
    margin-left: 42px;
  }
  .subcont{
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #999999;
    margin-top: 11px;
    margin-left: 27px;
  }
  .into{
    margin-top: -20%;
    margin-left: 87%;
    width: 16%;
  }
  /**查看更多 */
  .mores{   
    font-size: 14px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #4B7BEB;
    cursor: pointer;
    margin-left: 62%;
    margin-top: 17px;
    margin-bottom: 63px;
  }
    /**切换 */
  .switchover{
    width: 34px;
    height: 63px;
    background: #DCDCDC;
    opacity: 0.58;
    border-radius: 4px;
    color: #fff;
    line-height: 63px;
    font-size: 20px;
  }
  .switcleft{
    display: none;
  }
  .switcright{
    display: none;
  }
  .pre{
    background: linear-gradient(266deg, #6C98FE, #4D7AFF);
    width: 84px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 8px;
    margin-top: -55px;
    color: #fff;
    margin-left: 82px;
    margin-bottom: 20px;
  }
  .next{
    background: linear-gradient(266deg, #6C98FE, #4D7AFF);
    width: 84px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 8px;
    margin-top: -55px;
    color: #fff;
    margin-left: 16px;
    margin-bottom: 20px;
  }
  /**three right */
  .threeRight{
    margin-left: 0;
  }
  .rightTop{
    width: 100%;
  }
  .tableOver{
    width: 100%;
  }
}
</style>