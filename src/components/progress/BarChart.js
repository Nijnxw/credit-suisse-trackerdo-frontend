import React from 'react'
import Chart from "react-apexcharts";
import { Grid, makeStyles, Paper } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
  pageContent: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(10),
    padding: theme.spacing(3),
    width: '800px',
    minWidth: '600px',
  }
}))

function BarChart({data}) {
  const classes = useStyle()
  const dailyGoal = 3
  const state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      },
      plotOptions: {
        bar: {
          horizontal: true
        },
      },
      annotations: {
        xaxis: [{
          x: dailyGoal,
          borderColor: '#7D82DD',
          borderWidth: 3,
          label: {
            borderColor: '#7D82DD',
            style: {
              color: '#fff',
              background: '#7D82DD',
            },
            text: 'Daily goal',
          }
        }],
      },
    },
    series: [
      {
        name: "Task completed",
        data: [3, 4, 4, 1, 2, 0, 2]
      }
    ]
  }

  return (
    <Paper className={classes.pageContent} elevation={3}>
      <Grid container alignItems='center' justify='flex-start'>
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width='700px'
        />
      </Grid>
    </Paper>
  )
}


export default BarChart
