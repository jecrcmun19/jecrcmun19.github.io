import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import classnames from 'classnames'
import Fade from 'react-reveal/Fade'
import chiefGuestData from '../../../data/chiefGuest'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  imageContainer: {
    width: '300px',
    height: '400px',
    position: 'relative',
    '&:hover > img': {
      border: `5px solid #fff`,
      transition: '1s',
    },
    '&:hover > div ': {
      backgroundColor: '#ffffff91',
      transition: '1s',
    },
    '&:hover > div > h5, &:hover > div > h6': {
      color: '#000929',
      fontWeight: 'bold',
      transition: '1s',
    },
  },
  image: {
    height: '400px',
    borderRadius: '15px',
    border: `5px solid ${theme.palette.primary.main}`,
  },
  layer: {
    backgroundColor: 'rgba(217, 8, 69, 0.7)',
    position: 'absolute',
    bottom: 0,
    borderRadius: '0px 0px 15px 15px',
  },
  content: {
    color: '#fff',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2rem',
    },
    '&:hover': {
      '-webkit-text-stroke': `1px ${theme.palette.primary.main}`,
      transition: '0.5s',
      transitionTimingFunction: 'ease-out',
      fontWeight: 'bold',
    },
  },
}))
const Content = props => {
  const classes = useStyles()

  return (
    <Fade bottom>
      <div className={classnames(['mx-auto', classes.imageContainer])}>
        <img
          src={props.data.image}
          alt={props.data.name}
          className={classnames(['w-full'], classes.image)}
        />
        <div className={classnames(['w-full p-2', classes.layer])}>
          <Typography variant='h5' className='text-white'>
            {props.data.name}
          </Typography>
          <Typography variant='subtitle1' className='text-white'>
            {props.data.designation}
          </Typography>
          <Typography variant='subtitle1' className='text-white'>
            {props.data.organization}
          </Typography>
        </div>
      </div>
    </Fade>
  )
}

const ImageContent = props => {
  const classes = useStyles()
  return (
    <Fade bottom cascade>
      {props.data.content.map((content, index) => (
        <Typography
          key={index}
          className={classnames([
            'text-justify font-medium p-3',
            classes.content,
          ])}
        >
          {content}
        </Typography>
      ))}
    </Fade>
  )
}
const OurChiefGuest = () => {
  console.log(chiefGuestData)
  const matches = useMediaQuery('(min-width:1024px)')
  return (
    <div className='h-full'>
      <Fade bottom cascade>
        <Typography className='text-white pt-10' variant='h4'>
          Our Chief Guests
        </Typography>
        <img
          src='/images/line.png'
          className='mx-auto pb-10'
          alt='---------------------'
        />
      </Fade>
      {chiefGuestData.map((data, index) => (
        <Grid
          key={data.name[0]}
          container
          justify='center'
          alignItems='center'
          className='py-10'
        >
          {matches ? (
            <React.Fragment>
              <Grid item md={index % 2 ? 6 : 4} xs={12}>
                {index % 2 ? (
                  <ImageContent data={data} />
                ) : (
                  <Content data={data} />
                )}
              </Grid>
              <Grid item md={index % 2 ? 4 : 6} xs={12}>
                {index % 2 ? (
                  <Content data={data} />
                ) : (
                  <ImageContent data={data} />
                )}
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid item md={4} xs={12}>
                <Content data={data} />
              </Grid>
              <Grid item md={6} xs={12}>
                <ImageContent data={data} />
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      ))}
      <div className='mt-10'>
        <Button
          type='submit'
          color='primary'
          variant='contained'
          size='large'
          component={Link}
          to='/prevChiefGuest'
        >
          Our Previous Year Chief Guests
        </Button>
      </div>
    </div>
  )
}

export default OurChiefGuest
