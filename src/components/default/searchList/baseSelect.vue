<template>
  <div class="base-select" @mouseleave="hideDes">
    <div
      class="top"
      :class="selectSub && title === curTitle ? 'selected' : ''"
      @mouseenter="showDes"
    >
      {{ select.title }}
      <span class="el-icon-caret-bottom" v-if="select.subList.length"></span>
    </div>

    <div class="bottom" v-show="isShow" v-if="select.subList.length">
      <dl class="clearfix">
        <dt>{{ title }}</dt>
        <div>
          <dd>
            <span
              :class="selectSub && all && title === curTitle ? 'selected' : ''"
              @click="changeName(false)"
            >全部</span>
          </dd>
          <dd v-for="(item, index) in select.subList" :key="index">
            <span
              :class="item.name === select.title && title === curTitle ? 'selected' : ''"
              @click="changeName(item.name)"
            >{{ item.name }}</span>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: Object,
      default () {
        return {
          title: '美食',
          type: 'food',
          subList: [
            {
              name: '日本菜',
              id: 'Japan'
            },
            {
              name: '饮品店',
              id: 'drink'
            },
            {
              name: '面包甜点',
              id: 'cate'
            }
          ]
        }
      }
    },
    curTitle: {
      type: String,
      default: '全部'
    }
  },
  data () {
    return {
      all: false,
      isShow: false,
      selectSub: false,
      title: this.select.title
    }
  },
  methods: {
    changeName (name) {
      if (name) {
        this.select.title = name
        this.all = false
      } else {
        this.select.title = this.title
        this.all = true
      }
      this.selectSub = true
      this.isShow = false
      this.$emit('switch-title', this.title)
    },
    showDes () {
      this.isShow = true
    },
    hideDes () {
      this.isShow = false
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.base-select {
  color: #666;
  display: inline-block;
  position: relative;
  .top {
    cursor: pointer;
    display: inline-block;
    padding: 2px 5px 2px 8px;
    border-radius: 20px;
    position: relative;
    &.selected {
      background: #13d1be;
      color: #fff;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      padding-bottom: 10px;
    }
  }
  .bottom {
    border: 1px solid #e5e5e5;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 4px;
    position: absolute;
    left: -8px;
    top: 32px;
    z-index: 2;
    cursor: auto;
    user-select: text;
    white-space: normal;
    font-size: 12px;
    line-height: 1.5;
    font-weight: 500;
    text-align: left;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    &::before {
      content: " ";
      position: absolute;
      width: 7px;
      height: 7px;
      border-top: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
      transform: rotate(-45deg);
      left: 32px;
      top: -5px;
      background: #fff;
    }
    dl {
      max-width: 460px;
      padding: 20px;
      dt {
        font-size: 18px;
        color: #999;
      }
      > div {
        display: flex;
        dd {
          width: 100px;
          margin: 10px 0;
          span {
            cursor: pointer;
            display: inline-block;
            margin-left: -10px;
            padding: 5px 10px;
            border-radius: 20px;
            &.selected {
              background: #13d1be;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
