import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Typography, Grid } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const styles = theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '50%',
    },
  },
  registerButton: {
    backgroundColor: '#D90845',
    color: 'white',
    width: '135px',
    borderRadius: '5px',
    height: '34px',
  },
})

class Form extends React.Component {
  state = {
    name: '',
    contact: '',
    emailId: '',
    institution: '',
    year: '',
    delegate: '',
    executive: '',
    secretraiat: '',
    experience: '',
    portfolio1: '',
    portfolio2: '',
    portfolio3: '',
    accommodation: '',
    refer: '',
  }
  handleValueChange = event => {
    var { name, value } = event.target
    this.setState({
      [name]: value,
      [contact]: value,
      [emailId]: value,
      [institution]: value,
      [year]: value,
      [delegate]: value,
      [executive]: value,
      [secretraiat]: value,
      [experience]: value,
      [portfolio1]: value,
      [portfolio2]: value,
      [portfolio3]: value,
      [accommodation]: value,
      [refer]: value,
    })
  }

  // committees = [{name: 'GA-DISEC', value: '' 'UN-SC', 'AIPPM', 'WHA', 'UN-ODC', 'UN-CSW']
  render() {
    const { classes } = this.props
    return (
      <div className='flex justify-center'>
        <form autoComplete='off' className={classes.root}>
          <div>
            <TextField
              id='full-name'
              label='Name'
              value={this.state.name}
              onChange={this.handleValueChange}
              required
            />
          </div>
          <div>
            <TextField
              id='contact'
              label='Contact'
              value={this.state.contact}
              onChange={this.handleValueChange}
              required
            />
          </div>
          <div>
            <TextField
              id='emailId'
              label='Email ID'
              value={this.state.email}
              onChange={this.handleValueChange}
              required
            />
          </div>
          <div>
            <TextField
              id='institution'
              label='Institution'
              value={this.state.institution}
              onChange={this.handleValueChange}
              required
            />
          </div>
          <div>
            <TextField
              id='year'
              label='Class/Year'
              value={this.state.year}
              onChange={this.handleValueChange}
              required
            />
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography variant='subtitle1'>
                  Prior MUN Experience
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Typography variant='body2'>
                  Please mention the detailed MUN Experience in the format(Name
                  of Conference/Year/Committee/Position/Awards)(if any)
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <TextField
              label='As a Delegate'
              value={this.state.delegate}
              onChange={this.handleValueChange}
            />
          </div>
          <div>
            <TextField
              label='As a member of Executive Board'
              value={this.state.executive}
              onChange={this.handleValueChange}
            />
          </div>
          <div>
            <TextField
              label='As a member of Secretariat'
              value={this.state.secretraiat}
              onChange={this.handleValueChange}
            />
          </div>
          <div>
            <TextField
              label='Any other Experience'
              value={this.state.experience}
              onChange={this.handleValueChange}
            />
          </div>
          <div>
            <Typography>Committee Preference</Typography>
            <Grid container spacing={1}>
              <Grid item md={6}>
                <FormLabel component='legend'>GA-DISEC</FormLabel>
              </Grid>
              <Grid item md={6}>
                <RadioGroup
                  aria-label='committee preference'
                  name='committee'
                  // value={this.preference}
                  onChange={this.handleValueChange}
                  row
                >
                  <FormControlLabel
                    value='1st'
                    control={<Radio />}
                    labelPlacement='top'
                    label='1st'
                  />
                  <FormControlLabel
                    value='2nd'
                    control={<Radio />}
                    labelPlacement='top'
                    label='2nd'
                  />
                  <FormControlLabel
                    value='3rd'
                    control={<Radio />}
                    labelPlacement='top'
                    label='3rd'
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </div>
          <div>
            <TextField
              label='Country/ Portfolio Preference 1'
              value={this.state.portfolio1}
              onChange={this.handleValueChange}
              required
            />
          </div>
          <div>
            <TextField
              label='Country/ Portfolio Preference 2'
              value={this.state.portfolio2}
              onChange={this.handleValueChange}
              required
            />
          </div>
          <div>
            <TextField
              label='Country/ Portfolio Preference 3'
              value={this.state.portfolio3}
              onChange={this.handleValueChange}
              required
            />
          </div>
          <div>
            <Grid container spacing={1} justify='center'>
              <Grid item md={8}>
                <FormLabel component='legend'>
                  Do you require accommodation?
                </FormLabel>
              </Grid>
              <Grid item md={4}>
                <RadioGroup
                  aria-label='accommodation'
                  name='accommodation'
                  value={this.state.accommodation}
                  onChange={this.handleValueChange}
                  row
                >
                  <FormControlLabel
                    value='yes'
                    control={<Radio />}
                    label='Yes'
                  />
                  <FormControlLabel value='no' control={<Radio />} label='No' />
                </RadioGroup>
              </Grid>
            </Grid>
          </div>
          <div>
            <TextField
              id='refer'
              label='Reffered By'
              value={this.state.refer}
              onChange={this.handleValueChange}
              required
            />
          </div>
          <button type='submit' className={classes.registerButton}>
            Register Now
          </button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(Form)
