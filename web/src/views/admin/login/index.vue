<template>
  <div>
    <div class="regist-header">
      <div class="regist-header-sub">
        <div class="layout-logo logo"><img src="../../assets/images/logo.png"/></div>
        <div class="back-to-index">
          <router-link to="/">回到主页></router-link>
        </div>
      </div>
    </div>
    <div class="regist-body">
      <div class="regist-box">
        <h2>登录</h2>
        <ul class="login-title">
          <li @click="changeLogin(0)" :class="{ on: state == '0'}">用户名登录</li>
          <li @click="changeLogin(1)" :class="{ on: state == '1'}">手机号登陆</li>
        </ul>
        <div v-if="state==0">
          <i-form ref="formItemR" :model="formItemR" :rules="ruleValidateR">
            <div class="form-row">
              <div class="row-label">用户名</div>
              <div class="row-input">
                <form-item prop="username">
                  <i-input v-model="formItemR.username" placeholder="请输入用户名"></i-input>
                </form-item>
              </div>
            </div>
            <div class="form-row">
              <div class="row-label">密码</div>
              <div class="row-input">
                <form-item prop="pwd">
                  <i-input v-model="formItemR.pwd" placeholder="请输入密码" type="password"></i-input>
                </form-item>
              </div>
            </div>
          <div class="form-row auto-login">
            <div class="row-label"></div>
            <div class="row-input">
              <span class="check-input" @click="autoLoginFun()" :class="{'check_yes':autoLoginUser,'check_no':!autoLoginUser}"></span>自动登录
              <router-link to="forget_pwd" class="right">忘记密码？</router-link>
            </div>
          </div>
          <div class="form-row submit-box">
            <div class="row-label"></div>
            <div class="row-input">
              <button type="button" @click="handleSubmit('formItemR')">登录</button>
            </div>
          </div>
         </i-form>
        </div>
        <div v-if="state==1">
          <i-form ref="formItemP" :model="formItemP" :rules="ruleValidateP">
            <div class="form-row">
              <div class="row-label">手机号</div>
              <div class="row-input">
                <form-item prop="phone">
                  <i-input v-model="formItemP.phone" placeholder="请输入手机号"></i-input>
                </form-item>
              </div>
            </div>
            <div class="form-row">
              <div class="row-label">验证码</div>
              <div class="row-input">
                <form-item prop="code">
                  <i-input v-model="formItemP.code" placeholder="请输入验证码"></i-input>
                  <div class="get-code" v-show="show" @click="downTimeCode(60)">获取验证码</div>
                  <div class="get-code" v-show="!show">{{countCode}} s</div>
                </form-item>
              </div>
            </div>
          <div class="form-row submit-box">
            <div class="row-label"></div>
            <div class="row-input">
              <button type="button" @click="handleSubmit('formItemP')">登录</button>
            </div>
          </div>
          </i-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  
</style>

<script>
  export default{
    data () {
      return {
        state: 0,
        isShow: false,
        timer: null,//定时器
        show: true,//显示获取验证码还是 60s
        countCode: 60,//验证码倒计时60s
        autoLoginUser:true,
        formItemR: {
          username: "",//用户名
          pwd: "",//密码
        },
        formItemP: {
          phone: "",//手机号
          code: "",//验证码
        },
        ruleValidateR: {
          username: [{
            required: true,
            validator: function (rule, value, callback) {
              if (value === '') {
                callback(new Error('请输入用户名'));
              } else if (!/^[0-9a-zA-Z]{4,16}$/.test(value)) {
                callback(new Error('请输入由字母，数字组成的4-16位的用户名'));
              } else {
                callback();
              }
            },
            trigger: 'blur'
          }],
          pwd: [{
            required: true,
            validator: function (rule, value, callback) {
              if (value === '') {
                callback(new Error('请输入密码'));
              } else if (!/^[0-9a-zA-Z]{6,20}$/.test(value)) {
                callback(new Error('请输入由字母，数字组成的6-20位的密码'));
              } else {
                callback();
              }
            },
            trigger: 'blur'
          }]
        },
        ruleValidateP: {
          phone: [{
            required: true,
            validator: function (rule, value, callback) {
              if (value === '') {
                callback(new Error('请输入手机号'));
              } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
                callback(new Error('请输入正确的手机号'));
              } else {
                callback();
              }
            },
            trigger: 'blur'
          }],
          code: [{
            required: true,
            validator: function (rule, value, callback) {
              if (value === '') {
                callback(new Error('请输入验证码'));
              } else if (!/[0-9]{6}/.test(value)) {
                callback(new Error('请输入6位正确的验证码'));
              } else {
                callback();
              }
            },
            trigger: 'blur'
          }]
        },
      }
    },
    methods: {
      changeLogin:function(index){
        this.state=index;
        if(index==0){
          this.handleReset('formItemP')
        }else if(index==1){
          this.handleReset('formItemR')
        }
      },
      downTimeCode (timeCount) {
        if (!this.timer) {
          this.countCode = timeCount;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.countCode > 0 && this.countCode <= timeCount) {
              this.countCode--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      },
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$http.post('/user/login', {

            })
              .then((res) => {
                if (res.code == "1001") {

                }
                console.log(res);
              })
              .catch((error) => {

              });
          } else {

          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      },
      autoLoginFun() {
        this.autoLoginUser = !this.autoLoginUser;
      },
    },
    beforeDestory() {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
  }
</script>

