<template>
  <el-container>
    <el-header height="">
      <mt-header></mt-header>
    </el-header>

    <el-main>
      <router-view />
    </el-main>

    <el-footer>
      <mt-footer></mt-footer>
    </el-footer>
  </el-container>
</template>

<script>
import mtHeader from '../components/default/header'
import mtFooter from '../components/default/footer'

export default {
  data () {
    return {
      noBottomFlag: false
    }
  },
  components: {
    mtHeader,
    mtFooter
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.el-header {
  padding: 0;
}
.el-main {
  overflow: visible;
  padding: 0;
}
</style>
