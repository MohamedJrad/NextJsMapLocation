import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type User {
    email: String!
    role:String!
  }
  type AuthPayload {
    token: String!
    user: User!
  }
  type Query {
    user(email: String!): User

   

  }
  type Mutation {
    registerUser( email: String!, password: String!): AuthPayload!
    login (email: String!, password: String!): AuthPayload!
  }
`;

