<template>
	<div>
		<Header></Header>
		<SideMenu></SideMenu>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from './components/Header';
	import Footer from './components/Footer';	
	import SideMenu from './components/SideMenu';
	
	export default {
		components: {
			Header,
			Footer,
			SideMenu
		}
	}
</script>

<style lang="less" scoped>

</style>