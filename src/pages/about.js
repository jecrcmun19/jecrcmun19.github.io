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
    fontSize: 50,
    lineHeight: '50px',

    letterSpacing: '0.08em',
    [theme.breakpoints.up('sm')]: {
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
    [theme.breakpoints.up('sm')]: {
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

function About() {
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
          ABOUT US
        </Typography>
        <Typography variant='h5' className={classes.munTextProperty}>
          JECRC MUN 2020
        </Typography>
      </Banner>
      <Grid className={classnames([classes.container, 'justify-center'])}>
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
                  JECRC MUN is an eight years old legacy established in 2012,
                  making JECRC the first host of a MUN conference in Jaipur.
                  Inaugurated by the eminent educationist Shri Kul Bhushan
                  Kothari, JECRC MUN has spiraled out exponentially to achieve
                  the pinnacle of growth. With the zealous efforts of extensive
                  organizing committees over the 8 years of conducting MUN
                  conferences, we have gained a lot of momentum inviting immense
                  participation from across the country.
                </Typography>
                <Typography className='text-justify py-5'>
                  Till the eighth edition, we have hosted approximately 2500
                  delegates, including international delegates as well. To
                  appreciate the endeavors of the participants and inspire them
                  to sharpen their skills of diplomacy, we have had some
                  renowned chief guests. For JECRC MUN 2018, we were graced by
                  the presence of Shri Manishankar Aiyar, politician and
                  diplomat and Shri Anand Chulani, a world-famous motivational
                  speaker. In the eighth edition of 2019, the green-Hyderabad
                  pioneer, Ms Hari Chandna Dasari, IAS ZHMC and Dr Jawahar
                  Surisetti blessed us with their presence and filled the
                  spirits of delegates with enthusiasm.
                </Typography>
                <Typography className='text-justify py-5'>
                  Every year our expanse of expertise has grown beyond the
                  previously achieved marks, as we continue to set new
                  benchmarks for our future conferences. The committees we
                  simulate and the agendas we offer, both give mind-bending
                  experiences to the delegates. The prominent committees are
                  General Assembly- Disarmament and International Security
                  (GA-DISEC), United Nations Security Council (UNSC), United
                  Nations Commission on Status of Women (UN-CSW), Lok Sabha, and
                  International Press. The recent editions have also witnessed
                  All India Political Parties Meet (AIPPM). In the upcoming
                  ninth edition of 2020, we are also unveiling an addition as
                  the World Health Organization (WHO).
                </Typography>
                <Typography className='text-justify py-5'>
                  We have created a promising platform for all the young
                  diplomats that seek experience and genuine input about their
                  performances, all credited to the correct MUN environment we
                  offer. Our success as a MUN community is attributed to our
                  delegates, and we wish to improve and attain the pinnacle of
                  perfection for their sake. This year at JECRC MUN 2020, the
                  experience will be a never before one of its kind adventure
                  for the delegates. Like always, only grander!
                </Typography>
              </Fade>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Wrapper>
  )
}

export default About
