<script setup lang="ts">
import { useAuthStore } from '@/stores'
import { computed } from 'vue'
import AppNavItem from './AppNavItem.vue'

const authStore = useAuthStore()

const user = computed(() => authStore.user)
</script>
<template>
  <div class="app_navbar">
    <div class="app_navbar__container">
      <div class="app_navbar__header">
        <div class="app_navbar__block">
          <div class="user">
            <div class="image">
              <img :src="user?.photo?.path" />
            </div>
            <div class="detail">
              <div class="name detail_item">
                {{ `${user?.firstName} ${user?.lastName}` }}
              </div>
              <div class="email detail_item">{{ user?.email }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="app_navbar__navigation">
        <div class="app_navbar__block">
          <nav class="app_navbar__navigation_main">
            <app-nav-item :link="{ name: 'home' }" icon="home" text="Главная" />
            <app-nav-item :link="{ name: 'registrations' }" icon="add_circle" text="Заявки" />
          </nav>
        </div>
      </div>
      <div class="app_navbar__footer">
        <div class="app_navbar__block">
          <button class="app_navigation__item" @click="authStore.logout">
            <div class="icon">logout</div>
            <div class="text">Выйти</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
