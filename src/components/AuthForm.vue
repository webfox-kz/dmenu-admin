<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import * as Yup from 'yup'

import AuthInput from '@/components/AuthInput.vue'
import DefaultSubmitButton from '@/components/DefaultSubmitButton.vue'
import api from '@/plugins/api'
import type User from '@/interfaces/user.interface'
import serverErrorMessage from '@/plugins/server-error-message'
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()
const router = useRouter()

const schema = Yup.object().shape({
  email: Yup.string().email('Введите корректный email').required('Введите email').trim(),
  password: Yup.string()
    .required('Введите пароль')
    .min(6, 'Пароль должен быть не менее 6 символов')
    .trim()
})

const isLoading = ref(false)

const { handleSubmit, setFieldError } = useForm({
  validationSchema: schema
})

const submitHandler = handleSubmit(async (values: any) => {
  isLoading.value = true
  try {
    const response = await api.post<{ user: User; token: string }>(
      '/v1/auth/admin/email/login',
      values
    )
    authStore.setToken(response.data.token)
    authStore.setUser(response.data.user)

    router.push({ name: 'home' })
  } catch (e: any) {
    const errors = e.response.data.errors
    if (errors) {
      Object.keys(errors).forEach((key) => {
        setFieldError(key, serverErrorMessage(errors[key]))
      })
    }
  } finally {
    isLoading.value = false
  }
})
</script>
<template>
  <form class="login-form" @submit.prevent="submitHandler">
    <auth-input type="email" name="email" label="Электронная почта" />
    <auth-input type="password" name="password" label="Пароль" />
    <div class="login-form__group">
      <router-link to="/forgot-password" class="default__link">Забыли пароль?</router-link>
    </div>
    <div class="login-form__group login_form__submit">
      <default-submit-button text="Войти" :loading="isLoading" />
    </div>
  </form>
</template>
