import { Html, Head, Main, NextScript } from "next/document";

const MyDocument: React.FC = () => {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
