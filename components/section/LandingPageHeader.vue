<template>
    <div class="h-screen flex flex-col items-center *:z-10">
        
        <div class="flex flex-col items-center mt-[35vh]">
            <div class="text-5xl text-lightText font-bold tracking-[-1px] text-center">
                <p>Driven by <UtilPrimaryTextGradient>passion</UtilPrimaryTextGradient><span class="absolute -mt-12 -ml-4"><LottieSparkles /></span></p>
                <p>I craft stunning <UtilGlowText>designs</UtilGlowText> and reliable <UtilGlowText>code</UtilGlowText>.</p>
            </div>            

            <div class="mt-10 flex gap-10">
                <UiButton><Icon name="solar:user-outline" size="20"/>About Me</UiButton>
                <UiButton primary><Icon name="solar:case-outline" size="20"/>My Work</UiButton>
            </div>

            <Icon name="solar:alt-arrow-down-outline" size="35" class="text-lightText animate-bounce absolute bottom-10"/>
        </div>
        
    </div>
</template>
