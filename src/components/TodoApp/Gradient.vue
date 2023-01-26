<template>
    <div class="gradient">
        <gradient-color v-for="(item, index) in todos" :key="item.name" :colors="item.colors"
            :active="index <= currentIndex"></gradient-color>
    </div>
</template>

<script setup lang='ts'>
import storeUser from '@/store';
import { storeToRefs } from 'pinia'

const { todos, currentIndex } = storeToRefs(storeUser()) as any;

</script>

<style lang='scss' scoped>
.gradient {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  width: 100%;
  height: 100%;
}
</style>
