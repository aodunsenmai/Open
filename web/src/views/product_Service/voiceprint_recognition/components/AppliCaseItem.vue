<template>
	<div>
		<div class="cpartner">
			<div class="ptheme">
				<h3>应用案例</h3>
				<img src="../../../assets/images/theme.png" />
			</div>
			<div class="container">
				<div class="partnercon">
					<ul class="clearfix">
						<li v-for="(item,index) in partners" :key="index">
							<img :src="item.img" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'App',
		components: {},
		data() {
			return {
				partners: [{
						img: require("../../../assets/images/jiaotong.jpg")
					},
					{
						img: require("../../../assets/images/jiaotong.jpg")
					},

					{
						img: require("../../../assets/images/sanxing.jpg")
					},
					{
						img: require("../../../assets/images/lianxiang.jpg")

					},
					{
						img: require("../../../assets/images/dianxin.jpg")
					},

					{
						img: require("../../../assets/images/nuoyazhou.jpg")
					},
					{
						img: require("../../../assets/images/weiruan.jpg")

					},
					{
						img: require("../../../assets/images/huaxia.jpg")

					},
					{
						img: require("../../../assets/images/huawei.jpg")
					},
					{
						img: require("../../../assets/images/sanhui.jpg")
					}
				]

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>