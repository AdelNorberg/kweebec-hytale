import gql from 'graphql-tag'

export const ADD_POST = gql`
  mutation($name: String!, $category: String!, $cover: String!, 
           $description: String!, $content: String!) {
    addPost(name: $name, category: $category, cover: $cover, 
            description: $description, content: $content) {
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

export const GET_POSTS = gql`
  mutation($quantity: Int!) {
    getPosts(quantity: $quantity) {
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

export const GET_SUCCESS_POSTS = gql`
  mutation($category: String!, $quantity: Int!) {
    getSuccessPosts(category: $category, quantity: $quantity) {
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