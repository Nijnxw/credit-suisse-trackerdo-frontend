import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import Inbox from '../inbox';

const Dashboard = () => (
  <div className="Dashboard">
    <Switch>
      <Route exact path='/app' render={redirectToInbox} />
      <Route path='/app/inbox' component={Inbox} />
      <Route component={redirectTo404} />
    </Switch>
  </div>
)

const redirectToInbox = () => <Redirect to="/app/inbox" />
const redirectTo404 = () => <Redirect to="/404" />

export default Dashboard;
