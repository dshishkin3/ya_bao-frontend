import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../app/store/store";

import "../app/assets/styles/globals.css";

import Layout from "../app/components/layout/Layout";
import BackTop from "../app/components/UI/backTop/BackTop";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
          <BackTop />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
};

export default MyApp;
