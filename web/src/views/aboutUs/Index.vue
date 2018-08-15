<template>
	<div class="aboutus">
		<headbar></headbar>
		<banner></banner>
		<devhistory></devhistory>
		<afooter></afooter>
	</div>
</template>
<script>
	import headbar from '../components/Head.vue'
	import banner from './components/Banner.vue'
	import devhistory from './components/DevHistoryItem.vue'
	import afooter from '../components/Footer.vue'
	export default {
		name: 'App',
		components: {
			headbar,
			banner,
			devhistory,
			afooter
		}

	}
</script>

<style>

</style>