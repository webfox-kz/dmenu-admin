<script setup lang="ts">
import { useField } from 'vee-validate'
import { defineProps, toRef } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const name = toRef(props, 'name')

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange
} = useField(name, undefined, {
  initialValue: props.value
})
</script>
<template>
  <div class="login-form__group">
    <label :for="name" class="login-form__label">{{ label }}</label>
    <input
      autocomplete="off"
      class="login-form__input"
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      @input="handleChange"
      @blur="handleBlur"
    />
    <p v-show="errorMessage" class="login-form__error">
      {{ errorMessage }}
    </p>
  </div>
</template>
