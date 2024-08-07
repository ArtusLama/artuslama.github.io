<template>
    
    <span class="group">
        <span class="absolute blur-[10px] pointer-events-none select-none transition-opacity" :class="onHover ? 'opacity-25 group-hover:opacity-75' : 'opacity-75'">
            <slot />
        </span>
        <slot />
    </span>

</template>
<script setup lang="ts">

    defineProps({
        onHover: {
            type: Boolean,
            default: false
        }
    });

</script>