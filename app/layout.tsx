import { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Footer from "layout/footer/footer";
import WidthSizeProvider from "providers/width-size/width-size-provider";
import ScrollProvider from "providers/scroll/scroll-provider";
import Compose from "utils/compose/compose";
import { InterFont } from "theme/font";
import "styles/globals.css";

type RootLayoutProps = {
  children: ReactNode;
  session: never;
};

export const metadata: Metadata = {
  title: "Margelo Software Agency Webiste",
  description: "Welcome to Margelo Software Agency Website.",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "twitter:title": "Margelo Software Agency Webiste",
    "twitter:description": "Welcome to Margelo Software Agency Website.",
    "twitter:url": "https://software-agency-website.vercel.app/",
    "twitter:domain": "software-agency-website.vercel.app",
    "twitter:image":
      "https://software-agency-website.vercel.app/public/margelo-logo.svg",
    "twitter:card": "summary_large_image",
    "og:title": "Margelo Software Agency Webiste",
    "og:description": "Welcome to Margelo Software Agency Website.",
    "og:url": "https://software-agency-website.vercel.app/",
    "og:image":
      "https://software-agency-website.vercel.app/public/margelo-logo.svg",
    "og:type": "website",
  },
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  const Providers = [WidthSizeProvider, ScrollProvider];

  return (
    <html lang="en">
      <body className={InterFont.className}>
        <Compose providers={Providers as never}>
          {children}
          <Footer />
          <Analytics />
        </Compose>
      </body>
    </html>
  );
};

export default RootLayout;
