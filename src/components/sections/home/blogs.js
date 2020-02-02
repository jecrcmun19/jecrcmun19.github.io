import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import blogData from '../../../data/blog-home-data'
import { makeStyles } from '@material-ui/core'
import classnames from 'classnames'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
  title: {
    width: '100%',
    color: '#FFF',
    fontWeight: '500',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  containerCard: {
    height: '100%',
    paddingBottom: theme.spacing(10),
    paddingTop: theme.spacing(10),
    marginRight: theme.spacing(2),
    '&:hover > div > h6, &:hover > div > a': {
      color: '#D90845',
    },
    marginLeft: theme.spacing(2),
    width: '500px',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(0),
    },
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
  },
  blogTitle: {
    display: 'flex',
  },
  blogContent: {
    paddingTop: theme.spacing(1),
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
    borderRadius: '0px 0px 12px 12px',
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
    <div className={classes.root}>
      <Typography className={classes.title} variant='h4'>
        BLOGS
      </Typography>
      {blogData.map((blog, index) => (
        <div key={index} className={classes.containerCard}>
          <img
            alt={blog.blogTitle}
            src={`/images/${blog.image}`}
            className={classnames(['mx-auto', classes.blogImage])}
          />

          <div className={classes.contentContainer}>
            <Typography className={classes.blogDate} align='left' variant='h6'>
              Date
            </Typography>
            <Typography align='left' className={classes.blogTitle} variant='h6'>
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
    </div>
  )
}

export default HomeBlogs
