<template>
  <div id="CompetitionMore">
  <Header></Header>
  <Banner></Banner>
    <div class="container">
      <!--顶部-->
      <el-breadcrumb separator-class="el-icon-arrow-right navigationIcons">
        <img class="navigationIcon" src="@/assets/img/navigationIcon.png" alt="">
        <el-breadcrumb-item :to="{ path: '/Competition' }">最新赛事</el-breadcrumb-item>
        <el-breadcrumb-item>赛事中心</el-breadcrumb-item>
      </el-breadcrumb>
      <!--导航-->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
        <el-submenu index="1">
          <template slot="title">官方赛</template>
          <div class="menu-list">
            <el-menu-item class="menu-item" index="1-1">未开始</el-menu-item>
            <el-menu-item class="menu-item" index="1-2">进行中</el-menu-item>
            <el-menu-item class="menu-item" index="1-3">已结束</el-menu-item>
          </div>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">主题赛</template>
          <div class="menu-list">
            <el-menu-item class="menu-item"  index="2-1">未开始</el-menu-item>
            <el-menu-item class="menu-item"  index="2-2">进行中</el-menu-item>
            <el-menu-item class="menu-item"  index="2-3">已结束</el-menu-item>
          </div>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">公益赛</template>
          <div class="menu-list">
            <el-menu-item class="menu-item"  index="3-1">未开始</el-menu-item>
            <el-menu-item class="menu-item"  index="3-2">进行中</el-menu-item>
            <el-menu-item  class="menu-item" index="3-3">已结束</el-menu-item>
          </div>
        </el-submenu>
        
      </el-menu>
      <!--内容-->
        <div class="contOver">
          <!--one-->
          <div class="leftOne">
              <div class="picture"></div>
              <div class="matter">
                <div class="topic">大师赛-上海·阳光路亚基地（第一场)</div><span class="gameOne">官方赛</span>
                <div style="display: flex;flex-direction: row;margin-top: 8px;">
                  <div class="substance">地点：大团镇徐邵路</div><span class="angle">钓法：路亚</span>
                </div>
                <div  style="display: flex;flex-direction: row;margin-top: 10px;">
                  <div class="substance">限制报名人数：50</div><span class="bonus">奖金：28000</span>
                </div>
                
                <div class="subcont">联系方式：12345678900</div>
                <div class="subcont">截止时间：2020.12.12 12:00:00</div>
                <div class="into">报名</div>
              </div>
            </div>
            <!--one-->
          <div class="leftOne">
              <div class="picture"></div>
              <div class="matter">
                <div class="topic">大师赛-上海·阳光路亚基地（第一场)</div><span class="gameOne">官方赛</span>
                <div style="display: flex;flex-direction: row;margin-top: 8px;">
                  <div class="substance">地点：大团镇徐邵路</div><span class="angle">钓法：路亚</span>
                </div>
                <div  style="display: flex;flex-direction: row;margin-top: 10px;">
                  <div class="substance">限制报名人数：50</div><span class="bonus">奖金：28000</span>
                </div>
                
                <div class="subcont">联系方式：12345678900</div>
                <div class="subcont">截止时间：2020.12.12 12:00:00</div>
                <div class="into">报名</div>
              </div>
            </div>
            <!--one-->
          <div class="leftOne">
              <div class="picture"></div>
              <div class="matter">
                <div class="topic">大师赛-上海·阳光路亚基地（第一场)</div><span class="gameOne">官方赛</span>
                <div style="display: flex;flex-direction: row;margin-top: 8px;">
                  <div class="substance">地点：大团镇徐邵路</div><span class="angle">钓法：路亚</span>
                </div>
                <div  style="display: flex;flex-direction: row;margin-top: 10px;">
                  <div class="substance">限制报名人数：50</div><span class="bonus">奖金：28000</span>
                </div>
                
                <div class="subcont">联系方式：12345678900</div>
                <div class="subcont">截止时间：2020.12.12 12:00:00</div>
                <div class="into">报名</div>
              </div>
            </div>
        </div>
      <!--分页-->
      <!--分页-->
      <el-pagination class="pagination"
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
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Banner from '@/components/Banner.vue';
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
#CompetitionMore{
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
    margin-top: -7%;
    margin-bottom: 4%;
  }
  /deep/ .el-breadcrumb__inner{
    color: #6C98FE !important;
    font-size: 500 !important;
  }
  /deep/ .el-submenu__icon-arrow{
    font-size: 16px;
  }
  /deep/ .navigationIcons:before{
    background-image: url("../../assets/img/navigationBoult.png") !important;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }
  /**导航 */
  /deep/ .el-menu.el-menu--horizontal{
    background: #f5f5f5;
  }
  /deep/ .el-menu--horizontal>.el-submenu .el-submenu__title{
    font-size: 16px; 
    font-family:'AlibabaPuHuiTi-Medium';
    color: #C3C3C3;
  }
  /deep/ .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    background: #f5f5f5;
  }
  /deep/ .el-menu--horizontal>.el-submenu:hover  .el-submenu__title{
    color:#6C98FE;
  }
  /deep/ .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{   
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Medium';
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
  /deep/ .el-submenu .el-submenu__title{
    height: 60px;
    line-height: 60px;
  }
  /**导航二级导航 */
  .menu-list{
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    width: 740px; 
    background: #f1f1f1;
  }
  .menu-item{
    width: 97px;
    background: #F1F1F1 !important;
    font-size: 14px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #c3c3c3;
    text-align: center;
    margin-left: 40px;
    
  }
  .menu-item:hover{  
    color: #6C98FE !important;
    background: #fff !important;
    border-radius: 20px;
    width: 97px;
    height: 36px;
    line-height: 36px;
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
  /deep/ .el-pagination .btn-next{
    color: #c3c3c3;
  }
  /deep/ .el-pager li{
    background: #f5f5f5;
  }
  /deep/ .el-pagination .btn-prev{
    background: #f5f5f5;
  }
  /deep/ .el-pagination .btn-next{
    background: #f5f5f5;
  }
  /**内容 */
  .contOver{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
  }
  .leftOne{
    width: 558px;
    height: 204px;
    background: #FFFFFF;
    border-radius: 14px;
    display: flex;
    flex-direction: row;
    margin-top: 16px;
    margin-right: 12px;
  }
  .picture{
    width: 180px;
    height: 170px;
    background: #E1E1E1;
    border-radius: 4px;
    margin: auto 12px;
  }
  .matter{
    margin-top:16px;
    white-space: nowrap;
  }
  .topic{
    font-size: 20px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #444444;
    margin-bottom: 2px;
  }
  .gameOne{ 
    font-size: 12px;
    font-family: 'PingFangSC-Medium';
    font-weight: bold;
    color: #6C98FE;   
    border: 1px solid #6C98FE;   
    border-radius: 4px;
    padding: 2px;
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
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #999999;
  }
  .angle{
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #999999;
    margin-left: 84px;
  }
  .bonus{
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #999999;
    margin-left: 96px;
  }
  .subcont{
    font-size: 16px;
    font-family: 'AlibabaPuHuiTi-Medium';
    color: #999999;
    margin-top: 10px;
  }
  .into{
    width: 60px; height: 28px; 
    background: linear-gradient(266deg, #6C98FE, #4D7AFF);
    border-radius: 12px;
    color: #fff;   
    font-size: 12px;
    font-family: 'AlibabaPuHuiTi-Regular';
    text-align: center;
    line-height: 28px;
    margin-left: 86%;
    margin-top: -10%;
    cursor: pointer;
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
  /**导航二级导航 */
  .menu-list{
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    width: 100%; 
    background: #f1f1f1;
  }
  .menu-item{
    width: 97px;
    background: #F1F1F1 !important;
    font-size: 14px;
    font-family: 'AlibabaPuHuiTi-Regular';
    color: #c3c3c3;
    text-align: center;
    margin-left: 40px;
    
  }
  .menu-item:hover{  
    color: #6C98FE !important;
    background: #fff !important;
    border-radius: 20px;
    width: 97px;
    height: 36px;
    line-height: 36px;
  }
  /**内容 */
    .leftOne{
    height: 100%;
    background: #FFFFFF;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    padding: 16px;
  }
  .picture{
    width: 100%;
    background: #E1E1E1;
    border-radius: 4px;
    margin: 12px auto;
  }
  .into{
    margin-left: 80%;
    margin-top: -10%;
    margin-bottom: 16px;
  }
  .topic{
    font-size: 18px;
  }
  .substance, .angle, .bonus, .subcont{
    font-size: 14px;
  }
}

</style>