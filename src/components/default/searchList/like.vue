<template>
  <div class="likeItem">
    <div class="text">猜你喜欢</div>
    <div class="itemList">
      <a href="#" v-for="item in meta" :key="item">
        <div>
          <img :src="item.image" alt="图片" />
        </div>
        <h3>{{item.title}}</h3>
        <p>
          <el-rate v-model="item.score" disabled show-score text-color="#ff9900" score-template></el-rate>
          <span class="s-item-comment-total">{{item.commentNum}}人评论</span>
        </p>
        <p>
          <span class="s-item-tab">
          <span v-for="(v,i) in item.tab" :key="v">{{v + (i &lt; item.tab.length - 1 ? '|' : "")}}</span>
        </span>

        </p>
        <p>
          <span class="pricetext">￥</span>
          <span class="s-item-price">{{item.avgPrice}}</span>
          <span class="pricetext">起</span>
        </p>
      </a>
    </div>
  </div>
</template>

<script>
import API from '../../../api/index'

export default {
  data () {
    return {
      meta: []
    }
  },
  created () {
    API.goodList().then(res => {
      this.meta = res.data.data
    })
  }
}
</script>

<style lang="scss">
.likeItem {
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
    padding: 16px 20px 0;
    width: 230px;
  box-sizing: border-box;
  .text {
    font-size: 16px;
    color: #333333;
    line-height: 22px;
    font-weight: 500;
    margin:0 0 12px;
  }
  .itemList {
    a {
      text-decoration: none;
      font-size: 12px;
      color: #999;
      img {
        width: 190px;
        height: 106px;
      }
      h3 {
        font-weight: 500;
        font-size: 16px;
        color: #333;
      }
      .el-rate {
        display: inline-block;
      }
      .pricetext {
        color: #f60;
      }
      .s-item-price {
        font-size: 18px;
        color: #f60;
      }
      .s-item-comment-total {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
