import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import GroupIcon from '@material-ui/icons/Group'
import CastForEducationIcon from '@material-ui/icons/CastForEducation'
const useStyles = makeStyles(theme => ({
  containerContent: {
    color: theme.palette.primary.main,

    '&:hover > div > div': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      transition: '1s',
    },
    '&:hover > div > h5': {
      color: theme.palette.primary.main,
      transition: '1s',
    },
  },
  borderPink: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
}))

function WhyMun() {
  const classes = useStyles()
  return (
    <div
      className='text-center'
      style={{
        minHeight: '70vh',
      }}
    >
      <Typography
        variant='h4'
        style={{ color: '#000a2a' }}
        className='pt-5'
        color='primary'
      >
        JECRC MUN Excellencies
      </Typography>
      <img
        src='/images/line.png'
        className='mx-auto pb-5'
        alt='---------------------'
      />
      <Grid container justify='center'>
        <Grid
          item
          md={4}
          className={`my-10 mx-10 justify-center text-center flex flex-col ${classes.containerContent}`}
        >
          <div className='flex justify-center'>
            <div
              className={`rounded-full h-32 w-32 bg-white flex items-center justify-center ${classes.borderPink}`}
            >
              <CastForEducationIcon style={{ fontSize: '50px' }} />
            </div>
          </div>
          <div className='my-5'>
            <Typography variant='h5' color='textPrimary'>
              Skills
            </Typography>
          </div>
          <Typography color='textPrimary'>
            JECRC MUN is an ideal place to hone your public speaking, writing
            and analytical skills. All writing piece will involve your research
            and analytical abilities. Public speaking is a fundamental part of
            the conference and it requires you to adapt to several situations to
            have a strong and effective debate.
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          className={`my-10 mx-10 justify-center text-center flex flex-col ${classes.containerContent}`}
        >
          <div className='flex justify-center'>
            <div
              className={`rounded-full h-32 w-32 bg-white flex items-center justify-center ${classes.borderPink}`}
            >
              <GroupIcon style={{ fontSize: '50px' }} />
            </div>
          </div>
          <div className='my-5'>
            <Typography variant='h5' color='textPrimary'>
              Networking
            </Typography>
          </div>
          <Typography color='textPrimary'>
            JECRC MUN will provide you with an opportunity to meet many talented
            people throughout the country, discover new cultures and their
            different perspective. You can grow your network for the future by
            making new contacts. You also build precious memories and
            friendships that will last forever.
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          className={`my-10 mx-10 justify-center text-center flex flex-col ${classes.containerContent}`}
        >
          <div className='flex justify-center'>
            <div
              className={`rounded-full h-32 w-32 bg-white flex items-center justify-center ${classes.borderPink}`}
            >
              <LocalLibraryIcon style={{ fontSize: '50px' }} />
            </div>
          </div>
          <div className='my-5'>
            <Typography variant='h5' color='textPrimary'>
              Learn from others
            </Typography>
          </div>
          <Typography color='textPrimary'>
            Model UN is a great educational tool that provides extremely
            valuable benefits to students. At JECRC MUN, students learn from
            each other. MUN conferences are fun and during the conference, you
            will meet other delegates and senior delegates who can help you in
            learning new things.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default WhyMun
