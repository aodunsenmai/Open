<template>
	<div>
		<div class="pro_experience">

			<div class="ptheme">
				<h3>产品体验</h3>
				<img src="../../../assets/images/theme.png" />
			</div>
			<div class="excon">
				<div class="experience-box">
					<div class="lexboc">
						<ul class="speakers">
							<li>
								<div class="hexagon">
									<div class="left"></div>
									<div class="right"></div>
									<span>小文</span>
								</div>
							</li>
							<li>
								<div class="hexagon">
									<div class="left"></div>
									<div class="right"></div>
									<span>小花</span>
								</div>
							</li>
						</ul>

					</div>
					<div class="mexboc">
						<textarea placeholder="输入合成的文字"></textarea>
						<div class="voiceinfo clearfix">
							<div class="sonic">
							<span>5X</span>	
							<Progress :percent="30" :stroke-width="4" />
								<img src="../../../assets/images/sonic.png"/>
							</div>
							<div class="vplay"><img src="../../../assets/images/hcvoice.png"/></div>
							
								<div class="volume">
									<img src="../../../assets/images/volume.png"/>	
									 <Progress :percent="25" :stroke-width="4" />
								</div>
						</div>
						
					</div>
					<div class="rexboc">
						<div class="languages">
							<div class="litem">
								<div class="lang  chinese">中文</div>
							</div>
							<div class="litem clearfix">
								<div class="lang  english">英文</div>
								<div class="lang  cenglish">中英混合</div>
							</div>
							<div class="litem">
								<div class="lang   cantonese">粤语</div>
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