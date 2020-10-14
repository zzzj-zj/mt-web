<template>
  <div class="header-wrapper">
    <div class="nav">
      <nav-left></nav-left>
      <nav-right></nav-right>
    </div>
    <div class="search-wrapper">
      <header-search></header-search>
    </div>
  </div>
</template>

<script>
import navLeft from './navLeft'
import navRight from './navRight'
import headerSearch from './search'
import API from '../../../api/index'

export default {
  created () {
    const search = API.search()
    const searchHotWords = API.searchHotWords()
    const position = API.getPosition()
    API.requestAll([position, search, searchHotWords]).then(resArr => {
      const state = this.$store.state
      state.curCity = resArr[0].data.data.name
      state.search = resArr[1].data.data.list
      state.searchHotWords = resArr[2].data.data
    })
  },
  components: {
    navLeft,
    navRight,
    headerSearch
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.header-wrapper {
  @media screen and (min-width: 1190px) {
    .nav {
      width: 1190px;
    }
  }
  @media screen and (max-width: 1190px) {
    .nav {
      width: 960px;
    }
  }
  .nav {
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    position: relative;
  }
  .search-wrapper {
    position: relative;
    background: #fff;
    box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
