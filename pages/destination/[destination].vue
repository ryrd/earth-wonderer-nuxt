<script setup>
const route = useRoute();
</script>

<template>
    <div>
        destination {{route.params.destination}}
    </div>
</template>
