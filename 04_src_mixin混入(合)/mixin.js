// 抽取公共部分到mixin,使用分别暴露
export const hunhe = {
	methods: {
		showName(){
			alert(this.name)
		}
	},
	mounted() {
		console.log('你好啊！')
	},
}
// 分别暴露
export const hunhe2 = {
	data() {
		return {
			x:100,
			y:200
		}
	},
}
