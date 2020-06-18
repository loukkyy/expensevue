import Vue from "vue";

export const ExpenseModule = {
  namespaced: true,
  state: {
    expenses: [],
  },
  mutations: {
    setExpenses: (state, expenses) => (state.expenses = expenses),
    addExpense: (state, expense) => {
      state.expenses.push(expense);
      console.log(state.expenses);
    },
    deleteExpense: (state, id) =>
      state.expenses.filter((expense) => expense.id != id),
  },
  actions: {
    fetchExpenses: () => {
      Vue.prototype.$http.get("/static/expenses.json")
      .then((response) => {
        console.log(response);
      });
    },
    createExpense: ({ commit }, expense ) => commit("addExpense", expense),
    removeExpense: ({ commit }, expense ) => commit("deleteExpense", expense),
  },
  getters: {
    getExpenses: (state) => state.expenses,
  },
};
