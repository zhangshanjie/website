<template>
  <div id="Competition">
  <Header></Header>
  <Banner></Banner>
  <div class="contOne">
    <!--标题-->
      <p class="headline">了解我们的赛事教程</p>
      <p class="title">Learn about our event tutorial</p>
      <!--内容-->
      <div class="cards">
        <!--one-->
        <div class="card col-xs-1">
          <img class="print" src="@/assets/img/competition/one.png" alt="">
          <h4 class="designation">主办方</h4>
          <p class="content">点击首页中的发布“+” 按键，发布赛
    事，并选择比赛类型和积分模式
完善赛事信息后，确认无误后，才可正
                    式发布比赛</p>
          <p class="details" @click="goDetails">查看详情</p>
          <p class="symbol" @click="goDetails">︾</p>
        </div>
        <!--two-->
        <div class="card col-xs-1">
          <img class="print" src="@/assets/img/competition/two.png" alt="">
          <h4 class="designation">主裁判</h4>
          <p class="content">赛事首页中点开“我的赛事”并选择 发
    布的比赛，可进行报名查看和赛事
设置常规赛赛事设置，淘汰赛赛事设置

</p>
          <p class="details" @click="goDetails">查看详情</p>
          <p class="symbol" @click="goDetails">︾</p>
        </div>
        <!--three-->
        <div class="card col-xs-1">
          <img class="print" src="@/assets/img/competition/three.png" alt="">
          <h4 class="designation">裁判员</h4>
          <p class="content">裁判录入扫码
    输入成绩
    常规赛事
  对抗淘汰赛</p>
          <p class="details" @click="goDetails">查看详情</p>
          <p class="symbol" @click="goDetails">︾</p>
        </div>
        <!--four-->
        <div class="card col-xs-1">
          <img class="print" src="@/assets/img/competition/four.png" alt="">
          <h4 class="designation">运动员</h4>
          <p class="content">浏览赛事
    报名
扫码报到
比赛抽签</p>
          <p class="details" @click="goDetails">查看详情</p>
          <p class="symbol" @click="goDetails">︾</p>
        </div>
      </div>
  </div>
  <div class="container">
    <p class="headlineTwo">了解我们的赛事情况</p>
    <p class="titleTwo">Learn about our events</p>
    <div class="overcont">
      <!--左侧内容-->
      <div class="contTwoleft col-md-7 col-xs-1">
        <el-tabs v-model="activeName">
          <!--未开始-->
          <el-tab-pane label="未开始" name="first">
            <!--one-->
            <div class="leftOne">
              <div class="picture"></div>
              <div class="matter">
                <div class="topic">大师赛-上海·阳光路亚基地（第一场)</div><span class="gameOne">官方赛</span>
                <div style="display: flex;flex-direction: row;margin-top: 21px;">
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
            <!--one-->
            <div class="leftOne">
              <div class="picture"></div>
              <div class="matter">
                <div class="topic">大师赛-上海·阳光路亚基地（第一场)</div><span class="gameOne gameTwo">公益赛</span>
                <div style="display: flex;flex-direction: row;margin-top: 21px;">
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
            <!--one-->
            <div class="leftOne">
              <div class="picture"></div>
              <div class="matter">
                <div class="topic">大师赛-上海·阳光路亚基地（第一场)</div><span class="gameOne gameThree">主题赛</span>
                <div style="display: flex;flex-direction: row;margin-top: 21px;">
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
          </el-tab-pane>
          <div class="check" @click="goMore">查看更多 》</div>
          <!--进行中-->
          <el-tab-pane label="进行中" name="second">22</el-tab-pane>
          <!--已结束-->
          <el-tab-pane label="已结束" name="third">33</el-tab-pane>
        </el-tabs>
        <div class="switchover switcleft">《</div>
        <div  style="padding-left: 12px;" class="switchover switcright">》</div>
      </div>
      <!--右侧内容 top-->
      <div class="contcol">
        <div>
          <div class="rightTop col-md-5 col-xs-1">
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
        </div>
        <!--右侧内容 bottom-->
        <div>
          <div class="rightTop col-md-5 col-xs-1">
            <span>排名</span> <span style="color:#C5C5C5">|</span>
            <span>积分</span> <span style="color:#C5C5C5">|</span>
            <span>姓名</span>
          </div>
          <!--table内容-->
          <table class="tableOver">
            <tr class="trOver">
              <th><img src="@/assets/img/golden.png" alt=""></th>
              <th>220</th>
              <th>未开始</th>
            </tr>
            <tr class="trOver">
              <th><img src="@/assets/img/cuprum.png" alt=""></th>
              <th>210</th>
              <th>未开始</th>
            </tr>
            <tr class="trOver">
              <th><img src="@/assets/img/silver.png" alt=""></th>
              <th>200</th>
              <th>未开始</th>
            </tr>
          </table>
          <div class="more" @click="goRanking">查看排名 》</div>
        </div>
    </div>
      
    </div>
    
    
  </div>
  <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Banner from '@/components/Banner.vue';
