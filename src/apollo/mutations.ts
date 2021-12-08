import { gql } from '@apollo/client';




export const REGISTER_USER=gql`
mutation registerUser($email:String!,$password:String!){
	 registerUser(email:$email,password:$password){
    token
    user{
      email
      role
    }
  }
}
`
export const ADD_LOCATION=gql`
mutation addLocation($location:LocationInput!){
  addLocation(location:$location)
}
`

