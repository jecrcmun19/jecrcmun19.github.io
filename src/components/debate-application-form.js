import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import ContentBox from './content-box'
import Link from '@material-ui/core/Link'

import Grid from '@material-ui/core/Grid'

import Fade from 'react-reveal/Fade'
import classnames from 'classnames'

const useStyles = makeStyles(theme => ({
  content: {
    justifyContent: 'start',
  },
  container: {
    backgroundColor: theme.palette.background.pinkish,
  },
}))

export default function DebateForm() {
  const classes = useStyles()
  return (
    <Grid
      className={classnames([
        'flex flex-col justify-center items-center',
        classes.container,
      ])}
    >
      <Fade bottom>
        <ContentBox className={classnames(['my-16', classes.content])}>
          <div>
            <Typography variant='body1' component='p' paragraph>
              Registration are closed.
            </Typography>
            <Typography variant='body2' component='p'>
              For more queries, you can contact:
            </Typography>
            <div className='mt-4'>
              <Typography variant='subtitle2' component='p' paragraph>
                Pourush Choudhary: <Link href='tel:9413900468'>9413900468</Link>
              </Typography>
              <Typography variant='subtitle2' component='p' paragraph>
                Shrey Bhargava: <Link href='tel:8955332841'>8955332841</Link>
              </Typography>
            </div>
          </div>
        </ContentBox>
      </Fade>
    </Grid>
  )
}
