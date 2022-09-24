<script setup>
import { useModeStore } from './store/modeStore';

const mode = useModeStore();

onMounted(() => {
  if(process.client && localStorage.getItem('darkModeStorage') && JSON.parse(localStorage.getItem('darkModeStorage')) === true) {
      window.document.documentElement.classList.add('dark')
      mode.darkMode = true;
  }
})
</script>

<template>
    <Head>
      <link rel="icon" type="image/png" href="/earth-wonderer.png" />
      
      <!-- google font -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Gilda+Display&family=Kaushan+Script&family=Oswald:wght@300;400&display=swap" rel="stylesheet">
      
        <!-- pace js -->
      <!-- <Script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></Script>
      <link rel="stylesheet" href="/loading-bar.css"> -->
          
      <Title>EARTH WONDERER</Title>
    </Head>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
