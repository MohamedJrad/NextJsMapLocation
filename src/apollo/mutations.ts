import { gql } from '@apollo/client';

export const CREATE_STRIPE_SESSION = gql`
	mutation createStripeSession($input: CheckoutInput) {
		createCheckoutSession(input: $input) {
			id
		}
	}
`;

// export const CREATE_ORDER = gql`
// 	mutation createOrder($input: CreateOrderInput!) {
// 		createOrder(input: $input) {
// 			id
// 		}
// 	}
// `;