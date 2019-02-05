<template>
  <div>
    <mavon-editor v-model="value" language="ru"/>
  </div>
</template>

<script>
export default {
  data() {
      return { value: '' }
  }
}
</script>
