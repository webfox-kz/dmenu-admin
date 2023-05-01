<script setup lang="ts">
import '@/assets/scss/app.scss'
import AppNavbar from './dashboard/AppNavbar.vue';
</script>
<template>
  <main class="app">
    <app-navbar />

    <div class="app_content">
      <slot />
    </div>
  </main>
</template>
