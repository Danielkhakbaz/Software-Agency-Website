import type { AppProps } from "next/app";
import "../styles/default.css";
import "../styles/tailwind.css";

// eslint-disable-next-line require-jsdoc
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
