<template>
  <header class="header">
    <div class="header-kweebec"></div>
    <div class="header-text">Kweebec</div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  color: white;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  margin-top: 4rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.header-kweebec {
  height: 8rem;
  width: 10rem;
  background: url("/images/kweebec.png") no-repeat;
  background-size: 100%;
}

.header-text {
  margin-right: 6rem;
}
</style>
