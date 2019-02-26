<template>
  <div class="container">
    <div class="tabs">
      <nuxt-link class="header" to="/signin">Авторизация</nuxt-link>
      <div class="header">Регистрация</div>
    </div>
    <form action="" class="form" @submit.prevent="submit">
      <hr class="gold" />
      <div class="inputs-container">
        <div class="input-container">
          <label class="label">Никнейм</label>
          <div class="fu"></div>
          <input class="input-in-container input" type="text" name="text" placeholder="Введите ник..." v-model.trim="name">
          <div v-if="errorName" class="error">{{ errorName }}</div>
        </div>
        
        <div class="input-container">
          <label class="label">Почта</label>
          <div class="fu"></div>
          <input class="input-in-container input" type="text" name="email" placeholder="Введите почту..." v-model.trim="email">
          <div v-if="errorEmail" class="error">{{ errorEmail }}</div>
        </div>
      </div>

      <label class="label">Пароль</label>
      <input class="input" type="password" placeholder="Введите пароль..." v-model.trim="password">
      <div v-if="errorPassword" class="error">{{ errorPassword }}</div>
      
      <label class="label">Повторите пароль</label>
      <input class="input" type="password" placeholder="Введите пароль..." v-model.trim="repeat">
      <div v-if="errorRepeat" class="error">{{ errorRepeat }}</div>
      
      <div class="box-button">
        <button class="button">Отправить</button>
      </div>
      <div v-if="getError" class="errorBottom">{{ getError }}</div>
    </form>
  </div>
</template>

<script>
import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators'

export default { 
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repeat: '',
      errorName: '',
      errorEmail: '',
      errorPassword: '',
      errorRepeat: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(14)
    },
    email: {
      required,
      email,
      maxLength: maxLength(30)
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(30)
    },
    repeat: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    submit() {
      if(!this.$v.name.required) {
        this.errorName = 'Введите имя'
        return
      } else if(!this.$v.name.minLength) {
        this.errorName = 'Нужно минимум 4 символа'
        return
      } else if(!this.$v.name.maxLength) {
        this.errorName = 'Более 14 символов недопустимо'
        return
      } else {
        this.errorName = ''
      }

      if(!this.$v.email.required) {
        this.errorEmail = 'Введите почту'
        return
      } else if(!this.$v.email.maxLength) {
        this.errorEmail = 'Более 30 символов недопустимо'
        return
      } else if(!this.$v.email.email) {
        this.errorEmail = 'Адрес почты введен некорректно'
        return
      } else {
        this.errorEmail = ''
      }

      if(!this.$v.password.required) {
        this.errorPassword = 'Пароль неккоректен'
        return
      } else if(!this.$v.password.minLength) {
        this.errorPassword = 'Минимальное количество символов в пароле 8'
        return
      } else if(!this.$v.password.maxLength) {
        this.errorPassword = 'Максимальное количество символов в пароле 30'
        return
      } else {
        this.errorPassword = ''
      }

      if(!this.$v.repeat.sameAsPassword) {
        this.errorRepeat = 'Неверно введен повтор пароля'
        return
      } else {
        this.errorRepeat = ''
      }

      this.$store.dispatch('auth/signup', {
        email: this.email, password: this.password, nickname: this.name
      })
    }
  },
  computed: {
    getError() {
      return this.$store.state.auth.error
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../../assets/var.scss';

.container {
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

.inputs-container {
  display: flex;
  flex-direction: row;
}

.input-in-container:first-child {
  padding-right: 2rem;
}

.form {
  display: flex;
  flex-direction: column;
  width: 30rem;
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
  width: 100%;
}

.input-container {
  &:nth-child(1) {
    width: 45%
  }
  &:nth-child(2) {
    width: 45%;
    margin-left: 3rem;
  }
}

.tabs {
  display: flex;
  font-display: row;
  justify-content: space-around;
  width: 25rem;
}

.header {
  position: relative;
  background: $secondary-g;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 1.7rem;
  text-align: center;
  transition: 0.5s;
  &:nth-child(1):hover {
    background: $primary-g;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:nth-child(2) {
    background: $primary-g;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
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

.message {
  text-align: center;
}

.fu {
  height: 0.5rem;
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