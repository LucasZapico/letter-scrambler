import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default App
