import Vue from 'vue'
import Axios from 'axios'
import Qs from 'qs'
//mint-ui弹窗组件
import { Toast } from 'mint-ui';
import store from '../store'

//判断用户系统
const thisUserAgent = window.navigator.userAgent;
Vue.prototype.golbal = Vue.prototype.golbal || {};
Vue.prototype.golbal.isAndroid = thisUserAgent.indexOf('Android') > -1 || thisUserAgent.indexOf('Linux') > -1; //android终端或者uc浏览器
Vue.prototype.golbal.isIos = !!thisUserAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
Vue.prototype.golbal.isWeixin = !!thisUserAgent.match(/MicroMessenger/i);//微信app

//站点
Vue.prototype.golbal.domain = "http://192.168.1.92:8080/"//本地

//服务层配置
Axios.defaults.baseURL = Vue.prototype.golbal.domain;//添加baseurl
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Axios.interceptors.request.use(config => {
	//让每个请求携带token
	let token = '1111';
	Object.assign(config.headers, { 'token': token });
	return config;
},error =>{
	console.log(error); // for debug
	Toast({
	  message: error,
	  position: 'bottom',
	  duration: 3000
	})
	Promise.reject(error);
});

const http = {
	get:function(url,data){
		data = data || "";
		return new Promise((resolve,reject)=>{
			Axios.get(url,Qs.stringify(data)).then( res => {
				resolve(res)
			}).catch( e => {
				reject(e)
			});
		})
		
	},
	post:function(url,data){
		data = data || "";
		return new Promise((resolve,reject)=>{
			Axios.post(url,Qs.stringify(data)).then( res => {
				resolve(res)
			}).catch( e => {
				reject(e)
			});
		})
		
	},
};

export default http;