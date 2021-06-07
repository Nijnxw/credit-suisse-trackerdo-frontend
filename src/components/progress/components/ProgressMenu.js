import React, { useState } from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import { TrendingUp } from '@material-ui/icons'
import { Grid, Link, Tab, Tabs, withStyles } from '@material-ui/core'
import { useEffect } from 'react'
import progress from '../../../service/progress'
import Donut from '../Donut'
import ProgressCircularBar from './ProgressCircularBar'

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    width: theme.spacing(40),
    padding: theme.spacing(1.5),
  },
  headerContainer: {
    paddingBottom: theme.spacing(1),
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  tab: {
    textTransform: 'none',
  },
  divider: {
    paddingTop: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(0.5)
  },
  goalText: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
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
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container className={classes.tabContainer}>
          {children}
        </Grid>
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
      <TrendingUp 
        className={classNames("NavigationBar__link pt-button pt-minimal")} 
        onClick={handleClick} 
        fontSize='small' 
        style={{fill: '#106ba3'}} 
      />
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
            className={classes.headerContainer}
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
            <Grid 
              container
              direction="row"
              justify='space-around'
              alignItems='center'
            >
              <Grid item>
                <ProgressCircularBar data={[67]} />
              </Grid>
              <Grid item xs container direction='column'>
                <Grid item xs>
                  <Typography variant='body2'><b>Daily goal: 2 / 3 tasks</b></Typography>
                  <Typography variant='caption'>You're on your way!</Typography>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={tab} index={1}>
          <Typography variant='body2'><b>Mon, 18 Apr 2021 - Sun, 25 Apr 2021</b></Typography>
          </TabPanel>
          
          <TabPanel value={tab} index={2}>
            <Donut noPaper data={data}/>
          </TabPanel>

          <div className={classes.divider} />

          <Grid container className={classes.footer}>
            <Typography variant='caption' className={classes.goalText}>Goal Setting</Typography>
          </Grid>

        </div>
      </Popover>
    </div>
  );
}

export default ProgressMenu;
