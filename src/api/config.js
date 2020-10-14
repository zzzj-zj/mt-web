export default {
  BASEURL: 'http://api.duyiedu.com',
  URLS: {
    login: {
      url: '/api/meituan/login',
      method: 'GET'
    },
    register: {
      url: '/api/meituan/register',
      method: 'GET'
    },
    search: {
      url: '/api/meituan/header/search.json',
      method: 'GET'
    },
    searchHotWords: {
      url: '/api/meituan/header/searchHotWords.json',
      method: 'GET'
    },
    nav: {
      url: '/api/meituan/index/nav.json',
      method: 'GET'
    },
    resultsByKeywords: {
      url: '/api/meituan/index/resultsByKeywords.json',
      method: 'GET'
    },
    cityList: {
      url: '/api/meituan/city/cityList.json',
      method: 'GET'
    },
    hotCity: {
      url: '/api/meituan/city/hot.json',
      method: 'GET'
    },
    province: {
      url: '/api/meituan/city/province.json',
      method: 'GET'
    },
    recents: {
      url: '/api/meituan/city/recents.json',
      method: 'GET'
    },
    goodList: {
      url: '/api/meituan/list/goodsList.json',
      method: 'GET'
    },
    recommend: {
      url: '/api/meituan/list/recommend.json',
      method: 'GET'
    },
    classify: {
      url: '/api/meituan/list/classify.json',
      method: 'GET'
    },
    areaList: {
      url: '/api/meituan/list/areaList.json',
      method: 'GET'
    },
    getPosition: {
      url: '/api/meituan/city/getPosition.json',
      method: 'GET'
    },
    detail: {
      url: '/api/meituan/product/detail.json',
      method: 'GET'
    }
  }
}
