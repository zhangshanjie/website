<template>
  <div id="informationDetails">
  <Header></Header>
  <Banner></Banner>
    <div class="container">
      <!--顶部-->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <img class="navigationIcon" src="../assets/img/navigationIcon.png" alt="">
        <el-breadcrumb-item :to="{ path: '/information' }">渔界资讯</el-breadcrumb-item>
        <el-breadcrumb-item>资讯详情</el-breadcrumb-item>
      </el-breadcrumb>
      <!--内容-->
      <div class="cont">
        <!--内容 left-->
        <div class="contLeft col-md-7 col-xs-12">
          <!--标题-->
          <div class="titles">
            <div class="title">这是官方最新公告关于路亚基地大师赛的公告这是官方最新公告</div>
            <span class="notice">公告</span>
          </div>
          <!--副标题-->
          <div class="titles">
            <div class="team">渔界竞钓官方团队</div>
            <span class="date">2020-11-11  11:11:11</span>
          </div>
          <!--图片-->
            <img class="print"  src="" alt="">
            <p class="matter">关于对最新赛事的规定以下做了最新更改和调整,关于对最新赛事的规定以下做了最新更改和调整,关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了最新更,改和调整关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了。最新更改和调整关于对最新赛事的规定以下做了最新更改和调整。</p>
        </div>
        <!--内容 right-->
        <div class="contRight col-md-5 col-xs-12">
          <!--内容 right_top-->
          <div class="contRight_top">
            <!--标题-->
            <div class="corner"></div>
            <span class="caption">TA的文章</span>
            <!--内容-->
            <div style="display: flex;flex-direction: row;">
              <div class="picture"><img src="" alt=""></div>
              <p class="topic">关于对最新赛事的规定以下做了最新更改和调整,关于对最新赛事的规定以下做了最新更改和调整,关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了最新更,改和调整关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了。最新更改和调整关于对最新赛事的规定以下做了最新更改和调整。</p>
            </div>
            <div class="time">2020-11-11  11:11:11</div> 
            <!--刷新-->
            <div class="refresh">换一换</div>
          </div>
          <!--内容 right_bottom-->
          <div class="contRight_bottom">
            <!--标题-->
            <div class="corner"></div>
            <span class="caption">相关推荐</span>
            <!--内容-->
            <div style="display: flex;flex-direction: row;">
              <div class="picture"><img src="" alt=""></div>
              <p class="topic">关于对最新赛事的规定以下做了最新更改和调整,关于对最新赛事的规定以下做了最新更改和调整,关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了最新更,改和调整关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了。最新更改和调整关于对最新赛事的规定以下做了最新更改和调整。</p>
            </div>
            <div class="time">2020-11-11  11:11:11</div> 
            <!--刷新-->
            <div class=" refresh refresh_bottom">换一换</div>
          </div>

        </div>
      </div>

    </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Banner from '../components/Banner.vue';
export default {
    name: 'informationDetails',
    components: { Banner },
    data(){
        return{
         
        }
    },
    mounted(){

    },
    methods:{

    }

}
</script>

