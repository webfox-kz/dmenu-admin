<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import '@/assets/scss/auth.scss'
import AppLogo from '@/components/AppLogo.vue'
import ForgotPasswordForm from '@/components/ForgotPasswordForm.vue'

useTitle('Сброс пароля')
</script>
<template>
  <main class="login-page">
    <div class="container">
      <div class="welcome">
        <app-logo class="main-logo" />
      </div>
      <forgot-password-form />
    </div>
  </main>
</template>
