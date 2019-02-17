import gql from 'graphql-tag'

export const ADD_POST = gql`
  mutation($content: String!) {
    addPost(name: "${name}", category: "${category}", cover: "${cover}", 
            description: "${description}", content: $content) {
      content
      description
      name
      view
      category
      cover
      creator
      created
    }
  }
`