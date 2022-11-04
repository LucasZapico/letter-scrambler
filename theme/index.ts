// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import LinkStyles from 'theme/linkStyles'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
  config,
  components: {
    Box: {
      borderWidth: '2px',
      borderColor: 'pink',
    },
    Link: LinkStyles,
  },
  styles: {
    global: {
      body: {},
    },
  },
})

export default theme
