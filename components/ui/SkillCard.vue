<template>
    <UiCard>
        <div class="">
            <p class="text-xl text-lightText font-semibold">{{ title }}</p>
            <p class="text-sm text-normalText">{{ description }}</p>
            <div class="mt-3 flex gap-1">
                <Icon v-for="icon of icons" :name="icon" size="30"/>
            </div>
        </div>
    </UiCard>
</template>

<script setup lang="ts">

    defineProps({
        title: String,
        description: String,
        icons: Array<string>
    })

</script>