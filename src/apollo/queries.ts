import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
	query listCalistCategoriesByRestaurant($restaurantID: ID!) {
		listCategoriesByRestaurant(restaurantID: $restaurantID) {
			items {
				id
				name
				products {
					items {
						cal
						description
						id
						imageUrl
						name
						price
					}
				}
			}
		}
	}
`;

export const GET_CART_ITEMS = gql`
	query GetCartItems {
		cartItems @client
	}
`;

export const GET_IS_LOGGEDIN = gql`
	query GetisLoggedIn {
		isLoggedIn @client
	}
`;