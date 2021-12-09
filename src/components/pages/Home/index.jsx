import React from 'react';
import AuthPage from '../AuthenticationPage'
import MainPage from '../MainPage'
import { GET_IS_LOGGEDIN } from '../../../apollo';
import { useQuery } from '@apollo/client';
const Index = () => {

    const { data: isLoggedInData, loading: isLoggedInLoading } = useQuery(GET_IS_LOGGEDIN);
    if (isLoggedInLoading) return <div>Loading...</div>;

    return (

        isLoggedInData.isLoggedIn ? (
            <div>
                <MainPage />
            </div>
        ) : <AuthPage />

    );
};



export default Index;
