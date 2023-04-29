import { defineStore } from 'pinia'

import type User from '@/interfaces/user.interface'
import * as jwt from '@/plugins/jwt'
import api from '@/plugins/api'

interface State {
  _token: string | null
  _user: User | null
}

const useAuthStore = defineStore({
  id: 'auth',
  state: (): State => ({
    _token: null,
    _user: null
  }),
  getters: {
    token(state) {
      return state._token
    },
    user(state) {
      return state._user
    }
  },
  actions: {
    setToken(token: string) {
      jwt.setToken(token)
      this._token = token
    },
    setUser(user: User) {
      this._user = user
    },
    logout() {
      jwt.removeToken()
      this._token = null
      this._user = null
      this.router.push({ name: 'login' })
    },
    async fetchUser(): Promise<void> {
      if (!jwt.isTokenValid()) {
        this.logout()
        throw new Error('Token is invalid')
      }
      try {
        const response = await api.get<User>('/v1/auth/me')
        this.setUser(response.data)
      } catch (error: any) {
        throw new Error(error)
      }
    }
  }
})

export default useAuthStore
