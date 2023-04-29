<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import * as Yup from 'yup'

import AppLogo from './AppLogo.vue'
import AuthInput from './AuthInput.vue'
import DefaultSubmitButton from './DefaultSubmitButton.vue'
import api from '@/plugins/api'
import { useRouter } from 'vue-router'
import serverErrorMessage from '@/plugins/server-error-message'

const props = defineProps({
  hash: {
    type: String,
    required: true
  }
})

const router = useRouter()

const schema = Yup.object().shape({
  password: Yup.string()
    .required('Введите пароль')
    .min(6, 'Пароль должен быть не менее 6 символов')
    .trim(),
  passwordConfirmation: Yup.string()
    .required('Подтвердите пароль')
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
    .trim()
})

const isLoading = ref(false)
const changed = ref(false)
const timerCount = ref(5)
const HashError = ref('')

const { handleSubmit, setFieldError } = useForm({
  validationSchema: schema
})

const submitHandler = handleSubmit(async (values: any) => {
  isLoading.value = true
  try {
    await api.post('/v1/auth/reset/password', {
      ...values,
      hash: props.hash
    })
    changed.value = true
    const timer = setInterval(() => {
      timerCount.value--
      if (timerCount.value === 0) {
        clearInterval(timer)
        router.push({ name: 'login' })
      }
    }, 1000)
  } catch (e: any) {
    const error = e.response.data.errors
    if (error) {
      Object.keys(error).forEach((key) => {
        console.log('key', key)

        if (key === 'hash') {
          if (error[key] === 'notFound') {
            HashError.value = 'Ссылка для сброса пароля недействительна'
          } else {
            HashError.value = serverErrorMessage(error[key])
          }
        } else {
          setFieldError(key, serverErrorMessage(error[key]))
        }
      })
    }
  } finally {
    isLoading.value = false
  }
})
</script>
<template>
  <div class="login-card">
    <div class="login-card__container">
      <app-logo class="main-logo login-card__logo" />
      <h1 class="login-card__title">
        {{ changed ? 'Пароль успешно изменен' : 'Сбросьте пароль' }}
      </h1>
      <section v-if="changed">
        <p>Вы будете перенаправлены в старницу авторизации через {{ timerCount }} секунд</p>
      </section>
      <form class="login-form" @submit.prevent="submitHandler" v-else>
        <p v-show="HashError" class="login-form__error">
          {{ HashError }}
        </p>
        <auth-input value="GgdsauOP089" type="password" name="password" label="Придумайте пароль" />
        <auth-input
          value="GgdsauOP089"
          type="password"
          name="passwordConfirmation"
          label="Подтвердите пароль"
        />
        <div class="login-form__group login_form__submit">
          <default-submit-button text="Сбросить" :loading="isLoading" />
        </div>
      </form>
    </div>
  </div>
</template>
