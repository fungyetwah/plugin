import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import user_store from '@/store/user_store.js';//用户信息仓库

export default new Vuex.Store({
    modules: {
        user: user_store,
    }
})
