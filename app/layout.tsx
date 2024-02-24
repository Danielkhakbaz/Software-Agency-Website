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
      "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/software-agency-website.vercel.app/Margelo%20Software%20Agency%20Webiste/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F31e1fc05-2c1f-4d04-92b8-f77cdaea8c21.jpg%3Ftoken%3Dd7t0O-DhIu9_R1kAuZuvj1TYKXz6OfWOuxhQlbeICwA%26height%3D750%26width%3D1200%26expires%3D33244784053/og.png",
    "twitter:card": "summary_large_image",
    "og:title": "Margelo Software Agency Webiste",
    "og:description": "Welcome to Margelo Software Agency Website.",
    "og:url": "https://software-agency-website.vercel.app/",
    "og:image": "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/software-agency-website.vercel.app/Margelo%20Software%20Agency%20Webiste/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F31e1fc05-2c1f-4d04-92b8-f77cdaea8c21.jpg%3Ftoken%3Dd7t0O-DhIu9_R1kAuZuvj1TYKXz6OfWOuxhQlbeICwA%26height%3D750%26width%3D1200%26expires%3D33244784053/og.png",
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
