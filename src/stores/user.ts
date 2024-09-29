import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const isAuthenticated = localStorage.getItem('userAuth') || ref(false);
  const userName = localStorage.getItem('username') || ref('');

  return { isAuthenticated, userName }
})
