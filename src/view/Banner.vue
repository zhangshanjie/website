<template>
  <div id="HomePage">
    <Header></Header>
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <img class="swiper-lazy" :data-src="item.img" alt="轮播图">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <!--搜索-->
    <el-input placeholder="输入你想要搜索的内容" >
      <template slot="append"><img class="select" src="@/assets/img/select.png" alt=""></template>
    </el-input>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Swiper from "swiper";
import { WOW } from 'wowjs';
export default {
  components: { Header },
  name: "HomePage",
  data() {
    return {
      swiperList: [
        {
          img: require("@/assets/img/banner.png"),
        },
      ],
    };
  },
  mounted() {
    /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      effect: 'fade',
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // 延迟加载
      lazy: {
        loadPrevNext: true
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    /* customer-swiper */
    new Swiper(".customer-swiper", {
      loop: true, // 循环模式选项
      slidesPerView: 3,
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    })
    wow.init();
  }
};
</script>
<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 轮播图 */
#swiper {
  width: 100%;
  position: relative;
  top: -63px;
}
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide{
  position: relative;
}
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
    background-image: url('../assets/img/right.png')  !important;
  }
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    background-image: url('../assets/img/left.png')  ;
  }
  .swiper-button-next, .swiper-button-prev{
    width: 75px;
    height: 55px;
    background-size: 60px 60px;
  }
  /**搜索 */
  .el-input-group {
    line-height: normal;
    display: inline-table;
    width: 568px; height: 60px;
    border-collapse: separate;
    border-spacing: 0;
    position: relative;
    top: -150px;
    bottom: 0;
    left: 32%;
    z-index: 99;
  }
  /deep/ .el-input-group__append {
    border-left: 0;
    background: #fff;
    border-radius: 30px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .el-input-group--append .el-input__inner, .el-input-group__prepend {
    border-right: none;
  }
  /deep/ .el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 30px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    height: 50px;
    line-height: 50px;
    border-right: 0;
  }
  .select{
    width: 49px; height: 49px;
  }

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    width: 100%;
    position: relative;
    top: 0;
  }
  #bigData {
    padding: 30px;
  }
  #bigData .bigData-title {
    font-size: 20px;
  }
  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }
  #swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
    background-image: url('../assets/img/right.png')  !important;
    right:-20px
  }
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    background-image: url('../assets/img/left.png')  ;
    left:-22px
  }
  .swiper-button-next, .swiper-button-prev{
    width: 26%;
    background-size: 34px 34px;
  }

}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    width: 100%;
    position: relative;
    top: -63px;
  }
  #bigData {
    padding: 60px;
  }
  #bigData .bigData-title {
    font-size: 30px;
  }
  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }
  
}
</style>