export default {
  name: "Competition",
  components: { Banner },
  data() {
    return {
      activeName: 'first'
    };
  },
  mounted(){

  },
  methods:{
    //查看详情
    goDetails(){
      this.$router.push({path:'/CompetitionDetails'});
    },
    //查看排名
    goRanking(){
      this.$router.push({path:'/CompetitionRanking'});
    },
    //查看更多
    goMore(){
      this.$router.push({path:'/CompetitionMore'});
    }
  }
};
</script>
<style scoped>
#Competition{
  background: #f5f5f5;
}
@media (min-width: 998px){
  .contOne, .contTwo{
    width: 100%;
  }
  /**contOne */
  /**标题 */
  .headline{
    color: #333333;
    font-size: 20px; 
    font-weight: 600;
    line-height: 20px;
    font-family: Alibaba PuHuiTi;
    margin:-3% auto;
    width: 180px;
  }
  .title{  
    font-size: 10px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    line-height: 20px;
    width: 173px;
    margin:3.2% auto;
  }
  /**cont */
  .cards{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .card{
    width: 282px; height: 400px;
    background: #fff; 
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin-right: 25px;
    padding: 0 22px;
  }
  .card:hover{
    box-shadow: 0px 8px 19px 2px rgba(41, 46, 58, 0.17);
    cursor: pointer;
  }
  .print{
    width: 150px;
    margin: 51px auto;
  }
  .designation{
    font-size: 20px;
    font-family: Alibaba PuHuiTi;
    font-weight: 600;
    color: #333333;
    line-height: 20px;
    margin: -24px auto;
  }
  .card:hover .designation{
    color: #4276F0;
  }
  .content{ 
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    font-weight: 500;
    color: #B8B7B7;
    line-height: 22px;
    margin: 36px auto;
    white-space:pre;
  }
  .details{ 
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #B8B7B7;
    line-height: 20px;
    margin: -25px auto;
  }
  .card:hover .details{
    color: #4276F0;
  }
  .symbol{
    color: #B8B7B7;
    margin: 22px auto;
  }
  .card:hover .symbol{
    color: #4276F0;
  }
  /**contTwo */
  /**标题 */
  .headlineTwo{
    color: #333333;
    font-size: 20px; 
    font-weight: 600;
    line-height: 20px;
    font-family: Alibaba PuHuiTi;
    margin: 0 auto;
    margin-top: 6%;
    width: 180px;
  }
  .titleTwo{  
    font-size: 10px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    line-height: 20px;
    width: 133px;
    margin:0.4% auto;
    margin-bottom: 2%;
  }
  /**cont */
  /deep/ .el-tabs__header{
    width: 100%; 
  }
  /deep/ .el-tabs__content{
    width: 100%;
    height: 100%;
  }
  /deep/ .el-tabs__nav-wrap{
    display: flex;
    justify-content: center;
  }
  /deep/ .el-tabs__nav{
    width: 600px;
    display: flex;
    justify-content: space-around;
  }
  /deep/ .el-tabs__nav-wrap::after{
    border-radius: 4px;
    height: 44px;
    background: #E9E9E9;
  }
  /deep/ .el-tabs__item.is-active{
    color: #6C98FE;
    border-bottom: 2px solid #6C98FE;
    padding: 0;
  }
  /deep/ .el-tabs__active-bar{
    display: none;
  }
  /deep/ .el-tabs__item{
    color: #999;
    padding: 0;
  }
  /**over */
  .overcont{
    display: flex;
    flex-direction: row;
  }
  /**内容 left*/
  .leftOne{
    width: 100%;
    background: #FFFFFF;
    border-radius: 14px;
    display: flex;
    flex-direction: row;
    margin-bottom: 13px;
    padding-right: 12px;
  }
  .picture{
    width: 180px;
    height: 170px;
    background: #E1E1E1;
    border-radius: 4px;
    margin: auto 12px;
  }
  .matter{
    margin-top:24px;
    white-space: nowrap;
  }
  .topic{
    font-size: 22px;
    font-family: Alibaba PuHuiTi;
    color: #444444;
    display: inline;
  }
  .gameOne{ 
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #759EFE;
    border: 2px solid #759EFE;   
    border-radius: 4px;
    padding: 2px;
    margin-left: 6px;
  }
  .gameTwo{
    color: #54E4D3;
    border: 2px solid #54E4D3;  
  }
  .gameThree{
    color: #F28B78;
    border: 2px solid #F28B78;  
  }
  .substance{ 
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
  }
  .angle{
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-left: 100px;
  }
  .bonus{
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-left: 113px;
  }
  .subcont{
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-top: 11px;
  }
  .into{
    margin-top: -14%;
    margin-left: 86%; 
    cursor: pointer;
  }
  /**查看更多 */
  .check{   
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #4B7BEB;
    cursor: pointer;
    float: right;
    margin-right: 16px;
    margin-top: 4px;
    margin-bottom: 50px;
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
    top: 48%;
    left: -5%;
  }
  .switcright{
    position: absolute;
    top: 48%;
    left: 99%;
  }
  /**内容 right */
  .rightTop{
    width: 100%;
    height: 40px;
    background: #E9E9E9;
    border-radius: 4px;
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    font-weight: 400;
    color: #999999;
    line-height: 40px;
    display: flex;
    justify-content: space-around;
    margin-left: 4%;
  }
  .tableOver{
    width: 100%;
    height: 234px;
    margin-left: 4%;
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
    font-family: Alibaba PuHuiTi;
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
  
  
}
/** */
@media screen and (max-width: 997px) { 
  /**contOne */
  /**标题 */
  .headline{
    color: #333333;
    font-size: 20px; 
    font-weight: 600;
    line-height: 20px;
    font-family: Alibaba PuHuiTi;
    margin:-13% auto;
    width: 180px;
  }
  .title{  
    font-size: 10px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    line-height: 20px;
    width: 173px;
    margin:13.2% auto;
  }
  /**cont */
  .cards{
    width: 100%; height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .card{
    width: 282px; height: 400px;
    background: #fff; 
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 0 22px;
    margin: 10px auto;
  }
  .print{
    width: 150px;
    margin: 51px auto;
  }
  .designation{
    font-size: 20px;
    font-family: Alibaba PuHuiTi;
    font-weight: 600;
    color: #333333;
    line-height: 20px;
    margin: -24px auto;
  }
  .content{ 
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    font-weight: 500;
    color: #B8B7B7;
    line-height: 22px;
    margin: 36px auto;
    white-space:pre;
  }
  .details{ 
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #B8B7B7;
    line-height: 20px;
    margin: -25px auto;
  }
  .symbol{
    color: #B8B7B7;
    margin: 22px auto;
  }
  /**contTwo */
   /**标题 */
  .headlineTwo{
    color: #333333;
    font-size: 20px; 
    font-weight: 600;
    line-height: 20px;
    font-family: Alibaba PuHuiTi;
    margin: 0 auto;
    margin-top: 6%;
    width: 180px;
  }
  .titleTwo{  
    font-size: 10px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    line-height: 20px;
    width: 133px;
    margin:0.4% auto;
    margin-bottom: 2%;
  }
  /**cont */
  /deep/ .el-tabs__header{
    width:310px;
  }
  /deep/ .el-tabs__content{
    width: 680px;
    height: 100%;
    margin-left: 31%;
  }
  /deep/ .el-tabs__nav-wrap{
    display: flex;
    justify-content: center;
  }
  /deep/ .el-tabs__nav{
    width: 310px;
    display: flex;
    justify-content: space-around;
  }
  /deep/ .el-tabs__nav-wrap::after{
    border-radius: 4px;
    height: 44px;
    background: #E9E9E9;
  }
  /deep/ .el-tabs__item.is-active{
    color: #6C98FE;
    border-bottom: 2px solid #6C98FE;
    padding: 0;
  }
  /deep/ .el-tabs__active-bar{
    display: none;
  }
  /deep/ .el-tabs__item{
    color: #999;
    padding: 0;
  }
  /**over */
  .overcont{
    display: flex;
    flex-direction: column;
  }
  /**内容 left*/
  .leftOne{
    width: 310px;
    height: 208px;
    background: #FFFFFF;
    border-radius: 14px;
    display: flex;
    flex-direction: row;
    margin-bottom: 13px;
    padding: 0 10px;
  }
  .picture{
    display: none;
  }
  .matter{
    margin-top:24px;
    white-space: nowrap;
  }
  .topic{
    font-size: 15px;
    font-family: Alibaba PuHuiTi;
    color: #444444;
    display: inline;
    font-weight: 600;
  }
  .gameOne{ 
    font-size: 14px;
    font-family: PingFang SC;
    color: #759EFE;
    border: 1px solid #759EFE;   
    border-radius: 4px;
    padding: 2px;
    margin-left: 6px;
  }
  .gameTwo{
    color: #54E4D3;
    border: 1px solid #54E4D3;  
  }
  .gameThree{
    color: #F28B78;
    border: 1px solid #F28B78;  
  }
  .substance{ 
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
  }
  .angle{
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-left: 64px;
  }
  .bonus{
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-left: 62px;
  }
  .subcont{
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-top: 11px;
  }
  .into{
    width: 56px;
    margin-top: -19%;
    margin-left: 82%; 
    cursor: pointer;
  }
  /**查看更多 */
  .check{   
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #4B7BEB;
    cursor: pointer;
    margin-left: 32%;
    margin-bottom: 26px;
  }
  /**切换 */
  .switchover{
    display: none;
  }
  /**内容 right */
  .rightTop{
    width: 310px;
    height: 40px;
    background: #E9E9E9;
    border-radius: 4px;
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    font-weight: 400;
    color: #999999;
    line-height: 40px;
    display: flex;
    justify-content: space-around;
    margin-left: 3%;
  }
  .tableOver{
    width: 310px;
    height: 234px;
    margin-left: 3%;
  }
  .trOver{
    border-bottom: 1px solid #F0F0F0;
  }
  .trOver>th{
    width: 144px;
    text-align: center;
  }
  .trOver img{
    margin-left: 26%;
  }
  .more{
    color: #C7C7C7;
    font-size: 14px;
    margin-left: 39%;
    margin-bottom: 10%;
  }
  
}
</style>

