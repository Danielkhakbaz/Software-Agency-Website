import type { AppProps } from "next/app";
import ScrollProvider from "../providers/scroll/scroll-provider";
import "../styles/default.css";
import "../styles/skills.css";
import "../styles/tailwind.css";

// eslint-disable-next-line require-jsdoc
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ScrollProvider>
      <Component {...pageProps} />
    </ScrollProvider>
  );
};

export default MyApp;
