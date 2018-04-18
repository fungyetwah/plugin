import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
import store from '../store/'

//mint-ui弹窗组件
import { Toast } from 'mint-ui';

//模板异步懒加载
const index = resolve => require(['@/components/index'], resolve);
const asd = resolve => require(['@/components/asd'], resolve);
const qwe = resolve => require(['@/components/qwe'], resolve);

//install插件
Vue.use(Router)
Vue.use(VueMeta)

//console.log(Vue.config)
let vueRouter = new Router({
  routes: [
  	{
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/asd',
      name: 'asd',
      component: asd,
      meta: { requiresAuth: true }
    },
    {
      path: '/qwe',
      name: 'qwe',
      component: qwe,
    }
  ],
})

vueRouter.beforeEach((to, from, next) => {
	//需要登录
	if(to.meta.requiresAuth){
		//未登录
		if(!store.state.user.token){
			Toast({
			  message: '未登录',
			  position: 'bottom',
			  duration: 3000
			})
			next("/qwe");
			return false;
		}else{
			next()
		}
	}else{
		next()
	}
})

export default vueRouter;


