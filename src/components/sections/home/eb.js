import React from 'react'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { executives } from '../../../data/executive-board-data'
import Grid from '@material-ui/core/Grid'
import { graphql, useStaticQuery } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import Image from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
  },
  containerCard: {
    borderRadius: '12px',
    margin: `${theme.spacing(5)}px ${theme.spacing(4)}px`,
    position: 'relative',
    maxHeight: '425px',
    boxShadow:
      '10px 20px 38px rgba(0, 0, 0, 0.3), 5px 15px 12px rgba(0, 0, 0, 0.22)',
    width: '425px',
    [theme.breakpoints.down('xs')]: {
      width: '275px',
      maxHeight: '275px',
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(0),
    },
    '&:hover > main': {
      background: 'rgba(217, 8, 69, 0.7)',
      height: '425px',
      borderRadius: '12px',
      animation: `$mouseMoveIntoCard 600ms ${theme.transitions.easing.easeIn}`,
      [theme.breakpoints.down('xs')]: {
        height: '275px',
        animation: `$mouseMoveIntoCardSmallViewPort 700ms ${theme.transitions.easing.easeIn}`,
      },
    },
    '&:hover > p': {
      animationDelay: '600ms',
      animationFillMode: 'forwards',
      animation: `$socialIconseffect 200ms ${theme.transitions.easing.easeIn}`,
    },
    '&:hover > img': {
      filter: `brightness(0.7) drop-shadow(0 0 6px #000)`,
    },
  },
  blogImage: {
    width: '425px',
    height: '425px',
    transition: 'all 300ms ease-out',
    [theme.breakpoints.down('xs')]: {
      width: '275px',
      height: '275px',
    },
    background: '#000',
    borderRadius: '12px',
  },
  bottomText: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    color: '#FFF',
    height: '120px',
    background: 'rgba(217, 8, 69, 0.7)',
    transition: 'all 600ms ease-out',
    padding: theme.spacing(0.5),
    borderRadius: '0px 0 12px 12px',
  },
  socialIconsContainer: {
    position: 'absolute',
    top: '42%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: '0',
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
  '@keyframes mouseMoveIntoCard': {
    '0%': {
      height: '120px',
    },
    '100%': {
      height: '425px',
      borderRadius: '12px',
    },
  },
  '@keyframes mouseMoveIntoCardSmallViewPort': {
    '0%': {
      height: '120px',
    },
    '100%': {
      height: '275px',
      borderRadius: '12px',
    },
  },
  '@keyframes socialIconseffect': {
    '100%': {
      opacity: '1',
    },
  },
}))

function ExecutiveBoard() {
  const classes = useStyles()
  let { eb } = useStaticQuery(graphql`
    query {
      eb: allFile(filter: { relativeDirectory: { eq: "eb" } }) {
        images: nodes {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  let { images: ebImages } = eb

  const ebSwiperParams = {
    spaceBetween: 5,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }
  return (
    <div className='text-center py-10 sm:py-5'>
      <Fade bottom cascade>
        <Typography variant='h4' className='pt-5'>
          Executive Board
        </Typography>
        <img
          src='/images/line.png'
          className='mx-auto pb-5'
          alt='---------------------'
        />
      </Fade>
      <Fade bottom>
        <Grid container justify='center' className={classes.root}>
          <Swiper {...ebSwiperParams}>
            {executives.map((value, index) => (
              <Grid key={index} container className='mb-16' justify='center'>
                <Grid item xs={12} className='text-center py-10'>
                  <Typography style={{ color: '#000a2a' }} variant='h4'>
                    {value.committee}
                  </Typography>
                </Grid>
                {value.members.map((member, index) => (
                  <div key={index} className={classes.containerCard}>
                    <Image
                      fluid={
                        ebImages.filter(
                          image =>
                            image.sharp.fluid.src.split('/').pop() ===
                            member.image,
                        )[0].sharp.fluid
                      }
                      fadeIn={false}
                      alt='JECRC MUN eb'
                      className={classnames(['mx-auto', classes.blogImage])}
                    />

                    <Grid
                      container
                      alignItems='flex-end'
                      className={classes.bottomText}
                      component='main'
                    >
                      <div className='w-full text-center'>
                        <Typography variant='h5' className='py-2'>
                          {member.name}
                        </Typography>
                        <Typography variant='h6' className='pb-2'>
                          {member.designation}
                        </Typography>
                      </div>
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
                        className={classnames(['m-2', classes.socialIcon])}
                      >
                        <InstagramIcon className={classes.icon} />
                      </Avatar>
                      <Avatar
                        component='a'
                        href='https://twitter.com/jecrcmun'
                        target='_blank'
                        className={classnames(['m-2', classes.socialIcon])}
                      >
                        <TwitterIcon className={classes.icon} />
                      </Avatar>
                    </Grid>
                  </div>
                ))}
              </Grid>
            ))}
          </Swiper>
        </Grid>
      </Fade>
      <div className='mt-10'>
        <Button
          type='submit'
          color='primary'
          variant='contained'
          size='large'
          component={Link}
          to='/executive-board'
        >
          Our Executive Board
        </Button>
      </div>
    </div>
  )
}

export default ExecutiveBoard
