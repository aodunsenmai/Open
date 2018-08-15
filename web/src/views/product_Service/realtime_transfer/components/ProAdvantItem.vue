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
	                    title: "高效",
	                    aimg: require("../../../assets/images/advanicon8.png"),
	                    avcon:"实时转写，高效记录"
	                },
	                {
	                    title: "识别率高",
	                     aimg: require("../../../assets/images/advanicon9.png"),
	                     avcon:"智能理解语义，智能断句，从而提供极高的语音识别率。"
	                },
	                {
	                    title: "准确率高",
	                     aimg: require("../../../assets/images/advanicon10.png"),
	                     avcon:"无噪音环境下，准确率高达95%"	             
	                }
	         
	 
	            ],
			}
		},
		methods: {

		}

	}
</script>

<style>

</style>