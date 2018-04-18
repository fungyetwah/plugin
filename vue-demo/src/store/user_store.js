export default {
	state:{
		token:"1111111",
		userName:"A name."
	},
	mutations:{
        setUserToken(state, token){//这里的state对应着上面这个state
        	state.token = token;
            //在这里执行操作改变state
        },
        setUserName(state, name){
        	state.userName = name;
        }
    }
}
