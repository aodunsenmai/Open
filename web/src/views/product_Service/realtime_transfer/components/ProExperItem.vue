<template>
	<div>
		<div class="pro_experience">
			<div class="container">
				<div class="ptheme">
					<h3>产品体验</h3>
					<img src="../../../assets/images/theme.png" />
				</div>
				<div class="excon">
					<div class="tranfers" v-show="isShow">
						<img src="../../../assets/images/start.png" @click="play()" />
						<p>点击开始（体验60秒）</p>
					</div>
					<div class="tferaudio" v-show="isActive">
						<div class="vtishi"><p>点击按钮开始录音，时长60s<span>(注：开始录音前请确保麦克风正常)</span></p></div>
						<textarea  placeholder="转写结果"></textarea>
						<div class="audiobtns">
							<img src="../../../assets/images/stop.png" class="zstop"/>
								<img src="../../../assets/images/start1.png"  class="zstart" />
									<img src="../../../assets/images/end.png" class="zend" />
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
				isShow: true,
				isActive:false,
			}
		},
		methods: {
			play() {
				this.isShow = !this.isShow;
				this.isActive = !this.isActive;
			}
		}

	}
</script>

<style>

</style>