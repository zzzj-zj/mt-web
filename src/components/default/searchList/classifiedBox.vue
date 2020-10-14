<template>
  <div class="classify clearfix">
    <el-col :span="4" class="h-txt">{{ title }}</el-col>
    <el-col :span="4">
      <span class="all" @click="change" :class="curTitle !== '全部' ? '' : 'selected'">全部</span>
    </el-col>
    <el-col :span="16" :class="borderBottom ? 'bt-b' : ''">
      <base-select
        class="base-s"
        v-for="(item, index) in classArr"
        :key="index"
        :select="item"
        :curTitle="curTitle"
        @switch-title="switchTitle"
      ></base-select>
    </el-col>
  </div>
</template>

<script>
import baseSelect from './baseSelect'

export default {
  props: {
    title: {
      type: String,
      default: '分类'
    },
    classArr: {
      type: Array,
      default () {
        return [
          {
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
          },
          {
            title: '酒店住宿',
            type: 'hotal',
            subList: [
              {
                name: '温泉酒店',
                id: 'hot_spring'
              },
              {
                name: '经济型酒店',
                id: 'economy'
              },
              {
                name: '高端酒店',
                id: 'high'
              }
            ]
          }
        ]
      }
    },
    borderBottom: Boolean
  },
  data () {
    return {
      curTitle: '全部'
    }
  },
  methods: {
    switchTitle (t) {
      this.curTitle = t
    },
    change () {
      this.curTitle = '全部'
    }
  },
  components: {
    baseSelect
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.classify {
  height: 22px;
  line-height: 22px;
  .all {
    cursor: pointer;
    padding: 2px 10px;
    border-radius: 20px;
    color: #666;
    display: inline-block;
    &.selected {
      background: #13d1be;
      color: #fff;
    }
  }
  .base-s {
    width: 120px;
    white-space: nowrap;
  }
  .el-col-16 {
    padding-bottom: 20px;
  }
  .bt-b {
    border-bottom: 1px solid #e5e5e5;
  }
}
</style>
