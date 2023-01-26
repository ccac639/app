<template>
    <div class="avatar" :class="{ avatar_selected: !!selected }">
        <div class="avatar_face">
            <img src="@/assets/avatar.png"  alt="1">
        </div>
        <h2 class="avatar_name">你好 ***</h2>
         <p class="avatar_tips">
            今天心情不错<br />你有 {{ todayTask.length }}  个任务
        </p>
        <p class="avatar_date">时间 : {{ dateString }}</p>
    </div>
    <div></div>
</template>

<script setup lang='ts'>
import {computed, ref} from 'vue';
import storeUser from '@/store';
import { storeToRefs } from 'pinia'
const { selected } = storeToRefs(storeUser()) as any;
const {todayTask} =storeUser()
const today = ref(new Date());
const dateString=computed(()=>{
  return today.value.toLocaleDateString()
})
</script>

<style lang='scss' scoped>
.avatar {
    display: flex;
    padding: 0 40px;
    height: 300px;
    justify-content: flex-end;
    flex-direction: column;
    transition: all .5s ease;

    .avatar_selected {
        transform: translate3d(0, 20px, 0);
        opacity: 0;
    }

    .avatar_face {
        width: 44px;
        height: 44px;
        border-radius: 100%;
        overflow: hidden;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    .avatar_name {
        margin-top: 32px;
        padding: 0 6px;
        font-size: 32px;
        letter-spacing: 1px;
        font-weight: 300;
    }

    .avatar_tips {
        margin-top: 16px;
        padding: 0 6px;
        font-size: 13px;
        font-weight: 100;
        opacity: 0.8;
        line-height: 1.6em;
    }

    .avatar_date {
        margin-top: 44px;
        margin-bottom: 16px;
        padding: 0 6px;
        font-size: 16px;
    }
}
</style>
