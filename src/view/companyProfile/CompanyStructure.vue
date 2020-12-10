<template>
  <div>
    <div class="container Structure">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <div class="CompanyStructure">
            <p>公司架构</p>
            <p>
              这是公司架构说明这是公司架构说明这是公司架构说明这是公司架构说明这是公司架构说明这是公司架构说明这是公司架构说明这是公司架
            </p>
            <img src="@/assets/img/more.png" alt="">
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
            <img class="CompanyStructure_right_ph" src="@/assets/img/CompanyStructure.png" alt="">
        </div>
        <Marketing></Marketing>
        <AboutRecruitment></AboutRecruitment>
      </div>
    </div>
  </div>
</template>
<script>
import Marketing from '@/view/companyProfile/Marketing/index'
import AboutRecruitment from '@/view/companyProfile/AboutRecruitment/index'
export default {
  name: "CompanyStructure",
  components:{Marketing,AboutRecruitment}
};
</script>
<style scoped>
.Structure {
}
.CompanyStructure {
  margin-top: 51px;
}
.CompanyStructure > p:nth-child(1) {
  width: 72px;
  height: 17px;
  font-size: 18px;
  font-family: "AlibabaPuHuiTi-Medium";
  font-weight: 500;
  color: #333333;
  line-height: 8px;
  border-bottom: solid 5px #6c98fe;
}
.CompanyStructure > p:nth-child(2) {
  font-size: 16px;
  font-family: 'AlibabaPuHuiTi-Regular';
  font-weight: 400;
  color: #999999;
  line-height: 20px;
}
.CompanyStructure>img{
    margin-top: 29px;
    width: 100px;
}
@media screen and (max-width: 768px) {
    .CompanyStructure_right_ph{
        width: 100%;
    }
}
</style>