<script lang="ts" setup>
import { useModeStore } from '~~/store/modeStore';
import gsap from 'gsap';

const mode = useModeStore();

const toggleDark = () => {
    if (process.client) {
        const tryIt = document.querySelector('#tryit') as HTMLDivElement;
        window.document.documentElement.classList.toggle('dark');
        mode.toggleMode();
        tryIt.style.display = 'none';
        localStorage.setItem('darkModeStorage', JSON.stringify(mode.darkMode));
        localStorage.setItem('toggleClicked', 'true');
    }
}

onMounted(() => {
    if(localStorage.getItem('toggleClicked') && process.client) {
        const tryIt = document.querySelector('#tryit') as HTMLDivElement;
        tryIt.style.display = 'none'
    };

    gsap.from('#toggle', {
        duration: 1.3,
        delay: .3,
        y: -100,
        ease: "power4.out"
    })
});

const ToggleEnter = el => {
    console.log(el)
}


</script>

<template>
    <div>
        <transition appear @enter="ToggleEnter">
            <button class='bg-black hover:bg-neutral-900 cursor-point bg-opacity-90 w-auto h-12 md:h-16 absolute top-0 right-0 flex justify-center items-center text-white font-oswald font-light tracking-wide text-base md:text-[1.4vw] px-[3vw] md:px-[1.5vw] landscape:lg:py-[3vh] gap-3 z-50'
                    @click="toggleDark"
                    id="toggle">
                {{!mode.darkMode ? 'dark' : 'light'}} mode
                <img :src="!mode.darkMode ? '../../assets/moon.svg' : '../../assets/sun.svg'" alt="dark mode toggle" class='h-5 md:h-[2vw]' />
            </button>
        </transition>

        <div class='try-it w-[25vw] md:w-[10vw] h-16 absolute top-14 md:top-20 right-0 flex flex-col justify-center items-center cursor-point font-oswald font-light text-[#d9d9d9] text-sm md:text-base z-50'
             id="tryit">
            <img src="~/assets/arrow try.svg" alt="try dark mode img" class='h-6'/>
            try it
        </div>        
    </div>
</template>
