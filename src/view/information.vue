<template>
  <div id="information">
  <Header></Header>
  <Banner></Banner>
    <div class="container-fluid">
      <p class="headline">渔界资讯</p>
      <p class="title">Fishery information</p>
      <!--选项-->
       <el-tabs :tab-position="tabPosition" class="col-xs-12 animated bounceInLeft" >
        <el-tab-pane label="公告">
          <!--one-->
          <div class="contOne col-xs-12 col-md-12 animated bounceInRight">
            <!--图片-->
            <div class="stamp">最热</div>
            <div class="onePrint"></div>
            <!--内容-->
            <div style="display: flex;flex-direction: column;">
               <h4 class="designation">这是官方最新公告关于路亚基地大师赛的公告这是官方最新公告</h4>
               <p class="details">关于对最新赛事的规定以下做了最新更改和调整,关于对最新赛事的规定以下做了最新更改和调整,关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了最新更改和调整</p>
               <p class="date">2020-11-11 11:11</p>
               <p class="particulars" @click="goPage">查看详情 》</p>
            </div> 
          </div>
          <!--two-->
          <div class="contOne col-xs-12  col-md-12 animated bounceInRight">
            <!--图片-->
            <div class="sign">最新</div>
            <div class="onePrint"></div>
            <!--内容-->
            <div style="display: flex;flex-direction: column;">
               <h4 class="designation">这是官方最新公告关于路亚基地大师赛的公告这是官方最新公告</h4>
               <p class="details">关于对最新赛事的规定以下做了最新更改和调整,关于对最新赛事的规定以下做了最新更改和调整,关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了最新更改和调整</p>
               <p class="date">2020-11-11 11:11</p>
               <p class="particulars">查看详情 》</p>
            </div> 
          </div>
        </el-tab-pane>
        <el-tab-pane label="赛事">2</el-tab-pane>
        <el-tab-pane label="钓场">渔界攻略</el-tab-pane>
        <el-tab-pane label="渔界攻略">渔界攻略</el-tab-pane>
      </el-tabs>
    </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Banner from '../components/Banner.vue';
export default {
    name: 'information',
    components: { Banner },
    data(){
        return{
          tabPosition: 'left', //选项
        }
    },
    mounted(){

    },
    methods:{
      //查看详情
      goPage(){
        this.$router.push({ path: "/informationDetails" });
      }
    }

}
</script>

