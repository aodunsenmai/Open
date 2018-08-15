<template>
	<div>
		<div class="honor">
			<div class="ctainer">
		<div class="honor_items">
		<div class="honor_item" v-for="(item,index)  in  honors" :key="index">
			<a>
			<div class="hoimg">
			<img  :src="item.himg"/>
			</div>
		<p>{{item.title}}</p>
		</a>
		</div>
		</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {

		},
		data() {
			return {
  honors:[
  {
  	title: "软件企业认定证书",
	himg: require("../../assets/images/honor2.jpg"),	
  }, 
  {
  	title: "高新技术企业证书",
	himg: require("../../assets/images/honor3.jpg"),	
  },
   {
  	title: "北京科学技术进步奖",
	himg: require("../../assets/images/honor4.jpg"),	
  },
    {
  	title: "北京重点实验室证明",
	himg: require("../../assets/images/honor5.jpg"),	
  },
     {
  	title: "第一届特定音视频分析系统评测资格大赛",
	himg: require("../../assets/images/honor6.jpg"),	
  },
      {
  	title: "第一季网络技术邀请赛",
	himg: require("../../assets/images/honor7.jpg"),	
  },
       {
  	title: "广电2012年度科技创新奖",
	himg: require("../../assets/images/honor8.jpg"),	
  },
         {
  	title: "科学技术进步奖二",
	himg: require("../../assets/images/honor9.jpg"),	
  },
        
  ]
			}
		},
		methods: {

		}

	}
</script>

<style>

</style>