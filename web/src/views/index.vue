<template>
	<div class="cons">
		<headbar></headbar>
		<carousel></carousel>
		<newsItem></newsItem>
		<productserviceitem></productserviceitem>
		<solveitem></solveitem>
		<padvantangeitem></padvantangeitem>
		<cpartneritem></cpartneritem>
		<afooter></afooter>
	</div>
</template>

<script>
	import headbar from './components/Head.vue'
	import carousel from './components/Carousel.vue'
	import newsItem from './components/NewsItem.vue'
	import productserviceitem from './components/ProductServiceItem.vue'
	import solveitem from './components/SolveItem.vue'
	import padvantangeitem from './components/ProductAdvantangeItem.vue'
	import cpartneritem from './components/CpartnerItem.vue'
	import afooter from './components/Footer.vue'
	export default {
		name: 'App',
		components: {
			headbar,
			carousel,
			newsItem,
			productserviceitem,
			solveitem,
			padvantangeitem,
			cpartneritem,
			afooter
		}

	}
</script>

<style>

</style>