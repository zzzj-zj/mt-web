<template>
  <div class="city-list">
    <el-row>
      <mt-province></mt-province>
    </el-row>

    <el-row>
      <mt-city :city="$store.state.hotCityList"></mt-city>
    </el-row>

    <el-row>
      <mt-city :title="'最近访问'" :city="$store.state.recents"></mt-city>
    </el-row>

    <el-row>
      <mt-letter></mt-letter>
    </el-row>

    <el-row>
      <template v-if="sortRank.length">
        <mt-single-letter
          v-for="(item, i) in sortRank"
          :key="i"
          :letter="item.letter"
          :cityList="item.val"
        ></mt-single-letter>
      </template>
    </el-row>
  </div>
</template>

<script>
import mtProvince from '../../components/default/cityList/province'
import mtCity from '../../components/default/cityList/city'
import mtLetter from '../../components/default/cityList/letter'
import mtSingleLetter from '../../components/default/cityList/single-letter'
import API from '../../api/index'

export default {
  created () {
    const cityList = API.cityList()
    const hotCityList = API.hotCity()
    const recents = API.recents()
    API.requestAll([cityList, hotCityList, recents]).then(resArr => {
      const state = this.$store.state
      state.rankCityList = resArr[0].data.data
      state.hotCityList = resArr[1].data.data
      state.recents = resArr[2].data.data
    })
  },
  computed: {
    sortRank () {
      if (!this.$store.state.rankCityList) return []
      const rankCityList = this.$store.state.rankCityList
      let obj = {}
      let arr = []
      rankCityList.sort(
        (a, b) => a.firstChar.charCodeAt() - a.firstChar.charCodeAt()
      )
      rankCityList.forEach(item =>
        obj[item.firstChar.toUpperCase()]
          ? obj[item.firstChar.toUpperCase()].push(item)
          : (obj[item.firstChar.toUpperCase()] = [item])
      )
      Object.keys(obj).forEach(key =>
        arr.push({
          letter: key,
          val: obj[key]
        })
      )
      arr.sort((a, b) => a.letter.charCodeAt() - b.letter.charCodeAt())
      return arr
    }
  },
  components: {
    mtProvince,
    mtCity,
    mtLetter,
    mtSingleLetter
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.city-list {
  width: 1190px;
  margin: 20px auto;
  padding: 0 10px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 1000px;
  .el-row {
    padding: 20px 0;
    &:not(:nth-last-child(2)):not(:last-child) {
      border-bottom: 1px solid #e5e5e5;
    }
  }
}
</style>
