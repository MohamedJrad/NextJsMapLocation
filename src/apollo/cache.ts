
import { InMemoryCache } from '@apollo/client';
import { isLoggedInVar ,userVar} from './ReactiveVariables';
import {userInit } from './ReactiveVariablesInitialValues';
userInit()

export const cache: InMemoryCache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				isLoggedIn: {
					read() {
						return isLoggedInVar();
					}
					
				},
						getUser: {
					read() {
						return userVar();
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