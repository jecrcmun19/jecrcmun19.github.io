import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import GroupIcon from '@material-ui/icons/Group'
import CastForEducationIcon from '@material-ui/icons/CastForEducation'
const useStyles = makeStyles(theme => ({
  containerContent: {
    color: theme.palette.primary.main,

    '&:hover > div > h6, &:hover > div > p': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
    '&:hover > div > h5': {
      color: theme.palette.primary.main,
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
        paddingTop: '80px',
        minHeight: '100vh',
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
      <Grid container spacing={2} justify='center'>
        <Grid item md={4}>
          <div
            className={`my-10 mx-10 justify-center text-center flex flex-col ${classes.containerContent}`}
          >
            <div className='flex justify-center'>
              <p
                className={`rounded-full h-32 w-32 bg-white flex items-center justify-center ${classes.borderPink}`}
              >
                <CastForEducationIcon style={{ fontSize: '50px' }} />
              </p>
            </div>
            <div className='w-full my-5 text-black'>
              <Typography variant='h5'>Skills</Typography>
            </div>
            <div className='text-black'>
              JECRC MUN is an ideal place to hone your public speaking, writing
              and analytical skills. All writing piece will involve your
              research and analytical abilities. Public speaking is a
              fundamental part of the conference and it requires you to adapt to
              several situations to have a strong and effective debate.
            </div>
          </div>
        </Grid>
        <Grid item md={4}>
          <div
            className={`my-10 mx-10 justify-center text-center flex flex-col ${classes.containerContent}`}
          >
            <div className='flex justify-center'>
              <p
                className={`rounded-full h-32 w-32 bg-white flex items-center justify-center ${classes.borderPink}`}
              >
                <GroupIcon style={{ fontSize: '50px' }} />
              </p>
            </div>
            <div className='w-full my-5 text-black'>
              <Typography variant='h5'>Networking</Typography>
            </div>
            <div className='text-black'>
              JECRC MUN will provide you with an opportunity to meet many
              talented people throughout the country, discover new cultures and
              their different perspective. You can grow your network for the
              future by making new contacts. You also build precious memories
              and friendships that will last forever.
            </div>
          </div>
        </Grid>
        <Grid item md={4}>
          <div
            className={`my-10 mx-10 justify-center text-center flex flex-col ${classes.containerContent}`}
          >
            <div className='flex justify-center'>
              <p
                className={`rounded-full h-32 w-32 bg-white flex items-center justify-center ${classes.borderPink}`}
              >
                <LocalLibraryIcon style={{ fontSize: '50px' }} />
              </p>
            </div>
            <div className='w-full my-5 text-black'>
              <Typography variant='h5'>Learn from others</Typography>
            </div>
            <div className='text-black'>
              Model UN is a great educational tool that provides extremely
              valuable benefits to students. At JECRC MUN, students learn from
              each other. MUN conferences are fun and during the conference, you
              will meet other delegates and senior delegates who can help you in
              learning new things.
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default WhyMun
