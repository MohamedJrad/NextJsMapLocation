import React, { ReactNode } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
 import { useApollo } from "../apollo/useApollo";
import Navbar from '../components/NavbarContainer'
interface Props {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: Props) => <div>{children}</div>;

export default function MyApp({ Component,   pageProps: { session, ...pageProps } }: AppProps): JSX.Element {

const apolloClient = useApollo(pageProps.initialApolloState);

  return (

      <ApolloProvider client={apolloClient}>
     
        <Layout>
          <Navbar bg='blue' children/> 
          <Component {...pageProps} />
        </Layout>
      
      </ApolloProvider>

  );
}
