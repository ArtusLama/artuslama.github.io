<template>
    <div class="flex flex-col gap-2 fixed top-[50vh] translate-y-[-50%] left-10 bg-bgColor rounded-full p-2">

        <div v-for="sectionId of props.sectionIds" :id="dotPrefixId + sectionId" @click="onClick(sectionId)" 
            class="cursor-pointer w-4 h-4 rounded-full bg-background border border-borderNormal hover:bg-lightBackground hover:border-borderLight transition-all duration-300">
            
        </div>

    </div>
</template>
<style>
    .active-dot-section {
        height: 2rem;
        background-color: theme("colors.lightBackground");
        border-color: theme("colors.borderLight")
    }
</style>
<script setup lang="ts">

    const props = defineProps({
        sectionIds: {
            type: Array<string>,
            required: true,
        }
    });
    const activeClass: string = "active-dot-section";
    const dotPrefixId: string = "section-dot-";

    const removeActiveSection = () => {
        const elements = document.querySelectorAll(`.${activeClass}`);
        elements.forEach(element => element.classList.remove(activeClass));
    };


    const onClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };
    const onScroll = () => {
        const scrollPosition = window.scrollY;

        props.sectionIds.forEach((sectionId: string) => {
            const element = document.getElementById(sectionId);
            if (element) {
                const sectionTop = element.offsetTop;
                const half_window = window.innerHeight / 2;

                if (scrollPosition > sectionTop - half_window && scrollPosition < sectionTop + half_window) {
                    removeActiveSection();
                    const dot = document.getElementById(dotPrefixId + sectionId);
                    if (dot) dot.classList.add(activeClass);
                    return;
                }
            }
        });
    };

    onMounted(() => {
        window.addEventListener('scroll', onScroll);
        onScroll(); // Initial check
    });
    




</script>