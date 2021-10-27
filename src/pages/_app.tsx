/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import './app/login.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
// import { Provider } from 'next-auth/client';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      if (jssStyles.parentElement) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {/* <Provider session={pageProps.session}> */}
      <Component {...pageProps} />
      {/* </Provider> */}
    </>
  );
}
