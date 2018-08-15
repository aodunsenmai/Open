<template>
	<div>
		<div class="intelligent_service">
			<headbar></headbar>
			<banner></banner>
			<ProExperItem></ProExperItem>
			<ProAdvantItem></ProAdvantItem>
			<applisceneitem></applisceneitem>
			<cusseritem></cusseritem>
			<DevResoceItem></DevResoceItem>
			<AppliCaseItem></AppliCaseItem>
			<afooter></afooter>
		</div>
	</div>
</template>
<script>
	import headbar from '../../components/Head.vue'
	import banner from './components/Banner.vue'
	import ProExperItem from './components/ProExperItem.vue'
	import ProAdvantItem from './components/ProAdvantItem.vue'
	import applisceneitem from './components/AppliSceneItem.vue'
	import cusseritem from './components/CusSerItem.vue'
	import DevResoceItem from './components/DevResoceItem.vue'
	import AppliCaseItem from './components/AppliCaseItem.vue'
	import afooter from '../../components/Footer.vue'
	export default {
		name: 'App',
		components: {
			headbar,
			banner,
			ProExperItem,
			ProAdvantItem,
			cusseritem,
			applisceneitem,
			DevResoceItem,
			AppliCaseItem,
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