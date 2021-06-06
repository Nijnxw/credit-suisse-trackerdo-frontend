import { useState } from "react"
import { Divider, Grid, Link, Typography } from "@material-ui/core"
import PageContainer from "../commons/PageContainer"
import Donut from "./Donut"
import BarChart from "./BarChart"

const Progress = () => {
  const [completed, setCompleted] = useState(0)

  const handleClick = (e) => {
    e.preventDefault()
    console.log('navigate to completed tasks')
  }

  return (
    <PageContainer className="Progress" showSideBar={true}>
      <h1>Your productivity</h1>
      
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Typography>
          <b>{completed}</b>
          {' completed tasks'}
        </Typography>
        <Typography>
          <Link href='#' onClick={handleClick} >
            {'View all completed tasks'}
          </Link>
        </Typography>
      </Grid>

      <h2>Statistics</h2>
      <Divider variant="fullWidth" />
      <Donut />

      <h2>Completed in the last 7 days</h2>
      <Divider variant="fullWidth" />
      <BarChart />
    </PageContainer>
  )
}

export default Progress
