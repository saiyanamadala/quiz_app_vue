<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { useUserStore } from '../src/stores/user.ts'
import { ref } from 'vue'

const userStore = useUserStore()
const router = useRouter()
const dropdownVisible = ref(false)

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value
}

const logout = () => {
  userStore.isAuthenticated = false
  localStorage.removeItem('userAuth')
  router.push('/login')
}
</script>

<template>
  <header>
    <div v-if="!userStore.isAuthenticated">
      <h1 class="title">Quiz App</h1>
    </div>
    <div v-else class="header">
      <div class="header-item">
        <h1 class="title">Quiz App</h1>
      </div>
      <div class="user-item" @click="toggleDropdown">
        <span class="material-symbols-outlined"> account_circle </span>
        <span>{{ userStore.userName.split(' ')[0] }}</span>
        <div v-if="dropdownVisible" class="dropdown">
          <ul>
            <li @click="logout">Logout</li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;

  .user-item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  .dropdown {
    position: absolute;
    right: 0;
    top: 100%;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
    padding: 5px 5px;
  }

  .dropdown ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .dropdown li {
    padding: 10px 20px;
    cursor: pointer;
  }

  .dropdown li:hover {
    background-color: #f0f0f0;
  }
}
</style>
