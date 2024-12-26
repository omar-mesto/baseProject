<script setup>
import * as locales from '@nuxt/ui/locale';
const { locale } = useI18n()

const lang = computed(() => locales[locale.value].code)
const dir = computed(() => locales[locale.value].dir)

useHead({
  htmlAttrs: {
    lang,
    dir
  } 
})
</script>
<template>
  <UApp :locale="locales[locale]" style="min-height: 100vh !important;max-height: 100vh !important;">
    <SharedLang/>
    <NuxtPage />
  </UApp>
</template>