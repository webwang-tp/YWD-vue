import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)
const state = {
    shopAppraise: '',
    classifyStore: '',
    shopCart: []
}

const mutations = {
    appraise(state, data) {
        state.shopAppraise = data
    },
    classifyData(state, data) {
        state.classifyStore = data
    },
    addshopcart(state, data) {
        var index = state.shopCart.findIndex(item => item.pid === data.pid)
        if (index === -1) {
            state.shopCart.push(data)
        } else {
            state.shopCart[index].num += data.num
        }
    },
    add(state, id) {
        var index = state.shopCart.findIndex(item => item.pid == id);
        var json = state.shopCart[index]
        json.num++
        state.shopCart.splice(index, 1, json)
    },
    minus(state,id){
        var index = state.shopCart.findIndex(item => item.pid == id);
        var json = state.shopCart[index]
        json.num--
        state.shopCart.splice(index, 1, json)
    },
    delet(state,id){
        var index = state.shopCart.findIndex(item=>item.pid==id)
        // var json = state.shopCart[index]
        state.shopCart.splice(index,1)
    },
    shopcheck(state,id){
        var index = state.shopCart.findIndex(item=>item.pid==id)
        var json = state.shopCart[index]
        json.flag = !json.flag
        state.shopCart.splice(index,1,json)
        console.log(state.shopCart)
    },
    cheackAll(state){
        var json = state.shopCart;
        json.map(item=>item.flag=true)
        state.shopCart=[];
        state.shopCart=json
    },
    cheackNo(state){
        var json = state.shopCart;
        json.map(item => item.flag = false)
        state.shopCart = [];
        state.shopCart = json
    }
   
}

const actions = {
    appraise(context, data) {
        context.commit('appraise', data)
    },
    classifyData(context, data) {
        context.commit('classifyData', data)
    },
    addshopcart(context, data) {
        context.commit('addshopcart', data)
    },
    add(context, id) {
        context.commit('add', id)
    },
    minus(context,id){
        context.commit('minus',id)
    },
    delet(context,id){
        context.commit('delet',id)
    },
    shopcheck(context,id){
        context.commit('shopcheck',id)
    },
    cheackAll(context) {
        context.commit('cheackAll')
    },
    cheackNo(context){
        context.commit('cheackNo')
    }
}

const getters = {
    apprData(state) {
        return state.shopAppraise
    },
    apprAll(state) {
        return state.shopAppraise.all
    },
    apprGood(state) {
        return state.shopAppraise.good
    },
    classArr(state) {
        return state.classifyStore
    },
    shopCartdata(state) {
        return state.shopCart
    }
}
var store = new vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store