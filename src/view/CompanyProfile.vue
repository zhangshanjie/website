<template>
  <div class="CompetitionRanking">
    <Header></Header>
    <Banner></Banner>
    <div class="container">
      <div class="row">
        <div class="CompanyProfile_content">
          <!-- 中间内容 -->
          <div class="md-col-6">
            <div class="row">
              <div class="CompanyProfile_header">
                <div class="first_header col-md-12">
                  <img
                    class="Fresh_students_ph"
                    src="../assets/img/logo_j.png"
                    alt="公司简介应届生"
                  />
                  <p class="Fresh_students">
                    <span>应届生</span>
                  </p>
                  <span class="Campus_Recruitment">校园招聘</span>
                  <i class="el-icon-right right"></i>
                </div>
                <div class="second_header col-md-12">
                  <img
                    class="Workplace"
                    src="../assets/img/logo_k.png"
                    alt="职场精英"
                  />
                  <p class="Career_ero">
                    <span>职场精英</span>
                  </p>
                  <span class="Social_recruitment">社会招聘</span>
                  <i class="el-icon-check gou"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- 职位标题 -->
          <div class="position">
            <div class="title_flex">
              <p class="title">社会招聘职位</p>
              <p class="english">Social recruitment position</p>
            </div>
          </div>
          <!-- 详细职位 -->
          <div class="position_details">
            <table class="form">
              <tr class="secondly info">
                <th>共<a href="">10</a>条</th>
                <th style="font-size: 14px">截止到2021.02.06</th>
              </tr>
              <tr class="secondly">
                <th>后端开发</th>
                <th>合肥</th>
                <th>本科</th>
                <th>开发部</th>
                <th><i class="el-icon-right"></i></th>
              </tr>
              <tr class="secondly">
                <th>后端开发</th>
                <th>合肥</th>
                <th>本科</th>
                <th>开发部</th>
                <th><i class="el-icon-right"></i></th>
              </tr>
              <tr class="secondly">
                <th>后端开发</th>
                <th>合肥</th>
                <th>本科</th>
                <th>开发部</th>
                <th><i class="el-icon-right"></i></th>
              </tr>
            </table>
            <div class="foot">
              <p>暂无更多岗位~</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Banner from "../components/Banner.vue";
export default {
  name: "CompanyProfile",
  components: { Banner, Footer },
  data() {
    return {};
  },
};
</script>
<style  scoped>
.CompanyProfile_content {
  margin-top: 65px;
  padding-bottom: 10px;
  /* background: #f5f5f5; */
}
.CompanyProfile_header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.first_header {
  width: 424px;
  height: 164px;
  background: #ebebeb;
  border-radius: 4px;
  position: relative;
}
.Fresh_students_ph {
  position: absolute;
  top: -51px;
  left: 6px;
}
.Fresh_students {
  position: absolute;
  left: 215px;
  top: 37px;
  height: 33px;
  width: 118px;
  border-bottom: solid 2px #dddddd;
  line-height: 14px;
}
.Fresh_students > span {
  width: 86px;
  height: 28px;
  font-size: 30px;
  font-family: Alibaba PuHuiTi;
  font-weight: 500;
  color: #474747;
}
.Campus_Recruitment {
  position: absolute;
  left: 218px;
  top: 86px;
  height: 16px;
  font-size: 16px;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: #b5b5b5;
}
.right {
  position: absolute;
  top: 122px;
  left: 382px;
  font-size: 23px;
}
.second_header {
  margin-left: 79px;
  width: 424px;
  height: 164px;
  background: #6c98fe;
  border-radius: 4px;
  position: relative;
}
.Workplace {
  position: absolute;
  top: -50px;
  left: 20px;
}
.Career_ero {
  position: absolute;
  left: 215px;
  top: 37px;
  height: 30px;
  line-height: 4px;
  border-bottom: solid 2px #f4f4f4;
}
.Career_ero > span {
  font-size: 30px;
  font-family: Alibaba PuHuiTi;
  font-weight: 500;
  color: #ffffff;
}
.Social_recruitment {
  position: absolute;
  left: 218px;
  top: 94px;

  font-size: 16px;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: #f2f2f2;
}
.gou {
  position: absolute;
  top: 122px;
  left: 382px;
  font-size: 23px;
  color: white;
}

/* 社会职位 */
.position {
  margin-top: 84px;
}
.title_flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.title {
  width: 100%;
  display: block;
  text-align: center;
  font-size: 20px;
  font-family: Alibaba PuHuiTi;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
}
.english {
  font-size: 10px;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: #999999;
  line-height: 20px;
}
@media screen and (max-width: 768px) {
  .CompanyProfile_header {
    display: block;
  }
  .first_header {
    width: 100%;
  }
  .second_header {
    width: 100%;
    margin-left: 0;
    margin-top: 15px;
  }
}
.position_details {
  margin-top: 36px;
}
.form {
  width: 100%;
  margin-bottom: 36px;
}
.form tr:nth-child(1) {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.secondly th {
  font-size: 18px;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: #333333;
}
.secondly {
  height: 70px;
  display: flex;
  justify-content: space-around;
  line-height: 70px;
  border-bottom: solid 1px #f0f0f0;
}

.secondly > th:not(:first-child) {
  font-size: 16px;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: #999999;
}
.info th {
  font-size: 14px;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: #666666;
}
.foot {
  text-align: center;
  font-size: 14px;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: #999999;
  line-height: 20px;
  cursor: pointer;
}
.foot:hover {
    color: blue;
}
</style>