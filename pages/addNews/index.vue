<template>
  <div class="add-container">
    <div class="content">
      <div class="form-container">
        <h3 class="header-text">Заметка</h3>
        <div class="note-container">
          <div class="line"></div>
          <div class="note">Прежде чем начать писать один из типов<br>
                            постов, стоит прочесть
                            
        <nuxt-link class="regulations" to="/addNews/regulations">
            правила.
        </nuxt-link><br>
                            Любой вами написанный пост будет проходить<br>
                            прежде модерацию на соответствие правил.</div>
        </div>
        <div class="first-forms">
          <div>
            <h3 class="header-text">Название</h3>
            <input 
              v-model.trim="formData.name"
              class="input" 
              type="text"
              placeholder="Введите название...">
          </div>
          <div class="select-form">
            <h3 class="header-text">Категория</h3>
            <select 
              v-model.trim="formData.category"
              class="input select" 
              type="text"
              placeholder="Введите название...">
              <option>Новости</option>
              <option>Моды</option>
              <option>Карты</option>
              <option>Сборки</option>
              <option>Текстуры</option>
            </select>
          </div>
        </div>
        <div class="seconds-forms">
          <h3 class="header-text">Ссылка изображения</h3>
          <input 
            v-model.trim="formData.cover"
            class="input link" 
            type="text"
            placeholder="Введите ссылку...">
          <h3 class="header-text">Описание</h3>
          <textarea
            v-model.trim="formData.description"
            class="input textarea" 
            type="text"
            placeholder="Введите описание...">
          </textarea>
        </div>
        <h3 class="header-text">Основное описание</h3>
        <mavon-editor v-model="formData.content" language="ru"/>
      </div>
      <button class="button" @click="onClickForm">Отправить</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      formData: {
        name: '',
        category: '',
        description: '',
        cover: '',
        content: ''
      }
    }
  },
  methods: {
    onClickForm() {
      const { name, category, description, cover, content } = this.formData
      if(name && category && description && cover && content) {
        this.$store.dispatch('post/addPost', {
        ...this.formData
      })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/var.scss';

.add-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-height: 40rem;
  max-width: 100%;
  background: $primary-bg-2;
  box-shadow: $shadow-bg;
  border: 2px solid $primary-bg-1; 
}

.button {
  display: inline-block;
  position: relative;
  font-weight: 600;
  font-size: 1.35rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  padding: 0.1rem 1.2em 0 1.2em;
  margin-right: 0.2rem;
  border-radius: 5px;
  width: 9rem;
  padding: 0.5rem;
  color: white;
  border: 1px solid $primary-color-1;
  background: linear-gradient(to bottom, #3583b4, #225b8b);
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);
  &:hover {
    background: linear-gradient(to bottom, #4c8db6, hsl(207, 59%, 36%));
  }
}

.note-container {
  display: flex;
  flex-direction: row;
}

.content {
  width: 100%;
}

.form-container {
  padding: 1.5rem;
}

.regulations {
  color: $primary-color-2;
  font-weight: 700;
  &:hover {
    color: rgb(240, 174, 52);
  }
}

.line {
  width: 2px;
  min-height: 100%;
  margin-left: 0.8rem;
  margin-right: 0.5rem;
  background: $primary-color-2;
}

.note {
  font-size: .9em;
  color: $secondary-color-1;
}

.header-text {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(#bbd6e9, #c8e9ff);;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.first-forms {
  display: flex;
  flex-direction: row;
}

.input {
  padding: .8em 1em;
  margin-bottom: 1em;
  border: none;
  background: #0c1523;
  box-sizing: border-box;
  font-size: .9em;
  border: 1px solid #302f2c;
  color: $secondary-color-1;
  transition: border 0.2s, background 0.2s, box-shadow 0.2s, color 0.2s;
}

.textarea {
  min-width: 40%;
}

.link {
  min-width: 40%;
}

.select {
  padding: .74em 1em;
}

.select-form {
  margin-left: 1.5rem;
}
</style>

