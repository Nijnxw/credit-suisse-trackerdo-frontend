import React from "react";
import Chart from "react-apexcharts";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: '132px',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

function ProgressCircularBar({ data }) {
  const classes = useStyles()
  const state = {
    series: data || [67],
    options: {
      labels: ['Progress'],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "65%",
            image: '../../../assets/badge.png',
            imageWidth: 64,
            imageHeight: 64,
            imageClipped: true,
          },
          dataLabels: {
            name: {
              show: false,
              color: '#fff'
            },
            value: {
              show: true,
              fontSize: '13px',
              offsetY: 5,
            },
          },
        },
      },
      colors: ['#7D82DD'],
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          gradientToColors: ["#BCBFF6"],
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round",
      },
    },
  }

  return (
    <Grid container className={classes.container}>
      <Chart
        options={state.options}
        series={state.series}
        type='radialBar'
        width='200px'
      />
    </Grid>
  )
}

export default ProgressCircularBar;
