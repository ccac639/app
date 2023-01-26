<template>
    <div class="gradient_color" :class="{gradient_color_active:active}" :style="{backgroundImage:gradientColor}">

    </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
interface PropsData {
    colors: string[] | string,
    active: boolean
}

let props = withDefaults(defineProps<PropsData>(), {
    colors: '',
    active: true
})
const gradientColor = computed(() => {
    const colorBottom = `${props.colors[0]}`
    const colorTop = `${props.colors[1]}`
    return `linear-gradient(45deg,${colorBottom},${colorTop})`
})

</script>

<style lang='scss' scoped>
.gradient_color {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity .5s ease;
    // background-image: linear-gradient(45deg, rgb(255, 98, 98), rgb(255, 169, 71));
}

.gradient_color_active {
    opacity: 1;
}
</style>
