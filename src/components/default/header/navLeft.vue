<template>
  <ul class="nav-left clearfix">
    <li>
      <span class="el-icon-location"></span>
      {{ curCity }}
    </li>
    <li>
      <router-link class="changeCity" :to="{ name: 'cityList' }">切换城市</router-link>
    </li>
    <li>[
      <router-link
        v-for="item in recentCity"
        :key="item.id"
        :to="{ name: 'index', params: item }"
      >{{ item.name }}</router-link>]
    </li>
    <li class="login">
      <router-link :to="{ name: 'login' }">立即登录</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'register' }">注册</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      recentCity: [
        {
          id: 20,
          name: '广州',
          pinyin: 'guangzhou',
          acronym: 'gz',
          rank: 'S',
          firstChar: 'g'
        },
        {
          id: 30,
          name: '深圳',
          pinyin: 'shenzheng',
          acronym: 'sz',
          rank: 'S',
          firstChar: 's'
        }
      ]
    }
  },
  computed: {
    curCity () {
      return this.$store.state.curCity
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.nav-left {
  float: left;
  color: #666;
  li {
    float: left;
    .changeCity {
      border: 1px solid #e5e5e5;
      border-radius: 2px;
    }
    a {
      margin: 0 4px;
      padding: 0 2px;
    }
    &.login {
      margin-left: 15px;
      a {
        color: #31bbac;
      }
    }
  }
}
</style>
