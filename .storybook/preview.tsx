import React from 'react'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { Paper, ThemeProvider } from '@mui/material'
import { type ThemeProviderProps } from '@emotion/react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import generateMuiTheme from '../src/utils/theme'
import '../src/styles/base.css'
import '../src/styles/styles.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

function ThemeProviderContainer({ children, ...props }: ThemeProviderProps) {
  return (
    <ThemeProvider {...props}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Paper sx={{ padding: 1 }}>{children}</Paper>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      custom: generateMuiTheme(),
    },
    Provider: ThemeProviderContainer,
  }),
]
