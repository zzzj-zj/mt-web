<template>
  <div class="filter-box">
    <base-card>
      <el-row>
        <classified-box :borderBottom="true" :classArr="classify"></classified-box>
      </el-row>

      <el-row>
        <classified-box :title="'区域'" :classArr="areaList"></classified-box>
      </el-row>
    </base-card>
  </div>
</template>

<script>
import baseCard from './baseCard'
import classifiedBox from './classifiedBox'

export default {
  props: ['classify', 'areaList'],
  components: {
    baseCard,
    classifiedBox
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.filter-box {
  .el-row {
    padding: 10px 0;
  }
}
</style>
