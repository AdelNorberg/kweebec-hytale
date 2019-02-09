<template>
  <div>
    <div>asdad</div>
    <button @click="onClick">clickme</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$router.push('/mods/'+ 1)
    }
  }
}
</script>

