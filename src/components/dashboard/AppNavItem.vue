<script setup lang="ts">
import { defineProps } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
defineProps<{
  link: RouteRecordRaw
  text: string
  icon: string
}>()
</script>
<template>
  <router-link
    :to="link"
    class="app_navigation__item"
    exact-active-class="app_navigation__item--active"
    active-class=""
  >
    <div class="icon">
      {{ icon }}
    </div>
    <div class="text">
      {{ text }}
    </div>
  </router-link>
</template>
