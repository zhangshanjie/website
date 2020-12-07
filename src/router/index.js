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
        }, {
          path: '/software',
          name: 'software',
          component: resolve => require(['@/view/Software'], resolve),
          meta: {
            title: '软件产品'
          },
          children: [
            {
              path: '/software',
              redirect: '/software/smartTown'
            },
            {
              path: '/software/smartTown',
              name: 'software',
              component: resolve => require(['@/view/Software_smartTown'], resolve),
              meta: {
                title: '软件产品丨智能小镇管理系统'
              }
            },
            {
              path: '/software/bigData',
              name: 'software',
              component: resolve => require(['@/view/Software_bigData'], resolve),
              meta: {
                title: '软件产品丨大数据管理系统'
              }
            }
          ]
        }, {
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
          path: '/newsinformation',
          name: 'newsinformation',
          component: resolve => require(['@/view/NewsInformation'], resolve),
          meta: {
            title: '新闻动态'
          }
        }, {
          path: '/Brigade',
          name: 'Brigade',
          component: resolve => require(['@/view/Brigade'], resolve),
          meta: {
            title: '旅钓'
          }
        }, 
        {
          path: '/Competition',
          name: 'Competition',
          component: resolve => require(['@/view/Competition'], resolve),
          meta: {
            title: '最新赛事'
          }
        },
        {
          path: '/CompetitionDetails',
          name: 'CompetitionDetails',
          component: resolve => require(['@/view/CompetitionDetails'], resolve),
          meta: {
            title: '最新赛事详情'
          }
        },
        {
          path: '/CompetitionRanking',
          name: 'CompetitionRanking',
          component: resolve => require(['@/view/CompetitionRanking'], resolve),
          meta: {
            title: '最新赛事排名'
          }
        },
        {
          path: '/CompetitionMore',
          name: 'CompetitionMore',
          component: resolve => require(['@/view/CompetitionMore'], resolve),
          meta: {
            title: '赛事中心'
          }
        },
         {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: '联系我们'
          }
        },
        {
          path: '/ServiceDetail',
          name: 'ServiceDetail',
          component: resolve => require(['@/view/ServiceDetail'],resolve),
          meta: {
            title: '公司简介'
          }
        },
        {
          path: '/CompanyProfile',
          name: 'CompanyProfile',
          component: resolve => require(['@/view/CompanyProfile'],resolve),
          meta: {
            title: '招聘'
          }
        },
        {
          path: '/login',
          name: 'login',
          component: resolve => require(['@/components/login'],resolve),
          meta: {
            title: '登录'
          }
        },
        {
          path: '/ForgetPsd',
          name: 'ForgetPsd',
          component: resolve => require(['@/view/ForgetPsd'],resolve),
          meta: {
            title: '忘记密码'
          }
        },
        {
          path: '/Enroll',
          name: 'Enroll',
          component: resolve => require(['@/view/Enroll'],resolve),
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
          component: resolve => require(['@/view/appDownload'],resolve),
          meta: {
            title: 'APP下载'
          }
         }

        
      ]
    }
  ]
})
