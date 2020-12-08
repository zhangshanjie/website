<template>
  <div id="over">
    <!--背景-->
      <div>
          <img class="backdrop" src="../../assets/img/enroll/bj.png" alt="">
      </div>
      <!---->
      <div class="setting">
        <!--top-->
        <div class="headline">
          <img class="backIcon" src="../../assets/img/enroll/backIcon.png" alt="">
          <span class="titles">渔界竞钓官网注册</span>
        </div>
        <el-divider></el-divider>
        <!--cont-->
        <div class="cont">
          <input class="field" type="text" placeholder="请输入手机号" maxlength="11">
          <input class="authCode" type="text" placeholder="请输入验证码">
          <p>获取验证码</p>
          <input type="text" placeholder="请设置密码" class="pass" v-model="psd" v-if="ifDisplay">
          <input type="password" placeholder="请设置密码" class="pass" v-model="psd" v-else>
          <i v-show="psd" @click="clearPassword()"></i>
          <img class="check checks" v-show="!ifDisplay" @click="ifDisplay=!ifDisplay" src="../../assets/img/enroll/check.png" alt="">
          <img class="check" v-show="ifDisplay" @click="ifDisplay=!ifDisplay" src="../../assets/img/enroll/invisible.png" alt="">
          <div class="loging" @click="logings">已注册，去登陆</div>
          <img class="into" @click="logings" src="../../assets/img/enroll/into.png" alt="">
        </div>
        <!--bottom-->
        <div><img class="landing" src="../../assets/img/enroll/landing.png" alt=""></div>
      </div>
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
export default {
    data(){
        return{
          //密码可视
          psd:'',
          ifDisplay:false,
        }
    },
    methods:{
      // 显示密码
      clearPassword(){
          this.psd='';
      },
      logings(){
        this.$router.push({ path: "/login" });
      }
    
    }
}
</script>

<style scoped>
/*背景 */
  .backdrop{
    width: 100%;
    height: 1080px;
  }
  .setting{
    position: absolute;
    background-color: #fff;
    width: 710px; height: 510px;
    top: 25%;
    bottom: 0;
    left: 32%;
    right: 0;
    border-radius: 18px;
    box-shadow: 1px 1px 14px 32px  rgba(0,0,0,0.04);
  }
  /** */
  /**headline */
  .headline{
    padding-top: 31px;
  }
  /**backIcon */
  .backIcon{
    margin-left: 33px;
    display: inline;
  }
  /**titles */
  .titles{
    color: #333;
    font-size: 24px;
    font-weight: bold;
    margin-left: 230px;
  }
  /** */
  /**cont */
  /**输入框 手机号 */
  .field{
    width: 267px; height: 40px;
    border-radius: 4px;
    border: 1px solid #EBEBEB;
    background-image: url('../..//assets/img/enroll/phoneIcon.png');
    background-repeat:no-repeat ;
    background-position: 10px 10px;
    margin-top: 6%;
    margin-left: 31%;
    padding-left: 36px;
  }
  input::-webkit-input-placeholder{
      color:#D4D4D4;
      font-size: 14px;
  }
  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
      color:#D4D4D4;
      font-size: 14px;
  }
  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
      color:#D4D4D4;
      font-size: 14px;
  }
  input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
      color:#D4D4D4;
      font-size: 14px;
  }
  /**验证码 */
  .authCode{
    width: 267px; height: 40px;
    border-radius: 4px;
    border: 1px solid #EBEBEB;
    background-image: url('../..//assets/img/enroll/authCode.png');
    background-repeat:no-repeat ;
    background-position: 10px 10px;
    margin-top: 2%;
    margin-left: 31%;
    padding-left: 36px;
  }
  .cont> p{
    color: #6C98FE;
    font-size: 14px;
    margin-top: -29px;
    margin-left: 57%;
  }
  .cont> p:hover{
    cursor: pointer;
  }
  /**密码 */
  .pass{
    width: 267px; height: 40px;
    border-radius: 4px;
    border: 1px solid #EBEBEB;
    background-image: url('../..//assets/img/enroll/password.png');
    background-repeat:no-repeat ;
    background-position: 10px 10px;
    margin-top: 2%;
    margin-left: 31%;
    padding-left: 36px;
  }
  .check{
    position: absolute;
    top: 55%;
    bottom: 0;
    left: 65%;
    right: 0;
  }
  .check:hover{
    cursor: pointer;
  }
  .checks{
    position: absolute;
    top: 54.5%;
    width:18px;
  }
  /**登陆 */
  .loging{
    display: inline;
    color: #6C98FE;
    font-size: 10px;
    float: right;
    margin: 12px 244px;
  }
  .loging, .into:hover{
    cursor: pointer;
  }
  .into{
    float: right;
    margin: -25px 230px;
  }
  /**注册 */
  .landing{
    margin: auto  !important;
  }

</style>