<template>
	<div>
		<div class="pro_experience">
			<div class="pro_dialogue">
				<div class="pdiacon">
					<div class="pdio">
						<div>
							<p>你是你，老李是老李。你不是老李，老李不是你</p>
							<p>（what？ 到底谁是老李？？？）</p>
						</div>
					</div>
				</div>

			</div>
			<div class="proarrow"><img src="../../../assets/images/proarrow.png" /></div>
			<div class="container">
				<div class="ptheme">
					<h3>产品体验</h3>
					<img src="../../../assets/images/theme.png" />
				</div>
				<div class="excon">
					<div class="voice_progress">
				<!--		<p>当前正在进行第 {{ current + 1 }} 步</p>-->
						<Steps :current="current">
							<Step title="注册声纹"></Step>
							<Step title="在线识别"></Step>
							<Step title="识别结果"></Step>
						</Steps>
					<!--	<Button type="primary" @click="next">Next step</Button>-->
						<div class="reco_box">
							<div class="reboxcon">
							<div class="regisvoice" v-show="isActive">
								<p class="vtit">设定声纹标识，以确定识别结果</p>
								<div class="recitem">我是老李</div>
								<p class="vtit">请在10秒内年初下面文字</p>
								<div class="rectext recitem">
									<p>日照香炉生紫烟</p>
									<p>遥看瀑布挂前川</p>
									<div class=" epre_voice prebg" @click='recplay'>
										<img src="../../../assets/images/recvoice.png" class="recplay" v-if='!isShow' />
										<div v-else='isShow'>
											<em class="dtimer">{{count}}</em>
										</div>
									</div>
								</div>
							   </div>	
							   <div class="start_reco" v-show="!isActive">
								<p class="vtit">声纹库</p>
							   <div class="recitem">我是老李</div>
							    <div class="recitem">我是不是老李</div>
							     <div class="recitem">我不是老李</div>
							     	<div class="start_voice  prebg" @click='brecplay'>
								<!--	<img src="../../../assets/images/recvoice.png"  />-->
							开始识别							
									</div>							     
							   </div>							   							 							   
							</div>
							<div class="rec_footer">
								<button class="regist_voice vbtn"  @click='registClick'>注册声纹</button>
								<button class="start_identify vbtn" @click='startClick'>开始识别</button>
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
				isShow: false,
				current: 0,
				count: 10,
				isActive:true
			}
		},
		methods: {
//			next() {
//				if(this.current == 2) {
//					this.current = 0;
//				} else {
//					this.current += 1;
//				}
//			},
			recplay() {
				this.isShow = !this.isShow;				
				const time_count = 10;
				if(!this.timer) {
					this.count = time_count;
					this.show = false;
					this.timer = setInterval(() => {
						if(this.count > 0 && this.count <= time_count) {
							this.count--;
						} else {
							this.show = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 1000)
				}
			},
			registClick(){
				this.isActive=true
			},
			startClick(){
			this.isActive=false;	
			},
			brecplay(){}
		}

	}
</script>

<style>

</style>