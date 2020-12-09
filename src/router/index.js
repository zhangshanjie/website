import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/index'
        }, {
          path: '/index',
          name: 'index',
          component: resolve => require(['@/view/index'], resolve),
          meta: {
            title: '首页'
          }
        },  {
          path: '/information',
          name: 'information',
          component: resolve => require(['@/view/information'], resolve),
          meta: {
            title: '渔界资讯'
          }
        }, {
          path: '/informationDetails',
          name: 'informationDetails',
          component: resolve => require(['@/view/informationDetails'], resolve),
          meta: {
            title: '渔界资讯详情'
          }
        },
        {
          path: '/Brigade',
          name: 'Brigade',
          component: resolve => require(['@/view/Brigade/index'], resolve),
          meta: {
            title: '旅钓'
          }
        }, 
        {
          path: '/Competition',
          name: 'Competition',
          component: resolve => require(['@/view/Competition/index'], resolve),
          meta: {
            title: '最新赛事'
          }
        },
        {
          path: '/CompetitionDetails',
          name: 'CompetitionDetails',
          component: resolve => require(['@/view/Competition/CompetitionDetails'], resolve),
          meta: {
            title: '最新赛事详情'
          }
        },
        {
          path: '/CompetitionRanking',
          name: 'CompetitionRanking',
          component: resolve => require(['@/view/Competition/CompetitionRanking'], resolve),
          meta: {
            title: '最新赛事排名'
          }
        },
        {
          path: '/CompetitionMore',
          name: 'CompetitionMore',
          component: resolve => require(['@/view/Competition/CompetitionMore'], resolve),
          meta: {
            title: '赛事中心'
          }
        },
        {
          path: '/CompanyProfile',
          name: 'CompanyProfile',
          component: resolve => require(['@/view/CompanyProfile/index'],resolve),
          meta: {
            title: '公司简介'
          }
        },
        {
          path: '/recruit',
          name: 'recruit',
          component: resolve => require(['@/view/CompanyProfile/recruit/index'],resolve),
          meta: {
            title: '招聘'
          }
        },
        {
          path: '/position',
          name: 'position',
          component: resolve => require(['@/view/CompanyProfile/recruit/position'],resolve),
          meta: {
            title: '公司职位'
          }
        },
        {
          path: '/login',
          name: 'login',
          component: resolve => require(['@/view/login/index'],resolve),
          meta: {
            title: '登录'
          }
        },
        {
          path: '/ForgetPsd',
          name: 'ForgetPsd',
          component: resolve => require(['@/view/ForgetPsd/index'],resolve),
          meta: {
            title: '忘记密码'
          }
        },
        {
          path: '/Enroll',
          name: 'Enroll',
          component: resolve => require(['@/view/Enroll/index'],resolve),
          meta: {
            title: '注册'
          }
        },
        {
          path: '/Banner',
          name: 'Banner',
          component: resolve => require(['@/components/Banner'],resolve),
          meta: {
            title: '轮播图'
          }
        },
        {
          path: '/appDownload',
          name: 'appDownload',
          component: resolve => require(['@/view/appDownload/index'],resolve),
          meta: {
            title: 'APP下载'
          }
         }

        
      ]
    }
  ]
})
