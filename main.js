import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import * as request from 'utils/request.js'
Vue.prototype.$request = request.request;
Vue.use(uView);
Vue.config.productionTip = false;
Vue.prototype.$global = {
	appLogin() {
		return new Promise((resole, reject) => {
			var that = this;
			uni.getProvider({
				service: 'oauth',
				success(res) {
					console.log(res)
					//微信code
					if (res.provider.includes('weixin')) { // 判断是微信
						uni.login({
							success(loginRes) {
								if (loginRes.code) {
									request.request("/api/v1/userInfo/appInfo", {
										code: loginRes.code
									}).then(res => {
										console.log(res);
										let info = res.data
										uni.setStorageSync("loginType", '0');
										uni.setStorageSync("open_id", info.openId); //获取的open_id
									})
								}

							}
						})
					}
				}
			});
		})
	}
};
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
