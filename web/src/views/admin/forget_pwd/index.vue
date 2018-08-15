<template>
  <div>
    <div class="common-header">
      <div class="common-header-sub">
    <!--     <div class="layout-logo logo"><img src="../../assets/images/logo.png"/></div> -->
        <div class="back-to-index">
          <router-link to="/">回到主页></router-link>
        </div>
      </div>
    </div>
    <div class="common-body">
      <div class="common-box">
        <h2>忘记密码</h2>
        <ul class="axis">
          <li class="on">
            <div><span>1</span></div>
            <p>验证</p>
          </li>
          <li :class="{on:tabCode>='1'}">
            <div><span>2</span></div>
            <p>重置密码</p>
          </li>
          <li :class="{on:tabCode=='2'}">
            <div><span>3</span></div>
            <p>完成</p>
          </li>
        </ul>
        <div class="forget-box" v-if="tabCode==0">
          <i-form ref="formItemF1" :model="formItemF1" :rules="ruleValidateF1">
            <div class="form-row">
              <div class="row-label">手机号</div>
              <div class="row-input">
                <form-item prop="phone">
                  <i-input v-model="formItemF1.phone" placeholder="请输入手机号"></i-input>
                </form-item>
              </div>
            </div>
            <div class="form-row">
              <div class="row-label">验证码</div>
              <div class="row-input">
                <form-item prop="code">
                  <i-input v-model="formItemF1.code" placeholder="请输入验证码"></i-input>
                  <div class="get-code" v-show="show" @click="downTimeCode(60)">获取验证码</div>
                  <div class="get-code" v-show="!show">{{countCode}} s</div>
                </form-item>
              </div>
            </div>
            <div class="form-row next-box">
              <div class="row-label"></div>
              <div class="row-input">
                <button type="button" @click="changeNext()">下一步</button>
              </div>
            </div>
          </i-form>
        </div>
        <div class="forget-box" v-if="tabCode==1">
          <i-form ref="formItemF2" :model="formItemF2" :rules="ruleValidateF2">
          <div class="form-row">
            <div class="row-label">新密码</div>
            <div class="row-input">
              <form-item prop="pwd">
                <i-input v-model="formItemF2.pwd" placeholder="请输入新密码" type="password"></i-input>
              </form-item>
            </div>
          </div>
          <div class="form-row">
            <div class="row-label">重复新密码</div>
            <div class="row-input">
              <form-item prop="repwd">
                <i-input v-model="formItemF2.repwd" placeholder="请再次输入新密码" type="password"></i-input>
              </form-item>
            </div>
          </div>
          <div class="form-row next-box">
            <div class="row-label"></div>
            <div class="row-input">
              <button type="button" @click="changeNext()">下一步</button>
            </div>
          </div>
          </i-form>
        </div>
        <div class="forget-box final" v-if="tabCode==2">
          <img src="../../assets/images/forget_success.png" alt="" class="forget-success">
          <div class="row-input">
            <router-link to="/">
              <button type="button">确定</button>
            </router-link>
          </div>
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
        tabCode: 0,
        show: true,//显示获取验证码还是 60s
        countCode: 60,//验证码倒计时60s
        timer: null,//定时器
        formItemF1: {
          phone: "",//手机号
          code: "",//验证码
        },
        formItemF2: {
          pwd: "",//密码
          repwd: "",//重复密码
        },
        ruleValidateF1: {
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
        },
        ruleValidateF2: {
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
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'));
              } else if (value !== this.formItemF2.pwd) {
                callback(new Error('两次密码输入的不一致'));
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
      changeNext () {
        if(this.tabCode==0){
            this.handleSubmit('formItemF1')
        }else if(this.tabCode==1){
          this.handleSubmit('formItemF2')
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
            this.tabCode++
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

