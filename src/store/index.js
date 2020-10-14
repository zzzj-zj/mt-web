import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appName: 'mt-app',
    curCity: '武汉',
    search: [],
    searchHotWords: [],
    curCatalog: [],
    catalogs: [],
    cardObj: {},
    provinceList: [],
    hotCityList: [],
    rankCityList: [],
    recents: [],
    goodList: [],
    classify: [],
    areaList: []
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})
