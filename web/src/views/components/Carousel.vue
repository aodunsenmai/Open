<template>
	<div>
		<Carousel autoplay v-model="carousel" loop class="carousel">
			<CarouselItem>
				<div class="demo-carousel"><img src="../assets/images/banner1.jpg" /></div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel"><img src="../assets/images/banner1.jpg" /></div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel"><img src="../assets/images/banner1.jpg" /></div>
			</CarouselItem>
		</Carousel>
	</div>
</template>
<script>
	export default {
		name: 'App',
		components: {

		},
		data() {
			return {
				carousel: 0
			}
		},
		methods: {

		}

	}
</script>

<style>

</style>