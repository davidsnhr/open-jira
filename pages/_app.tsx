
import UIProvider from '../context/ui/UIProvider'
import { CssBaseline, ThemeProvider } from '@mui/material'

import type { AppProps } from 'next/app'


import { EntriesProvider } from '../context/entries'
import { darkTheme, lightTheme } from '../themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  )
}

export default MyApp
