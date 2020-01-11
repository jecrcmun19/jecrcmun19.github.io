import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D90845',
    },
    secondary: {
      main: '#010b2b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    glare: {
      main: 'rgba(0, 0, 0, 0.87)',
    },
    font: {
      primary: '#ffffff',
    },
  },
})
export default theme
