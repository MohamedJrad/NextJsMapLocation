import React, { ReactNode } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
 import { useApollo } from "../apollo/useApollo";

interface Props {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: Props) => <div>{children}</div>;

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {

const apolloClient = useApollo(pageProps.initialApolloState);

  return (

      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>

  );
}
