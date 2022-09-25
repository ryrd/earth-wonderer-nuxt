<script setup>
import DATA from '~~/Data';
import Toggle from '../../components/parts/Toggle.vue';
import DetailHeader from '~~/components/sections/DetailHeader.vue';
import AboutPlace from '~~/components/sections/AboutPlace.vue';
import Video from '~~/components/sections/Video.vue';
import Photos from '~~/components/sections/Photos.vue';
import FullPhoto from '~~/components/sections/FullPhoto.vue';
import { useModeStore } from '~~/store/modeStore';

const route = useRoute();

const mode = useModeStore();

const data = DATA.find(data => data.id === route.params.destination) || 'not found';
if (data === 'not found') navigateTo('/404');

const selectedPhoto = ref('');

const setSelectedPhoto = photo => selectedPhoto.value = photo;

onMounted(() => {
    if(process.client) {
        window.scrollTo(0, 0);
    };
})

</script>

<template>
    <div :class="`overflow-x-hidden ${mode.darkMode ? 'bg-night' : 'bg-light'}`">
        <Toggle/>
        <DetailHeader :image="data.mainPhoto" :DetailHeaderName="data.name" :DetailHeadinglocation="data.location"/>
        <AboutPlace :desc="data.desc" :mapLink="data.mapLink" :APlocation="data.location"/>
        <Video :ytVideo="data.video" :videoOwner="data.videoOwner"/>
        <Photos :photos="data.photos" :photosId="data.id" @set-selected-photo="setSelectedPhoto" />

        <FullPhoto :selectedPhoto="selectedPhoto" @set-selected-photo="setSelectedPhoto" />
    </div>
</template>
