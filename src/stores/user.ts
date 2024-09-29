import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const isAuthenticated = ref(false);
  const userName = ref('');

  return { isAuthenticated, userName }
})
