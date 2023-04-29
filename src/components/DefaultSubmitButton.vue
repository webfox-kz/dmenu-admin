<script setup lang="ts">
import { toRef, defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const isLoading = toRef(props, 'loading')
</script>
<template>
  <button type="submit" class="default__submit-button" :disabled="isLoading">
    <div class="text" :class="{ loading: loading }">
      {{ text }}
    </div>
  </button>
</template>
