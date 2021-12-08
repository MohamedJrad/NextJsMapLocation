
import { InMemoryCache } from '@apollo/client';
import { isLoggedInVar } from './ReactiveVariables';
import { isLoggedInInit, cartItemsInit } from './ReactiveVariablesInitialValues';
isLoggedInInit();
cartItemsInit();

export const cache: InMemoryCache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				isLoggedIn: {
					read() {
						return isLoggedInVar();
					}
				},
		
				launches: {
					// ...field policy definitions...
				}
			}
		}
	}
});

export default cache;