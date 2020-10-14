<template>
  <div class="user">
    <el-row type="flex" justify="center" align="center">
      <h2>
        <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg">
      </h2>
      <h2>Hi！{{ $store.state.user ? $store.state.user : '你好' }}</h2>
      <router-link :to="{ name: 'register' }">
        <el-button round>注册</el-button>
      </router-link>
      <router-link :to="{ name: 'login' }">
        <el-button round>立即登录</el-button>
      </router-link>
    </el-row>

    <el-row type="flex" justify="center" align="center">
      <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png">
      <h2>美团APP手机版</h2>
      <p>
        <span>1元起</span>
        吃喝玩乐
      </p>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.user {
  .el-row {
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    margin-top: 10px;
    h2 {
      font-size: 16px;
      color: #222;
      font-weight: 500;
    }
    &:first-of-type {
      width: 230px;
      height: 240px;
      h2 {
        img {
          width: 55px;
          height: 55px;
          border-radius: 50%;
        }
      }
      .el-button {
        margin-top: 10px;
        width: 120px;
      }
    }

    &:last-of-type {
      width: 230px;
      height: 165px;
      img {
        width: 95px;
        height: 95px;
      }
      p {
        span {
          color: #ec5330;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
