import React from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import classnames from 'classnames'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  paper: {
    backgroundColor: theme.palette.background.pinkish,
    border: `1px solid ${theme.palette.border.pinkish}`,
    boxShadow: theme.palette.boxShadow.content,
    borderRadius: '15px',
    width: '70vw',
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
      margin: '20px',
      width: '90vw',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '10px',
      width: '97vw',
    },
  },
}))

function About() {
  const classes = useStyles()
  const theme = useTheme()
  const { image, bgImage } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/about.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bgImage: file(relativePath: { eq: "pages-background.png" }) {
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
        <link
          href='https://fonts.googleapis.com/css?family=Rubik&display=swap'
          rel='stylesheet'
        />
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
          className={classes.munTextProperty}
        >
          ABOUT US
        </Typography>
      </Banner>
      <BackgroundImage
        className='flex flex-col justify-center items-center'
        fluid={bgImage.sharp.fluid}
        durationFadeIn={50}
      >
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
              <Typography className='text-justify py-5'>
                JECRC MUN is an eight years old legacy established in 2012,
                making JECRC the first host of a MUN conference in Jaipur.
                Inaugurated by the eminent educationist Shri Kul Bhushan
                Kothari, JECRC MUN has spiraled out exponentially to achieve the
                pinnacle of growth. With the zealous efforts of extensive
                organizing committees over the 7 years of conducting MUN
                conferences, we have gained a lot of momentum inviting immense
                participation from across the country.
              </Typography>
              <Typography className='text-justify py-5'>
                Till the eighth edition, we have hosted approximately 2500
                delegates, including international delegates as well. To
                appreciate the endeavors of the participants and inspire them to
                sharpen their skills of diplomacy, we have had some renowned
                chief guests. For JECRC MUN 2018, we were graced by the presence
                of Shri Manishankar Aiyar, politician and diplomat and Shri
                Anand Chulani, a world-famous motivational speaker. In the
                eighth edition of 2019, the green-Hyderabad pioneer, Ms Hari
                Chandna Dasari, IAS ZHMC and Dr Jawahar Surisetti blessed us
                with their presence and filled the spirits of delegates with
                enthusiasm.
              </Typography>
              <Typography className='text-justify py-5'>
                Every year our expanse of expertise has grown beyond the
                previously achieved marks, as we continue to set new benchmarks
                for our future conferences. The committees we simulate and the
                agendas we offer, both give mind-bending experiences to the
                delegates. The prominent committees are General Assembly-
                Disarmament and International Security (GA-DISEC), United
                Nations Security Council (UNSC), United Nations Commission on
                Status of Women (UN-CSW), Lok Sabha, and International Press.
                The recent editions have also witnessed All India Political
                Parties Meet (AIPPM). In the upcoming ninth edition of 2020, we
                are also unveiling an addition as the World Health Organization
                (WHO).
              </Typography>
              <Typography className='text-justify py-5'>
                We have created a promising platform for all the young diplomats
                that seek experience and genuine input about their performances,
                all credited to the correct MUN environment we offer. Our
                success as a MUN community is attributed to our delegates, and
                we wish to improve and attain the pinnacle of perfection for
                their sake. This year at JECRC MUN 2020, the experience will be
                a never before one of its kind adventure for the delegates. Like
                always, only grander!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </BackgroundImage>
    </Wrapper>
  )
}

export default About
