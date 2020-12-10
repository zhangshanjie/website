<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <!-- 公司简介中间内容 -->
    <div class="container">
      <div class="row">
        <div class="companyProfile">
          <div class="company_title">
            <p>了解我们的公司</p>
            <p>Get to know our company</p>
          </div>
          <div class="col-md-12 col-xs-12 guide">
            <div
              v-for="(item, index) in oDiv"
              :key="index"
              @click="s(item.name)"
              :class="{ active: active == item.name }"
            >
              {{ item.name }}
            </div>
          </div>
          <component :is="currentTabComponent"></component>
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
import CompanyStructure from "@/view/companyProfile/CompanyStructure.vue";
import DepartmentComposition from "@/view/companyProfile/DepartmentComposition.vue";
import technicalSupport from "@/view/companyProfile/technicalSupport.vue";
export default {
  name: "companyProfile",
  components: {
    Banner,
    Footer,
    Header,
    technicalSupport,
    DepartmentComposition,
    CompanyStructure,
  },
  data() {
    return {
      active: "公司架构",
      currentTabComponent: "CompanyStructure",
      oDiv: [
        {
          name: "公司架构",
        },
        {
          name: "部门组成",
        },
        {
          name: "技术支持",
        },
      ],
    };
  },
  methods: {
    s(data) {
      this.active = data;
      switch (data) {
        case "公司架构":
          this.currentTabComponent = "CompanyStructure";
          break;
        case "部门组成":
          this.currentTabComponent = "DepartmentComposition";
          break;
        case "技术支持":
          this.currentTabComponent = "technicalSupport";
          break;
      }
    },
  },
};
</script>
<style scoped>
.active {
  background: #4276f0;
  color: #FFFFFF!important;
}
.company_title > p {
  text-align: center;
}
.company_title > p:nth-child(1) {
  height: 20px;
  font-size: 20px;
  font-family: 'AlibabaPuHuiTi';
  font-weight: 500;
  color: #333333;
  line-height: 20px;
}
.company_title > p:nth-child(2) {
  height: 7px;
  font-size: 10px;
  font-family: 'AlibabaPuHuiTi';
  font-weight: 400;
  color: #999999;
  line-height: 12px;
}
.guide {
  margin-top: 36px;
  background-position: center;
  width: 100%;
  height: 44px;
  background-image: url("../../assets/img/copy_bj.png");
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.guide > div:nth-child(1) {
}
.guide > div:nth-child(3) {
}
.guide > div {
  border-radius: 26px;
  height: 44px;
  width: 100px;
  line-height: 46px;
  text-align: center;
  cursor: pointer;
  font-family: 'AlibabaPuHuiTi-Medium';
  font-weight: 500;
  color: #b0b0b0;
}
</style>