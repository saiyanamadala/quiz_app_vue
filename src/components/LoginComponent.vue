<template>
  <div class="login-wrapper">
    <h2>SIGN IN</h2>
    <div class="login-field">
      <label for="username" />
      <span class="material-symbols-outlined icon"> account_circle </span>
      <input type="text" name="username" v-model="username" />
    </div>
    <div class="login-field">
      <label for="password" />
      <span class="material-symbols-outlined icon"> key_vertical </span>
      <input type="password" name="password" v-model="password" />
    </div>
    <div class="login-field">
      <button @click="onClick">Login</button>
    </div>
    <div class="login-field">
      <div class="links">
        <div class="anchor">
          <a>Forgot Password</a>
        </div>
        <div class="anchor">
          <a>SignUp</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const userStore = useUserStore()
const router = useRouter()
const username = ref('')
const password = ref('')

const onClick = () => {
  userStore.isAuthenticated = true

  const from = router.currentRoute.value.query.from || '/'

  router.push(from)
}
</script>

<style lang="scss">
.login-wrapper {
  $heading-color: black;
  background-color: rgb(230, 235, 232);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 90%;
  left: 50%;
  transform: translate(-50%);
  max-width: 400px;
  border-radius: 5px;
  padding: 10px;

  h2 {
    color: $heading-color;
  }

  .login-field {
    display: flex;
    justify-content: center;
    width: 80%;
    position: relative;

    .links {
      .anchor {
        font-size: medium;
        flex: 1;
        text-align: center;
      }
    }
  }

  input {
    width: 100%;
    padding: 10px;
    padding-left: 30px;
    border-radius: 5px;
    border: none;
    font-size: medium;
  }

  .icon {
    position: absolute;
    left: 5px;
    top: 20%;
    color: rgba(0, 0, 0, 0.6);
  }

  button {
    background-color: $heading-color;
    color: white;
    font-size: medium;
    height: 30px;
    width: 80%;
    padding: 0;
    border: none;
    border-radius: 5px;
  }
}
</style>
