import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Pulse from 'react-reveal/Pulse'

const useStyles = makeStyles({
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: props => (props.height ? props.height : '100vh'),
    minHeight: props => (props.minHeight ? '100vh' : 'auto'),
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    backgroundAttachment: 'fixed',
  },
})

function Banner(props) {
  const classes = useStyles(props)
  return (
    <BackgroundImage
      className={classes.header}
      fluid={props.backgrounds}
      durationFadeIn={50}
    >
      <Pulse>
        <div className={classnames(['text-center', props.className])}>
          {props.children}
        </div>
      </Pulse>
    </BackgroundImage>
  )
}

Banner.propTypes = {
  /**
   * array of backgrounds. The order matters
   */
  backgrounds: PropTypes.array.isRequired,
  /**
   * height of the banner. Default to 100vh
   */
  height: PropTypes.string,
  minHeight: PropTypes.bool,
}

export default Banner
