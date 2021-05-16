import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import Inbox from '../inbox';
import Notifications from '../notifications';
import Progress from '../progress';
import Today from '../today';
import Upcoming from '../upcoming';

const Dashboard = () => (
  <div className="Dashboard">
    <Switch>
      <Route exact path='/app' render={redirectToInbox} />
      <Route path='/app/inbox' component={Inbox} />
      <Route path='/app/today' component={Today} />
      <Route path='/app/upcoming' component={Upcoming} />
      <Route path='/app/progress' component={Progress} />
      <Route path='/app/notifications' component={Notifications} />
      <Route component={redirectTo404} />
    </Switch>
  </div>
)

const redirectToInbox = () => <Redirect to="/app/inbox" />
const redirectTo404 = () => <Redirect to="/404" />

export default Dashboard;
