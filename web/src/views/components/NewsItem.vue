<template>
	<div>
		<div class="news">
			<div class="container">
				<swiper :options="swiperOption">
					<swiper-slide class="newitem">
						<h3>中科信利获CTI论坛2017年度“智能语
              音交互产品”奖</h3>
						<p>2017年度CTI论坛行业应用及市场分析主题沙龙及评选颁奖活动
							<a href="">[更多>>]</a>
						</p>
					</swiper-slide>
					<swiper-slide class="newitem">
						<h3>IBM 第三季AI黑客松大赛结果出炉，中
              科院声学所拿下冠军宝座</h3>
						<p>9月2日，由IBM与CSDN共同举办的第三季 "Power AI 人工
							<a href="">[更多>>]</a>
						</p>
					</swiper-slide>
					<swiper-slide class="newitem">
						<h3>全国首届网络舆情（音视频）分析技术
邀请赛中，中科院声学所先导专项</h3>
						<p>首届“网络多媒体智能分析高端论坛”于11月5日在京召开。
							<a href="">[更多>>]</a>
						</p>
					</swiper-slide>
					<swiper-slide class="newitem">
						<h3>中国科学院声学研究所参加第二届军民
融合发展高科技成果展览</h3>
						<p>展览是由中央军委装备发展部、教育部、工业和信息化部
							<a href="">[更多>>]</a>
						</p>
					</swiper-slide>
					<swiper-slide class="newitem">
						<h3>中科信利获CTI论坛2017年度“智能语
              音交互产品”奖</h3>
						<p>2017年度CTI论坛行业应用及市场分析主题沙龙及评选颁奖活动
							<a href="">[更多>>]</a>
						</p>
					</swiper-slide>
					<swiper-slide class="newitem">
						<h3>中科信利获CTI论坛2017年度“智能语
              音交互产品”奖</h3>
						<p>2017年度CTI论坛行业应用及市场分析主题沙龙及评选颁奖活动
							<a href="">[更多>>]</a>
						</p>
					</swiper-slide>
					<swiper-slide class="newitem">
						<h3>中科信利获CTI论坛2017年度“智能语
              音交互产品”奖</h3>
						<p>2017年度CTI论坛行业应用及市场分析主题沙龙及评选颁奖活动
							<a href="">[更多>>]</a>
						</p>
					</swiper-slide>
					<swiper-slide class="newitem">
						<h3>中科信利获CTI论坛2017年度“智能语
              音交互产品”奖</h3>
						<p>2017年度CTI论坛行业应用及市场分析主题沙龙及评选颁奖活动
							<a href="">[更多>>]</a>
						</p>
					</swiper-slide>
					<swiper-slide class="newitem">
						<h3>中科信利获CTI论坛2017年度“智能语
              音交互产品”奖</h3>
						<p>2017年度CTI论坛行业应用及市场分析主题沙龙及评选颁奖活动
							<a href="">[更多>>]</a>
						</p>
					</swiper-slide>
					<swiper-slide class="newitem">
						<h3>中科信利获CTI论坛2017年度“智能语
              音交互产品”奖</h3>
						<p>2017年度CTI论坛行业应用及市场分析主题沙龙及评选颁奖活动
							<a href="">[更多>>]</a>
						</p>
					</swiper-slide>
					<swiper-slide class="newitem">
						<h3>中科信利获CTI论坛2017年度“智能语
              音交互产品”奖</h3>
						<p>2017年度CTI论坛行业应用及市场分析主题沙龙及评选颁奖活动
							<a href="">[更多>>]</a>
						</p>
					</swiper-slide>
					<swiper-slide class="newitem">
						<h3>中科信利获CTI论坛2017年度“智能语
              音交互产品”奖</h3>
						<p>2017年度CTI论坛行业应用及市场分析主题沙龙及评选颁奖活动
							<a href="">[更多>>]</a>
						</p>
					</swiper-slide>

				</swiper>
				<div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name: 'App',
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOption: {
					slidesPerView: 4,
					spaceBetween: 15,
					slidesPerGroup: 4,
					loop: true,
					loopFillGroupWithBlank: true,
					// pagination: {
					//   el: '.swiper-pagination',
					//   clickable: true
					// },
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				}

			}
		},
		methods: {

		}

	}
</script>

<style>

</style>