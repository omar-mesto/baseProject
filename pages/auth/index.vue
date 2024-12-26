<script setup lang="ts">
import { loginSchema } from '~/schema';
const { t } = useI18n(); 

const state = reactive<LoginForm>({email:'',password:''})
const toast = useToast()
async function onSubmit() {
  toast.add({ title: 'Success', description: t('The form has been submitted.'),color:'success' })
}
</script>
<template>  
  <UContainer>  
    <div class="h-dvh flex justify-center items-center">
      <UForm class="border-2 px-16 rounded-xl border-emerald-600" :schema="loginSchema" :state="state" @submit="onSubmit" >  
        <p class="text-5xl pt-5 text-center">{{ $t('Login') }}</p>  
        <div class="w-sm grid justify-center mt-5">  
          <UFormField :label="t('email')" name="email">  
            <UInput v-model="state.email" class="w-sm" />  
          </UFormField>  
          <UFormField :label="t('password')" name="password" class="my-2">  
            <UInput v-model="state.password" class="w-sm" />  
          </UFormField>  
          <UButton type="submit" class="flex my-8 justify-center w-full">{{ $t('Submit') }}</UButton>  
        </div>  
      </UForm> 
    </div>
  </UContainer>  
</template>