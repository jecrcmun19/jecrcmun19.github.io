import React from 'react'
import { CommitteesData } from '../../../data/committees-data'
import makeStyles from '@material-ui/styles/makeStyles'
import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import Fade from 'react-reveal/Fade'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  containerCard: {
    borderRadius: '12px',
    '&:hover > div ': {
      visibility: 'visible',
      background: 'grey',
      marginTop: '-200px',
      bottom: 0,
      height: '100px',
      transition: 'all 0.3s ease-out',
      borderRadius: '12px',
      width: '250px',
    },
    '&:hover > .socialIcon ': {
      visibility: 'visible',
    },
    '&:hover > img': {
      filter: `brightness(0.7) drop-shadow(0 0 6px #000)`,
    },
    '&:hover > button': {
      color: '#fff',
      backgroundColor: '#D90845',
    },
  },

  socialIcon: {
    background: 'transparent',
  },
  blogImage: {
    transition: 'all 0.3s ease-out',
    background: '#000',
    borderRadius: '12px',
  },
  bottomText: {
    visibility: 'hidden',
  },
}))

function CommitteeMatrix() {
  const classes = useStyles()
  return (
    <div className='text-center py-10'>
      <Fade bottom cascade>
        <Typography
          variant='h4'
          style={{ color: '#000a2a' }}
          className='pt-5'
          color='primary'
        >
          Communities
        </Typography>
        <img
          src='/images/line.png'
          className='mx-auto pb-5'
          alt='---------------------'
        />
      </Fade>
      <Grid container justify='center'>
        {CommitteesData.map(data => (
          <Grid
            item
            md={4}
            key={data.title}
            justify='center'
            direction='column'
            className={classnames(['m-10 p-10', classes.containerCard])}
          >
            <img
              src={data.img}
              className={classnames(['h-64 w-64', classes.blogImage])}
            />

            <div className='my-5' className={classes.bottomText}>
              <Typography variant='h5' color='textPrimary'>
                {data.title}
              </Typography>

              <Typography color='textPrimary'>{data.agenda}</Typography>
            </div>

            <Button variant='contained' className={classes.socialIcon}>
              View CommunityMatrix
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CommunityMatrix
