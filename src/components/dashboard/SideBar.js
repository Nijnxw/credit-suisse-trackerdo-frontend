import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, List, ListItem, ListItemText } from '@material-ui/core'
import { AssessmentOutlined, DateRange, Inbox, NotificationsOutlined, Today } from '@material-ui/icons'

const items = [
  { name: 'inbox', label: 'Inbox', icon: Inbox },
  { name: 'today', label: 'Today', icon: Today },
  { name: 'upcoming', label: 'Upcoming', icon: DateRange },
  { name: 'progress', label: 'Progress', icon: AssessmentOutlined },
  { name: 'notifications', label: 'Notifications', icon: NotificationsOutlined },
]

const SideBar = () => {
  return (
    <div className="SideBar">
      <List disablePadding dense>
        {items.map(({ label, name, icon, ...rest }) => (
          <ListItem key={name} button {...rest}>
            <NavLink
              activeClassName="pt-active"
              className="SideBar__link menu-item"
              to="/app"
            >
              <Icon component={icon} />
              <ListItemText className="menu-item-label">{label}</ListItemText>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default SideBar;
