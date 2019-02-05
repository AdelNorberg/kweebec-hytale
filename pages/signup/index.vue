<template>
  <div class="container">
    <div class="tabs">
      <nuxt-link class="header" to="/signin">Авторизация</nuxt-link>
      <div class="header">Регистрация</div>
    </div>
    <form action="" class="form">
      <hr class="gold" />
      <div class="inputs-container">
        <div class="input-container">
          <label class="label">Никнейм</label>
          <div class="fu"></div>
          <input class="input-in-container input" type="text" name="text" placeholder="Введите ник...">
        </div>
        <div class="input-container">
          <label class="label">Почта</label>
          <div class="fu"></div>
          <input class="input-in-container input" type="text" name="email" placeholder="Введите почту...">
        </div>
      </div>
      <label class="label">Пароль</label>
      <input class="input" type="password" placeholder="Введите пароль...">
      <label class="label">Повторите пароль</label>
      <input class="input" type="password" placeholder="Введите пароль...">
      <div class="box-button">
        <button class="button">Отправить</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    width: 50%
  }
  &:nth-child(2) {
    margin-left: 2rem;
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

.fu {
  height: 0.5rem;
}
</style>