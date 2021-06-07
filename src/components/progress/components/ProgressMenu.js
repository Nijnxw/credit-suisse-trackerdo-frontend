import React, { useState } from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import { TrendingUp } from '@material-ui/icons'
import { Box, Grid, Link, Tab, Tabs, withStyles } from '@material-ui/core'
import { useEffect } from 'react'
import progress from '../../../service/progress'
import Donut from '../Donut'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  menuContainer: {
    width: theme.spacing(40),
    padding: theme.spacing(1.5),
  },
  tab: {
    textTransform: 'none',
  }
}));

const StyledTab = withStyles({
  root: {
    textTransform: 'none',
    minWidth: 96,
  }
})(Tab)

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          {children}
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const ProgressMenu = () => {
  const classes = useStyles();
  const [data, setData] = useState({})
  const [tab, setTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };
  
  useEffect(() => {
    progress.getStatistics()
    .then(res => { setData(res) })
  }, [])

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <TrendingUp fontSize='small' style={{fill: '#106ba3'}} className={classNames("NavigationBar__link pt-button pt-minimal")} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className={classes.menuContainer}>
          <Typography><b>Your Productivity</b></Typography>

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            width='500px'
          >
            <Typography variant="body2">
              <b>{data ? data[0] : 0}</b>
              {' completed tasks'}
            </Typography>
            <Typography variant="body2">
              <Link href='#' onClick={handleClick} >
                {'View all completed tasks'}
              </Link>
            </Typography>
          </Grid>

          <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChangeTab}
            centered
          >
            <StyledTab label="Daily" {...a11yProps(0)} />
            <StyledTab label="Weekly" {...a11yProps(1)} />
            <StyledTab label="Overall" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={tab} index={0}>
            <Typography variant='body2'><b>Daily goal: 2 / 3 tasks</b></Typography>
          </TabPanel>
          <TabPanel value={tab} index={1}>
          <Typography variant='body2'><b>Mon, 18 Apr 2021 - Sun, 25 Apr 2021</b></Typography>
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <Donut noPaper data={data}/>
          </TabPanel>

        </div>
      </Popover>
    </div>
  );
}

export default ProgressMenu;
