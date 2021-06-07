import { Alignment, Classes, Icon, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import classNames from 'classnames'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import ProgressMenu from '../progress/components/ProgressMenu'
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';

const NavigationBar = () => {
  return (
    <Navbar className={classNames("NavigationBar primary-navbar pt-dark")}>
      <NavbarGroup align={Alignment.LEFT}>
        <NavLink
          activeClassName="pt-active"
          className={classNames("NavigationBar__link pt-button pt-minimal", Classes.BUTTON)}
          to="/"
        >
          <Icon icon={IconNames.BOOK} />
          <NavbarHeading className="hidden-xs">Trackerdo</NavbarHeading>
        </NavLink>
      </NavbarGroup>

      <NavbarGroup align={Alignment.RIGHT}>
        {/* PROGRESS MENU */}
        <ProgressMenu />
        {/* <NavLink
          activeClassName="pt-active"
          className="NavigationBar__link pt-button pt-minimal"
          to="/app/progress"
        >
          <Icon icon={IconNames.TRENDING_UP} />
        </NavLink> */}

        <div className="hidden-xs">
          <NavbarDivider className="default-divider" />
        </div>

        {/* ADD TASK */}
        <NavLink
          activeClassName="pt-active"
          className="NavigationBar__link pt-button pt-minimal"
          to="/app/add-task"
        >
          <AddIcon fontSize='small' />
        </NavLink>
        
        <div className="hidden-xs">
          <NavbarDivider className="default-divider" />
        </div>

        {/* NOTIFICATION BUTTON */}
        <NavLink
          activeClassName="pt-active"
          className="NavigationBar__link pt-button pt-minimal"
          to="/app/notifications"
        >
            <NotificationsIcon fontSize='small' />
        </NavLink>

        <div className="hidden-xs">
          <NavbarDivider className="default-divider" />
        </div>
        
        {/* TODO: profiling menu here after authentication */}

      </NavbarGroup>
    </Navbar>
  )
}

export default NavigationBar;
