import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../../src/theme'

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
        />
        <meta name='title' content='JECRC MUN 2019' />
        <meta
          name='google-site-verification'
          content='-b8h4uNcT9S34HVme0_1t1qu8BJ4BOqUZnslqzxSgcY'
        />
        <meta
          name='description'
          content='Model UN is an educational simulation that showcases the leadership and diplomatic skill of students by engaging them into research,debates and discussions.'
        />
        <meta name='language' content='English' />
        <meta name='author' content='JECRC Foundation' />
        <meta property='og:title' content='JECRC MUN 2020' />
        <meta property='og:url' content='https://www.jecrcmun.in/' />
        <meta property='og:description' content='JECRC MUN is an eight years old legacy established in 2012, making JECRC the first host of a MUN conference in Jaipur.' />
        <meta property="og:image" content="/images/munLogo.png" />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
