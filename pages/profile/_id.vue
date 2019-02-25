<template>
  <div class="container-page">
    <profile-bar />
    <div class="container-right">
      <div class="right-header">
        Достижения
      </div>
      <div class="right-content">
        <div v-for="(item, key) in list" :key="key" class="item-container">
          Достижение здесь
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileBar from '~/components/profile-bar'

export default {
  components: {
    profileBar
  },
  data() {
    return {
      list: [1,2,3,4,5]
    }
  }
}
</script>


<style lang="scss" scoped>
.container-page {
  display: flex;
  flex-direction: row;
}

.container-right {
  min-width: 33%;
}

.right-header {
  height: 3rem;
  background: rgba(210, 233, 247, 0.08);
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}

.right-content {
  min-height: 35rem;
}

.item-container {
  margin-top: 0.5rem;
  height: 5rem;
  background: rgba(210, 233, 247, 0.04);
  padding: 0.4rem;
}

</style>
