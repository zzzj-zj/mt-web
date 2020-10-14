<template>
  <div class="base-item">
    <a href="javascript: void(0)">{{ item.title }}</a>
    <p>
      <span class="price">￥{{ item.price }}</span>
      <span class="counterPrice">门市价￥{{ item.counterPrice }}</span>
      <span class="saleNum">已售{{ item.saleNum }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.base-item {
  padding: 6px 10px 8px;
  cursor: pointer;
  &:hover {
    background-color: #f8f8f8;
    border-radius: 4px;
    & > a {
      color: #31bbac;
    }
  }
  a {
    font-size: 14px;
    color: #666;
  }
  p {
    font-size: 12px;
    color: #999;
    .price {
      font-size: 15px;
      color: #f60;
      margin-right: 10px;
    }
    .counterPrice {
      margin-right: 10px;
    }
  }
}
</style>
