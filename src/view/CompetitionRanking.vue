<template>
  <div id="CompetitionRanking">
  <Header></Header>
  <Banner></Banner>
    <div class="container">
      <!--顶部-->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <img class="navigationIcon" src="../assets/img/navigationIcon.png" alt="">
        <el-breadcrumb-item :to="{ path: '/Competition' }">最新赛事</el-breadcrumb-item>
        <el-breadcrumb-item>赛事排名</el-breadcrumb-item>
      </el-breadcrumb>
      <!--我的排名-->
      <div class="mine">
        <div class="ranking">我的排名:7</div>
        <div class="turnoverTime">更新到2020.11.20</div>
      </div>
      <!--内容-->
      <table class="form">
        <tr>
          <th class="first">排 名</th>
          <th class="first">积 分</th>
          <th class="first">姓 名</th>
        </tr>
        <tr class="secondly">
          <th><img src="../assets/img/golden.png" alt=""></th>
          <th>210</th>
          <th>王先生</th>
        </tr>
        <tr class="secondly">
          <th><img src="../assets/img/cuprum.png" alt=""></th>
          <th>210</th>
          <th>王先生</th>
        </tr>
        <tr class="secondly">
          <th><img src="../assets/img/silver.png" alt=""></th>
          <th>210</th>
          <th>王先生</th>
        </tr>
      </table>
      <!--分页-->
      <el-pagination
      :page-size="10"
      :pager-count="5"
      layout="prev, pager, next"
      :total="500">
    </el-pagination>
    </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Banner from '../components/Banner.vue';
export default {
    name: 'CompetitionRanking',
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
#CompetitionDetails{
  background: #f5f5f5;
}
  /**顶部 */
  /**navigationIcon */
  .navigationIcon{
    float: left;
    margin-right: 1%;
  }
  /**导航 */
  /deep/ .el-breadcrumb{
    margin-top: -8%;
    margin-bottom: 4%;
  }
  /deep/ .el-breadcrumb__inner{
    color: #6C98FE !important;
    font-size: 500 !important;
  }
  /deep/ .el-icon-arrow-right:before{
    color: #6C98FE;
  }
  /**我的排名 */
  .mine{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .ranking{   
    font-size: 16px;
    font-family: FZHanZhenGuangBiaoS-GB;
    font-weight: 600;
    color: #6C98FE;
  }
  /**更新时间 */
  .turnoverTime{    
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    font-weight: 400;
    color: #BFBFBF;
  }
  /**内容 */
  .form{
    width: 100%;
    margin-bottom: 36px;
  }
  .form tr{
    height: 70px;
    display: flex;
    justify-content: space-around;
    line-height: 70px;
  }
  .first{   
    font-size: 18px;
    font-family: Alibaba PuHuiTi;
    color: #C3C3C3;
  }
  .secondly tr{
    line-height: 70px;
  }
  .secondly img{
    margin-top: 18px !important;
  }
  .secondly th{    
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    font-weight: 400;
    color: #666666;
  }
  table tr:nth-child(odd){
    background: #F1F1F1;
  }
  /**分页 */
  /deep/ .el-pagination{
    margin-left: 36%;
    margin-bottom: 40%;
  }
  /deep/ .el-pager li{
    color: #C3C3C3;
  }
  /deep/ .el-pager li:hover{
    color: #6C98FE;
  }
  /deep/ .el-icon-more:before{
    color: #C3C3C3;
  }
  /deep/ .el-pager li.active{
    background: #6C98FE;
    border-radius: 16px;
    color: #fff;
  }
@media (min-width: 1200px){

  
}
/** */
@media (min-width: 993px) and (max-width: 1200px){
  .form tr{
    height: 50px;
    display: flex;
    justify-content: space-around;
    line-height: 50px;
  }
  .first{   
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #C3C3C3;
  }
  .secondly tr{
    line-height: 50px;
  }
  .secondly th{    
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    font-weight: 400;
    color: #666666;
  }
  .secondly img{
    margin-top: 10px !important;
  }
 
}
/** */
@media screen and (max-width: 992px){
  .form tr{
    height: 40px;
    display: flex;
    justify-content: space-around;
    line-height: 40px;
  }
  .first{   
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #C3C3C3;
  }
  .secondly tr{
    line-height: 40px;
  }
  .secondly th{    
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    font-weight: 400;
    color: #666666;
  }
  .secondly img{
    margin-top: 2px !important;
  }
  /**分页 */
  /deep/ .el-pagination{
    margin-left: 7%;
    margin-bottom: 40%;
  }
}

</style>