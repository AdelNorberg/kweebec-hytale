<template>
  <div class="container">
    <div class="cartoon"></div>
    <div class="info">
      <div class="name">Упс... {{ error.statusCode }}</div>
      <hr class="gold" />
      <div class="text">Этот раздел отсутствует или он пока недоступен. &nbsp;
        <nuxt-link to="/">
            <div class="link-home"> Вернуться на главную </div>
        </nuxt-link>
      ?</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>


<style lang="scss" scoped>
@import '~assets/var.scss';

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #1B304F;
  box-shadow: $shadow-bg;
  border: 2px solid $primary-bg-1; 
  min-height: 40rem;
}

.cartoon {
  margin-top: 4rem;
  background: url("~static/images/mage-warrior.png") no-repeat;
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
  background: $primary-color-1;
}

.name {
  font-size: 3.5rem;
  font-weight: 800;
  background: $secondary-g;
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
  color: $primary-color-2;
  font-weight: 600;
  &:hover {
    color: white;
  }
}
</style>
