<template>
	<view>
		<view class="u-page">
			<u-index-list :scrollTop="scrollTop">
				<view v-for="(item, index) in indexList" :key="index">
					<u-index-anchor :index="item" />
					<view class="list-cell">
						列表1
					</view>
					<view class="list-cell">
						列表2
					</view>
					<view class="list-cell">
						列表3
					</view>
				</view>
			</u-index-list>
			<!-- 所有内容的容器 -->
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	import {
		tabbar
	} from "../../utils/tabbar.js"
	export default {
		data() {
			return {
				current: 2,
				tabbar: tabbar,
				scrollTop: 0,
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
					"V", "W", "X", "Y", "Z"
				]
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onLoad() {


		},
		onShow() {
			this.$global.appLogin();
		}
	}
</script>

<style>
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
</style>
