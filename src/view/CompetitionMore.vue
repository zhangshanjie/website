<template>
  <div id="CompetitionMore">
  <Header></Header>
  <Banner></Banner>
    <div class="container">
      <!--顶部-->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <img class="navigationIcon" src="../assets/img/navigationIcon.png" alt="">
        <el-breadcrumb-item :to="{ path: '/Competition' }">最新赛事</el-breadcrumb-item>
        <el-breadcrumb-item>赛事中心</el-breadcrumb-item>
      </el-breadcrumb>
      <!--导航-->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
        <el-submenu index="1">
          <template slot="title">官方赛</template>
          <el-menu-item index="1-1">未开始</el-menu-item>
          <el-menu-item index="1-2">进行中</el-menu-item>
          <el-menu-item index="1-3">已结束</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">主题赛</template>
          <el-menu-item index="2-1">未开始</el-menu-item>
          <el-menu-item index="2-2">进行中</el-menu-item>
          <el-menu-item index="2-3">已结束</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">公益赛</template>
          <el-menu-item index="3-1">未开始</el-menu-item>
          <el-menu-item index="3-2">进行中</el-menu-item>
          <el-menu-item index="3-3">已结束</el-menu-item>
        </el-submenu>
        
      </el-menu>
      <!--内容-->
      
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
    name: 'CompetitionMore',
    components: { Banner },
    data(){
        return{
         activeIndex: '1',//导航
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
    margin-top: -2px;
  }
  /**面包屑 */
  /deep/ .el-breadcrumb{
    margin-top: -8%;
    margin-bottom: 4%;
  }
  /deep/ .el-breadcrumb__inner{
    color: #6C98FE !important;
    font-size: 500 !important;
  }
  /deep/ .el-submenu__icon-arrow{
    font-size: 16px;
  }
  /deep/ .el-icon-arrow-right:before{
    background-image: url("../assets/img/navigationBoult.png")  !important;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }
  /deep/ .el-submenu .is-opened>.el-submenu__title .el-submenu__icon-arrow{
    color:#6C98FE  !important;
    transform: rotateZ(60deg)  !important;
  }
  /**导航 */
  /deep/ .el-menu--horizontal>.el-submenu .el-submenu__title{
    font-size: 16px; 
    font-family:AlibabaPuHuiTi;
    color: #C3C3C3;
  }
  /deep/ .el-menu--horizontal>.el-submenu:hover  .el-submenu__title{
    color:#6C98FE;
  }
  /deep/ .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{   
    font-size: 16px;
    font-family: AlibabaPuHuiTi;
    color: #6C98FE;
    border-bottom:none;
  }
  /deep/ .el-icon-arrow-down:before{
    color:#C3C3C3;
  }
  /deep/ .el-menu.el-menu--horizontal{
    border-bottom:none;
    display: flex;
    justify-content: space-between;
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

 
}
/** */
@media screen and (max-width: 992px){

  /**分页 */
  /deep/ .el-pagination{
    margin-left: 7%;
    margin-bottom: 40%;
  }
}

</style>