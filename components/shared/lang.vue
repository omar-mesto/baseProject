<template>  
    <UApp>  
      <UButton @click="toggleLocale">{{ locale === 'ar' ? 'en' : 'ar' }}</UButton> 
    </UApp>  
  </template>  
  
  <script setup lang="ts">  
  import { useI18n } from 'vue-i18n';
  const { locale, setLocale } = useI18n();  
  
  const toggleLocale = () => {
    setLocale(locale.value === 'ar' ? 'en' : 'ar');
  };
  </script>