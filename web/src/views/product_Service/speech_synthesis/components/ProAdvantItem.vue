<template>
	<div>
		<div class="pro_advantange">
			<div class="container">
			<div class="ptheme">
				<h3>产品优势</h3>
				<img src="../../../assets/images/theme.png" />
			</div>
			<div class="advancon">
		<div class="advanitems clearfix">
			<div class="advanitem" v-for="(avitem,index) in advcon" :key="index">
					<img :src="avitem.aimg"  class="aimg"/>
					<h3>{{avitem.title}}</h3>
					<p>{{avitem.avcon}}</p>
			</div>
		
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
				
   advcon:[
	                {	          
	                    title: "智能的文本处理能力",
	                    aimg: require("../../../assets/images/advanicon1.png"),
	                    avcon:"文本进行节奏预测和对多音字、数字和符号进行处理，让服务更强大。"
	                },
	                {
	                    title: "多领域支持",
	                     aimg: require("../../../assets/images/advanicon2.png"),
	                     avcon:"文本进行节奏预测和对多音字、数字和符号进行处理，让服务更强大。"
	                },
	                {
	                    title: "多语种、多发音人",
	                     aimg: require("../../../assets/images/advanicon3.png"),
	                     avcon:"多语种、适合不断发展的业务需求。多发音人、满足不同环境的个性化应用。"
	             
	                },
	 
	            ],
			}
		},
		methods: {

		}

	}
</script>

<style>

</style>