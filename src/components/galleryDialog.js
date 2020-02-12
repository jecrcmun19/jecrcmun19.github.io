import React, { useState } from 'react'
import Swiper from 'react-id-swiper'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core'

import { useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import 'swiper/css/swiper.css'

const useStyles = makeStyles(theme => ({
  dialogTitle: {
    alignSelf: 'center',
  },
  dialogImageContainer: {
    alignSelf: 'center',
    width: '80%',
    height: '700px',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      width: '30.34%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  image: {
    width: '100%',
    display: 'block',
    height: '600px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: `16px`,
    '&:hover': {
      cursor: 'pointer',
      transition: 'all 0.3s ease-in',
      opacity: 0.9,
    },
  },
}))

const GalleryDialog = props => {
  const { imageIndex, handleDialogClose, dialogOpen } = props
  const classes = useStyles()

  const gallerySwiperParams = {
    spaceBetween: 10,
    activeSlideKey: `${imageIndex}`,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  const { gallery } = useStaticQuery(graphql`
    query {
      gallery: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        images: nodes {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  return (
    <Dialog
      open={dialogOpen}
      onClose={handleDialogClose}
      maxWidth='xl'
      fullWidth={true}
    >
      <DialogTitle className={classes.dialogTitle}>
        Dialog
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={handleDialogClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogImageContainer}>
        <Swiper {...gallerySwiperParams}>
          {gallery.images.map((image, index) => {
            return (
              <Image
                fluid={image.sharp.fluid}
                fadeIn={false}
                key={`${index}`}
                alt='JECRC MUN Gallery'
                className={classes.image}
              />
            )
          })}
        </Swiper>
      </DialogContent>
    </Dialog>
  )
}

export default GalleryDialog
