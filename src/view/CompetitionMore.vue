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
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-submenu index="1">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
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