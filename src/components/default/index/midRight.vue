<template>
  <div class="mid-right">
    <router-link
      :to="{ name: 'index' }"
      v-for="(item, index) in imgArr"
      :key="index">
      <img :src="item">
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgArr: [
        'http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg',
        'http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg'
      ]
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.mid-right {
  width: 150px;
  margin-top: 10px;
  a {
    width: 150px;
    height: 240px;
    display: inline-block;
    margin-bottom: 10px;
    &:last-of-type {
      height: 165px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
