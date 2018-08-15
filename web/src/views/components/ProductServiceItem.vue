<template>
	<div>
		<div class="product_charact">
			<div class="container">
				<div class="ptheme">
					<h3>产品服务</h3>
					<img src="../assets/images/theme.png" />
				</div>
				<div class="charactitems  clearfix">
					<div class="citem" v-for="(item,index) in chitems" v-on:mouseover="smousehover(index)" v-on:mouseout="smouseout(index)">
						<div class="citemcon">
							<div class="citem_left">
								<img :src="item.cimg" class="cicon" />
							</div>
							<div class="citem_right">
								<h3>{{item.theme}}</h3>
								<p>{{item.citemp}}</p>
							</div>
						</div>
						<div class="citemgroup" v-show="isShow" v-bind:class="{active:index==active}">
							<div class="cgicon" v-for="(cimgitem,index) in item.cgicons">
								<a href="">
									<img :src="cimgitem.cximg" />
									<p>{{cimgitem.itheme}}</p>
								</a>
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
				active: -1,
				chitems: [{
						theme: "语音识别",
						cimg: require("../assets/images/picon1.png"),
						citemp: "面对狭小的手机键盘，如何快速地输入文字，如何方便地进行信息搜索；面对海量的音频数据，如何进行快速的检索，从中找到自己想要的信息；面对繁忙的客服业务，是否有可能采用语音机器人来代替人工进行服务。所有类似这些应用，目前都逐一成为了现实，其背后就是语音识别技术。",
						cgicons: [{

								cximg: require("../assets/images/picon10.png"),
								itheme: "在线语音",
							},
							{

								cximg: require("../assets/images/picon11.png"),
								itheme: "离线语音",
							}
						]
					},
					{
						theme: "语音合成",
						cimg: require("../assets/images/picon2.png"),
						citemp: "中科信利语音合成系统是自主研发的中英文混读语音合成系统。该系统以先进的大语料语音合成技术为基础，能够实时、准确的将文本信息转换为自然、流畅的语音，是一种能够在任何时间、任何地点，向任何人提供语音信息服务的高效便捷手段，符合信息时代海量数据、动态更新和个性化查询的需求。",
						cgicons: [{

								cximg: require("../assets/images/picon9.png"),
								itheme: "说话人采集",
							},
							{

								cximg: require("../assets/images/picon8.png"),
								itheme: "文本转语音",
							}
						]
					},
					{
						theme: "语音拓展",
						cimg: require("../assets/images/picon3a.png"),
						citemp: "面对狭小的手机键盘，如何快速地输入文字，如何方便地进行信息搜索；面对海量的音频数据，如何进行快速的检索，从中找到自己想要的信息；面对繁忙的客服业务，是否有可能采用语音机器人来代替人工进行服务。所有类似这些应用，目前都逐一成为了现实，其背后就是语音识别技术。",
						cgicons: [{

								cximg: require("../assets/images/picon4.png"),
								itheme: "在线实时转写",
							},
							{

								cximg: require("../assets/images/picon5.png"),
								itheme: "语音助手",
							},
							{

								cximg: require("../assets/images/picon6.png"),
								itheme: "声纹识别",
							},
							{

								cximg: require("../assets/images/picon7.png"),
								itheme: "会议语音记录",
							}
						]
					},
					{
						theme: "智能客服",
						cimg: require("../assets/images/picon3.png"),
						citemp: "中科信利语音合成系统是自主研发的中英文混读语音合成系统。该系统以先进的大语料语音合成技术为基础，能够实时、准确的将文本信息转换为自然、流畅的语音，是一种能够在任何时间、任何地点，向任何人提供语音信息服务的高效便捷手段，符合信息时代海量数据、动态更新和个性化查询的需求。",
						cgicons: [{
							cximg: require("../assets/images/picon12.png"),
							itheme: "语音导航系统",
						}, ]
					},
				],
			}

		},
		methods: {
			smousehover: function(index) {
				this.active = index;
				this.isShow = true;
			},
			smouseout: function(index) {
				this.active = !index;
				this.isShow = false;
			},

		}

	}
</script>

<style>

</style>