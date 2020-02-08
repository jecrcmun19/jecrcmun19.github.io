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
      pinkish: '#FFF5F8',
    },
    glare: {
      main: 'rgba(0, 0, 0, 0.70)',
    },
    font: {
      primary: '#ffffff',
    },
    border: {
      pinkish: '#FFE4E6',
    },
    boxShadow: {
      content:
        '10px 20px 38px rgba(0, 0, 0, 0.3), 5px 15px 12px rgba(0, 0, 0, 0.22)',
    },
  },
  typography: {
    fontFamily: "'Rubik', 'sans-serif'",
  },
})
export default theme
