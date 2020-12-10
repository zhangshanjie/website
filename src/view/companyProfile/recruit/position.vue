<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <div class="container">
      <div class="row">
        <div class="content">
          <div class="col-md-12 col-xs-12">
            <div class="position_name">
              <img class="sword" src="@/assets/img/sword.png" alt="" />
              <span class="java">后端开发工程师</span>
            </div>
          </div>
          <div class="col-md-12 col-xs-12 position_intrduce">
            <p class="position_detail">职位详情</p>
            <p class="position_english">Job details</p>
          </div>
          <!-- 岗位职责 -->
          <div class="duty col-md-12 col-xs-12">
            <div class="duty_title">
              <span>岗位职责</span>
            </div>
            <div class="duty_content">
              <p class="duty_j">
                在这里，你将从事IT应用层软件、分布式云化软件、
                互联网软件等的设计开发，可以采用敏捷、Devops、
                开源等先进的软件设计开发模式，接触最前沿的产品和软件技术，
                成为并发技术的专家； 你将参与产品的软件研发工作，包括但不限于：
              </p>
              <p class="duty_j">
                （1）完成从客户需求到软件产品定义、架构设计、开发实现、再到上线运营维护等产品生命周期中的各个环节；
              </p>
              <p class="duty_j">
                （2）创造性解决产品在实现过程中的技术难题，应用前沿技术提升产品的核心竞争力，如分布式系统、性能调优、可靠性、数据库等；
              </p>
              <p class="duty_j">
                （3）有机会参与业界前沿技术研究和规划，参与开源社区运作，与全球专家一起工作、交流，构建华为在业界影响力。
              </p>
            </div>
          </div>
          <!-- 岗位要求 -->
          <div class="requirement col-md-12 col-xs-12">
            <div class="requirement_title">
              <span>岗位要求</span>
            </div>
            <div class="requirement_content">
              <p>1、计算机、软件、通信等相关专业本科及以上学历；</p>
              <p>
                2、热爱编程，基础扎实，熟悉掌握但不限于JAVA/C++/C/Python/JS/HTML/GO等编程语言中的一种或数种，有良好的编程习惯；
              </p>
              <p>
                3、具备独立工作能力和解决问题的能力、善于沟通，乐于合作，热衷新技术，善于总结分享，喜欢动手实践；
              </p>
              <p>4、对数据结构、算法有一定了解；</p>
              <p>5、优选条件：</p>
              <p>（1）熟悉TCP/IP协议及互联网常见应用和协议的原理；</p>
              <p>
                （2）有IT应用软件、互联网软件、IOS/安卓等相关产品开发经验，不满足于课堂所学，在校期间积极参加校内外软件编程大赛或积极参于编程开源社区组织；
              </p>
              <p>（3）熟悉JS/AS/AJAX/HTML5/CSS等前端开发技术。</p>
            </div>
          </div>
          <!-- base -->
          <div class="base col-md-12 col-xs-12">
            <div class="base_j">
              <p>工作地点</p>
              <p>中国/合肥</p>
              <el-button class="base_b animated bounce" id="dowebok" type="primary"
                >申请</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";
export default {
  name: "position",
  components: { Banner, Footer, Header },
  data() {
    return {};
  },
};
</script>
<style scoped>
.content {
  padding-bottom: 15px;
}
.position_name {
  position: relative;
}
/* 左上角导航箭头 */
.sword {
  position: absolute;
  top: 2px;
  width: 14px;
  width: 17px;
  color: #6c98fe !important;
}
.java {
  position: absolute;
  top: 0;
  left: 19px;
  font-size: 14px;
  font-family: 'AlibabaPuHuiTi';
  font-weight: 400;
  color: #6c98fe;
  line-height: 20px;
}
/* 中间title */
.position_detail {
  width: 90px;
  height: 20px;
  font-size: 20px;
  font-family: 'AlibabaPuHuiTi-Medium';
  font-weight: 500;
  color: #333333;
  line-height: 20px;
  margin: 0 auto;
  letter-spacing: 1px;
}
.position_english {
  width: 70px;
  height: 10px;
  font-size: 10px;
  font-family: 'AlibabaPuHuiTi';
  font-weight: 400;
  color: #999999;
  line-height: 20px;
  margin: 0 auto;
}
.position_intrduce {
  margin-top: 43px;
}

/* 岗位职责 */
.duty {
  width: 1165px;
  margin-top: 61px;
  border-bottom: solid 1px #dedede;
}
.duty_title > span {
  width: 89px;
  height: 23px;
  font-size: 24px;
  font-family: 'AlibabaPuHuiTi-Medium';
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}
.duty_content {
  width: 1159px;
}
.duty_j {
  margin-top: 13px;
  color: #333333;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  font-family: 'Alibaba-PuHuiTi-Regular';
}
.duty_content > p:nth-child(4) {
  margin-bottom: 65px;
}
/* 岗位要求 */
.requirement {
  width: 1004px;
  margin-top: 44px;
  border-bottom: solid 1px #dedede;
}
.requirement_title > span {
  width: 89px;
  height: 23px;
  font-size: 24px;
  font-family: 'AlibabaPuHuiTi-Medium';
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}
.requirement_content {
  margin-top: 13px;
}
.requirement_content > p {
  font-size: 14px;
  font-family: 'AlibabaPuHuiTi-Regular';
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}
.requirement_content > p:nth-child(8) {
  margin-bottom: 52px;
}
/* 工作地点 */
.base {
  margin-top: 44px;
  padding-bottom: 187px;
}
.base_j > p:nth-child(1) {
  height: 23px;
  font-size: 24px;
  font-family: 'AlibabaPuHuiTi-Medium';
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}
.base_j > P:nth-child(2) {
  height: 14px;
  font-size: 14px;
  font-family: 'AlibabaPuHuiTi';
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}
.base_b {
  margin-top: 45px;
  width: 111px;
  height: 45px;
  background: #6c98fe;
}

@media screen and (max-width: 768px) {
  .requirement {
    width: 100%;
  }
  .duty {
    width: 100%;
  }
  .duty_content {
    width: 100%;
  }
}
/* 设置按钮动画 */

</style>