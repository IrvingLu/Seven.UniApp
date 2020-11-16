<template>
	<view>
		<view class="u-page">
			publish
			<!-- 所有内容的容器 -->
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	import {
		tabbar
	} from "../../common/common.js"
	export default {
		data() {
			return {
				current: 1,
				tabbar: tabbar,
			}
		},
		onLoad() {

		}
	}
</script>

<style>

</style>
