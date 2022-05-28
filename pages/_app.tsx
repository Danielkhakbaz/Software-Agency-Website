import type { AppProps } from "next/app";
import WidthSizeProvider from "../providers/width-size/width-size-provider";
import ScrollProvider from "../providers/scroll/scroll-provider";
import "../styles/carousel.css";
import "../styles/default.css";
import "../styles/skills.css";
import "../styles/tailwind.css";

// eslint-disable-next-line require-jsdoc
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <WidthSizeProvider>
      <ScrollProvider>
        <Component {...pageProps} />
      </ScrollProvider>
    </WidthSizeProvider>
  );
};

export default MyApp;
