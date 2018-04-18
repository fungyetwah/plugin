<template>
  <div class="index">
  	<router-link to="/asd">to asd</router-link>
    <h1>{{ msg }}</h1>
    <h1>asd: {{ asd }}</h1>
    <div class="aaa">
    	<ul>
    		<li>token: {{$store.state.user.token}}</li>
    		<li>userName: {{$store.state.user.userName}}</li>
    		<div @click="changeStoreMsg">点我改变用户名</div>
    	</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      asd:""
    }
  },
  metaInfo: {
    title: "index",
    titleTemplate: '%s - by vue-meta index',
//  meta:[
//  	{name: 'viewport ', content: 'initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width'}
//  ],
//  htmlAttrs: {
//    lang: 'zh'
//  },
//  script: [{innerHTML: 'console.log("hello index!")', type: 'text/javascript'}],
//  __dangerouslyDisableSanitizers: ['script']
  },
  created:function(){
  	let _this = this;
		this.$http.get("./static/asd.json",{asdasdasdasda:123}).then(function(res){_this.asd = res.data.a})
  },
  mounted:function(){
		
		var ua = window.navigator.userAgent;
  	var wxBrowser;
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串
    this.$toast({
		  message: '提示',
		  position: 'middle',
		  duration: 2500
		})
  },
  methods:{
  	changeStoreMsg:function(){
  		this.$store.commit("setUserName",this.$store.state.user.userName+"2")
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.aaa{
	ul{
		font-size:0.24rem;
		padding-bottom: 0.55rem;
		li{color: #ff0000;}
	}
}
</style>
