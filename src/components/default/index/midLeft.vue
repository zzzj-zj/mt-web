<template>
  <div class="midLeft clearfix">
    <el-row>
      <el-carousel height="240px">
        <el-carousel-item v-for="item in imgArr" :key="item">
          <router-link :to="{ name: 'index' }">
            <img :src="item">
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </el-row>

    <el-row>
      <router-link :to="{ name: 'index' }" v-for="(_item, _index) in nextImgArr" :key="_index">
        <img :src="_item">
      </router-link>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgArr: [
        'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
        'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
        'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
        'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
      ],
      nextImgArr: [
        'http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png',
        'http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg'
      ]
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.midLeft {
  .el-row {
    height: 100%;
    &:first-of-type {
      margin-top: 10px;
    }
    .el-carousel {
      width: 550px;
      height: 240px;
      img {
        width: 550px;
        height: 240px;
      }
    }
    &:last-of-type {
      margin-top: 10px;
      a {
        width: 270px;
        height: 165px;
        display: inline-block;
        &:first-of-type {
          margin-right: 10px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
