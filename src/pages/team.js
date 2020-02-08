import React from 'react'
import Wrapper from '../components/wrapper'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import Banner from '../components/banner'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import makeStyles from '@material-ui/styles/makeStyles'
import Avatar from '@material-ui/core/Avatar'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    // fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  root: {
    margin: theme.spacing(4),
    display: 'flex',
    flexWrap: 'wrap',
    width: '80%',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
    },
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
  },
  container: {
    display: 'flex',
    position: 'relative',
    width: '400px',
    height: '400px',
    maxHeight: '400px',
    color: '#FFF',
    margin: theme.spacing(4),
    '&:hover > img': {
      filter: 'brightness(0.5)',
    },
    '&:hover > div': {
      visibility: 'hidden',
      transition: 'none',
    },
    '&:hover > main': {
      visibility: 'visible',
      paddingBottom: theme.spacing(4),
    },
  },
  bottomText: {
    position: 'absolute',
    width: '100%',
    transitionDelay: '0.3s',
    transition: 'all 0.3s ease-out',
    animationDelay: '2s',
    animation: '$cssAnimation 0s 3s ease-out',
    textAlign: 'center',
    bottom: 0,
    visibility: 'visible',
    clipPath: 'polygon(100% 100%, 0% 100%, 50% -95%)',
    background: '#d90845c4',
  },
  imageStyle: {
    width: '100%',
    height: '400px',
  },
  hoverContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    width: '100%',
    height: '100%',
    visibility: 'hidden',
    transition: 'all 0.3s ease-out',
    textAlign: 'center',
    bottom: 0,
    background: '#d90845c4',
  },
  socialIcons: {
    position: 'absolute',
    alignSelf: 'center',
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
  hoverText: {
    bottom: 0,
    // paddingBottom: theme.spacing(2),
  },
}))

function Team(props) {
  const classes = useStyles()
  const theme = useTheme()
  const { image, bgImage } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/committees.png" }) {
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
          Team
        </Typography>
      </Banner>
      <BackgroundImage
        className='flex flex-col justify-center items-center'
        fluid={bgImage.sharp.fluid}
        durationFadeIn={50}
      >
        <div className={classes.root}>
          {['1', '2', '3', '4', '5', '6'].map((value, index) => (
            <div key={index} className={classes.container}>
              <img
                className={classes.imageStyle}
                src='images/anandChulani.jpg'
              />
              <Grid className={classes.bottomText}>
                <Typography variant='h6'>John Doe</Typography>
                <Typography variant='subtitle1'>Developer</Typography>
              </Grid>
              <Grid className={classes.hoverContainer} component='main'>
                <Grid
                  component='p'
                  container
                  justify='center'
                  className={classes.socialIcons}
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
                <Grid className={classes.hoverText}>
                  <Typography variant='h5'>John Doe</Typography>
                  <Typography variant='subtitle1'>Developer</Typography>
                </Grid>
              </Grid>
            </div>
          ))}
        </div>
      </BackgroundImage>
    </Wrapper>
  )
}

export default Team
