<template>
  <div>
    <h1>Todos</h1>
    <ul>
      <li v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'Todos',
    computed: 
        mapGetters(['allTodos'])
    
}
</script>

<style>

</style>