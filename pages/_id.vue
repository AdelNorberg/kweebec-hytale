<template>
  <div class="post-container">
    <div class="post">
      <div class="post-name">{{ post.name }}</div>
      <div class="post-info">
        <div class="post-creator">
          <div> Автор </div>
          <div class="creator">{{ post.creator }}</div>
        </div>
        <div class="post-date">{{ post.date }}</div>
      </div>
      <img :src="post.img" :alt="post.name" class="post-img">
      <div class="post-description">{{ post.description }}</div>
      <div class="render" v-html="renderArticle"></div>
    </div>

    <div class="lists-container">
      <div class="bg-lists-container">
        <div v-for="(list, key) in lists" :key="key" class="list-post-container">
          <div class="list-post">
            <div class="theme-box">
              <img :src="list.img" :alt="list.name" class="list-img">
              <div class="theme"></div>
            </div>
            <div class="list-content">
              <div class="list-name">{{ list.name }}</div>
              <div class="list-date">{{ list.date }}</div>
            </div>
        </div>
          <hr class="silver" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import slug from 'slug'
import axios from 'axios'
import config from '~/config'
import { print } from 'graphql'
import { GET_POST } from '~/api/mutation'

let markdownIt = new MarkdownIt();

export default {
  async asyncData ({params}) {
    const namePost = slug(`${params.id}`, { replacement: ' ' })
    console.log(namePost)

    const { data } = await axios.post(config.apiendpoint, {
      query: print(GET_POST),
      variables: { category: 'Новости', quantity: 3 }
    })
    
    return { post: data.data.getPost, lists: data.data.getPost}
  },
  data() {
    return {
      post: {
        name: 'Технологии создания блоков',
        creator: 'Adel Norberg',
        date: '05.07.12',
        img: '/hytale/screenshots/1.jpg',
        description: 'Если вы смотрели трейлер анонса Hytale или заглянули в наш раздел СМИ, то вы точно обратили внимание на множество пейзажей и сборных домов - и каждый из них был построен из блоков. Сегодня мы расскажем о функциях и технологиях, которые делают блоки Hytale особенными, и о том, как вы сможете использовать их при создании своих собственных творений.',
        content: "## RGB оттенки\n![adadad](/hytale/screenshots/5.jpg)\n*Отличный пример RGB-инструмента Hytale в действии!*\n\nТворческие инструменты Hytale можно использовать для изменения оттенка RGB любого блока. Изменяя красные, зеленые и синие свойства текстуры, вы можете динамически изменять ее цвет. Выше вы можете увидеть крайний пример этой техники: земля состоит из одного и того же основного блока травы, но в разных областях баланс RGB смещен в крайности.\n\n## Переходные текстуры\n![](/hytale/screenshots/1.jpg)\n*Текстуры перехода, используемые для разбиения линий между блоками.*\n\nТекстуры переходов используются для создания плавных переходов между различными типами блоков. В приведенном выше примере видно, что трава, песок и гравий сливаются без образования жестких линий в местах соприкосновения блоков.\n\n«Функция текстуры перехода - это один из многих приемов, которые мы используем, чтобы попытаться разрушить кубическую природу нашей игры», - говорит Николас Билоу Готье. «Это дополнительный четырехугольник с определенной текстурой, который может появляться на границе между различными блоками. Он определяется для каждого блока с набором допустимых блоков, на которые он может ориентироваться. Строители могут использовать эту функцию для создания хороших переходов между блоками »."
      },
      lists: [
        {name: 'МОД КОТОРЫЙ СПАСЕТ МИР VARDAK', img: '/hytale/screenshots/1.jpg', date: '12.10.32'},
        {name: 'КАРТА СОЗДАННАЯ ЮТУБЕРОМ', img: '/hytale/screenshots/2.jpg', date: '04.12.32'},
        {name: 'ЭТИ ТЕКСТУРЫ ИМЕЮТ ВОЗМОЖНОСТЬ АНИМАЦИИ ГОЛОВЫ, РУК И ТУЛОВИЩА', img: '/hytale/screenshots/3.jpg', date: '12.12.32'},
        {name: 'СБОРКА СОСТОЯЩАЯ ИЗ ТЕХНОЛОГИКИХ МОДОВ, КРАСОЧНЫХ ШЕЙДЕРОВ', img: '/hytale/screenshots/4.jpg', date: '12.12.32'},
        {name: 'В ЭТОЙ КАРТЕ ЕСТЬ 3 ЗАМКА ПО КОТОРЫМ НУЖНО ПРОВОДИТЬ ИССЛЕОДВАНИЯ', img: '/hytale/screenshots/5.jpg', date: '12.12.32'},
        {name: 'В НАШЕ ВРЕМЯ СЛОЖНО ЖИТЬ БЕЗ НОГИ, ПОЭТОМУ ЭТОТ МОД ДОБАВЛЯЕТ ', img: '/hytale/screenshots/6.jpg', date: '12.12.32'},
        {name: 'ВИРТУОЗНОСТЬ СОБЫТИЙ В HYTALE ЗА БЕСПЛАТНО', img: '/hytale/screenshots/7.jpg', date: '12.12.32'},
        {name: 'Я УСТАЛ ПИСАТЬ ЭТИ НАЗВАНИЯ, СПАСИТЕ', img: '/hytale/screenshots/8.jpg', date: '12.12.32'},
        {name: 'ГЕОГРАФИЧЕСКИЙ КРИТИНИЗМ УЖЕ В ИГРЕ!', img: '/hytale/screenshots/9.jpg', date: '05.12.32'},
        {name: 'В НАШЕ ВРЕМЯ СЛОЖНО ОБОЙТИСЬ БЕЗ ВЫРУБКИ ДЕРЕВЬЕВ', img: '/hytale/screenshots/10.jpg', date: '12.12.32'},
        {name: 'КИРПИЧНЫЙ СКВАД ТЕПЕРЬ ВАС НЕ БУДЕТ БЕСПОКОИТЬ!', img: '/hytale/screenshots/11.jpg', date: '12.12.32'}
      ]
    }
  },
  computed: {
    renderArticle() {
      return markdownIt.render(this.post.content);
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/var.scss';

.post-container {
  display: flex;    
  min-width: 100%;
}

.post { 
  min-width: 67%;
  padding-right: 2rem;
}

.post-name {
  background: linear-gradient(#eaf6ff, #7da7c4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: 700;
}

.post-info {
  display: flex;
  font-display: row;
  margin-top: 0.4rem;
  min-width: 100%;
}

.post-creator {
  color: $secondary-color-1;
  display: flex;
  flex-direction: row;
  align-items: center ;
  font-weight: 500;
}

.post-img {
  width: 100%;
  border: 1px solid #473e26;
  max-height: 45rem;
  margin-top: 2rem;
}

.post-description {
  color: #b7cedd;
  line-height: 1.5em;
  margin-top: 1.5rem;
  font-size: 1.05rem;
}

.creator {
  color: $primary-color-2;
  margin-left: 0.6rem;
  margin-top: 0.2rem;
  font-size: 1.1em
}

.post-date {
  color: #7f8ba7;
  font-size: 1.1rem;
  margin-top: 0.3rem;
  margin-left: 0.9rem;
}

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
  height: 6.5rem;
  padding: 0 0.9rem 0 0.9rem;
  cursor: pointer;
  padding: 0.5rem 0 0.5rem;
  &:hover {
    background: rgba(210, 233, 247, 0.04);
  }
}

.list-img {
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
  font-size: 0.79em;
  padding-right: 0.2rem;
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
