<template>
  <div class="base-card" :class="nopadding ? 'nopadding' : ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['nopadding']
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.base-card {
  background: #FFF;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 20px;
  &.nopadding {
    padding: 0;
  }
}
</style>
