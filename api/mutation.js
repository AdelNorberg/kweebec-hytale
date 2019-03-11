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

export const GET_SUCCESS_POST = gql`
  mutation($path: String!) {
    getSuccessPost(path: $path) {
      post {
        content
        description
        name
        view
        category
        cover
        creator
        created
        keywords
      }
      lists {
        name 
        cover 
        created
        path
      }
    }
  }
`

export const GET_SUCCESS_POSTS_NAMES = gql`
  mutation($category: String!, $quantity: Int!) {
    getSuccessPosts(category: $category, quantity: $quantity) {
      name
      path
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
      path
    }
  }
`

export const GET_SUCCESS_POSTS = gql`
  mutation($category: String!, $quantity: Int!) {
    getSuccessPosts(category: $category, quantity: $quantity) {
      id
      content
      description
      name
      view
      category
      cover
      creator
      created
      path
    }
  }
`