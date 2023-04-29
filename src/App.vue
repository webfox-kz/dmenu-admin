<script setup lang="ts">
import { RouterView } from 'vue-router'
import useGlobalStore from './stores/modules/global.store'

const globalStore = useGlobalStore()
</script>

<template>
  <div class="progress-bar" v-show="globalStore.loading" />
  <RouterView />
</template>
