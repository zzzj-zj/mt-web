import Vue from 'vue'
import Router from 'vue-router'

// 一级页面
import DefaultPage from '../layout/default.vue'
import BlankPage from '../layout/blank.vue'

// 二级页面
import Index from '../page/default/index.vue'
import CityList from '../page/default/cityList.vue'
import SearchList from '../page/default/searchList.vue'
import Register from '../page/blank/register.vue'
import Login from '../page/blank/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/index',
    component: DefaultPage,
    children: [{
      path: 'index',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: Index
    },
    {
      path: 'cityList',
      name: 'cityList',
      meta: {
        title: '城市列表'
      },
      component: CityList
    },
    {
      path: 'searchList/:id',
      meta: {
        title: '搜索列表'
      },
      component: SearchList,
      props: true
    }
    ]
  },
  {
    path: '/blank',
    component: BlankPage,
    children: [{
      path: 'register',
      name: 'register',
      alias: '/register',
      meta: {
        title: '用户注册'
      },
      component: Register
    },
    {
      path: 'login',
      name: 'login',
      alias: '/login',
      meta: {
        title: '用户登录'
      },
      component: Login
    }
    ]
  }
  ]
})
