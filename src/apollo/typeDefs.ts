import { gql } from '@apollo/client';

const typeDefs = gql`
	extend type Query {
		isLoggedIn: Boolean!
		cartItems: [ID!]!
	}
`;

export default typeDefs;