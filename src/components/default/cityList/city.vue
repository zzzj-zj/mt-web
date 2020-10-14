<template>
  <div class="city">
    <dl>
      <dt>{{ title }}：</dt>
      <dd v-for="(item, index) in cityList" :key="index">
        <router-link :to="{ name: 'index', params: { city: item } }">{{ item }}</router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '热门城市'
    },
    city: {
      type: Array,
      default () {
        return [
          '北京',
          '上海',
          '广州',
          '深圳',
          '天津',
          '西安',
          '重庆',
          '杭州',
          '南京',
          '武汉',
          '成都'
        ]
      }
    }
  },
  computed: {
    cityList () {
      if (!this.city) return []
      return this.city.map(c => c.name)
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.city {
  dl {
    display: flex;
    justify-items: center;
    flex-wrap: wrap;
    * {
      height: 20px;
      line-height: 20px;
    }
    dt {
      font-size: 16px;
      color: #333;
      font-weight: 500;
    }
    dd {
      margin: 0 20px;
      font-size: 14px;
      a {
        color: #666;
        &:hover {
          color: #31bbac;
        }
      }
    }
  }
}
</style>
