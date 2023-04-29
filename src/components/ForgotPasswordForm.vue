<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import * as Yup from 'yup'

import AuthInput from '@/components/AuthInput.vue'
import AppLogo from '@/components/AppLogo.vue'
import DefaultSubmitButton from './DefaultSubmitButton.vue'
import api from '@/plugins/api'
import serverErrorMessage from '@/plugins/server-error-message'

const schema = Yup.object().shape({
  email: Yup.string().email('Введите корректный email').required('Введите email').trim()
})

const isLoading = ref(false)
const mailSent = ref(false)

const { handleSubmit, setFieldError } = useForm({
  validationSchema: schema
})

const submitHandler = handleSubmit(async (values: any) => {
  isLoading.value = true
  try {
    await api.post('/v1/auth/forgot/password', values)
    mailSent.value = true
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
  <div class="login-card">
    <section v-if="mailSent" class="sent-section">
      <p class="sent-section__icon">
        <span class="icon"> mark_email_read </span>
      </p>
      <h1 class="sent-section__title">Письмо отправлено</h1>
      <p class="sent-section__text">
        Письмо с инструкциями по сбросу пароля отправлено на вашу электронную почту
      </p>
      <router-link to="/login" class="default__link">Войти в аккаунт</router-link>
    </section>
    <div class="login-card__container" v-else>
      <app-logo class="main-logo login-card__logo" />

      <h1 class="login-card__title">Сброс пароля</h1>
      <form class="login-form" @submit.prevent="submitHandler">
        <auth-input type="email" name="email" label="Электронная почта" />
        <div class="login-form__group">
          <router-link to="/login" class="default__link"> Войти в аккаунт </router-link>
        </div>
        <div class="login-form__group login_form__submit">
          <default-submit-button text="Сбросить пароль" :loading="isLoading" />
        </div>
      </form>
    </div>
  </div>
</template>
