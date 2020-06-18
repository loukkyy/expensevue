import Vue from "vue";
import Vuex from "vuex";
import { ExpenseModule } from "./modules/ExpenseModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
  },
  mutations: {
    setCategories: (state, categories) => (state.categories = categories),
    addCategory: (state, category) => {
      state.categories.push(category);
    },
    deleteCategory: (state, id) =>
      state.categories.filter((category) => category.id != id),
  },
  actions: {
    fetchCategories: ({commit}) => {
      Vue.prototype.$http.get("/static/categories.json")
      .then((response) => commit('setCategories', response.data));
    },
    createCategory: ({ commit }, category ) => commit("addCategory", category),
    removeCategory: ({ commit }, category ) => commit("deleteCategory", category),
  },
  getters: {
    getCategories: (state) => state.categories,
  },
  modules: {
    expense: ExpenseModule
  }
});