<style scoped>
#information{
  background: #f5f5f5;
}
@media (min-width: 1200px){
  .container-fluid {
    width: 100%;
  }
  
  /**标题 */
  .headline{
    color: #333333;
    font-size: 20px; 
    font-weight: 600;
    line-height: 20px;
    font-family: Alibaba PuHuiTi;
    margin:-3% auto;
    width: 80px;
  }
  .title{  
    font-size: 10px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    line-height: 20px;
    width: 112px;
    margin:3.4% auto;
    margin-bottom: 4%;
  }
  /**选项 */
  /**左侧 */
  /deep/ .el-tabs__active-bar.is-left{
    width: 134px;
    border-radius: 21px;
    background-image:url('../assets/img/pitch.png');
    background-repeat: no-repeat;
    z-index: 1;
  }
  /deep/ .el-tabs--left, .el-tabs--right{
    margin-left: 19%;
    margin-bottom: 6%;
    height: 100% !important;
  }
  /deep/ .el-tabs--left .el-tabs__nav-wrap.is-left{
    width: 143%;
  }
  /deep/ .el-tabs--left .el-tabs__item.is-left{
    text-align: center;
    z-index: 9;
  }
  /deep/ .el-tabs__content{
    padding-left: 42px;
  }
  /deep/ .el-tabs__item{
    color: #666666;
  }
  /deep/ .el-tabs--left .el-tabs__nav-wrap.is-left::after{
    display: none;
  }
  /deep/ .el-tabs--left .el-tabs__item.is-left:hover{
    color: #6C98FE;
  }
  /deep/ .el-tabs__item.is-active{
    color: #fff !important;
  }
  /**右侧 cont */
  .contOne{
    width: 900px;
    height: 252px;
    background: #FBFBFB;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin-bottom: 20px;
  }
  /**标记 */
  .stamp{
    width: 56px;
    height: 30px;
    background: linear-gradient(266deg, #E38B51, #FC686F);
    border-radius: 4px;
    color: #fff;
    line-height: 30px;
    text-align: center;
    position: absolute;
  }
  .sign{
    width: 56px;
    height: 30px;   
    background: linear-gradient(266deg, #8FFCA0, #0BCBFB);
    border-radius: 4px;
    color: #fff;
    line-height: 30px;
    text-align: center;
    position: absolute;
  }
  /**图片 */
  .onePrint{
    width: 297px;
    height: 210px;
    background: #AAAAAA;
    border-radius: 4px;
  }
  /**内容 */
  .designation{ 
    font-size: 19px;
    font-family: Alibaba PuHuiTi;
    font-weight: 600;
    color: #333333;
    padding-left: 16px;
  }
  .details{  
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #BFBFBF;
    width: 528px; 
    padding-left: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    margin-bottom: 62px;
  }
  .date{
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #BFBFBF;
    padding-left: 20px;
  }
  /**查看详情 */
  .particulars{  
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #4B7BEB;
    cursor: pointer;
    margin-left: 86%;
    margin-top: -5%;
  }


}
/** */
@media (min-width: 993px) and (max-width: 1200px) { 
    .container-fluid {
    width: 100%;
  }
  
  /**标题 */
  .headline{
    color: #333333;
    font-size: 20px; 
    font-weight: 600;
    line-height: 20px;
    font-family: Alibaba PuHuiTi;
    margin:-3% auto;
    width: 80px;
  }
  .title{  
    font-size: 10px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    line-height: 20px;
    width: 112px;
    margin:3.4% auto;
    margin-bottom: 4%;
  }
  /**选项 */
  /**左侧 */
  /deep/ .el-tabs__active-bar.is-left{
    width: 134px;
    border-radius: 21px;
    background-image:url('../assets/img/pitch.png');
    background-repeat: no-repeat;
    z-index: 1;
  }
  /deep/ .el-tabs--left, .el-tabs--right{
    margin-bottom: 6%;
    height: 100% !important;
  }
  /deep/ .el-tabs--left .el-tabs__nav-wrap.is-left{
    width: 143%;
  }
  /deep/ .el-tabs--left .el-tabs__item.is-left{
    text-align: center;
    z-index: 9;
  }
  /deep/ .el-tabs__content{
    padding-left: 42px;
  }
  /deep/ .el-tabs__item{
    color: #666666;
  }
  /deep/ .el-tabs--left .el-tabs__nav-wrap.is-left::after{
    display: none;
  }
  /deep/ .el-tabs--left .el-tabs__item.is-left:hover{
    color: #6C98FE;
  }
  /deep/ .el-tabs__item.is-active{
    color: #fff !important;
  }
  /**右侧 cont */
  .contOne{
    width: 750px;
    height: 252px;
    background: #FBFBFB;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin-bottom: 20px;
  }
  /**标记 */
  .stamp{
    width: 56px;
    height: 30px;
    background: linear-gradient(266deg, #E38B51, #FC686F);
    border-radius: 4px;
    color: #fff;
    line-height: 30px;
    text-align: center;
    position: absolute;
  }
  .sign{
    width: 56px;
    height: 30px;   
    background: linear-gradient(266deg, #8FFCA0, #0BCBFB);
    border-radius: 4px;
    color: #fff;
    line-height: 30px;
    text-align: center;
    position: absolute;
  }
  /**图片 */
  .onePrint{
    width: 297px;
    height: 210px;
    background: #AAAAAA;
    border-radius: 4px;
  }
  /**内容 */
  .designation{ 
    font-size: 19px;
    font-family: Alibaba PuHuiTi;
    font-weight: 600;
    color: #333333;
    padding-left: 16px;
  }
  .details{  
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #BFBFBF;
    width: 528px; 
    padding-left: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 62px;
  }
  .date{
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #BFBFBF;
    padding-left: 20px;
  }
  /**查看详情 */
  .particulars{  
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #4B7BEB;
    cursor: pointer;
    margin-left: 83%;
    margin-top: -5%;
  }
}
/** */
@media screen and (max-width: 992px){
  .container-fluid {
    width: 100%;
  }
    /**标题 */
  .headline{
    color: #333333;
    font-size: 20px; 
    font-weight: 600;
    line-height: 20px;
    font-family: Alibaba PuHuiTi;
    margin:-3% auto;
    width: 80px;
  }
  .title{  
    font-size: 10px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    line-height: 20px;
    width: 112px;
    margin:3.4% auto;
    margin-bottom: 4%;
  }
  /**选项 */
  /**左侧 */
  /deep/ .el-tabs--left .el-tabs__header.is-left{
    float:none;
  }
  /deep/ .el-tabs--left .el-tabs__nav.is-left{
    float:left;
  }
  /deep/ .el-tabs__active-bar.is-left{
    width: 100px;    
  }
  /deep/ .el-tabs__item.is-active{
    color: #fff !important;
    background: linear-gradient(266deg, #6C98FE, #4D7AFF);
    border-radius: 21px;
    padding: 4px 10px;
  }
  /deep/ .el-tabs--left, .el-tabs--right{
    margin-bottom: 6%;
    height: 100% !important;
  }
  /deep/ .el-tabs--left .el-tabs__nav-wrap.is-left{
    width: 143%;
  }
  /deep/ .el-tabs--left .el-tabs__item.is-left{
    text-align: center;
    z-index: 9;
  }
  /deep/ .el-tabs__item{
    color: #666666;
  }
  /deep/ .el-tabs--left .el-tabs__nav-wrap.is-left::after{
    display: none;
  }
  /deep/ .el-tabs--left .el-tabs__item.is-left{
    display: inline;
  }
  /* /deep/ .el-tabs--left .el-tabs__item.is-left:hover{
    color: #fff !important;
    background: linear-gradient(266deg, #6C98FE, #4D7AFF);
    border-radius: 21px;
    padding: 2px 23px;
  } */

  /**右侧 cont */
  .contOne{
    width: 316px;
    height: 100%;
    background: #FBFBFB;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 20px;
  }
  /**标记 */
  .stamp{
    width: 56px;
    height: 30px;
    background: linear-gradient(266deg, #E38B51, #FC686F);
    border-radius: 4px;
    color: #fff;
    line-height: 30px;
    text-align: center;
    position: absolute;
  }
  .sign{
    width: 56px;
    height: 30px;   
    background: linear-gradient(266deg, #8FFCA0, #0BCBFB);
    border-radius: 4px;
    color: #fff;
    line-height: 30px;
    text-align: center;
    position: absolute;
  }
  /**图片 */
  .onePrint{
    width: 297px;
    height: 176px;
    background: #AAAAAA;
    border-radius: 4px;
  }
  /**内容 */
  .designation{ 
    font-size: 18px;
    font-family: Alibaba PuHuiTi;
    font-weight: 600;
    color: #333333;
  }
  .details{  
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #BFBFBF;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 30px;
  }
  .date{
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #BFBFBF;
  }
  /**查看详情 */
  .particulars{  
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #4B7BEB;
    cursor: pointer;
    margin-left: 74%;
    margin-top: -10%;
  }
}

</style>

