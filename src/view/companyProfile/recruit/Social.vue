<template>
  <div>
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
        <tr class="secondly" v-for="(item, index) in trList" :key="index">
          <th>{{ item.positionName }}</th>
          <th>{{ item.base }}</th>
          <th>{{ item.education }}</th>
          <th>{{ item.department }}</th>
          <th><i :class="item.icon"></i></th>
        </tr>
      </table>
      <div class="foot">
        <p>暂无更多岗位~</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Social",
  data() {
    return {
      trList: [
        {
          positionName: "前端开发",
          base: "合肥",
          education: "本科",
          department: "开发部",
          icon: "el-icon-right",
          index: 0,
        },
        {
          positionName: "后端开发",
          base: "合肥",
          education: "本科",
          department: "开发部",
          icon: "el-icon-right",
          index: 1,
        },
        {
          positionName: "后端开发",
          base: "合肥",
          education: "本科",
          department: "开发部",
          icon: "el-icon-right",
          index: 2,
        },
        {
          positionName: "后端开发",
          base: "合肥",
          education: "本科",
          department: "开发部",
          icon: "el-icon-right",
          index: 3,
        },
        {
          positionName: "后端开发",
          base: "合肥",
          education: "本科",
          department: "开发部",
          icon: "el-icon-right",
          index: 4,
        },
      ],
    };
  },
  methods: {},
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
  font-family: "AlibabaPuHuiTi-Medium";
  font-weight: 500;
  color: #474747;
}
.Campus_Recruitment {
  position: absolute;
  left: 218px;
  top: 86px;
  height: 16px;
  font-size: 16px;
  font-family: "AlibabaPuHuiTi-Regular" i;
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
  background: #ebebeb;
  border-radius: 4px;
  position: relative;
}
.active {
  background: #6c98fe;
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
  border-bottom: solid 2px #dddddd;
}
.Career_ero > span {
  font-size: 30px;
  font-family: "AlibabaPuHuiTi-Medium";
  font-weight: 500;

  color: #474747;
}
.Social_recruitment {
  position: absolute;
  left: 218px;
  top: 94px;

  font-size: 16px;
  font-family: "AlibabaPuHuiTi-Regular";
  font-weight: 400;
  /* color: #f2f2f2; */
  color: #b5b5b5;
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
  font-family: "AlibabaPuHuiTi-Medium";
  font-weight: 500;
  color: #333333;
  line-height: 20px;
}
.english {
  font-size: 10px;
  font-family: "AlibabaPuHuiTi-Regular";
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
  font-family: "AlibabaPuHuiTi-Regular";
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
  font-family: "AlibabaPuHuiTi-Regular";
  font-weight: 400;
  color: #999999;
}
.info th {
  font-size: 14px;
  font-family: "AlibabaPuHuiTi-Regular";
  font-weight: 400;
  color: #666666;
}
.foot {
  text-align: center;
  font-size: 14px;
  font-family: "AlibabaPuHuiTi-Regular";
  font-weight: 400;
  color: #999999;
  line-height: 20px;
  cursor: pointer;
}
.foot:hover {
  color: #6c98fe;
}
</style>