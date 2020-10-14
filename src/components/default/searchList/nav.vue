<template>
  <div class="mt-nav">
    <el-col :span="4" v-for="(item, index) in navArr" :key="index">
      <span :class="curNav === item ? 'active' : ''" @click="$emit('change-nav', item)">{{ item }}</span>
    </el-col>
  </div>
</template>

<script>
export default {
  props: {
    navArr: {
      type: Array,
      default () {
        return ['智能排序', '价格排序', '人气最高', '评价最高']
      }
    },
    curNav: {
      type: String,
      default: '智能排序'
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.mt-nav {
  .el-col-4 {
    color: #666;
    span {
      cursor: pointer;
    }
    .active {
      color: #31bbac;
    }
  }
}
</style>
