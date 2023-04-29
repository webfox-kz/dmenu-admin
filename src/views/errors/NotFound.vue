<script setup lang="ts">
import '@/assets/scss/error-page.scss'
import { useTitle } from '@vueuse/core'

useTitle('Страница не найдена')
</script>
<template>
  <main class="error-page">
    <h1 class="error-page__title">Ошибка 404 <span class="sad">:(</span></h1>
    <div class="error-page__sub">
      <p>Запрошенная страница куда то скрылась...</p>
      <p>
        <router-link to="/" class="default__link"
          >Вы можете переключиться на главную страницу</router-link
        >
      </p>
    </div>
    <img src="/simpson.gif" alt="404" class="error-page__image" />
  </main>
</template>
