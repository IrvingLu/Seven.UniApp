<template>
	<view>
		<u-table>
			<u-tr>
				<u-th>学校</u-th>
				<u-th>班级</u-th>
				<u-th>年龄</u-th>
			</u-tr>
			<u-tr>
				<u-td>浙江大学</u-td>
				<u-td>二年级</u-td>
				<u-td>22</u-td>
			</u-tr>
			<u-tr>
				<u-td>清华大学</u-td>
				<u-td>05班</u-td>
				<u-td>20</u-td>
			</u-tr>
		</u-table>
		<u-steps :list="numList" :current="1"></u-steps>
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
				current: 1,
				tabbar: tabbar,
				numList: [{
					name: '下单'
				}, {
					name: '出库'
				}, {
					name: '运输'
				}, {
					name: '签收'
				}, ],
			}
		},
		onLoad() {

		}
	}
</script>

<style>

</style>
