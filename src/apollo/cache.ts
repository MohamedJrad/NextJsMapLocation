
import { InMemoryCache } from '@apollo/client';
import { isLoggedInVar ,userVar,lanVar} from './ReactiveVariables';
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


					language: {
					read() {
						return lanVar();
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