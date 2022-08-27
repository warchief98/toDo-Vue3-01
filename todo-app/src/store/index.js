import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:[
      {
        title:'test1',
        description:'some description for ui template 1',
        done:true
      },
      {
        title:'test2',
        description:'some description for ui template 2',
        done:false
      },
      {
        title:'test3',
        description:'some description for ui template 3',
        done:false
      },
      {
        title:'test4',
        description:'some description for ui template 4',
        done:false
      },
      {
        title:'test5',
        description:'some description for ui template 5',
        done:false
      },
      {
        title:'test6',
        description:'some description for ui template 6',
        done:false
      },
    ]
  },
  getters: {
    readTodos(state){
      return state.todos
    }
  },
  mutations: {
    setTodos(state, todo){
      state.todos.push(todo)
    },
    changeState(state, index){
      state.todos[index].done = !(state.todos[index].done)
    },
    deleteTodo(state, index){
      state.todos.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
