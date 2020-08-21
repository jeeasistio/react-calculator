import React from 'react';
import { makeStyles, Typography, AppBar } from '@material-ui';

const Header = () => {
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '15vh'
    }
  }))
  
  const classes = useStyles();
  
  return (
    <AppBar className={classes.root} position="static">
      <Typography component="h1" variant="h4">React Calculator</Typography>
    </AppBar>
  )
}

export default Header;