const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type AuthData {
  email: String!
  nickname: String!
}

type RootQuery {
  isLogin: Boolean!
  logout: Boolean!
}

type RootMutation {
  signup(email: String!, password: String!, nickname: String!): AuthData!
  login(email: String!, password: String!): AuthData!
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);
