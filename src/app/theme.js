"use client"
import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
import { StyleFunctionProps, background } from '@chakra-ui/styled-system'


export const theme = extendTheme({
  colors: {
    ui: {
      black: "rgb(2,2,6)",
      darker: "rgb(19,19,19)",
      dark: "rgb(64,64,64)",
      neutral: "rgb(139,139,139)",
      white: "rgb(251,251,255)",
    },
  },
  styles: {
    global: (props) => ({
      'html, body': {
        background: "rgb(2,2,6)",
      },
    }),
  },
})