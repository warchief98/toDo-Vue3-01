<template>
    <form @click.prevent>
        <div class="add-todo">
            <label for="todoInput">type something to add:</label>
            <input id="todoInput" 
            type="text" 
            placeholder="type title here ..."
            v-model="input.title"
            >
            <textarea
            name="" 
            id="textArea" 
            cols="30" 
            rows="10" 
            placeholder="type your description here ..."
            v-model="input.description"
            >
            
            </textarea>
            <button
            @click="submit"
            >ADD</button>
        </div>
    </form>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
    /*
        data
    */
    const input = {
        title:'',
        description:'',
        done:false
    }


    /*
        submit form
    */
   const submit = () => {
    let obj = {
        title : input.title,
        description: input.description,
        done:input.done
    }
    store.commit('setTodos', obj)
    document.getElementById('todoInput').value = ''
    document.getElementById('textArea').value = ''
   }
</script>

<style scoped lang="scss">
    .add-todo{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        width: 50%;
        #todoInput{
            height: 2em;
        }
        textarea{
            margin-top: 15px;
        }
        button{
            margin: 25px 0 10px;
            padding: 10px 25px;
            width: 50%;
            min-width: max-content;
        }
        *{
            width: 100%;
        }
    }
</style>