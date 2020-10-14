<template>
  <div class="province">
    <div class="first">
      <p>按省份选择：</p>
      <base-select
        :placeholder="'省份'"
        :show="pShow"
        @show-city="showCity"
        @show-des="showDes(true)"
        @hide-des="hideDes(true)"
      ></base-select>
      <base-select
        :placeholder="'城市'"
        :show="cShow"
        :disabled="forbitCity"
        @show-des="showDes"
        @hide-des="hideDes"
      ></base-select>
    </div>

    <div class="second">
      <p>直接搜索：</p>
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="请输入城市中文或拼音"
        @select="handleSelect"
      ></el-autocomplete>
    </div>
  </div>
</template>

<script>
import baseSelect from './base-select'

export default {
  props: ['cContents', 'pContents'],
  data () {
    return {
      pV: '',
      cV: '',
      iptVal: '',
      pShow: false,
      cShow: false,
      forbitCity: true,
      state: '',
      allCity: [
        { value: '湖北' },
        { value: '武汉' },
        { value: '上海' },
        { value: '北京' },
        { value: '广州' },
        { value: '深圳' },
        { value: '杭州' },
        { value: '无锡' },
        { value: '河北' },
        { value: '湖南' }
      ]
    }
  },
  methods: {
    showCity () {
      this.forbitCity = false
    },
    showDes (flag) {
      this.pShow = false
      this.cShow = false
      if (flag) {
        this.pShow = true
      } else {
        this.cShow = true
      }
    },
    hideDes (flag) {
      if (flag) {
        this.pShow = false
      } else {
        this.cShow = false
      }
    },
    handleSelect (vObj) {

    },
    querySearch (queryString, cb) {
      const allCity = this.allCity
      const results = queryString
        ? allCity.filter(city => city.value.includes(queryString)).length
          ? allCity.filter(city => city.value.includes(queryString))
          : [{ value: '未找到对应的城市' }]
        : allCity
      // 调用 callback 返回建议列表的数据
      cb(results)
    }
  },
  components: {
    baseSelect
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
p {
  font-size: 16px;
}
.province {
  &,
  .first,
  .second {
    display: flex;
    align-items: center;
  }
  .second {
    margin-left: 50px;
    p {
      width: 120px;
    }
    .el-input__inner:focus {
      border: none !important;
    }
  }
}
</style>
