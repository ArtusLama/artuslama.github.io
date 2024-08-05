<template>

    <button class="text-lightText px-6 py-3 rounded-[12px] flex gap-3 items-center transition-colors backdrop-blur-[16px] drop-shadow-md" :class='primary ? 
        "bg-background border border-borderNormal hover:bg-lightBackground hover:border-borderLight" 
        : "hover:bg-lightBackground border border-borderLight"'>
        <slot/>
    </button>


</template>

<script setup lang="ts">

    defineProps({
        primary: {
            type: Boolean,
            default: false
        }
    });

</script>