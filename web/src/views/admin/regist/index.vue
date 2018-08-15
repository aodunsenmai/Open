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
        <h2>欢迎注册</h2>
        <i-form ref="formItemR" :model="formItemR" :rules="ruleValidateP">
          <div class="form-row">
            <div class="row-label">用户名</div>
            <div class="row-input">
              <form-item prop="username">
                <i-input v-model="formItemR.username" placeholder="请输入用户名"></i-input>
              </form-item>
            </div>
          </div>
          <div class="form-row">
            <div class="row-label">手机号</div>
            <div class="row-input">
              <form-item prop="phone">
                <i-input v-model="formItemR.phone" placeholder="请输入手机号"></i-input>
              </form-item>
            </div>
          </div>
          <div class="form-row">
            <div class="row-label">验证码</div>
            <div class="row-input">
              <form-item prop="code">
                <i-input v-model="formItemR.code" placeholder="请输入验证码"></i-input>
                <div class="get-code" v-show="show" @click="downTimeCode(60)">获取验证码</div>
                <div class="get-code" v-show="!show">{{countCode}} s</div>
              </form-item>
            </div>
          </div>
          <div class="form-row">
            <div class="row-label">邮箱</div>
            <div class="row-input">
              <form-item prop="email">
                <i-input v-model="formItemR.email" placeholder="请输入邮箱"></i-input>
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
          <div class="form-row">
            <div class="row-label">重复密码</div>
            <div class="row-input">
              <form-item prop="repwd">
                <i-input v-model="formItemR.repwd" placeholder="请再次输入密码" type="password"></i-input>
              </form-item>
            </div>
          </div>
          <div class="form-row read">
            <div class="row-label"></div>
            <div class="row-input"><span class="check-input"
                                         :class="{check_yes:agreeState=='0',check_no:agreeState=='1'}"
                                         @click="agreeChange()"></span><b>我已经阅读《开放平台服务协议》</b></div>
          </div>
          <div class="form-row submit-box">
            <div class="row-label"></div>
            <div class="row-input">
              <button type="button" @click="handleSubmit('formItemR')" :disabled="isDisabled"
                      :class="{on:agreeState=='1'}">
                注册
              </button>
            </div>
          </div>
        </i-form>
      </div>
      <div class="regist-result" v-show="isShow">
        <div class="regist-state regist-success" v-if="state==0">
          <img src="../../assets/images/success.png" alt="">
          <p>注册成功</p>
          <router-link to="/">
            <div class="back-to">剩余<span>{{num}}</span>秒回到主页 ››</div>
          </router-link>
        </div>
        <div class="regist-state regist-fail" v-if="state==1">
          <img src="../../assets/images/fail.png" alt="">
          <p>注册失败</p>
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
        state: 0,//注册结果状态弹窗显示成功或者失败
        isShow: false,//注册结果状态弹窗显示与否
        timer: null,//定时器
        num: 3,//倒计时3秒
        agreeState: 0,//我同意 勾选状态
        isDisabled: false,//注册按钮禁止状态
        show: true,//显示获取验证码还是 60s
        countCode: 60,//验证码倒计时60s
        formItemR: {
          username: "",//用户名
          phone: "",//手机号
          code: "",//验证码
          email: "",//邮箱
          pwd: "",//密码
          repwd: "",//重复密码
        },
        ruleValidateP: {
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
          }],
          email: [{
            required: true,
            validator: function (rule, value, callback) {
              if (value === '') {
                callback(new Error('请输入邮箱'));
              } else if (!/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(value)) {
                callback(new Error('请输入正确的邮箱'));
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
          }],
          repwd: [{
            required: true,
            validator: ((rule, value, callback) =>{
              if (value === '') {
                callback(new Error('请再次输入密码'));
              } else if ( value!==this.formItemR.pwd) {
                  console.log(this.formItemR.pwd)
                callback(new Error('两次密码输入的不一致'));
              } else {
                callback();
              }
            }),
            trigger: 'blur'
          }]
        },

      }
    },
    methods: {
      downTime(timeCount) {
        if (!this.timer) {
          this.num = timeCount;
          this.timer = setInterval(() => {
            if (this.num > 0 && this.num <= timeCount) {
              this.num--;
              if (this.num == 0) {
                this.$router.push({name: 'index'});
              }
            } else {
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
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
      agreeChange() {
        this.agreeState = !this.agreeState;
        this.isDisabled = !this.isDisabled;
      },
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$http.post('/user/login/register', {
              userName: this.username,
              phone: this.phone,
              code: this.code,
              userEmail: this.email,
              userPassword: this.password,
            })
              .then((res) => {
                if (res.code == "1001") {
                  this.isShow = true;
                  this.state = 0;//成功注册框显示
                  this.downTime(3);
                }
                console.log(res);
              })
              .catch((error) => {
                this.isShow = true;
                this.state = 1;//失败注册框显示
                console.log(error);
              });
          } else {

          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    },
    beforeDestory() {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
  }
</script>
