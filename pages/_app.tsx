import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-jp/700.css";
import "@fontsource/teko/500.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/theme";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID, pageView } from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) {
      return;
    }
    const handleRouterChange = (url: string) => {
      pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
