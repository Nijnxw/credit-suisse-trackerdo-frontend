import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Slider as MuiSlider, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const Slider = (props) => {
  const { label, name, value=0, onChange, ...others } = props
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {label && <Typography gutterBottom>{label}</Typography>}
      <Grid container spacing={2}>
        <Grid item xs>
          <MuiSlider
            name={name}
            value={value} 
            onChange={onChange} 
            {...others}
          />
        </Grid>
        <Grid item>
          <Typography id='value' gutterBottom>{value} %</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Slider
