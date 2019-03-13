<template>
  <transition name="fade" v-if="active">
    <div class="loading-container">
      <loading class="loading-icon"/>
    </div>
  </transition>
</template>

<script>
import loading from '~/assets/icons/loading'

export default {
  components: {
    loading
  },
  props: {
    active: Boolean
  }
}
</script>

<style lang="scss" scoped>
.loading-container {
  position: absolute;
  display: flex;
  background: hsla(216, 49%, 21%, 0.753);
  height: 100%;
  z-index: 2020;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.loading-icon {
  height: 5rem;
  width: 5rem;
}
</style>

