<template>
    <div class="home">
        <avatar />
        <gradient></gradient>
        <todo-list></todo-list>
        <todo-detail></todo-detail>
    </div>
</template>

<script setup lang='ts'>

import Avatar from '../components/TodoApp/Avatar.vue'
import Gradient from '../components/TodoApp/Gradient.vue'
import TodoList from '@/components/TodoApp/TodoList.vue';



</script>

<style lang='scss'>
.home {
    height: 100%;
    width: 100%;
    overflow: hidden;
    color: white;
}
</style>
