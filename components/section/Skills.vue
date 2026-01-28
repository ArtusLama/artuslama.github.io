<template>
    <div class="h-screen flex items-center justify-center">

        <div class="flex items-center justify-center gap-4 flex-wrap">

            <UiSkillCard
                title="Frontend Development"
                description="I can create responsive and interactive websites using modern frontend technologies."
                :icons='["logos:nuxt-icon", "logos:vue", "logos:tailwindcss-icon", "logos:typescript-icon", "logos:visual-studio-code"]'
            />

            <UiSkillCard
                title="Backend Development"
                description="I can create RESTful APIs and manage databases using modern backend technologies."
                :icons='["logos:nodejs", "logos:express", "logos:postgresql", "logos:sequelize", "logos:visual-studio-code"]'
            />

            <UiSkillCard
                title="Other Tools"
                description="I can use various tools to make development easier and more efficient."
                :icons='["logos:git-icon", "logos:github-icon", "logos:figma", "logos:adobe-illustrator", "logos:adobe-photoshop"]'
            />

        </div>

    </div>
</template>