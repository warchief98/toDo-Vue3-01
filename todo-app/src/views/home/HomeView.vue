<template>
  <div class="home">
    <div id="todo">
      <div class="todo-container">
        <div class="left box">
          <h2 class="title">Add Todo to Your list</h2>
          <ToDoForm />
        </div>
        <div class="right box">
          <h2 class="title">Todo List</h2>
          <SingleTodo 
          v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
          :index="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import SingleTodo from './components/SingleToDoShow.vue'
  import ToDoForm from './components/ToDoForm.vue'
  import { useStore } from 'vuex'
  import { computed, ref } from 'vue'

  const store = useStore()

  /*
    todos data
  */
  const todos = ref(computed(() => {
   return store.getters.readTodos
  }))

</script>

<style scoped lang="scss">
  #todo{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .todo-container{
      width: 100%;
      display: flex;
      .title{
        margin: 5px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        padding-bottom: 15px;
      }
      .box{
        flex:1 1 0%;
        border: 1px solid #000;
        padding: 15px 25px;
      }
      .left{

      }
      .right{

      }
    }
  }
</style>


