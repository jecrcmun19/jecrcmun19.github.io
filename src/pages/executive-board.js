import React from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  root: {
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
  },
  containerCard: {
    border: '1px solid grey',
    borderRadius: '12px',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(2),
    position: 'relative',
    maxHeight: '450px',
    '&:hover > div': {
      background: 'rgba(217, 8, 69, 0.7)',
    },
    '&:hover > p': {
      visibility: 'visible',
    },
    '&:hover > img': {
      filter: `brightness(0.7) drop-shadow(0 0 6px #000)`,
    },
    marginLeft: theme.spacing(2),
    width: '450px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
      maxHeight: '300px',
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(0),
    },
    boxShadow:
      '10px 20px 38px rgba(0, 0, 0, 0.3), 5px 15px 12px rgba(0, 0, 0, 0.22)',
  },
  blogImage: {
    width: '100%',
    height: '450px',
    transition: 'all 0.3s ease-out',
    [theme.breakpoints.down('xs')]: {
      height: '300px',
    },
    background: '#000',
    borderRadius: '12px',
  },
  bottomText: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    color: '#FFF',
    height: '100px',
    transition: 'all 0.3s ease-out',
    borderRadius: '12px',
    background: 'rgba(0, 0, 0, 0.7)',
    padding: theme.spacing(0.5),
  },
  socialIconsContainer: {
    position: 'absolute',
    top: '42%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    visibility: 'hidden',
  },
  socialIcon: {
    background: 'transparent',
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  icon: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}))

function Something(props) {
  const classes = useStyles(props)
  const theme = useTheme()

  const committees = ['UNSC', 'UNODC', 'DISEC', 'UNCSW', 'WHO', 'AIPPM']
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
          EXECUTIVE BOARD
        </Typography>
        <Typography className='text-white' variant='h5'>
          JECRC MUN 2020
        </Typography>
      </Banner>
      <BackgroundImage
        className='flex flex-col justify-center items-center'
        fluid={bgImage.sharp.fluid}
        durationFadeIn={50}
      >
        <Grid container justify='center' className={classes.root}>
          {committees.map((name, index) => (
            <Grid key={index} container className='w-full' justify='center'>
              <Grid item xs={12} className='text-center py-10'>
                <Typography style={{ color: '#000a2a' }} variant='h4'>
                  {name}
                </Typography>
                <img
                  src='/images/line.png'
                  className='mx-auto'
                  alt='---------------------'
                />
              </Grid>
              {[1, 2].map(value => (
                <div key={value} className={classes.containerCard}>
                  <img
                    alt='----'
                    src={`/images/MUN.jpg`}
                    className={classnames(['mx-auto', classes.blogImage])}
                  />
                  <Grid
                    container
                    alignItems='center'
                    className={classes.bottomText}
                  >
                    <Typography variant='h5' className='w-full text-center'>
                      John Doe
                    </Typography>
                    <Typography variant='h6' className='w-full text-center'>
                      President
                    </Typography>
                  </Grid>

                  <Grid
                    container
                    justify='center'
                    className={classnames([
                      'mb-2',
                      classes.socialIconsContainer,
                    ])}
                    component='p'
                  >
                    <Avatar
                      component='a'
                      href='https://instagram.com/jecrcmun'
                      target='_blank'
                      className={['m-2', classes.socialIcon]}
                    >
                      <InstagramIcon className={classes.icon} />
                    </Avatar>
                    <Avatar
                      component='a'
                      href='https://twitter.com/jecrcmun'
                      target='_blank'
                      className={['m-2', classes.socialIcon]}
                    >
                      <TwitterIcon className={classes.icon} />
                    </Avatar>
                  </Grid>
                </div>
              ))}
            </Grid>
          ))}
        </Grid>
      </BackgroundImage>
    </Wrapper>
  )
}

export default Something
