import type { AppProps } from "next/app";
import Compose from "../utils/compose/compose";
import WidthSizeProvider from "../providers/width-size/width-size-provider";
import ScrollProvider from "../providers/scroll/scroll-provider";
import "../styles/tailwind.css";
import "../styles/default.css";

// eslint-disable-next-line require-jsdoc
const MyApp = ({ Component, pageProps }: AppProps) => {
  const Providers = [WidthSizeProvider, ScrollProvider];

  return (
    <Compose components={Providers}>
      <Component {...pageProps} />
    </Compose>
  );
};

export default MyApp;
