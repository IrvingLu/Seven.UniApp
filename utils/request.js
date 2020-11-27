const baseUrl = 'http://192.168.2.41:44355'
const request = (url, params, type = 'GET') => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: baseUrl + url,
			data: params,
			success(res) {
				console.log(res)
				resolve(res.data)
			},
			fail(error) {
				reject(error);
			}
		})
	});
}
export {
	request,
	baseUrl
}
