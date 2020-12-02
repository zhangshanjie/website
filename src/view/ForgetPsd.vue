<template>
  <div>
    <div class="login">
      <div class="forget_box">
        <div slot="header" class="clearfix">
          <span>忘记密码</span>
        </div>
        <div class="login_info">
          <el-form
            class="demo-ruleForm"
            ref="lform"
            :model="loginform"
            :rules="rules"
            label-width="80px"
          >
            <el-form-item prop="name">
              <!-- <el-input name="name" v-model="loginform.name"></el-input> -->
              <el-input
                placeholder="请输入手机号码"
                v-model="loginform.name"
                style="width: 260px; height: 38px; border-radius: 4px"
              >
                <i slot="prefix"
                  ><el-image
                    style="width: 11px; height: 18px; margin-top: 10px"
                    src="http://fishingcircles.oss-cn-beijing.aliyuncs.com/ec91321d039a4daebd75d9ed8b6e8a62.png"
                  ></el-image>
                </i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                placeholder="请输入验证码"
                style="width: 260px; height: 38px"
                v-model="input3"
              >
                <i slot="prefix">
                  <el-image
                    style="width: 16px; height: 18px; margin-top: 10px"
                    src="http://fishingcircles.oss-cn-beijing.aliyuncs.com/e155bd3084504025b787c72c055d9c8f.png"
                  ></el-image>
                </i>
                <i slot="suffix">
                  <el-button type="text" class="getQR">获取验证码</el-button>
                </i>
              </el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input
                :type="ComformViews == true ? 'password' : 'text'"
                placeholder="再次输入新密码"
                v-model="loginform.pass"
                style="width: 260px; height: 38px; border-radius: 4px"
              >
                <i slot="prefix"
                  ><el-image
                    style="width: 14px; height: 16px; margin-top: 10px"
                    src="http://fishingcircles.oss-cn-beijing.aliyuncs.com/bb837702e61c401bbf1d26cd09c42459.png"
                  ></el-image>
                </i>
                <i slot="suffix" v-if="ComformViews">
                  <el-image
                    @click.stop="openComfirmViews"
                    class="openViews"
                    style="width: 17px; height: 9px; margin-top: 10px"
                    src="http://fishingcircles.oss-cn-beijing.aliyuncs.com/4970a1c2dee446f6b509052262cc508d.png"
                  ></el-image>
                </i>
                <i slot="suffix" v-else>
                  <el-image
                    @click.stop="closeComfirmViews"
                    class="closeView"
                    style="width: 18px; margin-top: 10px"
                    src="http://fishingcircles.oss-cn-beijing.aliyuncs.com/258298badd8e4676b401fef284a62516.png"
                  ></el-image>
                </i>
              </el-input>
              <!-- 新用户去注册 -->
            </el-form-item>
            <el-form-item>
              <el-input
                :type="view == true ? 'password' : 'text'"
                placeholder="再次输入新密码"
                v-model="loginform.ComfirmPassWord"
                style="width: 260px; height: 38px; border-radius: 4px"
              >
                <i slot="prefix"
                  ><el-image
                    style="width: 14px; height: 16px; margin-top: 10px"
                    src="http://fishingcircles.oss-cn-beijing.aliyuncs.com/bb837702e61c401bbf1d26cd09c42459.png"
                  ></el-image>
                </i>
                <i slot="suffix" v-if="view">
                  <el-image
                    @click.stop="openView"
                    class="openViews"
                    style="width: 17px; height: 9px; margin-top: 10px"
                    src="http://fishingcircles.oss-cn-beijing.aliyuncs.com/4970a1c2dee446f6b509052262cc508d.png"
                  ></el-image>
                </i>
                <i slot="suffix" v-else>
                  <el-image
                    @click.stop="closeView"
                    class="closeView"
                    style="width: 18px; margin-top: 10px"
                    src="http://fishingcircles.oss-cn-beijing.aliyuncs.com/258298badd8e4676b401fef284a62516.png"
                  ></el-image>
                </i>
              </el-input>
              <div class="login_flexBox">
                <div class="forget_psd">
                  <el-button type="text" @click="goLogin" class="new_users"
                    >已记得，去登录》</el-button
                  >
                </div>
              </div>
            </el-form-item>

            <el-form-item>
              <el-image
                class="submit_login"
                src="http://fishingcircles.oss-cn-beijing.aliyuncs.com/4148d47f3a32467eb8e9be5736db1dba.png"
              ></el-image>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ForgetPassword",
  data() {
    return {
      input3: "", //
      view: true, //确定新密码明文状态
      ComformViews: true, //设置新密码明文状态
      labelPosition: "right",
      loginform: {
        name: "",
        pass: "",
        ComfirmPassWord: "",
      },
      rules: {
        name: [{ required: true, message: "请输入手机号码", trigger: "blur" }],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 5,
            max: 20,
            message: "密码长度在 5 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    //关闭确认密码明文
    closeView() {
      this.view = true;
    },
    //开启确认明文
    openView() {
      this.view = false;
    },
    //关闭设置新密码明文状态
    closeComfirmViews() {
      this.ComformViews = true;
    },
    //开启设置新密码明文状态
    openComfirmViews() {
      this.ComformViews = false;
    },
    //已记得去登录
    goLogin(){
       this.$router.push({ path: "/login" });
    },
  },
};
</script>
<style  scoped>
.getQR {
  font-size: 14px;
  font-family: Alibaba PuHuiTi;
  font-weight: 500;
  color: #6c98fe;
}
.submit_login {
  cursor: pointer;
  width: 290px;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px 0;
  width: 100%;
  height: 973px;
  background: url(http://fishingcircles.oss-cn-beijing.aliyuncs.com/651062bd3e014de78bed8116542f6f56.png)
    no-repeat center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-origin: content-box;
}
.forget_box {
  width: 710px;
  height: 510px;
  background: #ffffff;
  box-shadow: 0px 14px 28px 4px rgba(97, 139, 237, 0.18);
  border-radius: 10px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: solid 1px #f4f4f4;
}
.clearfix span {
  display: block;
  text-align: center;
  letter-spacing: 1px;
  font-size: 20px;
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  color: #333333;
}
.login_info {
  text-align: center;
  margin-left: -50px;
  margin-top: 20px;
}
.closeView {
  cursor: pointer;
}
.openViews {
  cursor: pointer;
}
.login_flexBox {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.forget_psd {
  margin-right: 210px;
}
.new_users {
  font-size: 12px;
  font-family: Alibaba PuHuiTi;
  font-weight: 500;
  color: #6c98fe;
}
</style>