<script lang="ts">
export default defineComponent({
    props: {
        mapLink: String
    }
})
</script>

<template>
    <iframe :src="`https://www.google.com/maps/embed?pb=${mapLink}`"
            width='100%'
            height='100%'
            style="border:0;"
            loading="lazy"
            class="z-10 cursor-point">
    </iframe>
</template>