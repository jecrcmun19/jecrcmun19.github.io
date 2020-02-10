import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import blogData from '../../../data/blog-home-data'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import classnames from 'classnames'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
  },
  containerCard: {
    border: '1px solid grey',
    borderRadius: '12px 12px 0px 0px',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(2),
    '&:hover > div > h6, &:hover > div > a': {
      color: '#D90845',
    },
    '&:hover > img': {
      filter: `brightness(0.7) drop-shadow(0 0 6px #000)`,
    },
    marginLeft: theme.spacing(2),
    width: '450px',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(0),
    },
    boxShadow:
      '10px 20px 38px rgba(0, 0, 0, 0.3), 5px 15px 12px rgba(0, 0, 0, 0.22)',
  },
  blogImage: {
    width: '100%',
    height: '300px',
    background: '#000',
    borderRadius: '12px 12px 0 0',
  },
  contentContainer: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#FFF',
  },
  blogDate: {
    fontStyle: 'italic',
    fontSize: '20px',
  },
  blogTitle: {
    display: 'flex',
    fontSize: '19px',
    lineHeight: '1.5',
  },
  blogContent: {
    paddingTop: theme.spacing(1),
    fontSize: '16px',
  },
  btnContainer: {
    background: '#FFF',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: 'left',
  },
  blogBtn: {
    color: '#000',
    borderRadius: '5px',
  },
}))

const HomeBlogs = () => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12} className='text-center py-10'>
        <Typography style={{ color: '#000a2a' }} variant='h4'>
          Informational Resources
        </Typography>
        <img
          src='/images/line.png'
          className='mx-auto'
          alt='---------------------'
        />
      </Grid>
      <Grid container justify='center' className={classes.root}>
        {blogData.map((blog, index) => (
          <div key={index} className={classes.containerCard}>
            <img
              alt={blog.blogTitle}
              src={`/images/${blog.image}`}
              className={classnames(['mx-auto', classes.blogImage])}
            />

            <div className={classes.contentContainer}>
              {/* <Typography className={classes.blogDate} align='left' variant='h6'>
              Date
            </Typography> */}
              <Typography
                align='left'
                className={classes.blogTitle}
                variant='h6'
              >
                {blog.blogTitle}
              </Typography>
              <Typography
                align='justify'
                component='p'
                className={classes.blogContent}
                variant='subtitle1'
              >
                {blog.description}
              </Typography>
            </div>
            <div className={classes.btnContainer}>
              <Button
                component={Link}
                to={blog.btnLink}
                className={classes.blogBtn}
              >
                Read More
              </Button>
            </div>
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export default HomeBlogs
