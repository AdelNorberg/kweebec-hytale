<template>
  <div class="moderation">
    <div class="tab-nav">
      <div class="tab">Посты</div>
      <div class="tab">Недоступно</div>
      <div class="tab">Недоступно</div>
      <div class="tab">Недоступно</div>
      <div class="tab">Недоступно</div>
    </div>
    <div class="list-container">
      <div v-for="(item, key) in posts" class="list" :key="key">
        <div class="creator">Andrey</div>
        <div class="name">Adsad AsdsaA hdfh df qykj kghj</div>
        <div class="category">Моды</div>
        <div class="date">12.12.12</div>
        <div class="view">Посмотреть</div>
        <div class="delete">Удалить</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/var.scss';

.moderation {
  display: flex;
  flex-direction: column;
  min-height: 40rem;
  max-width: 100%;
  background: $primary-bg-2;
  box-shadow: $shadow-bg;
  border: 2px solid $primary-bg-1; 
  color: $secondary-color-2;
}

.tab-nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-weight: 600;
  font-size: 1.4rem;
  padding: 0.9rem;
  margin-bottom: 2rem;
}

.tab {
  cursor: pointer;
  &:first-child {
    color: $primary-color-2
  }
  &:hover {
    color: $primary-color-2
  }
}

.list-container {
  margin-bottom: 2rem;
}

.list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.5rem;
}

.creator {
  width: 15%;
  padding-left: 2rem;
}

.name {
  width: 65%;
}

.category {
  width: 10%;
}

.date {
  width: 10%;
}

.view {
  width: 10%;
  font-weight: 500;
  color: #17afdd;
  cursor: pointer;
}

.delete {
  width: 10%;
  font-weight: 500;
  color: hsl(350, 81%, 48%);
  cursor: pointer;
}
</style>
