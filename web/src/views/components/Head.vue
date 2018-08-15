<template>
	<div>
		<Header class="header">
			<div class="container">
				<Menu mode="horizontal" theme="dark" active-name="1">
					<div class="layout-logo logo"><img src="../assets/images/wlogo.png" /></div>
					<div class="layout-nav hnav">
						<ul>
							<!-- v-on:click="addClassFun(mindex)" v-bind:class='{active:mindex==current}' -->
							<li v-for="(item,mindex) in navitem" :key="mindex">
								<router-link :to="item.vrouter">{{item.tit}}</router-link>
								<div class="serviceul" v-if="item.secul">
									<div class="serviceitem" v-for="(sitem,index) in item.secul">
										<h3>{{sitem.vhtit}}</h3>
										<router-link :to="titem.trouter" v-for="(titem,index) in sitem.tul" :key="index">{{titem.tit}}</router-link>
									</div>
								</div>
							</li>

						</ul>
					</div>
					<div class="login-box">
						<div class="contros left">
							<router-link to="console_desk">控制台</router-link>
						</div>
						<div class="left">
							<div class="left" v-on:mouseover="loginmouseover()" v-on:mouseout="loginmouseout()">
								<div class="user-icon left"></div>
								<div class="text left">
									登录
									<div class="login-sub-box" v-show="isShow">
										<ul class="login-title">
											<li @click="changeLogin(0)" :class="{ on: tabCode == 'userlogin'}">用户名登录</li>
											<li @click="changeLogin(1)" :class="{ on: tabCode == 'phonelogin'}">手机号登陆</li>
										</ul>
										<div class="login-content" v-if="tabCode=='userlogin'">
											<i-form ref="formItemP" :model="formItemP" :rules="ruleValidateP">
												<form-item prop="userName">
													<i-input v-model="formItemP.userName" placeholder="请输入用户名/邮箱"></i-input>
													<span class="userIcon"></span>
												</form-item>
												<form-item prop="pwd">
													<i-input v-model="formItemP.pwd" placeholder="请输入密码" type="password"></i-input>
													<span class="pwdIcon"></span>
												</form-item>
												<div class="auto-login">
													<span class="check" @click="autoLoginFun()" :class="{'check_yes':autoLoginUser,'check_no':!autoLoginUser}"></span>自动登录
													<router-link to="forget_pwd">忘记密码？</router-link>
												</div>
												<button @click="handleSubmit('formItemP')">登录</button>
											</i-form>
										</div>
										<div class="login-content login-content-phone" v-if="tabCode=='phonelogin'">
											<i-form ref="formItemPhone" :model="formItemPhone" :rules="ruleValidatePhone">
												<form-item prop="phone">
													<i-input v-model="formItemPhone.phone" placeholder="请输入手机号"></i-input>
												</form-item>
												<form-item prop="code">
													<i-input v-model="formItemPhone.code" placeholder="请输入验证码"></i-input>
													<div class="get-code" v-show="show" @click="downTimeCode(60)">获取验证码</div>
													<div class="get-code" v-show="!show">{{countCode}} s</div>
												</form-item>
												<button @click="handleSubmit('formItemPhone')">登录</button>
											</i-form>
										</div>

									</div>
								</div>
								<div class="left"><b>|</b></div>
							</div>
							<div class="text left">
								<router-link to="regist">注册</router-link>
								<!--<router-link to="e404">注册</router-link>-->
								<!--<router-link to="login">注册</router-link>-->
							</div>
						</div>
					</div>
				</Menu>
			</div>
		</Header>
		<!-- 路由出口 -->
		<!-- 路由匹配到的组件将渲染在这里 -->
		<!--  <router-view></router-view>-->
	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {

		},
		data() {
			return {
				// 登录注册
				isShow: false, //登录弹框显示
				tabCode: "userlogin", //显示用户登录还是手机号登录
				autoLoginUser: true, //是否自动登录
				autoLoginPhone: true, //是否自动登录
				show: true, //显示获取验证码还是60s
				timer: null, //定时器
				countCode: 60, //验证码倒计时60s
				formItemP: {
					userName: "", //用户名
					pwd: "", //密码
				},
				ruleValidateP: {
					userName: [{
						required: true,
						validator: function(rule, value, callback) {
							if(value === '') {
								callback(new Error('请输入用户名'));
							} else if(!/^[0-9a-zA-Z]{4,16}$/.test(value)) {
								callback(new Error('请输入由字母，数字组成的4-16位的用户名'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}],
					pwd: [{
						required: true,
						validator: function(rule, value, callback) {
							if(value === '') {
								callback(new Error('请输入密码'));
							} else if(!/^[0-9a-zA-Z]{6,20}$/.test(value)) {
								callback(new Error('请输入由字母，数字组成的6-20位的密码'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}]
				},
				formItemPhone: {
					phone: "", //手机号
					code: "", //验证码
				},
				ruleValidatePhone: {
					phone: [{
						required: true,
						validator: function(rule, value, callback) {
							if(value === '') {
								callback(new Error('请输入手机号'));
							} else if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
								callback(new Error('请输入正确的手机号'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}],
					code: [{
						required: true,
						validator: function(rule, value, callback) {
							if(value === '') {
								callback(new Error('请输入验证码'));
							} else if(!/[0-9]{6}/.test(value)) {
								callback(new Error('请输入6位正确的验证码'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}]
				},
				//  end
				current: '-1',
				navitem: [{
						tit: '首页',
						vrouter: '/'
					},
					{
						tit: '产品服务',
						vrouter: '/speech_recognition',
						secul: [{
								vhtit: '语音识别',

								tul: [{
										tit: '语音识别',
										trouter: '/speech_recognition',
									},
									{
										tit: '语音识别',
										trouter: '/speech_recognition',
									}
								]
							},

							{
								vhtit: '语音合成',

								tul: [{
										tit: '语音合成',
										trouter: '/speech_synthesy',
									},

								]
							},
							{
								vhtit: '语音拓展',

								tul: [{
										tit: '在线实时转写',
										trouter: '/realtime_transfer',
									},
									{
										tit: '声纹识别',
										trouter: '/voiceprint_recognition',
									},
									{
										tit: '会议记录',
										trouter: '/',
									},

								]
							},
									{
								vhtit: '语音客服',

								tul: [{
										tit: '智能客服',
										trouter: '/intelligent_customer',
								     }]
							
							}
						]
					},

					{
						tit: '关于我们',
						vrouter: '/aboutus'
					},

				]
			}
		},
		methods: {
			//			addClassFun: function() {
			//				
			//				if(this.isselected) {
			//					this.isselected = false;
			//				} else {
			//					this.isselected = true;
			//				}
			//			}

			// 		登陆注册		
			loginmouseover() {
				this.isShow = true;
			},
			loginmouseout() {
				this.isShow = false;
			},
			changeLogin(index) {
				if(index == 0) {
					if(this.tabCode == 'userlogin') {
						return
					}
					this.tabCode = 'userlogin';
					this.handleReset('formItemPhone')
				} else if(index == 1) {
					this.tabCode = 'phonelogin';
					this.handleReset('formItemP')
				}
			},
			autoLoginFun() {
				this.autoLoginUser = !this.autoLoginUser;
			},
			autoLoginPhoneFun() {
				this.autoLoginPhone = !this.autoLoginPhone;
			},
			downTimeCode(timeCount) {
				if(!this.timer) {
					this.countCode = timeCount;
					this.show = false;
					this.timer = setInterval(() => {
						if(this.countCode > 0 && this.countCode <= timeCount) {
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
					if(valid) {
						this.$Message.success('成功!');
						this.$http.post('/user/login/userNameLogin', {
								userName: this.username,
								userPassword: this.password,
							})
							.then((res) => {
								if(res.code == "1001") {

								}
							})
							.catch((error) => {
								console.log(error);
							});
					} else {
						this.$Message.error('失败!');
					}
				})
			},
			handleReset(name) {
				this.$refs[name].resetFields();
			}
		}
	}
	$(function() {
		$(".header ul li").click(function() {
			alert(323);
			$(this).find("a").css("color","red");
			$(this).addClass("active").siblings("li").removeClass("active");
		});
		$(".serviceitem a").click(function() {
			$(this).parent().parent().parent().addClass("active").css("color","red");
		});

	});
</script>

<style>

</style>