<template>
  <div class="container">
    <div class="cartoon"></div>
    <div class="info">
      <div class="name">Упс... 404</div>
      <hr class="gold" />
      <div class="text">Этот раздел пока недоступен, &nbsp;
        <nuxt-link to="/">
            <div class="link-home"> возвращайся на главную</div>
        </nuxt-link>
      .</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25rem;
  background: #1B304F;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5), inset 0 0 0 2px #4e5765;
}

.cartoon {
  margin-top: 4rem;
  background: url("../../static/images/mage-warrior.png") no-repeat;
  background-size: contain;
  height: 20rem;
  width: 25rem;
}

.info {
  margin-right: 7rem;
}

.gold {
  height: 1px;
  border: 0;
  background: #715e2b;
}

.name {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(#f5fbff, #bfe6ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text {
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
}

.link-home {
  color: #edb548;
  font-weight: 600;
  &:hover {
    color: white;
  }
}
</style>
