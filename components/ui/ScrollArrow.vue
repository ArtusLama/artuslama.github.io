<template>

    <div @click="onClick()" class="animate-pulse cursor-pointer w-12 h-12 aspect-square flex items-center justify-center hover:bg-background rounded-full transition-colors p-2 text-lightBackground/65 hover:text-lightBackground/100">
        <Icon name="solar:alt-arrow-down-outline" size="100" class="mt-[3px]" />
    </div>

</template>
<script setup lang="ts">

    const props = defineProps({
        scrollToId: {
            type: String,
            required: true,
        }
    });

    const onClick = () => {
        const element = document.getElementById(props.scrollToId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

</script>