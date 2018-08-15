import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'; // 导入组件库
import Vuex from 'vuex'
Vue.use(Router)
Vue.use(Vuex)
Vue.use(iView);
import 'iview/dist/styles/iview.css';
import '../views/assets/css/style.css';
export default new Router({
	routes: [{
			path: '/',
			name: 'index',
			component: (resolve) => require(['@/views/Index.vue'], resolve)
		},
		{
			path: '/intelligent_customer',
			name: 'intelligent_customer',
			component: (resolve) => require(['@/views/product_Service/intgent_Customer/Index.vue'], resolve)
		},
		{
			path: '/voiceprint_recognition',
			name: 'voiceprint_recognition',
			component: (resolve) => require(['@/views/product_Service/voiceprint_recognition/Index.vue'], resolve)
		},
		{
			path: '/speech_synthesy',
			name: 'speech_synthesy',
			component: (resolve) => require(['@/views/product_Service/speech_synthesis/Index.vue'], resolve)
		},
		{
			path: '/speech_recognition',
			name: 'speech_recognition',
			component: (resolve) => require(['@/views/product_Service/speech_recognition/Index.vue'], resolve)

		},
		{
			path: '/realtime_transfer',
			name: 'realtime_transfer',
			component: (resolve) => require(['@/views/product_Service/realtime_transfer/Index.vue'], resolve)

		},
		{
			path: '/custom_scheme',
			name: 'custom_scheme',
			component: (resolve) => require(['@/views/product_Service/custom_scheme/Index.vue'], resolve)
		},
		{
			path: '/aboutus',
			name: 'aboutus',
			component: (resolve) => require(['@/views/aboutUs/Index.vue'], resolve)
		},

		{
			path: '/comprofileitem',
			name: 'comprofileitem',
			component: (resolve) => require(['@/views/aboutUs/components/HonorItem.vue'], resolve)
		},

		// 控制台
		{
			path: '/console_desk',
			name: 'console_desk',
			component: (resolve) => require(['@/views/admin/console_desk/Index.vue'], resolve)
		},
		{
			path: '/regist',
			name: 'regist',
			component: (resolve) => require(['@/views/admin/regist/Index.vue'], resolve)
		},
		{
			path: '/forget_pwd',
			name: 'forget_pwd',
			component: (resolve) => require(['@/views/admin/forget_pwd/Index.vue'], resolve)
		},
		{
			path: '/login',
			name: 'login',
			component: (resolve) => require(['@/views/admin/login/Index.vue'], resolve)
		},
		{
			path: '/e404',
			name: 'e404',
			component: (resolve) => require(['@/views/admin/error/404.vue'], resolve)
		},
		{
			path: '/e500',
			name: 'e500',
			component: (resolve) => require(['@/views/admin/error/500.vue'], resolve)
		}
	]
})