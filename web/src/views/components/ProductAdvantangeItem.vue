<template>
	<div>
		<div class="padvantange">
			<div class="ptheme">
				<h3>产品优势</h3>
				<img src="../assets/images/theme.png" />
			</div>
			<div class="advantangecon">
				<div class="container">
					<img src="../assets/images/advantagebg.jpg" class="abg" />
					<div class="adcons">
						<div class="asum">
							<p>
								<span>目前共有</span》
             		<div class="iCountUp">			
						      <CountTo :endVal="endVal"   :duration="duration" class="icountup totalone" >
                           </CountTo>						    
                   <span> 位开发者入驻，</span>
								<span>已支持</span>

								<CountTo :endVal="tendVal1" :duration="duration" class="icountup"></CountTo>
								<span>个应用</span>
							</p>
						</div>
						<div class="developers clearfix">
							<div class="edeveloper deveitem">
								<img src="../assets/images/edeveloper.png" />
								<p>企业开发者</p>
								<CountTo :endVal="tendVal" :duration="duration" class="icountup"></CountTo>
							</div>
							<div class="edeveloper deveitem">
								<img src="../assets/images/pdeveloper.png" />
								<p>个人开发者</p>
								<CountTo :endVal="tendVal2" :duration="duration" class="icountup"></CountTo>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
	import $ from 'jquery'
	//import ICountUp from 'vue-countup-v2';
	import CountTo from './count-to/CountTo.vue';
	export default {
		name: 'App',
		components: {
			//		ICountUp,
			CountTo
		},
		data() {
			return {
				startVal: 0,
				endVal: 5147,
				tendVal: 343,
				tendVal1: 2559,
				tendVal2: 2608,
				decimals: 0,
				duration: 15,
				options: {
					useEasing: true,
					useGrouping: true,
					separator: ',',
					decimal: '.',
					prefix: '',
					suffix: ''
				},
				integratedEndVal: 354,
				integratedEndVal1: 5,
			}
		},
		methods: {
			init() {

				//		        var str = that.endVal;
				//				var array = str.split("");
				//				var larrlenth = str.length;
				//				var carr = "";
				//				var str = "";
				//				for(var i = 0; i < larrlenth; i++) {
				//					carr = array[i];
				//					
				//					str += '<em>' + carr + '</em>';
				//					
				//				}

				setInterval(() => {
					this.endVal = 5147;
					this.integratedEndVal1 += parseInt(Math.random() * 30);
					this.integratedEndVal
				}, 2000);
				//			$(".totalone").text(this.endVal);
//				alert($(".totalone").text());






			},
			onReady: function(instance, CountUp) {
				const that = this;
				instance.update(that.endVal);
				instance.update(that.tendVal);
				//				var str = that.endVal.toString();
				//				var array = str.split("");
				//				instance.update(array);
				//				var larrlenth = str.length;
				//				var carr = "";
				//				for(var i = 0; i < larrlenth; i++) {
				//					carr = array[i];
				//					var str = "";
				//					str += '<em>' + carr + '</em>';
				//					$(".icountup").html(str);
				//				}

			},
			tonReady: function(instance, CountUp) {
				const that = this;
				instance.update(that.tendVal);
			}
		},
		mounted() {
			this.init();
		}

	}
</script>

<style>

</style>