import Head from 'next/head';
import React from 'react';

import App from '../src/components/App';

export default function Home() {
  return (
    <>
      <Head>
        <title>Magic</title>
        <link rel="icon" href="https://raw.githubusercontent.com/LeTanque/magic/main/public/favicon.png" />
      </Head>
      <App />
    </>
  );
}
