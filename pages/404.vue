<template>
    <div className='fixed top-0 left-0 z-50 w-screen h-screen bg-dark text-white flex flex-col justify-center items-center'>
      <h1 className='font-anton landscape:text-[10vw] portrait:text-[25vw]'>404</h1>
      <button @click="router.go(-1)" className='bg-white text-dark p-2 font-oswald tracking-wide flex flex-row'>
        <img src="~/assets/arrow back.svg" alt="back" className='invert h-[20px] w-auto mr-2 translate-y-1'/> go back
      </button>
    </div>
</template>

<script setup>
    const router = useRoute();
</script>