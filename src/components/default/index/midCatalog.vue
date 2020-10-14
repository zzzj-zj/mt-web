<template>
  <div class="mid-catalog clearfix">
    <ul>
      <li v-for="(item, index) in catalogArr" :key="index">
        <router-link :to="{ name: 'index' }">{{ item }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      catalogArr: [
        '美团外卖',
        '猫眼电影',
        '美团酒店',
        '民宿／公寓',
        '商家入驻',
        '美团公益'
      ]
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.mid-catalog {
  ul {
    display: flex;
    align-items: center;
    li {
      font-weight: 700;
      font-size: 16px;
      margin: 0 20px;
      a {
        color: #222;
      }
      &:first-of-type:hover a {
        color: #fbc700;
      }
      &:nth-of-type(2):hover a {
        color: #ed1e24;
      }
      &:nth-of-type(3):hover a {
        color: #f04d4e;
      }
      &:nth-of-type(4):hover a {
        color: #fdc411;
      }
      &:nth-of-type(5):hover a {
        color: #31bbac;
      }
      &:last-of-type:hover a {
        color: #f04d4e;
      }
    }
  }
}
</style>
