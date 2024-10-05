<template>
  <div class="signup-wrapper">
    <h2>SIGNUP</h2>
    <div class="signup-field">
      <label for="username" />
      <span class="material-symbols-outlined icon"> account_circle </span>
      <input type="text" name="username" v-model="username" placeholder="Username" />
    </div>
    <div class="signup-field">
      <label for="password" />
      <span class="material-symbols-outlined icon"> key_vertical </span>
      <input type="password" name="password" v-model="password1" placeholder="Password" />
    </div>
    <div class="signup-field">
      <label for="password" />
      <span class="material-symbols-outlined icon"> key_vertical </span>
      <input type="password" name="password" v-model="password2" placeholder="Re-enter password" />
    </div>
    <div class="signup-field error" v-if="error">
      <span class="material-symbols-outlined icon"> error </span>
      <span>{{ error }}</span>
    </div>
    <div class="signup-field">
      <button @click="onClick">signup</button>
    </div>
    <div class="signup-field">
      <div class="links">
        <div class="anchor">
          <router-link to="/login" class="router-link">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user.ts'

const router = useRouter()
const userStore = useUserStore()

const username = ref('')
const password1 = ref('')
const password2 = ref('')
const error = ref('')

const onClick = () => {
  if (password1.value !== password2.value) {
    error.value = 'Passwords not equal '
  } else if (username.value.length < 4 || password1.value.length < 4) {
    error.value = 'Username and password must have minimum of 4 characters '
  } else {
    localStorage.setItem('username', username.value)
    localStorage.setItem('password', password1.value)
    userStore.userName = username
    router.push('/login')
  }
}
</script>

<style lang="scss">
.signup-wrapper {
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

  .signup-field {
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
    border: 1px solid grey;
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
