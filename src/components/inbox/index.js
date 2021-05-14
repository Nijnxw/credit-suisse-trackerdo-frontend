import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import AddTask from '../task/AddTask'
import EditTask from '../task/EditTask'
import ViewTask from '../task/ViewTask'
import ShowInbox from './ShowInbox'

const Inbox = () => (
  <div className="Inbox">
    <Switch>
      <Route exact path='/app/inbox' component={ShowInbox} />
      <Route path='/app/inbox/add-task' component={AddTask} />
      <Route path='/app/inbox/edit-task/:id' component={EditTask} />
      <Route path='/app/inbox/view-task/:id' component={ViewTask} />
      <Route component={redirectTo404} />
    </Switch>
  </div>
)

const redirectTo404 = () => <Redirect to="/404" />

export default Inbox
