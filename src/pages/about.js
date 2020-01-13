import React from 'react'
import Wrapper from '../components/wrapper'
import Helmet from 'react-helmet'
import {
  makeStyles,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
const styles = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.87), rgba(0, 0, 0, 0.87)), url(images/about-bg.png)`,
  height: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
}

const useStyles = makeStyles(theme => ({
  content: {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  header: {
    display: 'table',
    width: '100%',
    zIndex: 1200,
  },
  munTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  committees: {
    background: '#D90845',
    borderRadius: '10px',
    color: '#ffffff',
    width: '250px',
    height: '27px',
    margin: '2rem',
  },
  borderAbout: {
    width: '80%',
    margin: '2rem',
  },
  bgImage: {
    backgroundImage: 'url("/images/bg2.png")',
  },
}))

function About() {
  const classes = useStyles()
  return (
    <Wrapper>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css?family=Rubik&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <div>
        <div style={styles} className={classes.header}>
          <div className={classes.content}>
            <div>
              <Typography className={classes.munTextProperty}>
                ABOUT US
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Paper elevation={3} className={classes.borderAbout}>
          <div className='flex justify-center'>
            <Typography
              style={{ fontSize: '48px', fontWeight: 500, color: '#D90845' }}
            >
              JECRC MUN
            </Typography>
          </div>
          <Grid container justify='center' className='p-4'>
            <Grid item md={8}>
              <Typography className='flex justify-center text-center'>
                JECRC MUN, being conducted from 2012, has now become a widely
                acclaimed Model United Nations platform. Over the years, it has
                developed itself as the ideal to strengthen the skills of
                diplomacy and leadership.
              </Typography>
            </Grid>
            <Grid item md={8}>
              <Typography className='flex justify-center text-center'>
                Beholding the success of our annual event, this year we are
                bringing JECRC MUN for you. Having 6 councils & International
                Press. With this, we affirm, that our dominance in the region
                would henceforth strengthen.
              </Typography>
            </Grid>
          </Grid>
          <div className='flex justify-center'>
            <div
              className={`flex justify-center align-middle ${classes.committees}`}
            >
              <Typography>Committees This Year</Typography>
            </div>
          </div>
          <div style={{ marginLeft: '14em' }}>
            <Typography>
              &nbsp; &nbsp;The following councils would be simulated for JECRC
              MUN 2020
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary='1. GA-DISEC : The comprehensive review of UN counter terrorism strategy.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='2. UNSC : Comprehensive review of the whole question of peacekeeping operations in all their aspects.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='3. UN-HRC : Protection of the human rights of migrants- the global compact for safe, orderly and regular migration.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='4. UN-CSW : The role of men and boys in gender equality' />
              </ListItem>
              <ListItem>
                <ListItemText primary='5. LOKSABHA : Deliberation on policy to solve Indian Agrarian Crisis.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='6. UN-HRC : Protection of the human rights of migrants- the global compact for safe, orderly and regular migration.' />
              </ListItem>
            </List>
          </div>
        </Paper>
      </div>
    </Wrapper>
  )
}
export default About
