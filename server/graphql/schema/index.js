const { buildSchema } = require("graphql");

module.exports = buildSchema(`
scalar Date

type AuthData {
  email: String!
  nickname: String!
}

type Post {
  creator: String!
  name: String!
  description: String!
  content: String!
  category: String!
  cover: String!
  view: Int!
  created: Date!
}

type News {
  creator: String!
  name: String!
  description: String!
  content: String!
  cover: String!
  view: Int!
  created: Date!
}

type RootQuery {
  isLogin: Boolean!
  logout: Boolean!
}

type RootMutation {
  addNews(name: String!, cover: String!, description: String!, content: String!): News!
  addPost(name: String!, category: String!, cover: String!, description: String!, content: String!): Post!
  signup(email: String!, password: String!, nickname: String!): AuthData!
  login(email: String!, password: String!): AuthData!
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);
