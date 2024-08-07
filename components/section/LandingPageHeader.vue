<template>
    <div class="flex flex-col items-center min-h-screen">

        <div class="flex flex-col items-center pt-[30vh]" id="sec1">
            <UtilBadge>
                <div class="relative">
                    <div class="absolute animate-[ping_1500ms_ease-out_infinite] inset-0 bg-primary/85 w-3 aspect-square rounded-full"></div>
                    <UtilGlow><div class="bg-primary/85 w-3 aspect-square rounded-full"></div></UtilGlow>
                </div>
                <div class="-mt-[1px]"><UtilGlow on-hover>Available for hiring</UtilGlow></div>
            </UtilBadge>

            <div class="mt-4 text-5xl text-lightText font-bold tracking-[-1px] text-center">
                <p>Driven by <UtilPrimaryTextGradient>passion</UtilPrimaryTextGradient><span class="absolute -mt-12 -ml-4"><LottieSparkles/></span></p>
                <p>I craft stunning <UtilGlow>designs</UtilGlow> and reliable <UtilGlow>code</UtilGlow>.</p>
            </div>

            <div class="mt-10 flex gap-10">
                <UiButton><Icon name="solar:user-outline" size="20"/>About Me</UiButton>
                <UiButton primary><Icon name="solar:case-outline" size="20"/>My Work</UiButton>
            </div>


            <UiScrollArrow scroll-to-id="workinprogress-sec" class="absolute bottom-10" />
            
        </div>

        
    </div>
</template>
