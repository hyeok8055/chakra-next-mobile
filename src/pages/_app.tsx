import { LoadingContextProvider } from "@/context/LoadingContext";
import "@/styles/globals.css";
import { theme } from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AlertContextProvider } from "@/context/AlertContext";
import { InstallProvider } from "@/context/InstallationContext";

export default function App({ Component, pageProps }: AppProps) {
  const description = "Jump start your NextJS PWA project with Chakrastic PWA";
  const title = "Chakrastic PWA";
  return (
    <ChakraProvider theme={theme}>
      <InstallProvider>
      <AlertContextProvider>
      <LoadingContextProvider>
    <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/icons/mask-icon.svg" color="#FFFFFF" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={process.env.NEXT_PUBLIC_BUILD_URL} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/icons/twitter.png" />
        <meta name="twitter:creator" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description}/>
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BUILD_URL} />
        <meta property="og:image" content="/icons/og.png" />
      </Head>
      <Component {...pageProps} />
      </LoadingContextProvider>
      </AlertContextProvider>
      </InstallProvider>
    </ChakraProvider>
)
}
