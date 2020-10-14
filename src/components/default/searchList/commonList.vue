<template>
  <div class="common-list">
    <base-card>
      <el-row class="el-row-nav">
        <mt-nav :curNav="curNav" @change-nav="changeNav"></mt-nav>
      </el-row>

      <el-row class="el-row-list">
        <list-item v-for="item in itemList" :key="item.itemId" :item="item"></list-item>
      </el-row>
    </base-card>
  </div>
</template>

<script>
import baseCard from './baseCard'
import mtNav from './nav'
import listItem from './listItem'

export default {
  props: ['itemList'],
  data () {
    return {
      curNav: '智能排序'
    }
  },
  methods: {
    changeNav (nav) {
      this.curNav = nav
    }
  },
  components: {
    baseCard,
    mtNav,
    listItem
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.common-list {
  .el-row-nav {
    padding-bottom: 20px;
    border-bottom: 1px solid #e5e5e5;
  }

  .el-row-list {
    padding-top: 10px;
  }
}
</style>
