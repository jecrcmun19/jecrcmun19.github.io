import React from 'react'
import { withStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Slide from 'react-reveal/Slide'
const styles = theme => ({
  borderRound: {
    color: '#D90845',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '10px',
    position: 'relative',
    width: '100px',
    height: '25vh',
    marginRight: '20px',
    marginLeft: '20px',
  },
  countdown: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
})

class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      var endTime = new Date(this.props.date)
      endTime = Date.parse(endTime) / 1000

      var now = new Date()
      now = Date.parse(now) / 1000
      var timeLeft = endTime - now

      var days = Math.floor(timeLeft / 86400)
      var hours = Math.floor((timeLeft - days * 86400) / 3600)
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60)
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60,
      )
      if (hours < '10') {
        hours = '0' + hours
      }
      if (minutes < '10') {
        minutes = '0' + minutes
      }
      if (seconds < '10') {
        seconds = '0' + seconds
      }

      this.setState({ days, hours, minutes, seconds })
    }, 1000)
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render() {
    const { classes } = this.props
    const { days, hours, minutes, seconds } = this.state
    const daysRadius = mapNumber(days, 90, 0, 0, 360)
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360)
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360)
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360)

    if (!seconds) {
      return null
    }

    return (
      <Slide top cascade>
        <div className={classes.countdown}>
          {days && (
            <div className={classes.borderRound}>
              <SVGCircle radius={daysRadius} />
              <span style={{ marginTop: -136 }}>
                <Typography style={{ fontSize: '30px' }}>{days}</Typography>
                <Typography>
                  <span className='text-white'>DAYS</span>
                </Typography>
              </span>
            </div>
          )}
          {hours && (
            <div className={classes.borderRound}>
              <SVGCircle radius={hoursRadius} />
              <span style={{ marginTop: -136 }}>
                <Typography style={{ fontSize: '30px' }}>{hours}</Typography>
                <Typography>
                  <span className='text-white'>HOURS</span>
                </Typography>
              </span>
            </div>
          )}

          {minutes && (
            <div className={classes.borderRound}>
              <SVGCircle radius={minutesRadius} />
              <span style={{ marginTop: -136 }}>
                <Typography style={{ fontSize: '30px' }}>{minutes}</Typography>
                <Typography>
                  <span className='text-white'>MINUTES</span>
                </Typography>
              </span>
            </div>
          )}

          {seconds && (
            <div className={classes.borderRound}>
              <SVGCircle radius={secondsRadius} />
              <span style={{ marginTop: -136 }}>
                <Typography style={{ fontSize: '30px' }}>{seconds}</Typography>
                <Typography>
                  <span className='text-white'>SECONDS</span>
                </Typography>
              </span>
            </div>
          )}
        </div>
      </Slide>
    )
  }
}

const SVGCircle = ({ radius }) => (
  <svg>
    <path
      fill='none'
      stroke='#fff'
      strokeWidth='4'
      d={describeArc(50, 50, 48, 0, 359)}
    />
    <path
      fill='none'
      stroke='#D90845'
      strokeWidth='6'
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
)

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle)
  var end = polarToCartesian(x, y, radius, startAngle)

  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  var d = [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(' ')

  return d
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

export default withStyles(styles)(Countdown)
