<template>
	<div>
		<AppHeader></AppHeader>
		<router-view class="app-contents"></router-view>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
	components: {
		AppHeader,
	},
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
