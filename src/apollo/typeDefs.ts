import { gql } from '@apollo/client';

const typeDefs = gql`
	extend type Query {
		isLoggedIn: Boolean!
		getUser:User!
		getToken:String!
	}
`;

export default typeDefs;