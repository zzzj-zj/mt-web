<template>
  <div class="base-select" v-document-click="hide">
    <div class="s" :class="disabled ? 'disabled' : ''" @click.stop="showDes">
      {{ selectedWord ? selectedWord : placeholder }}
      <span class="el-icon-caret-bottom"></span>
    </div>
    <div class="base-des" :class="show && !disabled ? 'show' : ''" @click.stop="showDes">
      <dl class="clearfix">
        <dt>{{ placeholder }}</dt>
        <div v-for="(items, index) in contentGroup" :key="index">
          <dd v-for="(item, i) in items" :key="i" @click.stop="hideDes(item)">
            <a
              href="javascript: void(0)"
              v-if="placeholder.includes('省')"
              :class="item === selectedWord ? 'active' : ''"
            >{{ item }}</a>
            <router-link :to="{ name: 'index', params: { city: item } }" v-else>{{ item }}</router-link>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    show: Boolean,
    contents: {
      type: Array,
      default () {
        return [
          '山东',
          '甘肃',
          '江苏',
          '北京',
          '云南',
          '海南',
          '浙江',
          '上海',
          '天津',
          '陕西',
          '新疆',
          '贵州',
          '安徽',
          '澳门',
          '湖南',
          '河北',
          '香港',
          '辽宁',
          '四川',
          '宁夏',
          '吉林',
          '福建',
          '湖北',
          '广东',
          '重庆',
          '山西',
          '江西',
          '黑龙江',
          '青海',
          '河南',
          '台湾',
          '内蒙古',
          '西藏',
          '广西'
        ]
      }
    }
  },
  data () {
    return {
      selectedWord: ''
    }
  },
  computed: {
    contentGroup () {
      const contents = this.contents
      const group = Math.ceil(contents.length / 12)
      let arr = []
      for (let i = 0; i < group; i++) {
        arr.push(contents.slice(i * 12, i * 12 + 12))
      }
      return arr
    }
  },
  methods: {
    showDes () {
      !this.disabled && this.$emit('show-des')
    },
    hideDes (item) {
      if (this.placeholder.includes('省')) {
        this.$emit('show-city')
      }
      this.selectedWord = item
      this.$emit('hide-des')
    },
    hide () {
      this.$emit('hide-des')
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.base-select {
  position: relative;
  > .s {
    padding: 10px 0 10px 10px;
    vertical-align: middle;
    display: inline-block;
    width: 150px;
    height: 40px;
    position: relative;
    font-size: 14px;
    color: #666;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
    margin: 0 20px 0 10px;
    cursor: pointer;
    &.disabled {
      cursor: not-allowed;
    }
    span::before {
      position: absolute;
      right: 4px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .base-des {
    display: none;
    &.show {
      display: block;
    }
    dl {
      position: absolute;
      cursor: default;
      top: 45px;
      left: 0;
      width: 264px;
      height: 375px;
      padding: 20px 0 20px 15px;
      box-sizing: border-box;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      z-index: 2;
      &::before,
      &::after {
        content: "";
        left: 26px;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 0;
        position: absolute;
        top: -7px;
        border-bottom: 6px solid #e5e5e5;
      }
      &::after {
        top: -6px;
        border-bottom: 6px solid #fff;
      }
      dt {
        font-size: 16px;
        color: #ccc;
        margin-bottom: 11px;
      }
      div {
        float: left;
        margin-right: 40px;
        &:first-of-type {
          margin-left: 10px;
        }
        dd {
          margin-top: 5px;
          a {
            display: inline-block;
            padding: 0 5px;
            height: 20px;
            line-height: 20px;
          }
          a.active {
            background: #13d1be;
            border-radius: 10px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
