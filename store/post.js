import axios from 'axios'

export const actions = {
  addPost ({commit}, {name, category, cover, description, content}) {
    axios({
      url: 'http://localhost:3000/graphql',
      method: 'post',
      data: {
        query: `
            mutation {
              addPost(name: "${name}", category: "${category}", cover: "${cover}", 
                      description: "${description}", content: "${content}") 
              {
                content
                description
                name
                view
                category
                cover
                creator
                created
              }
            }`
      }
    })
    .then(() => {
      this.$router.push('/')
    })
  }
}