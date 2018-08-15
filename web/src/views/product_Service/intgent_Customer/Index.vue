<template>
	<div>
		<div class="intelligent_service">
			<headbar></headbar>
			<banner></banner>
			<icusdefiitem></icusdefiitem>
			<applicase></applicase>
			<afooter></afooter>
		</div>
	</div>
</template>
<script>
	import headbar from '../../components/Head.vue'
	import banner from './components/Banner.vue'
	import icusdefiitem from './components/IcusdefiItem.vue'
	import applicase from './components/AppliCaseItem.vue'
	import afooter from '../../components/Footer.vue'
	export default {
		name: 'App',
		components: {
			headbar,
			banner,
			icusdefiitem,
			applicase,
			afooter
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