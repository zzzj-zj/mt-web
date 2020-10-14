<template>
  <div class="page-login">
    <div class="login-header">
      <a class="logo" href="http://www.meituan.com"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        >
      </div>
      <div class="form">
        <h4 v-if="error" class="tips">{{error}}</h4>
        <p>
          <span class="login-text">账号登录</span>
        </p>
        <el-input
          :class="{error: error && !userName}"
          v-model="userName"
          placeholder="手机号/用户名/邮箱"
          prefix-icon="profile"
        ></el-input>
        <el-input
          :class="{error: error && !password}"
          v-model="password"
          type="password"
          placeholder="密码"
          prefix-icon="password"
        ></el-input>
        <div class="foot">
          <a href="#">忘记密码?</a>
        </div>
        <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
        <p class="reg">
          <span>还没有账号？</span>
          <router-link :to="{name: 'register'}">免费注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <a
              class="oauth__link oauth__link--qq"
              href="/account/connect/tencent"
              data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}"
              target="_blank"
            ></a>
            <a
              class="oauth__link oauth__link--weibo"
              href="/account/connect/sina"
              data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li>
          <a href="#">关于美团</a>
        </li>
        <li>
          <a href>加入我们</a>
        </li>
        <li>
          <a href>商家入驻</a>
        </li>
        <li>
          <a href>帮助中心</a>
        </li>
        <li>
          <a href>美团手机版</a>
        </li>
      </ul>
      <p>©2018 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
import API from '../../api/index'

export default {
  data () {
    return {
      userName: '',
      password: '',
      error: ''
    }
  },
  methods: {
    submit () {
      if (!this.userName) {
        return (this.error = '用户名不能为空')
      }
      if (!this.password) {
        return (this.error = '密码不能为空')
      }
      API.login({
        userName: this.userName,
        password: this.password
      }).then(res => {
        res && alert(res.data.msg)
        if (res && res.data.status === 'success') {
          this.$router.push({
            name: 'index',
            params: {
              user: res.data.data
            }
          })
        }
      })
    }
  }
}
</script>

<style>
body {
  background: #fff !important;
}
</style>

<style lang='scss' rel='stylesheet/scss' scoped>
.page-login {
  a {
    color: #2bb8aa;
  }
  .login-header {
    position: relative;
    width: 980px;
    height: auto;
    margin: 40px auto 30px;
    .logo {
      background: url(http://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png) no-repeat;
      background-position: 0 !important;
      background-size: contain !important;
      width: 82px;
      height: 54px;
      display: block;
    }
  }
  .login-panel {
    margin: 0 auto 70px;
    width: 980px;
    display: flex;
    .banner {
      margin-right: 115px;
    }
    .form {
      display: flex;
      flex-direction: column;
      width: 270px;

      .tips {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #f5d8a7;
        border-radius: 2px;
        background: #fff6db;
        font-size: 12px;
        padding-left: 26px;
        > i {
          position: relative;
          &:after {
            position: absolute;
            display: inline-block;
            width: 17px;
            height: 17px;
            font-family: iconfont;
            font-style: normal;
            content: "\e64d";
            font-size: 28px;
            top: -9px;
            left: -24px;
          }
        }
      }
      p{
        .login-text{
          font-size: 20px;
        }
      }
      em {
        font-style: normal;
        float: right;
      }
      .reg {
        padding-top: 10px;
        font-size: 14px;
        a {
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .oauth-wrapper {
        margin-top: 20px;
        .title-wrapper {
          position: relative;
          margin-bottom: 30px;
          border-bottom: 1px solid #ccc;
          width: 100%;
          height: 0;
          overflow: visible;
          .title {
            position: absolute;
            top: -10px;
            left: 50%;
            margin-left: -75px;
            width: 150px;
            text-align: center;
            font-size: 14px;
            font-weight: 400;
            color: #666;
            background: #fff;
          }
        }
        .oauth {
          padding-left: 88px;
        }
        .oauth__link {
          float: left;
          margin-right: 20px;
          width: 18px;
          height: 18px;
          background-position: -1250px -491px;
          background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
        }
        .oauth__link--weibo {
          width: 18px;
          height: 18px;
          background-position: -1250px -599px;
          background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
        }
      }
    }

    .el-input {
      margin-top: 10px;
    }

    .foot {
      margin-top: 10px;
      font-size: 12px;
      a {
        float: right;
        text-decoration: none;
      }
    }
    .error {
      input {
        border-color: red;
      }
    }
    .el-input__icon {
      &.profile {
        &:after {
          font-family: iconfont;
          content: "\e627";
          font-style: normal;
          top: -1px;
          left: 5px;
          position: absolute;
        }
      }

      &.password {
        &:after {
          font-family: iconfont;
          content: "\E600";
          font-style: normal;
          top: -1px;
          left: 3px;
          position: absolute;
          font-size: 18px;
        }
      }
    }

    .btn-login {
      margin-top: 10px;
      color: #fff;
      background-color: #2db3a6;
      border: none;
      padding: 12px 15px;
    }
  }
  footer {
    width: 980px;
    margin: 0 auto 30px;
    text-align: left;
    ul {
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      padding: 12px 0;
      color: #ddd;
      li {
        display: inline-block;
        font-size: 13px;
        text-align: center;
        &:not(:last-child) {
          border-right: 1px solid #eee;
        }
        a {
          font-size: 13px;
          color: #999;
          &:hover {
            text-decoration: underline;
          }
          padding-right: 10px;
          &:not(.first) {
            padding-left: 10px;
          }
        }
      }
    }
    > p {
      margin: 10px 0;
      font-size: 13px;
      color: #999;
    }
  }
}
</style>
