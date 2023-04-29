<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTitle } from '@vueuse/core'

import '@/assets/scss/auth.scss'
import AppLogo from '@/components/AppLogo.vue'
import PasswordChangeForm from '@/components/PasswordChangeForm.vue'

useTitle('Сброс пароля')

const route = useRoute()

const hash = computed(() => route.params.hash)
</script>
<template>
  <main class="login-page">
    <div class="container">
      <div class="welcome">
        <app-logo class="main-logo" />
      </div>
      <password-change-form :hash="hash" />
    </div>
  </main>
</template>
