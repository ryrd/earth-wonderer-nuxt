<script lang="ts">
import gsap from 'gsap';

export default defineComponent({
    props: {
        direction: String
    },
    methods: {
        PTOEnter(el){
            console.log(el)
        },
        PTOExit(el){
            console.log(el)
        }
    }
})
</script>

<template>
    <transition @enter="PTOEnter" @exit="PTOExit" mode="out-in">
        <div class="h-1/2 w-screen bg-dark fixed top-0 left-0 z-[100]"/>
    </transition>
</template>