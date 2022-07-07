<template>
  <div id="userLayout" class="user-layout-wrapper">
    <div class="container">
      <div class="top">
        <div class="desc">
          <img class="logo_login" src="@/assets/logo_login.png" alt="">
        </div>
        <div class="header">
          <a href="/">
<!--            <img src="~@/assets/logo.png" class="logo" alt="logo" />-->
            <span class="title">VUE-GIN</span>
          </a>
        </div>
      </div>

      <div class="main">
        <el-form ref="loginForm" :model="loginForm" :rules="rules" @keyup.enter.native="submitForm">
          <!--     用户名     -->
          <el-form-item prop="username">
            <el-input placeholder="请输入用户名" v-model="loginForm.username">
              <i class="el-input__icon el-icon-user" slot="suffix"></i>
            </el-input>
          </el-form-item>
          <!--     密码     -->
          <el-form-item prop="password">
            <el-input placeholder="请输入密码" v-model="loginForm.password" :type="lock === 'lock' ? 'password' : 'text'">
              <i :class="'el-input__icon el-icon-' + lock" @click="changeLock" slot="suffix"></i>
            </el-input>
          </el-form-item>
          <!--     验证码     -->
          <el-form-item style="position: relative">
            <el-input v-model="loginForm.captcha" name="logVerify" placeholder="请输入验证码" style="width: 60%"/>
            <div class="vPic">
              <img v-if="picPath" :src="picPath" @click="loginVefify" width="100%" height="100%" alt="请输入验证码"/>
            </div>
          </el-form-item>
          <!--     登录按钮    -->
          <el-form-item>
            <el-button @click="submitForm" type="primary" style="width: 100%">登 录</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="footer">
        <div class="links">
          <a href="http://doc.henrongyi.top/">
            <img src="@/assets/docs.png" class="link-icon"/>
          </a>
          <a href="https://www.yuque.com/flipped-aurora/">
            <img src="@/assets/yuque.png" class="link-icon">
          </a>
          <a href="https://github.com/flipped-aurora/gin-vue-admin">
            <img src="@/assets/github.png" class="link-icon"/>
          </a>
          <a href="https://space.bilibili.com/322210472">
            <img src="@/assets/video.png" class="link-icon"/>
          </a>
          <div class="copyright">Copyright &copy; {{ curYear }} 💖flipped-aurora</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'Login',
  data() {
    const checkIsAdmin = function (rule, value, callback) {
      if (value !== 'admin') {
        return callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    return {
      curYear: 2020,
      lock: 'lock',
      loginForm: {
        username: '',
        password: '',
        captcha: '',
        captchaId: ''
      },
      rules: {
        username: [
          //规则受排序优先影响，后面建议复杂或者需要自定义规则时使用validator
          {max: 30, message: "名称长度不能超过30位"},
          {validator: checkIsAdmin, type: 'string', required: true, trigger: 'blur'},//message: '名称必填',会覆盖new Error("请输入正确的用户名")
        ],
        password: [
          {type: 'string', required: true, message: '密码必填', trigger: 'blur'},
          {max: 30, message: "密码长度不能超过20位"},
          {
            pattern: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/,
            message: "6-20位字母、数字或者符号，且字母、数字和符号至少包含两种"
          }
        ]
      },
      logVerify: "",
      picPath: "",
    };
  },
  created() {
    //初始化页面时第一次加载验证码
    this.loginVefify()
    this.curYear = new Date().getFullYear()
  },
  methods: {
    changeLock() {
      this.lock === "lock" ? (this.lock = "unlock") : (this.lock = "lock")
    },
    loginVefify() {
      //这里应该请求后端，暂时写成静态
      this.picPath = 'data:image/png;base64,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'
      this.loginForm.captchaId = 'Z6k1huOuog4GCZjyjv27'
    },
    ...mapActions("user", ["LoginIn"]),
    async login() {
      return await this.$store.dispatch("user/LoginIn", this.loginForm)
      //return await this.LoginIn(this.loginForm);
    },
    //async-放在函数前代表异步函数, vawait 表示等一下，代码就暂停到这里，不再向下执行了，它等什么呢？等后面的promise对象执行完毕，然后拿到promise resolve 的值并进行返回，返回值拿到之后，它继续向下执行
    async submitForm() {
      this.$refs.loginForm.validate(async (v) => {
        if (v) {
          const flag = await this.login();
          if (!flag) {
            this.loginVefify();
          }
        } else {
          this.$message({
            type: "error",
            message: "请正确填写登录信息",
            showClose: true,
          });
          this.loginVefify();
          return false;
        }
      });
    },
  },

}
</script>

<style lang="scss" scoped>
  @import "@/style/login.scss";
</style>