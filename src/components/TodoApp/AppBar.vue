<template>
    <div class="app-bar">
        <span class="app_bar_l" @click="$emit(`left`)">
            <Vue3Lottie v-if="NavLeft" :loop="1"  :play-on-hover="true"   :animationData="NavLeft" :width="30" :height="30" />
        </span>
        <h1>{{ title }}</h1>
        <span class="app_bar_r" @click="$emit(`right`)">
            <Vue3Lottie v-if="NavRight" :loop="1" ref="navLeft" :animationData="NavRight" :width="30" :height="30" />
        </span>
    </div>
</template>

<script setup lang='ts'>
import {Vue3Lottie} from 'vue3-lottie'
type DataProps = {
    title ?: string,
    NavLeft ?: {},
    NavRight ?: {  }
}
const props = withDefaults(defineProps<DataProps>(), {
    title: ''
})
</script>

<style lang='scss' scoped>
.app-bar {
    display: flex;
    align-items: center;
    height: 44px;
    font-size: 15px;

    h1 {
        display: flex;
        justify-content: center;
        flex: 1;
    }

    span {
        padding: 0 20px;
    }
}
</style>
