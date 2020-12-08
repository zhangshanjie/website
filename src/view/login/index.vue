<template>
  <div class="login">
    <div class="login_bg">
      <div slot="header" class="clearfix">
        <p>渔界竞钓官网登录</p>
        <p>FISHING COMPETITION OFFICIAL WEBSITE LOGIN</p>
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
          <el-form-item prop="pass">
            <el-input
             :type="view == true ? 'password' : 'text'"
              placeholder="请输入密码"
              v-model="loginform.password"
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
            <!-- 新用户去注册 -->
            <div class="login_flexBox">
              <div>
                <el-button type="text" class="new_users" @click="goEnroll"
                  >新用户去注册&gt;</el-button
                >
              </div>
              <div class="forget_psd">
                <el-button type="text" @click="forget" class="new_users">忘记密码?</el-button>
              </div>
            </div>
          </el-form-item>

          <!-- <el-form-item style="margin-top:-15px">
             <el-button  style="width:260px">登 录</el-button>
          </el-form-item> -->
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
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      view:true,
      labelPosition: "right",
      loginform: {
        name: "",
        pass: "",
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
    login() {
      this.$refs.lform.validate((valid) => {
        if (valid) {
          let obj = {
            phone: this.loginform.name,
            passWord: this.loginform.pass,
            type: 0,
          };
          this.$http("/angleGame/login", obj).then((res) => {
            if (res.success) {
              this.$message({
                message: "登录成功",
                type: "success",
              });
              console.log(res.result.accessToken, "+++++++++");
              sessionStorage.setItem("token", res.result.accessToken);
              this.getUserInfo();

              this.$router.push({ path: "/" });

              // this.$router.push({ name: "admin" });
            } else {
              this.$message({
                message: "账号或密码错误",
                type: "error",
              });
            }
          });
          // .catch((e) => {
          //   this.$message({
          //     message: "网络或程序异常！" + e,
          //     type: "error",
          //   });
          // });
        } else {
          this.$message({
            message: "请输入合法的值",
            type: "error",
          });
          return false;
        }
      });
    },
    getUserInfo() {
      console.log("11111111111");
      let obj = {};
      this.$http("/angleGame/queryUserInfo", obj).then((res) => {
        if (res.success) {
          console.log(res, "----------");
          sessionStorage.setItem("userId", res.result.id);
        }
      });
    },
    //忘记密码
    forget(){
        this.$router.push({ path: "/ForgetPsd" });
    },
     //关闭密码明文
    closeView() {
      this.view = true;
    },
    //开启确认明文
    openView() {
      this.view = false;
    },
    //去注册
    goEnroll(){
       this.$router.push({ path: "/Enroll" });
    },
  },
  mounted() {},
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #409eff;
}

.login {
  display: flex;
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
.login_bg {
  position: relative;
  width: 60%;
  height: 500px;
  margin: 0 auto;
  background: url(http://fishingcircles.oss-cn-beijing.aliyuncs.com/83ef89f72d324d809ace22803ad96f02.png)
    no-repeat center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-origin: content-box;
}
.clearfix {
  position: absolute;
  top: 13%;
  bottom: 0;
  right: 0;
  left: 48%;
}
.login_info {
  position: absolute;
  top: 25%;
  bottom: 0;
  right: 0;
  left: 38%;
}
.clearfix p:nth-child(1) {
  font-size: 24px;
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  color: #333333;
  line-height: 16px;
}
.clearfix P:nth-child(2) {
  margin-left: -40px;
  font-size: 12px;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: #666666;
  line-height: 30px;
}
.new_users {
  font-size: 12px;
  font-family: Alibaba PuHuiTi;
  font-weight: 500;
  color: #6c98fe;
}
.login_flexBox {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.forget_psd {
  margin-left: 120px;
}
.submit_login{
  position: absolute;
  right: 51%;
  width: 290px;
  cursor: pointer;


}
</style>