<template>
	<div>
		<div class="custom_scheme">
			<headbar></headbar>
			<cusapply></cusapply>
		</div>
	</div>
</template>

<script>
	import headbar from '../../components/Head.vue'
	import cusapply from './components/Cusapply.vue'
	export default {
		name: 'App',
		components: {
			headbar,
			cusapply,
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