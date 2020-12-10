<template>
  <div>
    <div class="row">
      <div class="col-md-12 title">
        <div class="row">
          <div class="col-md-12 col-xs-12 title">
            <p>了解我们的营销合作</p>
          </div>
          <div class="col-md-12 col-xs-12 titles">
            <p>Learn about our marketing cooperation</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-xs-12 t_j">
        <div class="first">
          <img src="@/assets/img/first.png" alt="" />
          <p class="standBy">线下支持</p>
          <p class="first_induce">
            丰富的赛事策划经验,专业的媒体服务平台，
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多元的品牌合作渠道
          </p>
        </div>
      </div>
      <div class="col-md-4 col-xs-12 t_j">
        <div class="second">
          <img src="@/assets/img/forecastinsystem.png" alt="" />
          <p class="standBy">产品优势</p>
          <p class="second_induce">
            海量实体商家，地域覆盖广，用户基数大，
            便捷在线支付，优质品牌曝光精准触达
          </p>
        </div>
      </div>
      <div class="col-md-4 col-xs-12 t_j">
        <div class="thrid">
          <img src="@/assets/img/Technicalseceprovider.png" alt="" />
          <p class="standBy">联系方式</p>
          <p class="thrid_induce">客服(0551) 6267 0907</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.title {
  margin-top: 34px;
}
.titles {
  height: 7px;
  font-size: 10px;
  font-family: "AlibabaPuHuiTi-Regular";
  font-weight: 400;
  color: #999999;
  line-height: 20px;
  text-align: center;
}
.title > p:nth-child(1) {
  height: 19px;
  font-size: 20px;
  font-family: "AlibabaPuHuiTi-Medium";
  font-weight: 500;
  color: #333333;
  line-height: 20px;
  text-align: center;
}
/* .title > P:nth-child(2) {
  height: 7px;
  font-size: 10px;
  font-family: "AlibabaPuHuiTi-Regular";
  font-weight: 400;
  color: #999999;
  line-height: 20px;
  text-align: center;
} */
.t_j {
  margin-top: 44px;
}
.first {
  width: 360px;
  height: 432px;
  background: #efefef;
  border-radius: 14px;
}
.first > img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 49px;
}
.standBy {
  height: 20px;
  font-size: 20px;
  font-family: "AlibabaPuHuiTi-Medium";
  font-weight: 500;
  color: #333333;
  line-height: 20px;
  text-align: center;
  margin-top: 30px;
}
.first_induce {
  display: block;
  width: 305px;
  height: 50px;
  font-size: 16px;
  font-family: "AlibabaPuHuiTi-Medium";
  font-weight: 500;
  color: #adadad;
  line-height: 26px;
  /* text-align: center; */
  margin: 0 auto;
  margin-top: 26px;
}
.second {
  width: 360px;
  height: 432px;
  background: #efefef;
  border-radius: 14px;
}
.second > img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 49px;
}
.second_induce {
  display: block;
  width: 305px;
  height: 50px;
  font-size: 16px;
  font-family: "AlibabaPuHuiTi-Medium";
  font-weight: 500;
  color: #adadad;
  line-height: 26px;
  /* text-align: center; */
  margin: 0 auto;
  margin-top: 26px;
}
.thrid > img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 49px;
}
.thrid {
  width: 360px;
  height: 432px;
  background: #efefef;
  border-radius: 14px;
}
.thrid_induce {
  display: block;
  width: 166px;
  height: 50px;
  font-size: 16px;
  font-family: Alibaba PuHuiTi;
  font-weight: 500;
  color: #adadad;
  line-height: 26px;
  margin: 0 auto;

  margin-top: 26px;
}
@media screen and (max-width: 768px) {
  .first {
    width: 100%;
    height: 432px;
    background: #efefef;
    border-radius: 14px;
  }
  .first_induce {
  }

  .second {
    width: 100%;
  }
  .thrid {
    width: 100%;
  }
}
</style>