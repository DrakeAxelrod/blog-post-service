import "styles/global.scss";
import "@fontsource/open-sans";
import "@fontsource/nunito";
import "@fontsource/jetbrains-mono";
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
