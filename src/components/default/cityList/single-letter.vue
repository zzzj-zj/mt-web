<template>
  <div class="single-letter">
    <span :id="'city' + letter">{{ letter }}</span>
    <div>
      <router-link
        v-for="(item, index) in cityList"
        :key="index"
        :class="item.rank === 'A' ? 'hot' : ''"
        :to="{ name: 'index', params: { city: item.name } }"
      >{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    letter: {
      type: String,
      default: 'A'
    },
    cityList: {
      type: Array
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.single-letter {
  padding: 13px 30px 13px 10px;
  border-radius: 10px;
  transition: background-color 0.5s;
  &:hover {
    background: #f8f8f8;
  }
  > span {
    box-sizing: border-box;
    vertical-align: top;
    padding-top: 10px;
    display: inline-block;
    text-align: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background: #13d1be;
    box-shadow: 0 4px 5px 0 rgba(39, 178, 164, 0.22);
  }
  > div {
    display: inline-block;
    max-width: 1065px;
    a {
      margin: 10px 20px;
      color: #666;
      display: inline-block;
      font-size: 14px;
      &:hover {
        color: #13d1be !important;
      }
      &.hot {
        color: #f60;
      }
    }
  }
}
</style>
