<template>
  <div id="Competition">
  <Header></Header>
  <Banner></Banner>
  <div class="contOne">
      <p class="headline">了解我们的赛事教程</p>
      <p class="title">Learn about our event tutorial</p>
      <div>
        <div class=""></div>
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
  name: "Competition",
  components: { Banner },
  data() {
    return {};
  },
  mounted(){

  }
};
</script>
<style scoped>
#Competition{
  background: #f5f5f5;
}
@media (min-width: 1200px){
  .contOne {
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
}
@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
</style>

