import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto auto',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: '2px',
    paddingTop: theme.spacing(2),
    border: '2px solid #999',
    [theme.breakpoints.down('xs')]: {
      margin: '8px',
      marginBottom: theme.spacing(8),
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  text: {
    color: '#ffffff',
    textJustify: 'justify',
    padding: theme.spacing(2),
    fontWeight: 500,
  },
}))

const CoronaWarning = () => {
  const classes = useStyles()
  return (
    <Grid item sm={9} md={7} lg={5} className={classes.root}>
      <Typography variant='h3' className={classes.heading}>
        event postponed!
      </Typography>
      <Typography variant='h5' className={classes.text}>
        Due to the unforeseen circumstances across the country in the wake of
        COVID-19, JECRC MUN 2020 has to be postponed. The Secretariat's prime
        responsibility is to ensure everyone's safety. Updates about the
        conference will be dissipated soon.
        <br /> Stay safe and stay tuned with us!
      </Typography>
    </Grid>
  )
}

export default CoronaWarning
