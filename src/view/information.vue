<template>
  <div id="information">
  <Header></Header>
  <Banner></Banner>
    <div class="container">
      <p class="headline">渔界资讯</p>
      <p class="title">Fishery information</p>
      <!--选项-->
       <el-tabs :tab-position="tabPosition" style="height: 100%;">
        <el-tab-pane label="公告">用户管理</el-tab-pane>
        <el-tab-pane label="赛事">配置管理</el-tab-pane>
        <el-tab-pane label="钓场">角色管理</el-tab-pane>
        <el-tab-pane label="渔界攻略">定时任务补偿</el-tab-pane>
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
           tabPosition: 'top', //选项
        }
    },
    mounted(){

    },
    methods:{

    }

}
</script>

<style scoped>
@media (min-width: 1200px){
  .container {
    width: 100%;
  }
  
  /**标题 */
  .headline{
    color: #333333;
    font-size: 20px; 
    font-weight: 600;
    line-height: 20px;
    font-family: Alibaba PuHuiTi;
    margin:-6% auto;
    width: 80px;
  }
  .title{  
    font-size: 10px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    line-height: 20px;
    width: 112px;
    margin:7% auto;
  }
  /**选项 */
  /deep/ .el-tabs__header {
    padding: 0;
    position: relative;
    margin: 0 28% 15px;
  }
  /deep/ .el-tabs__nav-scroll{
    display: flex;
    justify-content: space-around;
  }
  /deep/ .el-tabs__nav{
    width: 100%;
  }
  /deep/ .el-tabs__active-bar{
    display: none;
  }
  /deep/ .el-tabs__item.is-active {
    color: #fff;
    z-index: 9;
  }
  /deep/ .el-tabs__item{
    color: #B0B0B0;
    font-size: 14px;
  }
  /deep/ .el-tabs__nav-wrap::after{
    width: 400px;
    height: 44px;
    background-color: #E9E9E9;
    /* border-radius: 34px; */
    border-top-right-radius: 70px;
    border-bottom-right-radius: 58px;
    border-top-left-radius: 70px;
    border-bottom-left-radius: 58px;
  }
}
/** */
@media screen and (min-width: 997px){
  .container {
    width: 970px;
  }
}

</style>

