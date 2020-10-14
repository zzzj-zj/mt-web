<template>
  <div class="register">
    <div class="header">
      <div class="wrapper cf clearfix">
        <a class="site-logo" href="http://www.meituan.com"></a>
        <div class="login-block">
          <span class="tip">已有美团账号？</span>
          <a
            class="btn btn-small login"
            href="/account/unitivelogin?service=www&amp;continue=http%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken"
          >登录</a>
        </div>
      </div>
    </div>
    <el-form
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="user">
        <el-input type="text" v-model="ruleForm2.user" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
        <div class="pw-strength">
          <div
            class="bar"
            :class="ruleForm2.pass && ruleForm2.pass.length < 7 ? 'week' : ruleForm2.pass && ruleForm2.pass.length < 13 ? 'normal' : ruleForm2.pass && 'strong'"
          ></div>
          <div class="letter clearfix">
            <span>弱</span>
            <span>中</span>
            <span>强</span>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>

    <footer class="footer--mini">
      <p class="copyright">
        ©
        <a class="f1" href="https://www.meituan.com">meituan.com</a>&nbsp;
        <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/">京ICP证070791号</a>&nbsp;
        <span class="f1">京公网安备11010502025545号</span>
      </p>
    </footer>
  </div>
</template>

<script>
import API from '../../api/index'

export default {
  data () {
    var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        user: ''
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        user: [{ validator: checkUser, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const {
            user: userName,
            pass: password,
            checkPass: rePassword
          } = this.ruleForm2
          API.register({
            userName,
            password,
            rePassword
          }).then(res => {
            res && alert(res.data.msg)
          })
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
body {
  background-color: #fff;
}
</style>

<style lang="scss" scoped>
.register {
  .header {
    margin-bottom: 50px;
    border-bottom: 2px solid #2bb8aa;
    .wrapper {
      margin: 0 auto;
      padding: 10px 0;
      width: 980px;
      .site-logo {
        display: block;
        float: left;
        color: #2bb8aa;
        width: 128px;
        width: 54px;
        height: 36px;
        background-position: -669px -748px;
        background-image: url("https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png");
      }
      .login-block {
        float: right;
        line-height: 36px;
        .login {
          padding: 3px 10px;
          font-size: 12px;
          background-color: #2db3a6;
          background-image: linear-gradient(to bottom, #2ec3b4, #2db3a6);
          font-weight: 400;
          display: inline-block;
          vertical-align: middle;
          line-height: 1.5;
          letter-spacing: 0.1em;
          text-align: center;
          text-decoration: none;
          border-width: 0 0 1px;
          border-style: solid;
          background-repeat: repeat-x;
          border-radius: 2px;
          user-select: none;
          cursor: pointer;
          border-color: #008177;
          color: #fff;
        }
      }
    }
  }

  .el-input {
    width: 260px;
    box-sizing: border-box;
  }

  .pw-strength {
    width: 261px;
    height: 20px;
    background-color: #eee;
    position: relative;
    margin: 5px 0;
    .bar {
      height: 100%;
      width: 0;
      transition: all 0.4s linear;
      &.week {
        width: 85px;
        background: #f76120;
      }
      &.normal {
        width: 172px;
        background: #ff8900;
      }
      &.strong {
        width: 260px;
        background: #5bab3c;
      }
    }
    .letter {
      width: 100%;
      height: 20px;
      position: absolute;
      left: 0;
      top: 0;
      span {
        display: block;
        float: left;
        text-align: center;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        width: 85px;
        border-right: 2px solid #fff;
        color: #fff;
      }
    }
  }

  .footer--mini {
    margin-top: 50px;
    color: #666;
    border-top: 1px solid #eee;
    padding-top: 20px;
    text-align: center;
  }
}
</style>
