import React from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import classnames from 'classnames'
import { Paper } from '@material-ui/core'
import Fade from 'react-reveal/Fade'
const useStyles = makeStyles(theme => ({
  headingTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    // fontFamily: "'Rubik' , sans-serif",
    fontSize: 25,
    lineHeight: '31px',

    letterSpacing: '0.08em',
    [theme.breakpoints.up('md')]: {
      fontSize: 80,
      lineHeight: '71px',
    },
  },
  munTextProperty: {
    // fontFamily: "'Rubik' , sans-serif",

    fontWeight: 'bold',

    color: theme.palette.font.primary,
    letterSpacing: '0.08em',
    fontSize: '24px',
    lineHeight: '58px',
    [theme.breakpoints.up('md')]: {
      fontSize: 35,
    },
  },
  container: {
    backgroundColor: theme.palette.background.pinkish,
    padding: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  paper: {
    backgroundColor: theme.palette.background.lightPinkish,
    border: `1px solid ${theme.palette.border.pinkish}`,
    boxShadow: theme.palette.boxShadow.content,
    borderRadius: '15px',
    width: '70vw',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      width: '90vw',
    },
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
      width: '97vw',
    },
  },
}))

function UNIC() {
  const classes = useStyles()
  const theme = useTheme()
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/about.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Helmet>
        {/* <link
          href='https://fonts.googleapis.com/css?family=Rubik&display=swap'
          rel='stylesheet'
        /> */}
      </Helmet>
      <Banner
        backgrounds={[
          `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
          image.sharp.fluid,
        ]}
        height='50vh'
      >
        <Typography
          color='primary'
          component='h2'
          className={classes.headingTextProperty}
        >
          COLLABORATION WITH UNIC
        </Typography>
        <Typography variant='h5' className={classes.munTextProperty}>
          JECRC MUN 2020
        </Typography>
      </Banner>
      <Grid className={classes.container} justify='center'>
        <Paper elevation={5} className={classnames([classes.paper])}>
          <Typography
            style={{
              fontSize: '40px',
              fontWeight: 500,
              color: theme.palette.primary.main,
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            JECRC MUN
          </Typography>
          <Grid container justify='center' className='p-4'>
            <Grid item md={10}>
              <Fade bottom cascade>
                <Typography className='text-justify py-5'>
                  JECRC MUN 2020 is now in collaboration with the United Nations
                  Information Centre (UNIC) for India and Bhutan. The United
                  Nations Information Centre for India and Bhutan is based in
                  New Delhi, India and is one of 63 United Nations Information
                  Centres established worldwide.The United Nations Information
                  Centre for India and Bhutan performs an essential role in
                  broadcasting and communicating information from the United
                  Nations to India and Bhutan.
                </Typography>
                <Typography className='text-justify py-5'>
                  It interprets the information in the regional languages of
                  India including Hindi, Tamil, and Telugu to create
                  communication easier and more convenient. It maintains
                  off-line resources such as libraries and also looks after
                  digital information resources. The collaboration of JECRC MUN
                  2020 and UNIC will prove to be remarkably beneficial for the
                  delegates.
                </Typography>
                <Typography className='text-justify py-5'>
                  The logo of UNIC will be used on the certification which will
                  help all the delegates in future by increasing the credibility
                  and brand value of the conference. Participating delegates can
                  put their skills to test in some of the most exciting and
                  interesting global agendas. With this new edition of JECRC
                  MUN, we promise an outstanding level of debate and
                  deliberation, innovative committees and an extraordinary
                  experience for all.
                </Typography>
              </Fade>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Wrapper>
  )
}

export default UNIC
