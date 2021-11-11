import Vue from "vue";
import Vuex from "vuex";
import getSetting from "@/api/setting";
import siteController from "@/utils/siteController";

Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        loading: false,
        data: {},
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchSetting(ctx) {
            ctx.commit('setLoading', true);
            const resp = await getSetting();
            ctx.commit('setData', resp);
            ctx.commit('setLoading', false);
            if (resp.favicon) {
                let link = document.querySelector('link[rel="icon shortcut"]');
                if (link) {
                    return;
                }
                link = document.createElement('link');
                link.rel = 'shortcut icon';
                link.href = resp.favicon;
                document.querySelector('head').appendChild(link);
            }
            if (resp.siteTitle) {
                siteController.setSite(resp.siteTitle);
            }
        }
    }
}