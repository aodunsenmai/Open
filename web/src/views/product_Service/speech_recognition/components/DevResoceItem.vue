<template>
	<div>
		<div class="dev_resources">
			<div class="container">
			<div class="ptheme">
				<h3>开发者资源</h3>
				<img src="../../../assets/images/theme.png" />
			</div>
			<div class="devcon clearfix">
			<div class="devitem">
				<img src="../../../assets/images/android.png" />
				<p>Android</p>
			<div class="devbtns clearfix">
					<div class="devbtn">
				<router-link to="index">文档</router-link>
				</div>
						<div class="devbtn">
				<router-link to="index">Sdk下载</router-link>
				</div>
			</div>	
			</div>
		<div class="devitem">
				<img src="../../../assets/images/ios.png" />
				<p>ios</p>
			<div class="devbtns">
					<div class="devbtn">
				<router-link to="index">文档</router-link>
				</div>
						<div class="devbtn">
				<router-link to="index" class="devbtn">Sdk下载</router-link>
				</div>
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

			}
		},
		methods: {

		}

	}
</script>

<style>

</style>