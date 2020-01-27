import React from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import ContentBox from '../components/content-box'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
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
          BLOGS
        </Typography>
      </Banner>
      <BackgroundImage
        className='flex flex-col justify-center items-center'
        fluid={bgImage.sharp.fluid}
        durationFadeIn={50}
      >
        <ContentBox className='my-16'>
          <Typography
            style={{
              fontSize: '40px',
              fontWeight: 500,
              color: theme.palette.primary.main,
              textAlign: 'center',
            }}
          >
            SOME NEW BLOG HEADING
          </Typography>
          <Grid container justify='center' className='md:p-4'>
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
              <div className='w-11/12 mx-auto'>
                <img src='/images/bg2.png' alt='blogger image' />
              </div>
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
            </Grid>
          </Grid>
        </ContentBox>
      </BackgroundImage>
    </Wrapper>
  )
}

export default About
