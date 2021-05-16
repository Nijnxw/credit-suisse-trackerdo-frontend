import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, List, ListItem, ListItemText } from '@material-ui/core'
import { AssessmentOutlined, DateRange, Inbox, NotificationsOutlined, Today } from '@material-ui/icons'

const items = [
  { name: 'inbox', label: 'Inbox', icon: Inbox, path: '/app/inbox' },
  { name: 'today', label: 'Today', icon: Today, path: '/app/today' },
  { name: 'upcoming', label: 'Upcoming', icon: DateRange, path: '/app/upcoming' },
  { name: 'progress', label: 'Progress', icon: AssessmentOutlined, path: '/app/progress' },
  { name: 'notifications', label: 'Notifications', icon: NotificationsOutlined, path: '/app/notifications' },
]

const SideBar = () => {
  return (
    <div className="SideBar">
      <List disablePadding dense>
        {items.map(({ label, name, icon, path, ...rest }) => (
          <ListItem key={name} button {...rest}>
            <NavLink
              activeClassName="pt-active"
              className="SideBar__link menu-item"
              to={path}
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
