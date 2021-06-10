import React from 'react'
import { CircularProgress, makeStyles, Typography } from '@material-ui/core'

const Loading = ({ loadingMessage = 'loading', withText = false }) => {
  const classes = useStyle()
  return (
    <div className={classes.container}>
      <CircularProgress />
      {withText
      && <Typography className={classes.loadingText}>{loadingMessage}</Typography>}
    </div>
  )
}

const useStyle = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 6,
    fontSize: 16,
  },
}))

export default Loading
