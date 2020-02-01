import React from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import About from '../components/sections/home/about'
import PreviousYearChiefGuest from '../components/sections/home/previousYearChiefGuests'
import Registrations from '../components/sections/home/registrations'
import HomeBlogs from '../components/sections/home/blogs'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  diplomacyTextProperty: {
    color: '#fff',
    fontFamily: "'Rubik' , sans-serif",
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '28px',
  },
}))

export default () => {
  const classes = useStyles()
  const theme = useTheme()

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/bg.png" }) {
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
      >
        <Typography className={classes.munTextProperty}>
          JECRC MUN 2020
        </Typography>
        <Typography className={classes.diplomacyTextProperty}>
          Diplomacy At It’s Zenith
        </Typography>
      </Banner>
      <div id='about' style={{ minHeight: '100vh' }}>
        <About />
      </div>
      <div className='flex flex-wrap justify-center h-auto'>
        <Banner
          backgrounds={[
            `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
            image.sharp.fluid,
          ]}
          height='auto'
          minHeight={true}
        >
          <div className='pb-10'>
            <PreviousYearChiefGuest />
          </div>
        </Banner>
      </div>
      <div id='registrations' style={{ minHeight: '100vh' }}>
        <Registrations />
      </div>
      <div id='blogs' className='flex flex-wrap justify-center h-auto'>
        <Banner
          backgrounds={[
            `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
            image.sharp.fluid,
          ]}
          height='auto'
          minHeight={true}
        >
          <div className='pb-10'>
            <HomeBlogs />
          </div>
        </Banner>
      </div>
    </Wrapper>
  )
}
