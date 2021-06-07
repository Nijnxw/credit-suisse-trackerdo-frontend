import React from "react";
import Chart from "react-apexcharts";
import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  pageContent: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(3),
    width: '600px',
    minWidth: '500px',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))

function Donut({ data, noPaper }) {
  console.log(data)
  const classes = useStyle()
  const state = {
    options: {
      labels: ['Completed', 'In-progress', 'Not started', 'Overdued']
    },
    series: data || [44, 55, 41, 17]
  }

  if (noPaper) {
    return (
      <Chart
        options={state.options}
        series={state.series}
        type='donut'
        width='300px'
      />
    )
  }

  return (
    <Paper className={classes.pageContent} elevation={3}>
      <Grid container alignItems='center' justify='center'>
        <Chart
          options={state.options}
          series={state.series}
          type='donut'
          width='400px'
        />
      </Grid>
    </Paper>
  )
}

export default Donut;
