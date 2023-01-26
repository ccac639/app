<template>
  <transition name="show" @enter="handleEnter" @leave="handleLeave">
    <div class="todo_detail" v-if="selected">
      <app-bar :NavLeft="ArrowLeft"/>
      <todo  :todo="selected.todo"  :active="true" @close="unselectTodo" />

    </div>
  </transition>
</template>

<script setup lang='ts'>
import gsap from "gsap"
import storeRef from '@/store'
import {storeToRefs} from 'pinia'
import ArrowLeft from '@/components/AstronautJSON/arrow-left-.json'

const {selected, unselect}: any = storeToRefs(storeRef());
const {unselectTodo}: any = storeRef();
/**
 *
 * @param {HTMLElement} el
 *
 * @example handleEnter(document.querySelector("#app"))
 *
 * @return 开始动画
 */
const handleEnter = (el: HTMLElement) => {
  gsap.fromTo(el, .5, {
    top: `${selected.value.rect.top}px`,
    left: `${selected.value.rect.left}px`,
    width: `${selected.value.rect.width}px`,
    height: `${selected.value.rect.height}px`,
  }, {
    top: 0,
    left: 0,
    width: `${selected.value.rect.appWidth}`,
    height: `${selected.value.rect.appHeight}`,
  });
}
/**
 *
 * HTMLElement el
 *
 *  handleLeave(document.querySelector("#app"))
 *
 *  结束动画
 *
 **/
const handleLeave = (el: HTMLElement) => {
  gsap.fromTo(el, 0.5, {
    top: `${unselect.rect.top}px`,
    left: `${unselect.rect.left}px`,
    width: `${unselect.rect.width}px`,
    height: `${unselect.rect.height}px`,
  }, {
    top: 0,
    left: 0,
    width: `${unselect.value.rect.appWidth}`,
    height: `${unselect.value.rect.appHeight}`,
  })
}
</script>

<style lang='scss' >
.todo_detail {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  border-radius: 0;
  background-color: #f5f5f5;
  top: 0;
  color: #666;
  will-change: top, left, width, height;

  .todo {
    margin: -44px 0 0;
    padding: 0 20px;
    box-shadow: none;

  }

  .todo_head,
  .todo_body {
    transform: translate3d(0, 88px, 0);
  }

  .todo_menu {
    opacity: 0;
  }

  .todo_task {
    opacity: 1;
    transform: scaleY(1);
    overflow-y: auto;
  }

  .app-bar {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

}
.show-enter-to,.show-leave {
    border-radius: 0;
  .todo{
    padding: 0 20px;
  }
  .todo_head,.todo_body{
    transform: translate3d(0,88px,0);
  }
  .todo_menu{
    opacity: 0;
  }
  .todo_tasks{
    opacity: 1;
    transform: scale3d(1, 1, 1);

  }
  .app-bar{
    opacity: 1;
    transform: translate3d(0,0,0);
  }
}
.show-leave-to,.show-enter{
  border-radius: 0;
  .todo{
    padding: 0 ;
  }
  .todo_head{
    transform: translate3d(0,0,0);
  }
  .todo_body{
    transform: translate3d(0,188px,0);
  }
  .todo_menu{
    opacity: 0;
  }
  .todo_tasks{
    opacity: 1;
    transform: scale3d(1, 1, 1);

  }
  .app-bar{
    opacity: 1;
    transform: translate3d(0,0,0);
  }
}
.show-enter-active,.show-leave-active{
  .todo,.todo_head,.todo_body,.todo_menu,.todo_tasks,.app-bar{
    transition: all .5s ease;
  }
}
</style>
