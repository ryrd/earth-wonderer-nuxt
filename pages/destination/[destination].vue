<script setup>
import DATA from '~~/Data';
import Toggle from '../../components/parts/Toggle.vue';
import DetailHeader from '~~/components/sections/DetailHeader.vue';
import AboutPlace from '~~/components/sections/AboutPlace.vue';

const route = useRoute();

const data = DATA.find(data => data.id === route.params.destination) || 'not found';
if (data === 'not found') navigateTo('/404');

const selectedPhoto = ref();

</script>

<template>
    <div class="overflow-x-hidden bg-light">
        <Toggle/>
        <DetailHeader :image="data.mainPhoto" :DetailHeaderName="data.name" :DetailHeadinglocation="data.location"/>
        <AboutPlace :desc="data.desc" :mapLink="data.mapLink" :APlocation="data.location"/>
    </div>
</template>
