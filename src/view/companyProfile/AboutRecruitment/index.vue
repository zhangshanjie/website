<template>
  <div>
    <div class="row">
      <div class="col-md-12 title">
        <div class="row">
          <div class="col-md-12 col-xs-12 title">
            <p>关于我们的招聘</p>
          </div>
          <div class="col-md-12 col-xs-12 titles">
            <p>About our recruitment</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xs-12 recruit">
        <div class="content">
          <div class="t_k">
            <img class="left" src="@/assets/img/about_left.png" alt="" />
            <div class="Campus">
              <p>在校生/毕业生</p>
              <p></p>
              <p>校园招聘</p>
            </div>
          </div>
          <div class="recruit_details">
            <table class="form">
              <tr
                class="secondly"
                v-for="(item, index) in trList"
                :key="index"
                @click="toPath(item.positionName)"
              >
                <th>{{ item.positionName }}</th>
                <th>{{ item.base }}</th>
                <th>{{ item.education }}</th>
                <th>{{ item.department }}</th>
                <th><i :class="item.icon"></i></th>
              </tr>
              <tr class="more">
                <th style="font-size: 14px" @click="CampusMore('1')">查看更多</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xs-12 recruits">
        <div class="content">
          <div class="Q_Q">
            <img class="left" src="@/assets/img/about_right.png" alt="" />
            <div class="Social">
              <p>有经验的职场人士</p>
              <p></p>
              <p>社会招聘</p>
            </div>
          </div>
          <div class="recruit_details">
            <table class="form">
              <tr
                class="secondly"
                v-for="(item, index) in trList"
                :key="index"
                @click="toPath(item.positionName)"
              >
                <th>{{ item.positionName }}</th>
                <th>{{ item.base }}</th>
                <th>{{ item.education }}</th>
                <th>{{ item.department }}</th>
                <th><i :class="item.icon"></i></th>
              </tr>
              <tr class="more">
                <th style="font-size: 14px" @click="socialMore('2')">查看更多</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      trList: [
        {
          positionName: "后端开发",
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
      ],
    };
  },
  methods: {
    //校园招聘
    CampusMore(data) {
      this.$router.push({ name: "recruit", query: { type: data } });
    },
    //社会招聘
    socialMore(data) {
      this.$router.push({ name: "recruit", query: { type: data } });
    },
  },
};
</script>
<style scoped>
.title {
  margin-top: 118px;
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
.recruit {
  margin-top: 51px;
}
.recruits {
  margin-top: 51px;
}
.recruit_details {
  margin-top: 44px;
}
.content {
  width: 571px;
  height: 544px;
  background: #ffffff;
}
.form {
  width: 100%;
  margin-bottom: 36px;
}

.secondly th {
  font-size: 16px;
  font-family: "AlibabaPuHuiTi-Regular";
  font-weight: 400;
  color: #666666;
}
.secondly {
  height: 70px;
  display: flex;
  justify-content: space-around;
  line-height: 70px;
  border-bottom: solid 1px #f0f0f0;
}
.more {
}
.more > th {
  text-align: center;
  height: 70px;
  line-height: 70px;
  font-size: 14px;
  font-family: "AlibabaPuHuiTi-Regular";
  font-weight: 400;
  color: #999999;
  line-height: 20px;
  cursor: pointer;
}
.t_k {
  position: relative;
}
.Campus {
  position: absolute;
  top: 44px;
  left: 35px;
}
.Campus > p:nth-child(1) {
  height: 34px;
  font-size: 36px;
  font-family: "AlibabaPuHuiTi-Regular";
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}
.Campus > p:nth-child(2) {
  width: 148px;
  height: 2px;
  background: #4b7beb;
}
.Campus > p:nth-child(3) {
  height: 19px;
  font-size: 20px;
  font-family: "AlibabaPuHuiTi-Regular";
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}
.Q_Q {
  position: relative;
}
.Social {
  position: absolute;
  top: 44px;
  left: 36px;
}
.Social > p:nth-child(1) {
  height: 34px;
  font-size: 36px;
  font-family: "AlibabaPuHuiTi-Regular";
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}
.Social > p:nth-child(2) {
  width: 148px;
  height: 2px;
  background: #4b7beb;
}
.Social > p:nth-child(3) {
  height: 19px;
  font-size: 20px;
  font-family: "AlibabaPuHuiTi-Regular";
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}
@media screen and (max-width: 768px) {
  .recruit {
    width: 100%;
  }
  .left {
    width: 100%;
  }
  .content {
    width: 100%;
  }
}
</style>