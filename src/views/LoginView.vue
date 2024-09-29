<template>
  <div>
    <p>Login</p>
    <button @click="onClick">click</button>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const onClick = () => {
  userStore.isAuthenticated = true

  const from = router.currentRoute.value.query.from || '/'

  router.push(from)
}
</script>
