<template>
  <div class="todo_list" :class="{ 'todo_list__selected': selected }">
    <ul :style="{ width: `${todos.length * 100}%`}">
      <li class="list_" v-for="item in todos" :key="item.name"
          :style="{ transform: `translate3d(-${currentIndex * 100},0,0)` }">
        <todo :todo="item" :selected="selected && item === selected.todo" @select="selectTodo"/>
      </li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
import storeData from '@/store';
import {storeToRefs} from 'pinia'

const {selected, currentIndex, todos} = storeToRefs(storeData()) as any;
const {selectTodo} = storeData()

</script>

<style lang='scss'>
.todo_list {
  padding: 0 32px;
  //height: 200px;
  transition: all .5s ease;

  > ul,
  li {
    display: flex;
    height: 100%;
  }

  > ul > li {
    flex: 1;
    transition: transform .5s ease;
  }

  .list_ {
    height: 300px;
  }

  .todo {
    border-radius: 8px;
    background-color: #fff;
  }


}

.todo_list__selected {
  transform: scaleX(1.25);
}
</style>
