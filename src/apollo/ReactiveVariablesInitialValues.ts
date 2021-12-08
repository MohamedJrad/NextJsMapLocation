import { isLoggedInVar } from './ReactiveVariables';

export const isLoggedInInit = async () => {
	// Auth.currentAuthenticatedUser()
	// 	.then((user) => {
	// 		//	console.log('user');
	// 		isLoggedInVar(true);
	// 		(async () => {})().catch((err) => {
	// 			console.log(err);
	// 		});
	// 	})
	// 	.catch((e) => {
	// 		//console.log('no user');
	// 		isLoggedInVar(false);
	// 	});
};

export const cartItemsInit = () => {
	if (typeof window !== 'undefined') {
		// try {
		// 	const result = JSON.parse(localStorage.getItem('cartItems'));
		// 	console.log(result);
		// 	if (result !== null) {
		// 		console.log('not null');
		// 		console.log('localstorage', result);
		// 		cartItemsVar(result);
		// 	}
		// } catch (err) {
		// 	console.log(err);
		// }
	}
};