<template>
	<div>
		<div class="pro_advantange reco_advantange">
			<div class="container">
				<div class="ptheme">
					<h3>产品优势</h3>
					<img src="../../../assets/images/theme.png" />
				</div>
				<div class="advancon">
					<div class="advanitems clearfix">
						<div class="advanitem" v-for="(avitem,index) in advcon" :key="index">
							<img :src="avitem.aimg" class="aimg" />
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
				advcon: [{
						title: "识别准确率高",
						aimg: require("../../../assets/images/advanicon4.png"),
						avcon: "采用业界领先的双向长短时记忆(BLSTM)深度神经网络(DNN)声学建模技术。"
					},
					{
						title: "抗噪性好",
						aimg: require("../../../assets/images/advanicon5.png"),
						avcon: "采用两遍的维纳滤波技术消除背景噪声；采用混合高斯建模的方法去除垃圾语音（铃声、笑声、咳嗽声等非自然人语音）。"
					},
					{
						title: "识别速度快",
						aimg: require("../../../assets/images/advanicon6.png"),
						avcon: "采用基于WFST的Cross-word静态搜索空间构建方法，有效地单遍集成各种知识源。"
					},
					{
						title: "支持多语种",
						aimg: require("../../../assets/images/advanicon7.png"),
						avcon: "核心算法与语种无关，即系统支持语种可移植，目前已支持汉语普通话、英语、韩语和粤语等语言的识别。"
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