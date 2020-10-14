<template>
  <div class="item">
    <el-col :span="8">
      <img :src="item.image">
    </el-col>

    <el-col :span="15">
      <el-row class="el-row-one">
        <p class="h-txt">{{ item.title }}</p>
        <p class="score">
          <el-rate v-model="item.score" disabled show-score text-color="#ff9900" score-template></el-rate>

          <span>{{ item.score >= 4.5 ? '很好' : item.score >= 4 ? '好' : item.score >= 3.5 ? '不错' : '差' }}</span>
          <span>{{ item.score }}分</span>
          <span>{{ item.commentNum }}人评论</span>
        </p>
        <p class="address">
          <span
            v-for="(_item, index) in item.tab"
            :key="index"
          >{{ _item }}{{ (item.tab.length - 1 > index) ? '|' : '' }}</span>
          <span class="addr">{{ item.address }}</span>
          <a href="javascript: viod(0)">
            <span class="el-icon-location"></span>
            查看地图
          </a>
        </p>
        <p class="avgPrice">人均￥{{ item.avgPrice }}</p>
      </el-row>

      <el-row class="el-row-two">
        <base-item
          class="item"
          v-for="(__item, __index) in item.dealItems.slice(0, 2)"
          :key="__index"
          :item="__item"
        ></base-item>
        <div class="more-youhui" v-if="item.dealItems.length > 2">
          <a href="javascript: void(0)" @click="showMore = true" v-if="!showMore">
            更多{{ item.dealItems.length - 2 }}个优惠
            <span class="el-icon-arrow-down"></span>
          </a>
          <template v-if="showMore">
            <base-item
              class="item"
              v-for="(___item, ___index) in item.dealItems.slice(2)"
              :key="___index"
              :item="___item"
            ></base-item>
          </template>
          <a href="javascript: void(0)" @click="showMore = false" v-if="showMore">
            收起
            <span class="el-icon-arrow-up"></span>
          </a>
        </div>
      </el-row>
    </el-col>
  </div>
</template>

<script>
import baseItem from './baseItem'

export default {
  props: ['item'],
  data () {
    return {
      fullNum: 5,
      halfNum: 0,
      noneNum: 0,
      showMore: false
    }
  },
  components: {
    baseItem
  },
  created () {
    const score = this.item.score
    this.fullNum = Math.round(score)
    this.halfNum = Math.ceil(score - this.fullNum)
    this.noneNum = 5 - this.fullNum - this.halfNum
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.item {
  color: #666;
  .el-col-8 {
    margin-right: 20px;
    img {
      width: 100%;
      height: 150px;
    }
  }
  .el-col-15 {
    font-size: 12px;
    .el-row-one {
      border-bottom: 1px dashed #e5e5e5;
      > * {
        padding: 2px 0;
      }
      .h-txt {
        font-weight: 500;
        font-size: 16px;
        color: #333;
        display: block;
      }
      .score {
        * {
          margin-right: 5px;
        }
      }
      .address {
        > .addr {
          white-space: nowrap;
          margin-right: 30px;
        }
        > a {
          color: #31bbac;
        }
      }
      .avgPrice {
        padding-bottom: 8px;
      }
    }
    .el-row-two {
      padding-top: 10px;
      .item {
        margin-left: -10px;
      }
    }
  }
}
</style>
