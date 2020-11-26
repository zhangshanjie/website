<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <img src="@/assets/img/logoIcon.png">
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item,index) in navList"
          :key="index"
          :class="index==navIndex?'active':''"
          @click="navClick(index,item.name)"
        >
          <router-link :to="item.path">
            {{item.name}}
            <!-- <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span> -->
            <i class="underline"></i>
          </router-link>
          <dl v-if="item.children.length>0">
            <dt v-for="(i,n) in item.children" :key="n">
              <router-link class="childrenList" :to="i.path">{{i.name}}</router-link>
            </dt>
          </dl>
        </li>
      </ul>
      <!--塘主-->
      <div class="myIcon">
        <img src="@/assets/img/myIcon.png">
      </div>
      <!--登录/注册-->
      <button class="header-btn">注册/登录</button>
    </div>

    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img class="center-block" src="@/assets/img/logoIcon.png" alt="logo">
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{menuName}}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item,index) in navList"
            :key="index"
            :class="index==navIndex?'active':''"
            @click="navClick(index,item.name)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <router-link :to="item.path">
              {{item.name}}
              <i class="underline"></i>
            </router-link>
            
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0,
      menuName: "首页",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "首页",
          path: "/",
          children: [
            {
              name: "赛事中心",
              path: "/software/smartTown"
            },
            {
              name: "钓点推荐",
              path: "/software/smartTown"
            },
            {
              name: "渔界咨询",
              path: "/software/smartTown"
            },
            {
              name: "视频中心",
              path: "/software/smartTown"
            },
          ]
        },
        {
          name: "公司简介",
          path: "/software",
          children: [
            {
              name: "公司架构",
              path: "/software/smartTown"
            },
            {
              name: "营销合作",
              path: "/software/bigData"
            },
            {
              name: "招聘",
              path: "/software/bigData"
            },
            {
              name: "联系我们",
              path: "/software/bigData"
            },
          ]
        },
        {
          name: "渔界咨询",
          path: "/service",
          children: [
            {
              name: "公告",
              path: "/software/bigData"
            },
            {
              name: "赛事",
              path: "/software/bigData"
            },
            {
              name: "钓场",
              path: "/software/bigData"
            },
            {
              name: "渔界攻略",
              path: "/software/bigData"
            },
          ]
        },
        {
          name: "旅钓",
          path: "/newsinformation",
          children: [
            {
              name: "定制出行",
              path: "/software/bigData"
            },
            {
              name: "境内",
              path: "/software/bigData"
            },
            {
              name: "境外",
              path: "/software/bigData"
            },
          ]
        },
        {
          name: "APP下载",
          path: "/companyintroduction",
          children: [
            {
              name: "APP下载",
              path: "/software/bigData"
            },
          ]
        },
        {
          name: "最新赛事",
          path: "/jobchance",
          children: [
            {
              name: "官方赛",
              path: "/software/bigData"
            },
            {
              name: "主题赛",
              path: "/software/bigData"
            },
            {
              name: "公益赛",
              path: "/software/bigData"
            },
            {
              name: "查看排名",
              path: "/software/bigData"
            },
          ]
        },
        {
          name: "荣耀殿堂",
          path: "/contactus",
          children: [
            {
              name: "荣耀殿堂",
              path: "/software/bigData"
            },
          ]
        }
      ]
    };
  },
  methods: {
    navClick(index, name) {
      this.navIndex = index;
      sessionStorage.setItem('navIndex',index)
      this.menuName = name;
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    }
  }
};
</script>
<style scoped>
/* 顶部 */
#header {
  position: relative;
  background: rgba(0,0,0,0.1);
  transition: all ease 0.6s;
  z-index: 999;
}
#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #474747;
}
/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}
/* 导航栏 */
#header .header-nav {
  height: 62px;
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
  width: 100px;
  height: 100%;
  float: left;
  position: relative;
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  position: absolute;
  top: 50px;
  left: -60%;
  right: 0;
  bottom: 0;
  margin: auto;
}
/*导航塘主 */
#header .myIcon{
  width: 28px;
  height: 28px;
  position: relative;
  top: -45px;
  left: 54%;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 99;
}
/*登录/注册 btn*/
.header-btn{
  width: 78px;
  color: #6C98FE;
  font-size: 12px;
  padding: 10px 10px;
  border-radius: 25px;
  border: none;
  background: #fff;
  position: relative;
  top: -14px;
  left: 99%;
}
/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
  line-height: 62px;
  float: right;
  margin: 0;
  max-width: 800px;
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  margin: 0 15px;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  color: #fff;
  font-size: 16px;
  font-family: Alibaba-PuHuiTi;
  padding: 15px 0;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #6C98FE;
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
  color: #6C98FE;
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  color: #6C98FE;
  text-decoration: none;
  border-bottom: 2px solid #6C98FE;
}
/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 160px;
  top: 99%;
  left: 0;
  z-index: 999999;
  /* box-shadow: 0 0 3px 1px #ccc; */
  background: rgba(0,0,0,0.3);
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 10px;
}
.childrenList{
  color: #fff;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
  color:#6C98FE ;
}
/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
}
@media screen and (max-width: 992px) {
  #header .header-nav-m {
    position: relative;
  }
  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 62px;
    position: relative;
  }
  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 323px;
    height: 90px;
    position: absolute;
    top: 49px;
    left: -22%;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .header-nav-logo{
    display: none;
  }
  /*导航塘主 */
  #header .myIcon{
    display: none;
  }
  /*登录/注册 btn*/
  .header-btn{
    display: none;
  }
  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: rgba(0,0,0,0.3);
    position: relative;
  }
  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }
  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 9999999;
  }
  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    font-size: 16px;
    font-family: Alibaba-PuHuiTi;
    padding: 15px 0;
    position: relative;
  }
  /* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
  #header .header-nav-m .header-nav-m-wrapper > li > a:hover {
    color: #6C98FE;
    text-decoration: none;
  }
  /* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
  #header .header-nav-m .header-nav-m-wrapper > li.active > a {
    color: #6C98FE;
    text-decoration: none;
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}
</style>
