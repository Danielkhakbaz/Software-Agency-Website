import type { AppProps } from "next/app";
import Compose from "../utils/compose/compose";
import WidthSizeProvider from "../providers/width-size/width-size-provider";
import ScrollProvider from "../providers/scroll/scroll-provider";
import Layout from "../layout/layout";
import "../styles/tailwind.css";
import "../styles/default.css";

// eslint-disable-next-line require-jsdoc
const MyApp = ({ Component, pageProps }: AppProps) => {
  const Providers = [WidthSizeProvider, ScrollProvider];

  return (
    <Compose providers={Providers}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Compose>
  );
};

export default MyApp;
