import React from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import ContentBox from '../components/content-box'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import { makeStyles, Typography, Grid, useTheme } from '@material-ui/core'
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
          ABOUT US
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
            JECRC MUN
          </Typography>
          <Grid container justify='center' className='p-4'>
            <Grid item md={10}>
              <Typography className='text-center'>
                JECRC MUN, being conducted from 2012, has now become a widely
                acclaimed Model United Nations platform. Over the years, it has
                developed itself as the ideal to strengthen the skills of
                diplomacy and leadership.
                <br />
                Beholding the success of our annual event, this year we are
                bringing JECRC MUN for you. Having 6 councils & International
                Press. With this, we affirm, that our dominance in the region
                would henceforth strengthen.
              </Typography>
            </Grid>
          </Grid>
        </ContentBox>
      </BackgroundImage>
    </Wrapper>
  )
}

export default About
