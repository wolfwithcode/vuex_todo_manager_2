// import axios from "axios";
const state = {
  todos: [
    {
      id: 1,
      title: "Learn Vue.js",
    },
    {
      id: 2,
      title: "Learn Vuex",
    },
  ],
};
const getters = {
    allTodos: state => state.todos,
};
const actions = {};
const mutations = {};
export default {
  state,
  getters,
  actions,
  mutations,
};
