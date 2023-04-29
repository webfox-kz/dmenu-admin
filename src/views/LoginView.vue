<script setup lang="ts">
import '@/assets/scss/auth.scss'
import AppLogo from '@/components/AppLogo.vue'
import AuthForm from '@/components/AuthForm.vue'
</script>

<template>
  <main class="login-page">
    <div class="container">
      <div class="welcome">
        <app-logo class="main-logo" />
      </div>
      <div class="login-card">
        <div class="login-card__container">
          <app-logo class="main-logo login-card__logo" />
          <h1 class="login-card__title">Авторизация</h1>
          <auth-form />
        </div>
      </div>
    </div>
  </main>
</template>
