import React, { useState } from 'react';
import Output from './Output.jsx';
import Buttons from './Buttons.jsx';
import {
  makeStyles,
  Paper,
  Divider
} from '@material-ui';

const Calculator = () => {

  const useStyles = makeStyles(theme => ({
    root: {
      width: 280,
      margin: '50px auto'
    }
  }));

  const classes = useStyles();

  const [output, setOutput] = useState('');
  const [history, setHistory] = useState('');

  return (
    <Paper className={classes.root} elevation="3">
      <Output output={output} history={history} setOutput={setOutput} />
      <Divider />
      <Buttons output={output} setOutput={setOutput} history={history} setHistory={setHistory} />
    </Paper>
  )
}

export default Calculator;