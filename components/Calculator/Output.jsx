import React from 'react';
import {
  makeStyles,
  Typography,
  IconButton,
  Icon,
  Divider
} from '@material-ui';

const Output = ({ output, setOutput, history }) => {

  const useStyles = makeStyles(theme => ({
    root: {
      height: 180
    },
    displayStyle: {
      height: '70%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      padding: 15
    },
    eraseStyle: {
      height: '30%',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }))

  const classes = useStyles();

  const eraseOutput = () => {
    setOutput(output.substr(0, output.length - 1));
  }

  return (
    <section className={classes.root} id="output">
      <div className={classes.displayStyle}>
        <Typography color="primary" variant="h4">{output}</Typography>
        <Typography variant="h5" color="textSecondary">{history}</Typography>
      </div>
      <div className={classes.eraseStyle}>
        <IconButton onClick={eraseOutput}><Icon>backspace</Icon></IconButton>
      </div>
    </section>
  )
}

export default Output;