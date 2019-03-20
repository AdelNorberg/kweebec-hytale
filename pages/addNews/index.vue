<template>
  <div class="add-container">
    <div class="content">
      <loading-bg :active="getLoading"/>
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
            <div v-if="errors.errorName" class="error">{{ errors.errorName }}</div>
          </div>
          <div class="select-form">
            <h3 class="header-text">Категория</h3>
            <select 
              v-model="formData.category"
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
          <div v-if="errors.errorCover" class="error">{{ errors.errorCover }}</div>
          <h3 class="header-text">Описание</h3>
          <textarea
            v-model.trim="formData.description"
            class="input textarea" 
            type="text"
            placeholder="Введите описание...">
          </textarea>
          <div v-if="errors.errorDesc" class="error">{{ errors.errorDesc }}</div>
        </div>
        <h3 class="header-text">Основное описание</h3>
        <no-ssr>
          <mavon-editor v-model="formData.content" language="ru" :toolbars="toolbars"/>
        </no-ssr>
        <div v-if="errors.errorContent" class="error margin">{{ errors.errorContent }}</div>
      </div>
      <button class="button" @click="onClickForm">Отправить</button>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  components: {
    loadingBg: () => import('~/components/loading-bg')
  },
  validate ({ store }) {
    return store.state.auth.isLogin
  },
  data() {
    return { 
      formData: {
        name: '',
        category: 'Новости',
        description: '',
        cover: '',
        content: ''
      },
      errors: {
        errorName: '',
        errorDesc: '',
        errorCover: '',
        errorContent: ''
      },
      toolbars: {
        bold: true,
        italic: true,
        header: true, 
        strikethrough: true,
        link: true,
        imagelink: true,
        fullscreen: true,
        readmodel: true,
        htmlcode: true,
        help: true,
        undo: true,
        redo: true,
        trash: true, 
        subfield: true,
        preview: true
    }
    }
  },
  validations: {
    formData: {
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(34)
      },
      description: {
        required,
        minLength: minLength(40),
        maxLength: maxLength(240)
      },
      cover: {
        required,
        minLength: minLength(7),
        maxLength: maxLength(500)
      },
      content: {
        required,
        minLength: minLength(240),
        maxLength: maxLength(50000)
      }
    }
  },
  methods: {
    onClickForm() {
      const { name, description, cover, content } = this.$v.formData

      if(!name.required) {
        this.errors.errorName = 'Введите название'
        return
      } else if(!name.minLength) {
        this.errors.errorName = 'Нужно минимум 4 символа'
        return
      } else if(!name.maxLength) {
        this.errors.errorName = 'Более 34 символов недопустимо'
        return
      } else {
        this.errors.errorName = ''
      }

      if(!description.required) {
        this.errors.errorDesc = 'Введите описание'
        return
      } else if(!description.minLength) {
        this.errors.errorDesc = 'Нужно минимум 40 символа'
        return
      } else if(!description.maxLength) {
        this.errors.errorDesc = 'Более 240 символов недопустимо'
        return
      } else {
        this.errors.errorDesc = ''
      }

      if(!cover.required) {
        this.errors.errorDesc = 'Введите описание'
        return
      } else if(!cover.minLength) {
        this.errors.errorDesc = 'Нужно минимум 7 символа'
        return
      } else if(!cover.maxLength) {
        this.errors.errorDesc = 'Более 500 символов недопустимо'
        return
      } else {
        this.errors.errorDesc = ''
      }

      if(!content.required) {
        this.errors.errorContent = 'Введите описание'
        return
      } else if(!content.minLength) {
        this.errors.errorContent = 'Нужно минимум 240 символа'
        return
      } else if(!content.maxLength) {
        this.errors.errorContent = 'Более 50 000 символов недопустимо'
        return
      } else {
        this.errors.errorContent = ''
      }

      this.$store.dispatch('post/addPost', { ...this.formData })
    }
  },
  computed: {
    getLoading() {
      return this.$store.state.post.loading
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
  position: relative;
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

.error {
  color: #e43d59;
  font-weight: 300;
  margin-top: -0.7rem;
  padding-left: 0.5rem;
}

.margin {
  margin-top: 1rem;
}
</style>

