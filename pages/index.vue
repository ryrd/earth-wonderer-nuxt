<script setup>
import Header from '~/components/sections/Header.vue';
import AboutSite from '~/components/sections/AboutSite.vue';
import Destinations from '~~/components/sections/Destinations.vue';
import { useModeStore } from '~~/store/modeStore';
import PageTransitionOpen from '~~/components/parts/PageTransitionOpen.vue';
import PageTransitionClose from '../components/parts/PageTransitionClose.vue';
const mode = useModeStore();
</script>

<template>
    <div :class="mode.darkMode ? 'bg-night' : 'bg-light'">
        <Header/>
        <AboutSite />
        <Destinations/>     

        <!-- not working -->
        <!-- <PageTransitionOpen direction="detail"/>
        <PageTransitionClose from="detail"/> -->
    </div>
</template>
