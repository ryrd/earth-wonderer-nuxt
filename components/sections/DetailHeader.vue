<script setup lang="ts">
import gsap from 'gsap';

interface Props {
  image: string,
  DetailHeaderName: string,
  DetailHeadinglocation: string
}

const {image, DetailHeaderName, DetailHeadinglocation} = defineProps<Props>()

const route = useRouter();

onMounted(() => {
    if(process.client && document.querySelector('#back')) {
        gsap.from('#back', {
            duration: 1.8,
            scale: 0,
            ease: "power4.out"
        });
        gsap.from('#scroll-down', {
            duration: 1.7,
            y: -60,
            opacity: 0,
            ease: "power4.out"
        });
}

});
</script>

<template>
    <div class='relative flex items-center w-screen portrait:h-[80vh] landscape:h-screen overflow-hidden'>
        <img class='z-0 object-cover w-full h-full' 
            :src="image"
            alt="heading img"
            />
                
        <div class='absolute w-auto portrait:min-h-[10vh] landscape:h-[25vh] z-10 left-0 bottom-0 bg-dark text-white bg-opacity-10 backdrop-blur flex flex-col justify-center pl-5 pr-6 md:pl-12 md:pr-14 tracking-wide'>
            <div class='absolute left-0 w-2 md:w-5 h-full bg-dark'/>
            <div class='overflow-hidden h-[80%] flex flex-col justify-center'>
                <h6 class='font-oswald text-[3vw] sm:text-[1.5vw] font-light'>
                    {{DetailHeadinglocation}}
                </h6>
                <h1 class='font-anton uppercase text-[11vw] sm:text-[5.8vw] leading-none'>
                    {{DetailHeaderName}}
                </h1>
            </div>
        </div>

        <div class="absolute flex flex-col bottom-3 right-2 md:bottom-7 md:right-4" id="scroll-down">
            <span class="font-oswald font-light tracking-wide text-[2.9vw] md:text-[1.6vw] text-white inline-block mb-3 rotate-90">scroll</span>
            <img class="h-12 md:h-20" src="~/assets/arrow scroll.svg" alt="scroll down indicator"/>
        </div>

        <button class="absolute top-[1.5%] portrait:left-[1%] landscape:left-[2%] landscape:top-[3%] z-10 radial-gradient w-[15vw] h-[15vw] sm:w-[5vw] sm:h-[5vw] flex justify-center items-center cursor-point"
                id="back"
                @click="route.back">
            <img src="~/assets/arrow back.svg" class="h-[50%]" alt="back home button"/>
        </button>
    </div>
</template>