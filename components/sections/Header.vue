<script setup>
import Toggle from "../parts/Toggle.vue";

const mobile = ref(false);

//check mobile
if (process.client) {
    window.innerWidth < 500 ? mobile.value = true : mobile.value = false;

} 


</script>

<template>
    <div class='min-h-[600px] h-[90vh] md:portrait:h-[75vh] md:h-screen relative overflow-hidden'>
        <Toggle />

        <span class='absolute top-1/2 left-[20vw] -translate-x-1/2 -translate-y-1/2 z-0 font-oswald font-thin text-dark dark:text-white animate-pulse'>loading...</span>

        <div class='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-full w-full'>
            <img v-if="mobile" src="~/assets/header/day/bg-picture.jpg" class='h-full object-cover' alt="header-bg-picture" />
            <video v-else src="~/assets/header/day/bg-day.mp4" id='vid' class='h-full sm:w-screen object-cover'></video>
        </div>

        <picture class='absolute -bottom-[2vh] -right-[15vw] w-[150vw] 
                                     sm:-bottom-[10vh] sm:-right-[20vw] sm:w-screen
                            transition duration-300 ease-out md:transition-none z-20'>
          <source src="~/assets/header/day/mountain-2.webp" type="image/webp"/>
          <source src="~/assets/header/day/mountain-2.png" type="image/png"/>
          <img src="~/assets/header/day/mountain-2.webp" class='w-full'/>
        </picture>

        <picture class='absolute -left-[30vw] -bottom-[10vw] w-[150vw] 
                                     sm:-left-[15vw] sm:-bottom-[13vh] sm:w-screen
                            transition duration-300 ease-out md:transition-none z-30'>
          <source src="~/assets/header/day/mountain-1.webp" type="image/webp"/>
          <source src="~/assets/header/day/mountain-1.png" type="image/png"/>
          <img src="~/assets/header/day/mountain-1.webp" class='w-full'/>
        </picture>

        <div class='absolute top-[15vh] md:top-[13vh] text-white font-anton uppercase text-center left-1/2 -translate-x-1/2 drop-shadow-lg transition duration-700 ease-out z-40 origin-center'
             id='main-title'>
            <div class='flex items-center justify-center z-10'>
                <div class='portrait:h-[.3vh] landscape:h-[.5vh] portrait:w-[20vw] landscape:w-[14vw] bg-gradient-to-r from-transparent to-offwhite'/>
                <h1 class='text-5xl md:text-[5vw] mx-4 z-10' 
                    contentEditable>
                        Earth
                </h1>
                <div class='portrait:h-[.3vh] landscape:h-[.5vh] portrait:w-[20vw] landscape:w-[14vw] bg-gradient-to-l from-transparent to-offwhite'/>
            </div>
            <h1 class='text-7xl md:text-[10vw] z-0'>wonderer</h1>
        </div>

        <picture class='absolute -left-[95vw] -bottom-[25vw] w-[280vw]
                                     md:portrait:-left-[6vw] md:portrait:-bottom-[5vh] md:portrait:w-[110vw]
                                     sm:-left-[1vw] sm:-bottom-[17vh] sm:w-screen
                                     2xl:-left-[1vw] 2xl:-bottom-[17vh] 2xl:w-screen
                            transition duration-300 ease-out md:transition-none z-50'
                      >
          <source src="~/assets/header/day/person-day.webp" type="image/webp"/>
          <source src="~/assets/header/day/person-day.png" type="image/png"/>
          <img src="~/assets/header/day/person-day.webp" class='w-full' />
      </picture>
    </div>
</template>