<style scoped>
#informationDetails{
  background: #f5f5f5;
}
@media (min-width: 1200px){
  /**顶部 */
  /**navigationIcon */
  .navigationIcon{
    float: left;
    margin-right: 1%;
    margin-top: -2px;
  }
  /**导航 */
  /deep/ .el-breadcrumb{
    margin-top: -8%;
  }
  /deep/ .el-breadcrumb__inner{
    color: #6C98FE !important;
    font-size: 500 !important;
  }
  /deep/ .el-icon-arrow-right:before{
    background-image: url("../assets/img/navigationBoult.png")  !important;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }
  /**内容 */
  .cont{
    display: flex;
    flex-direction: row;
  }
  /**内容 left */
  .contLeft{
    width: 900px;
    height: 948px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-top: 4%;
    margin-bottom: 8%;
    display: flex;
    flex-direction: column;
    padding: 24px 33px;
  }
  /**标题 */
  .titles{
    display: flex;
    flex-direction: row;
  }
  .title{   
    font-size: 24px;
    font-family: Alibaba PuHuiTi;
    font-weight: 800;
    color: #333333;
  }
  .notice{      
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #FFFFFF;
    background: linear-gradient(266deg, #6C98FE 0%, #4D7AFF 99.31640625%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    border:1px solid #4D7AFF;
    border-radius: 4px;
    width: 45px; height: 23px;
    margin-top: 7px;
    margin-left: 12px;
    text-align: center;
    line-height: 23px;
  }
  /**副标题 */
  .team{   
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-top: 16px;
  }
  .date{   
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #C6C6C6;
    margin-top: 16px;
    margin-left: 27px;
  }
  /**图片 */
  .print{
    width: 833px;
    height: 272px;
    margin: 22px 0;
  }
  /**内容 */
  .matter{
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #595959;
    text-indent:2em;
    line-height: 10px;
    line-height: 28px;
  }
  /** */
  /**内容 right */
  .contRight{
    display: flex;
    flex-direction: column;
  }
  /**right_top */
  .contRight_top{
    width: 285px;
    height: 420px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-left: 13px;
    margin-top: 15%;
    padding: 30px 18px;
  }
  /**标题 */
  .corner{
    width: 3px;
    height: 17px;
    background: #527FE7;
    display: inline-block;
  }
  .caption{ 
    font-size: 20px;
    font-family: Alibaba PuHuiTi;
    font-weight: bold;
    color: #333333;
    padding-left: 4px;
  }
  /**内容 */
  .picture{
    width: 108px;
    height: 66px;
    background: #f5f5f5;
    margin-top: 19px;
    margin-bottom: 11px;
  }
  .topic{    
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #666666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top: 19px;
    height: 34px; width: 53%;
    margin-left: 7px;
    line-height: 18px;
  }
  .time{   
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-left: 48%;
    margin-top: -11%;
  }
  /**刷新 */
  .refresh{
    width: 252px;
    height: 32px;
    background: #ECECEC;
    position: relative;
    top: 64%;
    bottom: 0;
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #A9A9A9;
    text-align: center;
    line-height: 32px;
  }
  /**right_bottom */
  .contRight_bottom{
    width: 285px;
    height: 516px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-left: 13px;
    margin-top: 4%;
    padding: 30px 18px;
  }
  /**刷新 */
  .refresh_bottom{
    position: relative;
    top: 68%;
    bottom: 0;
  }

}
/** */
@media (min-width: 993px) and (max-width: 1200px){
  /**顶部 */
  /**navigationIcon */
  .navigationIcon{
    float: left;
    margin-right: 1%;
    margin-top: -2px;
  }
  /**导航 */
  /deep/ .el-breadcrumb{
    margin-top: -8%;
  }
  /deep/ .el-breadcrumb__inner{
    color: #6C98FE !important;
    font-size: 500 !important;
  }
  /deep/ .el-icon-arrow-right:before{
    background-image: url("../assets/img/navigationBoult.png")  !important;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }
  /**内容 */
  .cont{
    display: flex;
    flex-direction: row;
  }
  /**内容 left */
  .contLeft{
    width: 100%;
    height: 948px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-top: 4%;
    margin-bottom: 8%;
    display: flex;
    flex-direction: column;
    padding: 24px 33px;
  }
  /**标题 */
  .titles{
    display: flex;
    flex-direction: row;
  }
  .title{   
    font-size: 24px;
    font-family: Alibaba PuHuiTi;
    font-weight: 800;
    color: #333333;
  }
  .notice{      
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #FFFFFF;
    background: linear-gradient(266deg, #6C98FE 0%, #4D7AFF 99.31640625%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    border:1px solid #4D7AFF;
    border-radius: 4px;
    width: 45px; height: 23px;
    margin-top: 7px;
    margin-left: 12px;
    text-align: center;
    line-height: 23px;
  }
  /**副标题 */
  .team{   
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-top: 16px;
  }
  .date{   
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #C6C6C6;
    margin-top: 16px;
    margin-left: 27px;
  }
  /**图片 */
  .print{
    width: 100%;
    height: 272px;
    margin: 22px 0;
  }
  /**内容 */
  .matter{
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #595959;
    text-indent:2em;
    line-height: 10px;
    line-height: 28px;
  }
  /** */
  /**内容 right */
  .contRight{
    display: flex;
    flex-direction: column;
  }
  /**right_top */
  .contRight_top{
    width: 285px;
    height: 420px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-left: 13px;
    margin-top: 13%;
    padding: 30px 18px;
  }
  /**标题 */
  .corner{
    width: 3px;
    height: 17px;
    background: #527FE7;
    display: inline-block;
  }
  .caption{ 
    font-size: 20px;
    font-family: Alibaba PuHuiTi;
    font-weight: bold;
    color: #333333;
    padding-left: 4px;
  }
  /**内容 */
  .picture{
    width: 108px;
    height: 66px;
    background: #f5f5f5;
    margin-top: 19px;
    margin-bottom: 11px;
  }
  .topic{    
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #666666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top: 19px;
    height: 34px; width: 53%;
    margin-left: 7px;
    line-height: 18px;
  }
  .time{   
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-left: 48%;
    margin-top: -11%;
  }
  /**刷新 */
  .refresh{
    width: 252px;
    height: 32px;
    background: #ECECEC;
    position: relative;
    top: 64%;
    bottom: 0;
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #A9A9A9;
    text-align: center;
    line-height: 32px;
  }
  /**right_bottom */
  .contRight_bottom{
    width: 285px;
    height: 516px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-left: 13px;
    margin-top: 4%;
    padding: 30px 18px;
  }
  /**刷新 */
  .refresh_bottom{
    position: relative;
    top: 68%;
    bottom: 0;
  }
}
/** */
@media screen and (max-width: 992px){
  /**顶部 */
  /**navigationIcon */
  .navigationIcon{
    float: left;
    margin-right: 1%;
    margin-top: -2px;
  }
  /**导航 */
  /deep/ .el-breadcrumb{
    margin-top: -8%;
  }
  /deep/ .el-breadcrumb__inner{
    color: #6C98FE !important;
    font-size: 500 !important;
  }
  /deep/ .el-icon-arrow-right:before{
    background-image: url("../assets/img/navigationBoult.png")  !important;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }
  /**内容 */
  .cont{
    display: flex;
    flex-direction: column;
  }
  /**内容 left */
  .contLeft{
    width: 100%;
    height: 948px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-top: 4%;
    margin-bottom: 8%;
    display: flex;
    flex-direction: column;
    padding: 20px 14px;
  }
  /**标题 */
  .titles{
    display: flex;
    flex-direction: row;
  }
  .title{   
    font-size: 24px;
    font-family: Alibaba PuHuiTi;
    font-weight: 800;
    color: #333333;
  }
  .notice{      
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #FFFFFF;
    background: linear-gradient(266deg, #6C98FE 0%, #4D7AFF 99.31640625%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    border:1px solid #4D7AFF;
    border-radius: 4px;
    width: 81px;
    height: 26px;
    margin-top: 5px;
    margin-left: 12px;
    text-align: center;
    line-height: 23px;
  }
  /**副标题 */
  .team{   
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-top: 16px;
  }
  .date{   
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #C6C6C6;
    margin-top: 16px;
    margin-left: 27px;
  }
  /**图片 */
  .print{
    width: 100%;
    height: 272px;
    margin: 22px 0;
  }
  /**内容 */
  .matter{
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #595959;
    text-indent:2em;
    line-height: 10px;
    line-height: 28px;
  }
  /** */
  /**内容 right */
  .contRight{
    display: flex;
    flex-direction: column;
  }
  /**right_top */
  .contRight_top{
    width: 100%;
    height: 420px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-top: 9%;
    padding: 26px 14px;
  }
  /**标题 */
  .corner{
    width: 3px;
    height: 17px;
    background: #527FE7;
    display: inline-block;
  }
  .caption{ 
    font-size: 20px;
    font-family: Alibaba PuHuiTi;
    font-weight: bold;
    color: #333333;
    padding-left: 4px;
  }
  /**内容 */
  .picture{
    width: 108px;
    height: 66px;
    background: #f5f5f5;
    margin-top: 19px;
    margin-bottom: 11px;
  }
  .topic{    
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #666666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top: 19px;
    height: 34px; width: 53%;
    margin-left: 7px;
    line-height: 18px;
  }
  .time{   
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-left: 48%;
    margin-top: -11%;
  }
  /**刷新 */
  .refresh{
    width: 252px;
    height: 32px;
    background: #ECECEC;
    position: relative;
    top: 64%;
    left: 6%;
    bottom: 0;
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #A9A9A9;
    text-align: center;
    line-height: 32px;
  }
  /**right_bottom */
  .contRight_bottom{
    width: 100%;
    height: 516px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-top: 4%;
    padding: 26px 14px;
    margin-bottom: 12%;
  }
  /**刷新 */
  .refresh_bottom{
    position: relative;
    top: 68%;
    left: 6%;
    bottom: 0;
  }
}

</style>