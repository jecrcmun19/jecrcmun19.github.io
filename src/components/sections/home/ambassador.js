import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import EmojiEventsRoundedIcon from '@material-ui/icons/EmojiEventsRounded'
const useStyles = makeStyles(theme => ({
  containerContent: {
    color: theme.palette.primary.main,

    '&:hover > div > h6, &:hover > div > p': {
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

function Ambassador() {
  const classes = useStyles()
  return (
    <div
      className='text-center'
      style={{
        minHeight: '50vh',
      }}
    >
      <Typography variant='h4' className='pt-5' color='primary'>
        Become Our Campus Ambassador
      </Typography>
      <img
        src='/images/line.png'
        className='mx-auto pb-5'
        alt='---------------------'
      />
      <Grid container justify='center'>
        <Grid item md={4}>
          <div
            className={`my-10 mx-10 justify-center text-center flex flex-col ${classes.containerContent}`}
          >
            <div className='flex justify-center'>
              <p
                className={`rounded-full h-32 w-32 bg-white flex items-center justify-center ${classes.borderPink}`}
              >
                <CardGiftcardIcon style={{ fontSize: '50px' }} />
              </p>
            </div>
            <div className='w-full my-5 text-white'>
              <Typography variant='h5'> Perks and Entitlements </Typography>
            </div>
            <div className='text-white'>
              Campus Ambassadors of JECRC MUN are entitled to additional
              benefits in form of concessions and discounts. This is an
              opportunity to make your conference experience more fulfilling, by
              paying the fee simply with your networking skills.
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
                <SupervisedUserCircleIcon style={{ fontSize: '50px' }} />
              </p>
            </div>
            <div className='w-full my-5 text-white'>
              <Typography variant='h5'>Networking Skills</Typography>
            </div>
            <div className='text-white'>
              As a campus ambassador you get to enhance your network within your
              campus with the prestigious tag of JECRC MUN. Get an edge at being
              heard by your peers and connect with them at a greater level,
              honing your interpersonal skills.
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
                <EmojiEventsRoundedIcon style={{ fontSize: '50px' }} />
              </p>
            </div>
            <div className='w-full my-5 text-white'>
              <Typography variant='h5'>Recognition</Typography>
            </div>
            <div className='text-white'>
              The merits of being a Campus Ambassador don't end with the
              conference, but stay with you thereafter. A certificate
              recognizing your milestones will be conferred upon you, investing
              the repute and excellence of JECRC MUN on you as well.
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Ambassador
