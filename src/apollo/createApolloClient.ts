import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';
import { cache } from './cache';

if (typeof window !== 'undefined') {
	(async () => {
		await persistCache({
			cache,
			storage: new LocalStorageWrapper(window.localStorage)
		});

		// all of the script....
	})();
}



const httpLink = createHttpLink({
 // uri: 'http://localhost:3000/api/graphql',
 uri:'https://dev.d2y4dojw4nqey7.amplifyapp.com/api/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const createApolloClient=()=>{

  return new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache
});
}

