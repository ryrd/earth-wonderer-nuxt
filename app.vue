<script setup>
import { useModeStore } from './store/modeStore';

const mode = useModeStore();

onMounted(() => {
  if(process.client && localStorage.getItem('darkModeStorage') && JSON.parse(localStorage.getItem('darkModeStorage')) === true) {
      window.document.documentElement.classList.add('dark')
      mode.darkMode = true;
  }
})
if(process.client){
  const html = window.document.documentElement;
  const preloader = document.querySelector('#preloader');

  html.style.height = '100vh';
  html.style.overflowY = 'hidden';

  Pace.on('done', () => {
    let title;
    if (document.querySelector('#main-title')) {
      title = document.querySelector('#main-title');
      
      title.style.opacity = '0';
      title.style.transform = 'scale(.6) translate(-73%, 0%)';
      title.style.filter = 'blur(30px)';

      
      setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'scale(1) translate(-50%, 0%)';
        title.style.filter = 'blur(0px)';
      }, 700);
    }

    html.style.height = 'auto';
    html.style.overflowY = 'scroll';

    preloader.style.position = 'absolute';
    preloader.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
    
    setTimeout(() => {
      document.querySelector('link[href$="/loading-bar.css"]') && document.querySelector('link[href$="/loading-bar.css"]').remove();
    }, 1000);
  });
}
</script>

<template>
    <Head>
      <link rel="icon" type="image/png" href="./public/earth-wonderer.png" />
      
      <!-- google font -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Gilda+Display&family=Kaushan+Script&family=Oswald:wght@300;400&display=swap" rel="stylesheet">
      
        <!-- pace js -->
      <Script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></Script>
      <link rel="stylesheet" href="/loading-bar.css">
          
      <Title>EARTH WONDERER</Title>
    </Head>

    <NuxtLayout>
      <div id="preloader">
        <h1 id="preloader-text">LOADING</h1>
      </div>
      <NuxtPage />
    </NuxtLayout>
    
</template>
