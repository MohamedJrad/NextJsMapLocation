import { isLoggedInVar,userVar } from './ReactiveVariables';

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

export const userInit=async()=>{
if (typeof window !== 'undefined') {
	
		try {
			

			const result = JSON.parse(localStorage.getItem('user')!);
		
			if (result !== null) {
			
				userVar(result)
				isLoggedInVar(true)

			}else{
				isLoggedInVar(false)

			}
		} catch (err) {
			console.log(err);
		}
	}


}


