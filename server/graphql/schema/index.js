const { buildSchema } = require("graphql");

module.exports = buildSchema(`
scalar Date

type AuthData {
  email: String!
  nickname: String!
  role: String!
}

type Post {
  id: ID
  creator: String!
  name: String!
  description: String!
  content: String!
  category: String!
  cover: String!
  path: String!
  view: Int!
  created: Date!
} 

type PostPage {
  post: Post
  lists: [Post]
}

type RootQuery {
  isLogin: AuthData
  logout: Boolean
}

type RootMutation {
  getSuccessPost(path: String!): PostPage
  getSuccessPosts(category: String!, quantity: Int!): [Post!]!
  approvePost(name: String!): Boolean
  deletePost(name: String!): Boolean
  deleteSuccessPost(name: String!): Boolean
  getPosts(quantity: Int!): [Post!]!
  addPost(name: String!, category: String!, cover: String!, description: String!, content: String!): Post!
  signup(email: String!, password: String!, nickname: String!): AuthData!
  login(email: String!, password: String!): AuthData!
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);
