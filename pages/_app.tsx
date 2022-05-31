import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SessionProvider } from 'next-auth/react';
import Layout from '../lib/components/layout';
import Theme from '../styles/theme';
import '@fontsource/poppins';
import Head from 'next/head';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <Layout>
            <Head>
              <title>OutstandingLife</title>
              <link rel="shortcut icon" href="/logo-icon.png" />
            </Head>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools />
        </SessionProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
