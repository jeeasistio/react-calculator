import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  IconButton,
  Button,
  Snackbar,
  SnackbarContent
} from '@material-ui';

const Buttons = ({ output, setOutput, history, setHistory }) => {

  const useStyles = makeStyles(theme => ({
    root: {
      textAlign: 'center',
      padding: 15
    },
    clearStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    clearButtonStyle: {
      fontSize: 16,
      background: 'linear-gradient(#f55, #f55)',
      color: '#fff'
    },
    equalStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    equalButtonStyle: {
      fontSize: 16,
      background: 'linear-gradient(#0c0, #0c0)',
      color: '#fff'
    },
    snackStyle: {
      background: '#f55',
      maxWidth: 170,
      minWidth: 170,
      width: 170,
      margin: 'auto',
      justifyContent: 'center'
    }
  }))

  const classes = useStyles();

  const [snackIsOpen, setSnackIsOpen] = useState(false);

  const changeOutput = (e) => {
    setOutput(output + e.target.innerText);
  }

  const clearOutput = () => {
    setOutput('');
    setHistory('');
  }

  const evalOutput = () => {
    setOutput('');
    try {
      if (output.match(/^[\-\+\*\/\%]/)) {
        const newExpression = history + output;
        setHistory(eval(history ? newExpression : output));
      } else {
        setHistory(eval(output));
      }
    } catch (e) {
      if (e instanceof SyntaxError) {
        setSnackIsOpen(true);
      }
    }
  }

  return (
    <section
      className={classes.root}
      justify="center" 
      alignContent="center" 
      container
      id="buttons">
      <Grid container>
        <Grid className={classes.clearStyle} xs="6" item>
          <Button 
            className={classes.clearButtonStyle}
            onClick={clearOutput}
            fullWidth 
            disableElevation 
            variant="contained">
            C
          </Button>
        </Grid>
        <Grid xs="3" item><IconButton onClick={changeOutput}>%</IconButton></Grid>
        <Grid xs="3" item><IconButton onClick={changeOutput}>/</IconButton></Grid>
      </Grid>
      <Grid container>
        <Grid xs="3" item><IconButton onClick={changeOutput}>7</IconButton></Grid>
        <Grid xs="3" item><IconButton onClick={changeOutput}>8</IconButton></Grid>
        <Grid xs="3" item><IconButton onClick={changeOutput}>9</IconButton></Grid>
        <Grid xs="3" item><IconButton onClick={changeOutput}>*</IconButton></Grid>
      </Grid>
      <Grid container>
        <Grid xs="3" item><IconButton onClick={changeOutput}>4</IconButton></Grid>
        <Grid xs="3" item><IconButton onClick={changeOutput}>5</IconButton></Grid>
        <Grid xs="3" item><IconButton onClick={changeOutput}>6</IconButton></Grid>
        <Grid xs="3" item><IconButton onClick={changeOutput}>-</IconButton></Grid>
      </Grid>
      <Grid container>
        <Grid xs="3" item><IconButton onClick={changeOutput}>1</IconButton></Grid>
        <Grid xs="3" item><IconButton onClick={changeOutput}>2</IconButton></Grid>
        <Grid xs="3" item><IconButton onClick={changeOutput}>3</IconButton></Grid>
        <Grid xs="3" item><IconButton onClick={changeOutput}>+</IconButton></Grid>
      </Grid>
      <Grid container>
        <Grid xs="3" item><IconButton onClick={changeOutput}>.</IconButton></Grid>
        <Grid xs="3" item><IconButton onClick={changeOutput}>0</IconButton></Grid>
        <Grid className={classes.equalStyle} xs="6" item>
          <Button 
            className={classes.equalButtonStyle}
            onClick={evalOutput}
            fullWidth
            disableElevation
            variant="contained">
            =
          </Button>
        </Grid>
      </Grid>
      <Snackbar onClose={() => setSnackIsOpen(false)} open={snackIsOpen} autoHideDuration="1500">
        <SnackbarContent message="Invalid Output" className={classes.snackStyle} />
      </Snackbar>
    </section>
  )
}

export default Buttons;