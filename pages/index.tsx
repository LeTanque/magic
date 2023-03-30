import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

import App from "../src/components/App";

export default function Home() {
  return (
    <ChakraProvider resetCSS>
      <Head>
        <title>Magic</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <App />
    </ChakraProvider>
  );
}
