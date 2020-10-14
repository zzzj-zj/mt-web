<template>
  <div class="letter">
    <dl>
      <dt>{{ title }}：</dt>
      <dd v-for="(item, index) in letterArr" :key="index">
        <a :href="'#city' + item">{{ item }}</a>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '按拼音首字母选择'
    }
  },
  data () {
    return {
      letterArr: 'abcdefghjklmnpqrstwxyz'.toUpperCase().split('')
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.letter {
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
      font-size: 14px;
      a {
        font-size: 15px;
        color: #666;
        display: inline-block;
        margin: 0 10px;
        width: 25px;
        height: 25px;
        padding-top: 2px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border-radius: 50%;
        &:hover {
          background: #f8f8f8;
        }
      }
    }
  }
}
</style>
