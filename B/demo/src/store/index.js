import Vue from 'vue'
import Vuex from 'vuex'
import tab from './module/tab'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tabData: [],
        readData: [],
        delData: [],
    },
    getters: {
    },
    mutations: {
        edit(store, i) {
            store.tabList.push(i)
        },
        // 清空购物车
        clears(store) {
            store.delData = [];
        },
        // 恢复 
        godel(store, i) {
            const item = store.delData.find((item, index) => {
                return index == i;
            });
            store.readData.push(item);
            store.delData.splice(i, 1);
        },
        // 全部删除
        arrdel(store, arr) {
            store.readData = [];
            store.delData.push(...arr);
        },
        // 删除
        dels(store, i) {
            const item = store.readData.find((item, index) => {
                return index == i;
            });
            store.delData.push(item);
            store.readData.splice(i, 1);
        },
        // 还原未读
        gounread(store, i) {
            const item = store.readData.find((item, index) => {
                return index == i;
            });
            store.tabData.push(item);
            store.readData.splice(i, 1);
        },
        // 标记已读
        goread(store, i) {
            const item = store.tabData.find((item, index) => {
                return index == i;
            });
            store.readData.push(item);
            store.tabData.splice(i, 1);
        },
        // 全部标记已读
        arrread(store, arr) {
            store.tabData = [];
            store.readData.push(...arr);
        }
    },
    actions: {
    },
    modules: {
        tab
    }
})
