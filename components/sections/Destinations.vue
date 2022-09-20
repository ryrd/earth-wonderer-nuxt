<script setup>
import HomeHeading from '../parts/HomeHeading.vue';
import DestinationBox from '../parts/DestinationBox.vue';
import Data from '~/Data';

</script>

<template>
    <div>
        <HomeHeading text="Destinations"/>
        <div class='w-full portrait:h-8 landscape:h-12'/>
        <DestinationBox v-for="dt in Data" 
                        :key="dt.id"  
                        :id="dt.id"
                        :photo="dt.mainPhoto"
                        :destinationName="dt.name"
                        :longText="dt.longText"
                        />
    </div>
</template>