<template>

    <div>
        <UiScrollSectionNav :section-ids="['sec1', 'workinprogress-sec']"/>
        <SectionLandingPageHeader/>
        <!--<UiSectionTitle keyword="About Me" title="My Life in a Nutshell"/>-->
        <UtilWorkInProgress class="mt-20"/>
    </div>

</template>
<script setup lang="ts">


   useHead({
        title: 'ArtusDev | Portfolio',
    });

</script>