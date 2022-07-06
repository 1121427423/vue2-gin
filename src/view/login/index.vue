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
        <el-form>
          <!--     用户名     -->
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
          <!--     密码     -->
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
          <!--     验证码     -->
          <el-form-item style="position: relative">
            <el-input name="logVerify" placeholder="请输入验证码" style="width: 60%"/>
            <div class="vPic">
              <img width="100%" height="100%" alt="请输入验证码"/>
            </div>
          </el-form-item>
          <!--     登录按钮    -->
          <el-form-item>
            <el-button type="primary" style="width: 100%">登 录</el-button>
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

</script>

<style lang="scss" scoped>
  @import "@/style/login.scss";
</style>