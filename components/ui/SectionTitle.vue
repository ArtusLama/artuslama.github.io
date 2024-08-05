<template>
    <div>

        <p class="text-primary font-medium text-xl"><UtilGlowText>{{ keyword }}</UtilGlowText></p>
        <p class="-mt-2 text-lightText font-medium text-3xl tracking-[-1px]">{{ title }}</p>

    </div>
</template>

<script setup lang="ts">

    defineProps({
        keyword: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    });

</script>