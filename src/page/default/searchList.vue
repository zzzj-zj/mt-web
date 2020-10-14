<template>
  <div class="search-list">
    <el-row class="outer-row">
      <router-link :to="{ name: 'index' }"
        >{{ $store.state.curCity }}美团</router-link
      >
      <span class="el-icon-arrow-right"></span>
      <router-link :to="{ path: '/searchList/' + id }">{{
        $store.state.curCity + id
      }}</router-link>
    </el-row>

    <el-row>
      <el-col :span="18">
        <el-row>
          <template v-if="$store.state.classify.length">
            <filter-box
              :classify="$store.state.classify"
              :areaList="$store.state.areaList"
            ></filter-box>
          </template>
        </el-row>

        <el-row>
          <template v-if="$store.state.goodList.length">
            <common-list :itemList="$store.state.goodList"></common-list>
          </template>
        </el-row>
      </el-col>

      <el-col :span="5" :push="1">
        <like />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import filterBox from '../../components/default/searchList/filterBox'
import commonList from '../../components/default/searchList/commonList'
import like from '../../components/default/searchList/like'
import API from '../../api/index'

export default {
  props: ['id'],
  components: {
    filterBox,
    commonList,
    like
  },
  created () {
    const goodList = API.goodList()
    const classify = API.classify()
    const areaList = API.areaList()

    API.requestAll([goodList, classify, areaList]).then((resArr) => {
      const state = this.$store.state

      state.goodList = resArr[0].data.data
      state.classify = resArr[1].data.data
      state.areaList = resArr[2].data.data
    })
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
@media screen and (min-width: 1190px) {
  .search-list {
    width: 1190px;
  }
}
@media screen and (max-width: 1190px) {
  .search-list {
    width: 960px;
  }
}
.search-list {
  margin: 0 auto;
  .el-row {
    &.outer-row {
      a {
        color: #111;
        &:hover {
          color: #31bbac;
        }
      }
    }
    padding: 10px 0;
  }
}
</style>
