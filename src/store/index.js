import Vue from 'vue'
import Vuex from 'vuex'
import { getLocal, setLocal } from '@/utils/storage'

Vue.use(Vuex)
const tokenKey = 'toutiao_token'
export default
new Vuex.Store({
  // 存储全局状态数据
  state: {
    user: getLocal(tokenKey)
  },
  getters: {
  },
  mutations: {
    // vuex存储数据
    setUser (state, user) {
      state.user = user
      // 本地存储数据
      setLocal(tokenKey, user)
      // localStorage.setItem(tokenKey, JSON.stringify(user))
    }
  },
  actions: {
  },
  modules: {
  }
})
