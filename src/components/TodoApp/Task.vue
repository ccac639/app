<template>
    <transition name="fade">
      <div class="task" v-if="!task.deleted">
        <input type="checkbox" v-model="task.done" :id="countId">
        <label :for="countId">{{task.title}} </label>
        <transition name="fade">
          <span class="task_delete" v-show="task.done" @click="deleteTask({task})">
             <Vue3Lottie :loop="1" ref="navLeft" :animationData="delTask" :width="30" :height="30" />
          </span>
        </transition>
      </div>
    </transition>
</template>

<script setup lang='ts'>
import storeUser from '@/store';
import {Vue3Lottie} from "vue3-lottie";
import delTask from '@/components/AstronautJSON/bin-delete.json'
import {computed} from "vue";
const {deleteTask}=storeUser()
interface PropsData{
  task:object|any
}
let Gid:number=1;
const countId=computed(()=>{
  return `task-${Gid++}`
})
withDefaults(defineProps<PropsData>(),{task:true});


</script>

<style lang='scss' >
.task{
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  input{
    display: none;
    &:checked+label::after{
      display: inline-block;
    }
  }
  label{
    flex: 1;
    &::before,&::after{
      content: '';
      display: inline-block;
      margin-right: 20px;
      margin-top: 20px;
      width: 14px;
      height: 14px;
      vertical-align: top;
    }
    &::before{
      border: 1px solid #ccc;
      border-radius: 2px;
      background: white;

    }
    &::before{
      content: '\f00c';
      position: relative;
      display: none;
      z-index: 10;
      margin-right: -16px;
      width: 10px;
      height: 10px;
      padding: 3px;
      border-radius: 2px;
      font: normal normal normal 10px/1 FontAwesome;
      color: white;
      background-color: #ccc;
      float: left;
    }
  }
  .task_delete{
    padding: 0 10px;
    color: #ccc;
    font-size: 16px;
  }
  .fade-leave-to,.fade-enter{
    opacity: 0;
  }
  .fade-enter-to,.fade-leave{
    opacity: 1;
  }
  .fade-enter-active,.fade-leave-active{
    transition:  all 0.3s ease;
  }
}
</style>
