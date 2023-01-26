<template>
  <div class="todo" :class="{ todo_selected: selected }" ref="elRect">
    <div class="todo_head" @click="handleClick">
      <div class="todo_icon" :style="{ color: compute.color }">
        <Vue3Lottie :loop="1" ref="navLeft" :animationData="todo.icon" :width="50" :height="50"/>
      </div>
      <div class="todo_menu"></div>
    </div>
    <div class="todo_body">
      <p class="todo_tips">{{ todo.tasks.length }}</p>
      <h3 class="todo_title">{{ todo.name }}</h3>
      <div class="todo_progress">
                <span class="todo_progress_line">
                    <i :style="{ width: compute.progress, backgroundImage: compute.progressColor }"></i>
                </span>
        <span class="todo_progress_num">{{ compute.progress }}</span>
      </div>
      <div class="todo_task">
        <h4 class="todo_subtitle" v-if="compute.todayTask.length">
          今天
        </h4>
        <ul>
          <li v-for="item in compute.todayTask" :key="item.id">
            <task :task="item"/>
          </li>
        </ul>
        <h4 class="todo_subtitle" v-if="compute.tomorrowTasks.length">
          明天
        </h4>
        <ul>
          <li v-for="item in compute.tomorrowTasks " :key="item.id">
            <task :task="item"/>
          </li>

        </ul>
        <h4 class="todo_subtitle" v-if="compute.outdatedTask.length">
          后天

        </h4>
        <ul>

          <li v-for="item in compute.outdatedTask " :key="item.id">
            <task :task="item"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {today, tomorrow} from '@/util/shared'
import {computed, reactive, ref} from 'vue';
import {Vue3Lottie} from "vue3-lottie";

const emit = defineEmits(['select']);
const elRect = ref(null) as any

interface PropsData {
  selected?: any,
  todo?: any

}

const props = withDefaults(defineProps<PropsData>(), {
  selected: false,
})

const compute = reactive({
  color: computed(() => {
    return props.todo.colors[0]
  }),
  progress: computed(() => {
    console.log('执行')
    const {length: toadlCount} = props.todo.tasks.filter((h: { deleted: boolean | null; }) => !h.deleted);
    const {length: doneCount} = props.todo.tasks.filter((h: { deleted: boolean | null, done: boolean | null }) => !h.deleted && h.done)
    return isNaN((doneCount / toadlCount) * 100) ? 0 : `${Math.round((doneCount / toadlCount) * 100)}%`
  }),
  progressColor: computed(() => {
    const colorLeft = `color-stop(30%, ${props.todo.colors[0]})`
    const colorRight = `to(${props.todo.colors[1]})`
    return `-webkit-gradient(linear, left bottom, right bottom, ${colorLeft}, ${colorRight})`
  }),

  todayTask: computed(() => {
    return props.todo.tasks.filter((item: any) => {
      return item.date >= today && item.date < tomorrow
    })
  }),

  tomorrowTasks: computed(() => {
    return props.todo.tasks.filter((item: any) => {
      return item.date >= tomorrow
    })
  }),
  outdatedTask: computed(() => {
    return props.todo.tasks.filter((item: any) => {
      return item.date >= today
    })
  })
})
console.log(compute.progressColor)
const handleClick = () => {
  const appRect: DOMRect | DOMRectReadOnly | undefined | null = document.querySelector('#app')?.getBoundingClientRect();
  const elect = elRect?.value.getBoundingClientRect();
  const todo = props.todo;
  const rect = {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    appWidth: `100%`,
    appHeight: `100%`
  }

  if (appRect) {
    rect.top = elect.top - appRect.top
    rect.left = elect.left - appRect.left
    rect.width = elect.width
    rect.height = elect.height
    emit('select', {rect, todo});
  }
}


</script>

<style lang='scss'>
.todo {
  flex: 1;
  margin: 0 8px;
  overflow: hidden;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .2);
  color: #666;

  .todo_head {
    display: flex;
    padding: 20px;
    height: 44px;
    justify-content: space-between;
    align-items: flex-start;
    transform: translate3d(0, 0, 0);
    will-change: transform;

    .todo_icon {
      display: flex;
      width: 44px;
      height: 44px;
      border: 1px solid #eee;
      border-radius: 100%;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }

    .todo_menu {
      color: #eee;
    }

  }

  .todo_body {
    padding: 0 20px;
    transform: translate3d(0, 0, 0);
    will-change: transform;


  }

  .todo_tips {
    opacity: .6;
    font-size: 13px;
    font-weight: 600;
  }

  .todo_title {
    margin-top: 6px;
    font-size: 32px;

  }

  .todo_progress {
    display: flex;
    align-items: center;
    margin-top: 30px;

    .todo_progress_num {
      font-size: 12px;
    }

    .todo_progress_line {
      margin-right: 10px;
      flex: 1;
      height: 3px;
      background-color: #eee;
      transition: all .5s ease;
      i {
        display: block;
        height: 100%;
        transition: all 0.3s ease;
      }
    }
  }

  .todo_task {
    opacity: 0;
    transform: scale3d(1, 0, 1);

    .todo_subtitle {
      margin-top: 32px;
      margin-bottom: 8px;
      color: #999;
    }
  }
}

.todo_selected {
  visibility: hidden;

}
</style>
