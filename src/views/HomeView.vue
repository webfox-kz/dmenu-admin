<script setup lang="ts">
import { useAuthStore } from '@/stores'
import { computed } from 'vue'

const authStore = useAuthStore()

const user = computed(() => authStore.user)
</script>
<template>
  <div class="home" style="padding: 1rem">
    <h1>Добро пожаловать, {{ `${user?.firstName} ${user?.lastName}` }}!</h1>
    <p>
      <button class="default__submit-button" @click="authStore.logout">Выйти</button>
    </p>
  </div>
</template>
