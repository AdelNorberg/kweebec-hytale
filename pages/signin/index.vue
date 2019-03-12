<template>
  <div class="container">
    <div class="tabs">
      <div class="header">Авторизация</div>
      <nuxt-link class="header" to="/signup">Регистрация</nuxt-link>
    </div>
    <form action="" class="form" @submit.prevent="submit">
      <hr class="gold" />
      
      <label class="label">Почта</label>
      <input 
        v-model.trim="email"
        class="input" 
        type="text" 
        name="email" 
        placeholder="Введите почту...">
      <div v-if="error" class="error">{{ error }}</div>
      <label class="label">Пароль</label>
      <input 
        v-model.trim="password"
        type="password" 
        placeholder="Введите пароль..."
        class="input">
      <div v-if="errorSec" class="error">{{ errorSec }}</div>
      <div class="box-button">
        <button class="button">Отправить</button>
      </div>
      <div v-if="getError" class="errorBottom">{{ getError }}</div>
    </form>
    <loading-bg :active="getLoading"/>
  </div>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
  components: {
    loadingBg: () => import('~/components/loading-bg')
  },
  data() {
    return {
      email: '',
      password: '',
      error: '',
      errorSec: ''
    }
  },
  validations: {
    email: {
      required,
      email,
      maxLength: maxLength(30)
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(30)
    }
  },
  methods: {
    submit() {
      if(!this.$v.email.required) {
        this.error = 'Введите почту'
        return
      } else if(!this.$v.email.maxLength) {
        this.error = 'Более 30 символов недопустимо'
        return
      } else if(!this.$v.email.email) {
        this.error = 'Адрес почты введен некорректно'
        return
      } else {
        this.error = ''
      }

      if(!this.$v.password.required) {
        this.errorSec = 'Пароль неккоректен'
        return
      } else if(!this.$v.password.minLength) {
        this.errorSec = 'Минимальное количество символов в пароле 8'
        return
      } else if(!this.$v.password.maxLength) {
        this.errorSec = 'Максимальное количество символов в пароле 30'
        return
      } else {
        this.errorSec = ''
      }

      this.$store.dispatch('auth/signin', {email: this.email, password: this.password})
    }
  },
  computed: {
    getError() {
      return this.$store.state.auth.error
    },
    getLoading() {
      return this.$store.state.auth.loading
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../../assets/var.scss';

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40rem;
  max-width: 100%;
  background: $primary-bg-2;
  box-shadow: $shadow-bg;
  border-radius: 5px;
}

.gold {
  height: 1px;
  border: 0;
  background: #715e2b;
  margin-bottom: 1rem;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
}

.form {
  display: flex;
  flex-direction: column;
  width: 25rem;
}

.tabs {
  display: flex;
  font-display: row;
  justify-content: space-around;
  width: 25rem;
  margin-bottom: -1rem;
}

.header {
  position: relative;
  background: $secondary-g;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  &:nth-child(2):hover {
    background: $primary-g;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:nth-child(1) {
    background: $primary-g;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.label {
  margin-bottom: .5em;
  color: $secondary-color-1;
}

.input {
  padding: .8em 1em;
  margin-bottom: 1em;
  border: 1px solid #302f2c;
  border-radius: 4px;
  background: #0c1523;
  box-sizing: border-box;
  font-size: .9em;
  color: $secondary-color-1;
  transition: border 0.2s, background 0.2s, box-shadow 0.2s, color 0.2s;
}

.box-button {
  text-align: center;
}

.button {
  display: inline-block;
  position: relative;
  color: white;
  font-weight: 700;
  width: 10rem;
  font-size: 1.3rem;
  z-index: 0;
  height: 2.7rem;
  padding: 0.1rem 1.2em 0 1.2em;
  margin-right: 0.2rem;
  margin-top: 1rem;
  border-radius: 5px;
  border: 1px solid $primary-color-1;
  background: linear-gradient(to bottom, #3583b4, #225b8b);
  box-sizing: border-box;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    background: linear-gradient(to bottom, #4c8db6, hsl(207, 59%, 36%));
  }
}

.error {
  color: #e43d59;
  font-weight: 300;
  margin-top: -0.7rem;
  padding-left: 0.5rem;
}

.errorBottom {
  color: #e43d59;
  font-weight: 400;
  text-align: center;
  margin-top: 0.7rem;
}
</style>