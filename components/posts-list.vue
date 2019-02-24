<template>
  <div class="lists-container">
    <div class="bg-lists-container">
      <div v-for="(item, key) in list" :key="key" class="list-post-container">
        <nuxt-link :to="item.path">
          <div class="list-post">
            <div class="theme-box">
              <img :src="item.cover" :alt="item.name" class="list-img">
              <div class="theme"></div>
            </div>
            <div class="list-content">
              <div class="list-name">{{ item.name }}</div>
              <div class="list-date">{{ item.created.substr(0,10) }}</div>
            </div>
          </div>
        </nuxt-link>
        <hr class="silver" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>


<style lang="scss" scoped>
.lists-container {
  min-width: 33%;
  border-radius: 5px;
  padding: 1.35rem 0 1.35rem 0;
}

.bg-lists-container {
  background: rgba(210, 233, 247, 0.04);
}

.list-post-container {
  display: flex;
  flex-direction: column;
}

.list-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list-post {
  display: flex;
  height: 6rem;
  padding: 0 1.2rem 0 1.2rem;
  cursor: pointer;
  padding: 0.5rem 0 0.5rem;
  &:hover {
    background: rgba(210, 233, 247, 0.04);
  }
}

.list-img {
  height: 100%;
  width: 10rem;
  border: 1px solid #473e26;
  position: absolute;
  margin: 0;
}

.theme-box {
  position: relative;
  margin-right: 0.9rem;
  margin-left: 0.9rem;
  min-width: 10rem;
}

.theme {
  position: absolute;
  z-index: 2;
  height: 100%;
  margin-top: 2px;
  width: 100%;
  background: linear-gradient(180deg, rgba(12, 12, 12, 0) 67.11%, rgba(12, 12, 12, 0.7) 93.58%);
}

.list-name {
  color: #d29f32;
  font-weight: 700;
  font-size: 1em;
  padding-right: 0.4rem;
  line-height: 1.5em;
}

.list-date {
  color: #9eb2c0;
  font-size: .9em;
  font-weight: 400;
  margin-top: 0.5rem;
}

.silver {
  border: 0;
  height: 1px;
  margin: 0.4rem 0 0.4rem;
  background: #36455c;
}
</style>
