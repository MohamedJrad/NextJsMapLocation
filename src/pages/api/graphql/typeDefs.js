import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type User {
    email: String!
    role:String!
  }
  
  type multiLang{
    ar:String
    en:String
    fr:String
  }
    input multiLangInput{
    ar:String
    en:String
    fr:String
  }

enum Sector{
  Public
  Private
}

 type Location {
   id:String!
   name:multiLang
   description:multiLang
   lat:Float
   long:Float
   address:multiLang
   sector:String
 }

 input LocationInput {

   name:multiLangInput
   description:multiLangInput
   lat:Float
   long:Float
   address:multiLangInput
   sector:String
 }


  type AuthPayload {
    token: String!
    user: User!
  }
  type Query {
    user(email: String!): User
    getLocationsBySector(sector:String!):[Location]
    getLocations:[Location]
  }
  type Mutation {
    registerUser( email: String!, password: String!): AuthPayload!
    login (email: String!, password: String!): AuthPayload!
    addLocation(location:LocationInput):Boolean
    updateLocation(id:String,location:LocationInput):Boolean
    deleteLocation(id:String):Boolean
  }
`;

