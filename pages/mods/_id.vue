<template>
  <div class="container">
    <div class="render" v-html="renderArticle"></div>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
const markdownIt = mavonEditor.getMarkdownIt()

export default {
  data() {
    return {
      renderValue: ''
    }
  },
  computed: {
    renderArticle() {
      return markdownIt.render(this.renderValue);
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 25rem;
  max-width: 50%;
  background: #1B304F;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5), inset 0 0 0 2px #4e5765;
  border-radius: 5px;
}
</style>


