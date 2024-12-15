<template>  
    <UApp>  
      <button @click="toggleLocale">{{ locale === 'ar' ? 'en' : 'ar' }}</button> 
    </UApp>  
  </template>  
  
  <script setup lang="ts">  
  import { ref } from 'vue';  
  import { useI18n } from 'vue-i18n';  
  const { t, locale, setLocale } = useI18n();  
  
  const toggleLocale = () => {
    setLocale(locale.value === 'ar' ? 'en' : 'ar');
  };
  </script>