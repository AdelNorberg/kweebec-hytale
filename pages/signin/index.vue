<template>
  <div class="container">
    <div class="tabs">
      <div class="header">Авторизация</div>
      <nuxt-link class="header" to="/signup">Регистрация</nuxt-link>
    </div>
    <form action="" class="form">
      <hr class="gold" />
      <label class="label">Почта</label>
      <input class="input" type="text" name="email" placeholder="Введите почту...">
      <label class="label">Пароль</label>
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40rem;
  max-width: 100%;
  background: #1B304F;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5), inset 0 0 0 2px #4e5765;
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
  background: linear-gradient(#ebf7ff, #c8e9ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-size: 1.5em;
  text-align: center;
  &:nth-child(2):hover {
    background: linear-gradient(#ffe98d, #e19f27);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:nth-child(1) {
    background: linear-gradient(#ffe98d, #e19f27);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.label {
  margin-bottom: .5em;
  color: #b7cedd;
}

.input {
  padding: .8em 1em;
  margin-bottom: 1em;
  border: 1px solid #302f2c;
  border-radius: 4px;
  background: #0c1523;
  box-sizing: border-box;
  font-size: .9em;
  color: #b7cedd;
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
  border: 1px solid #a17f3c;
  background: linear-gradient(to bottom, #3583b4, #225b8b);
  box-sizing: border-box;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    background: linear-gradient(to bottom, #4c8db6, hsl(207, 59%, 36%));
  }
}
</style>