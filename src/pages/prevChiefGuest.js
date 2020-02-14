import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import guests from '../data/previous-year-cg-data'
import { makeStyles, useTheme } from '@material-ui/core'
import classnames from 'classnames'
import Fade from 'react-reveal/Fade'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    // fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  imageBlock: {
    background: '#d90845',
    borderRadius: '12px 0px 0px 12px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '12px 12px 0px 0px',
    },
  },
  containerStyle: {
    '&:hover': {
      boxShadow: '0 0 5px #DDD',
    },
    borderRadius: '12px',
  },
  contentBlock: {
    background: 'rgb(255, 245, 248)',
    borderRadius: '0px 12px 12px 0px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0px 0px 12px 12px',
    },
  },
  content: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2rem',
    },
  },
  name: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  },
  container: {
    backgroundColor: theme.palette.background.pinkish,
  },
}))

function PreviousYearChiefGuest() {
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
        <title>Our Previous Chief Guests</title>
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
          Our Previous Chief Guests
        </Typography>
        <Typography className='text-white' variant='h5'>
          JECRC MUN 2020
        </Typography>
      </Banner>
      <Grid container className={classes.container}>
        <Fade bottom cascade>
          {guests.map((guest, index) => (
            <Grid
              container
              key={index}
              className={classnames([
                'my-10',
                'mx-auto',
                classes.containerStyle,
              ])}
              lg={8}
              md={11}
              sm={9}
              xs={11}
            >
              <Grid
                id='imageDiv'
                container
                alignContent='center'
                className={classnames(['py-4', classes.imageBlock])}
                md={4}
                sm={12}
                lg={3}
              >
                <div className='w-full'>
                  <img
                    alt={guest.image}
                    src={`/images/${guest.image}.jpg`}
                    className='rounded-full w-32 h-32 m-auto bg-white'
                  />
                </div>
                <div className='text-center w-full mt-3'>
                  <Typography
                    className={classnames(['text-white px-2', classes.name])}
                    variant='h6'
                  >
                    {guest.name}
                  </Typography>
                </div>
              </Grid>
              <Grid item className={classes.contentBlock} md={8} lg={9} sm={12}>
                <div className='py-8 md:px-8 px-4 text-left text-justify'>
                  <Typography variant='subtitle1' className={classes.content}>
                    {guest.description}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          ))}
        </Fade>
      </Grid>
    </Wrapper>
  )
}

export default PreviousYearChiefGuest
