<template>
  <div id="footer" class="container-fluid">
    <div class="container">
      <!-- <p>这里是底部信息的标题</p> -->
      <div class="row footer_li">
        <!-- 部分：一 -->
        <div class="col-md-3">
          <div class="row">
            <div class="col-md-6">
              <ul>
                <li>首页</li>
                <li>赛事中心</li>
                <li>钓点推荐</li>
                <li>渔界资讯</li>
                <li>视频中心</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul>
                <li>公司简介</li>
                <li>公司架构</li>
                <li>营销合作</li>
                <li>招聘</li>
                <li>联系我们</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="row">
            <div class="col-md-5">
              <ul>
                <li>渔界资讯</li>
                <li>公告</li>
                <li>赛事</li>
                <li>钓场</li>
                <li>渔界攻略</li>
              </ul>
            </div>
            <div class="col-md-5">
              <ul>
                <li>旅钓</li>
                <li>塘主入驻</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="row">
            <div class="col-md-5">
              <ul>
                <li>最新赛事</li>
                <li>官方赛</li>
                <li>主题赛</li>
                <li>公益赛</li>
                <li>查看排名</li>
              </ul>
            </div>
            <div class="col-md-5">
              <ul>
                <li>荣耀殿堂</li>
                <li>荣耀殿堂</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="row">
            <div class="col-md-6">
              <ul>
                <li>
                  服务热线:
                  <p style="line-height: 12px; color: #4b7beb">000-0000-000</p>
                </li>
                <li>
                  公司地址:
                  <p style="line-height: 12px; font-size: 12px; color: #dcdcdc">
                    安徽省合肥市蜀山区某某某某某某某
                  </p>
                </li>
                <li>
                  <div id="map" class="wow zoomIn"></div>
                </li>
              </ul>
            </div>
            <div class="col-md-6 col-sm-8 col-xs-12">
              <ul>
                <li>
                  <img
                    style="display: inline-block"
                    src="@/assets/img/rqcode.png"
                    alt=""
                  />
                </li>
                <li class="rq_font">关注扫描二维码</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-2 col-sm-12 col-xs-12">
          <div class="row r_k">
            <div class="col-md-11 col-sm-12 col-xs-12">
              <ul>
                <li>渔界竞钓</li>
                <li style="line-height: 10px">
                  <img
                    style="display: inline-block"
                    src="@/assets/img/ios.png"
                    alt=""
                  />
                </li>
                <li>用户端APP下载</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_line"></div>
    <div class="remake">
      <p>备案号备案号备案号备案号备案号备案号备案号备案号备案号备案号</p>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import BMap from "BMap";
export default {
  name: "Footer",
  data() {
    return {};
  },
  mounted() {
    var map = new BMap.Map("map"); // 创建地图实例
    console.log(map);
    var point = new BMap.Point(117.121849, 31.821692); // 创建点坐标
    console.log(point, "-------");
    map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point); // 创建标注
    console.log(marker, "++++++++");
    map.addOverlay(marker); // 将标注添加到地图中
    var opts = {
      width: 50, // 信息窗口宽度
      height: 10, // 信息窗口高度
      title: "我们公司", // 信息窗口标题
    };

    map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    var infoWindow = new BMap.InfoWindow("我们公司", opts); // 创建信息窗口对象
    map.openInfoWindow(map.getCenter()); // 打开信息窗口
    var wow = new WOW();
    wow.init();
  },
};
</script>
<style scoped>
#map {
  width: 100%;
  height: 100px;
}
@media (min-width: 1400px) {
  .container {
    width: 1400px;
  }
}
.r_k {
  height: 198px;
  background: #384158;
  border-radius: 2px;
  margin-left: 4%;
}

.rq_font {
  font-size: 14px;
  font-family: Alibaba PuHuiTi;
  font-weight: 500 !important;
  color: #ffffff !important;
  letter-spacing: 2px;
}
#footer {
  width: 100%;
  height: 100%;
  /* height: 304px; */
  color: #fff;

  background: #2e3443;
  overflow: hidden;
  text-align: center;
}
.footer_li {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.footer_li ul li {
  font-size: 14px;
  font-family: Alibaba PuHuiTi;
  font-weight: 500;
  cursor: pointer;
  color: #999999;
  line-height: 30px;
  /* padding-left: 15px;
  padding-right: 15px; */
}
.footer_li ul li:hover {
  color: #4b7beb;
}
.remake {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  border-bottom: solid 2px white;
  text-align: center;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
}
.footer_line {
  width: 100%;
  height: 2px;
  background: #2a2e38;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {
    font-size: 12px;
  }
  .copy {
    font-size: 12px;
    margin: 30px 0 10px;
  }
}
</style>

