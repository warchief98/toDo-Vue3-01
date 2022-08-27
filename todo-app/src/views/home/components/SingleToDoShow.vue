<template>
    <div class="single-todo" :class="{done:todo.done}">
        <div class="todo-title">
            <h4>{{ index + 1 }}) {{ todo.title }}</h4>
            <p>{{ todo.description }}</p>
        </div>
        <div class="btns">
            <button
            @click="changeState"
            >{{ todo.done ? 'unDone' : 'Done' }}</button>
            <button
            @click="deleteTodo"
            >delete</button>
        </div>
    </div>
</template>
<script setup>
    import { useStore } from 'vuex';
    import { defineProps } from 'vue';

    /*
        props
    */
   const props = defineProps(['todo', 'index'])
   const store = useStore()
   
   /*
        btns functions
   */
    const changeState = () => {
        store.commit('changeState', props.index)
    }
    const deleteTodo = () => {
        store.commit('deleteTodo', props.index)
    }

</script>

<style scoped lang="scss">
    .single-todo{
        display: flex;
        justify-content: space-between;
        margin: 15px 0 0 0;
        text-transform: capitalize;
        padding: 5px;
        box-shadow: -3px 3px 5px gray;
        transition: 0.2s;
        &:hover{
            box-shadow: 0px 0px 7px gray;
        }
        .todo-title{
            flex: 0 1 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            color: red;
            p{
                color: black;
                text-transform: lowercase;
            }
        }
        .btns{
            flex: 0 2 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
    }
    .done{
        .todo-title{
            h4{
                text-decoration: line-through;
                color: green;
            }
            p{
                text-decoration: line-through;
                text-transform: lowercase;
            }
        }
    }
</style>