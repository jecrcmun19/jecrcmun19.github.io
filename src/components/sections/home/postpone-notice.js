import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto auto',
    marginTop: theme.spacing(4),
    padding: '2px',
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
    marginBottom: theme.spacing(4),
  },
}))

const CoronaWarning = () => {
  const classes = useStyles()
  return (
    <Grid
      justify='center'
      container
      sm={9}
      md={7}
      lg={5}
      className={classes.root}
    >
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
