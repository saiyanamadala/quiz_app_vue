<template>
  <div class="login-wrapper">
    <h2>SIGN IN</h2>
    <div class="login-field">
      <label for="username" />
      <span class="material-symbols-outlined icon"> account_circle </span>
      <input type="text" name="username" v-model="username" placeholder="Username" />
    </div>
    <div class="login-field">
      <label for="password" />
      <span class="material-symbols-outlined icon"> key_vertical </span>
      <input type="password" name="password" v-model="password" placeholder="Password" />
    </div>
    <div class="login-field error" v-if="error">
      <span class="material-symbols-outlined icon"> error </span>
      <span>{{ error }}</span>
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
          <router-link to="/signup" class="router-link">SignUp</router-link>
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
const error = ref('')

const onClick = () => {
  if (username.value.length < 4 || password.value.length < 4) {
    error.value = 'Username and password must have minimum of 4 characters '
  } else {
    const storedUsername = localStorage.getItem('username')
    const storedPassword = localStorage.getItem('password')
    if (!storedUsername) {
      error.value = 'Please signup'
    } else {
      if (username.value === storedUsername && password.value === storedPassword) {
        localStorage.setItem('userAuth', true)
        userStore.isAuthenticated = true
        const from = router.currentRoute.value.query.from || '/'
        router.push(from)
      } else {
        error.value = 'Invalid credentails'
      }
    }
  }
}
</script>

<style lang="scss">
.login-wrapper {
  background-color: var(--form-background);
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
    color: var(--heading-color);
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

        .router-link {
          text-decoration: none;
        }
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
    color: var(--icon-color);
  }

  button {
    background-color: var(--heading-color);
    color: var(--button-text-color);
    font-size: medium;
    height: 30px;
    width: 80%;
    padding: 0;
    border: none;
    border-radius: 5px;
  }

  .error {
    background-color: var(--error-color);
    border-radius: 5px;
    padding: 10px;
    text-align: start;
    font-size: medium;
    width: auto;
    padding-left: 30px;
  }
}
</style>
