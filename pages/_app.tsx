import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-jp/700.css";
import "@fontsource/teko/500.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
