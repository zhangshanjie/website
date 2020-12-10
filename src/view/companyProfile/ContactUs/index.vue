<template>
  <div>
    <div class="row">
      <div class="title">
        <div class="row">
          <div class="col-md-12 col-xs-12 title">
            <p>联系我们</p>
          </div>
          <div class="col-md-12 col-xs-12 titles">
            <p>contact us</p>
          </div>
        </div>
        <div class="col-md-6 col-xs-12 Contact_left">
          <div>
            <img style="width: 27px" src="@/assets/img/email.png" alt="" />
            <span class="Contact_left_j">123456880@qq.com</span>
            <span class="Contact_left_k">123456880@qq.com</span>
          </div>
          <div>
            <img
              style="width: 25px"
              src="@/assets/img/phoneNumber.png"
              alt=""
            />
            <span class="Contact_left_t" >123-4568-8044</span>
            <span class="Contact_left_p">123-4568-8044</span>
          </div>
          <div>
            <img src="@/assets/img/address.png" alt="" />
            <span class="Contact_left_w"
              >安徽省合肥市某某某某某某某某莫某某某某莫</span
            >
          </div>
        </div>
        <div class="col-md-6 col-xs-12 Contact_right">
             <div id="companyMap" class="wow zoomIn"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import BMap from "BMap";
export default {
  data() {
    return {};
  },
  mounted(){
var map = new BMap.Map("companyMap"); // 创建地图实例
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
  }
};
</script>
<style scoped>
#companyMap {
  width: 100%;
  height: 180px;
}
.Contact_right{
  margin-top: 50px;
  padding-bottom:74px;
}
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
.Contact_left {
  margin-top: 50px;
}
.Contact_left > div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.Contact_left > div:nth-child(2) {
  margin-top: 21px;
}
.Contact_left > div:nth-child(3) {
  margin-top: 21px;
}
.Contact_left_j {
  margin-left: 20px;
  height: 15px;
  font-size: 16px;
  font-family: "AlibabaPuHuiTi-Medium";
  font-weight: 500;
  color: #666666;
  line-height: 20px;
}
.Contact_left_k {
  margin-left: 30px;
  height: 15px;
  font-size: 16px;
  font-family: "AlibabaPuHuiTi-Medium";
  font-weight: 500;
  color: #666666;
  line-height: 20px;
}
.Contact_left_t{
  margin-left: 20px;
  height: 15px;
  font-size: 16px;
  font-family: "AlibabaPuHuiTi-Medium";
  font-weight: 500;
  color: #666666;
  line-height: 20px;
}
.Contact_left_p{
  margin-left: 67px;
  height: 15px;
  font-size: 16px;
  font-family: "AlibabaPuHuiTi-Medium";
  font-weight: 500;
  color: #666666;
  line-height: 20px;
}
.Contact_left_w{
   margin-left: 18px;
  height: 15px;
  font-size: 16px;
  font-family: "AlibabaPuHuiTi-Medium";
  font-weight: 500;
  color: #666666;
  line-height: 20px;
}
</style>