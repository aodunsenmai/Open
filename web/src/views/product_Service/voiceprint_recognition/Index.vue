<template>
	<div>
		<div class="voice_recognition">
			<headbar></headbar>
			<banner></banner>
			<proexperitem></proexperitem>
			<applisceneitem></applisceneitem>
			<cusseritem></cusseritem>
			<applicase></applicase>
			<afooter></afooter>
		</div>
	</div>
</template>

<script>
	import headbar from '../../components/Head.vue'
	import banner from './components/Banner.vue'
	import proexperitem from './components/ProExperItem.vue'
	import applisceneitem from './components/AppliSceneItem.vue'
	import cusseritem from './components/CusSerItem.vue'
	import applicase from './components/AppliCaseItem.vue'
	import afooter from '../../components/Footer.vue'
	export default {
		name: 'App',
		components: {
			headbar,
			banner,
			proexperitem,
			cusseritem,
			applisceneitem,
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