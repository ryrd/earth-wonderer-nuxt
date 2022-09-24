<script setup>
import Header from '~/components/sections/Header.vue';
import AboutSite from '~/components/sections/AboutSite.vue';
import Destinations from '~~/components/sections/Destinations.vue';
import { useModeStore } from '~~/store/modeStore';

const mode = useModeStore();

</script>

<template>
    <div :class="mode.darkMode ? 'bg-night' : 'bg-light'" ref="indexRef">
        <Header/>
        <AboutSite />
        <Destinations/>     
    </div>
</template>
