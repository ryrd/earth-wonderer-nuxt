<script lang="ts">
import gsap from 'gsap';

export default defineComponent({
    props: {
        from: String
    },
    methods: {
        PTCEnter(el){
            console.log(el)
        },
        PTCExit(el){
            console.log(el)
        }
    }
})
</script>

<template>
    <transition @enter="PTCEnter" @exit="PTCExit" mode="out-in">
        <div class="h-1/2 w-screen bg-white fixed top-0 left-0 z-[100]"/>
    </transition>
</template>