<template>

    <ClientOnly>
        <LottieAnimation 
            :animation-data="SparkleAnimation"
            :height="100"
            :width="100" />
    </ClientOnly>

</template>
<script setup lang="ts">
    import SparkleAnimation from "@/public/lotties/SparkleAnimation.json";
</script>