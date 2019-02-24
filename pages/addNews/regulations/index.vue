<template>
  <div class="regulations">
    <div class="regulation-header">Правила:</div>
    <div class="rule-points">
      <div class="list">- У новости должна быть основная фотография/скриншот.</div>
      <div class="list">- Нельзя копировать описание новости с других источников.</div>
      <div class="list">- Нельзя присылать незаконченные разработки(карты, моды, текстуры и т.д.).</div>
      <div class="list">- Файлы необходимо загружать на бесплатный сервер (Яндекс.Диск, OneDrive, Google Disk).</div>
      <div class="list">- Любой тип рекламы в посте без уведомления администрации - запрещен.</div>
      <div class="list">- Новость должна быть оформлена в стиле других новостей сайта.</div>
      <div class="list">- Описание должно конкретно описывать то, что вы добавляете, без <br>
                          информации о том как вы старались или не существующих еще объектах. </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~assets/var.scss';

.regulations {
  display: flex;
  flex-direction: column;
  background-color: $primary-bg-2;
  font-size: 25px;
  box-shadow: $shadow-bg;
  border-radius: 5px;
  min-height: 38rem;
  border: 2px solid $primary-bg-1;
  padding: 1.5rem;
  font-size: 1rem;
}

.regulation-header {
  font-size: 1.2rem;
  font-weight: 700;
  color: $primary-color-2;
}

.rule-points {
  padding-top: 0.2rem;
  font-size: .9em;
  color: $secondary-color-1;
}
</style>

