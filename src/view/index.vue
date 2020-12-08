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
              <el-tab-pane label="最新公告通知"><img class="onePrint" src="../assets/img/index/111.png" alt="">1</el-tab-pane>
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
          <a href="javascript:;" @click="tab(index)" v-for="(item,index) in lists" :key="index" :class="{active : index===curId}">{{item.item}}</a>
        </div>
        <!--内容-->
        <div class="tabCont">
          <img class="tabLeft" src="../assets/img/index/left.png" alt="">
          <div>
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
          </div>
          <img class="tabLeft" src="../assets/img/index/right.png" alt="">
        </div>
        
      </div>
      <div class="check">查看更多 》</div>
    </div>
    <!--two 结束-->

    <!--three-->
    <!--three 结束-->

    <!--four-->
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
          lists: [ // two
            {item: '收费钓点'},
            {item: '免费钓点'},
            {item: '发布钓点'},
          ],
          
        }  
    },
    mounted(){

    },
    methods:{
      //one 内容 right
      tab (index) {
        this.curId = index;
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
    margin-left: 35px;
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
    margin-left: -18px;
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
    margin-left: -36%;
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
  .barTwo .active {
    background-image:url('../assets/img/pitch.png');
    background-repeat: no-repeat;
    background-size: 128px 39px;
    z-index: 1;
    color: #fff  !important; 
  }
  .barTwo a:hover{
    color: #6C98FE;
  }
  .barTwo .active:after {
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
    margin-top: -4px;
  }
  .cero{
    font-size: 12px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #666666;
    margin-left: 10px;
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

@media (min-width: 1200px){
/**one 内容  right */
  /deep/ .el-icon-arrow-right{
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
  }
  /**right */
  .tdCont{
    font-size: 14px;
  }
  .tdMess{
    font-size: 12px;
  }
}
</style>