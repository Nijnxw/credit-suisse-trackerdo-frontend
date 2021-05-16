import { Alignment, Classes, Icon, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import classNames from 'classnames'
import * as React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar className="NavigationBar primary-navbar pt-dark">
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
        <NavLink
          activeClassName="pt-active"
          className="NavigationBar__link pt-button pt-minimal"
          to="/app/progress"
        >
          <Icon icon={IconNames.TRENDING_UP} />
        </NavLink>

        <div className="hidden-xs">
          <NavbarDivider className="default-divider" />
        </div>

        <NavLink
          activeClassName="pt-active"
          className="NavigationBar__link pt-button pt-minimal"
          to="/app/inbox/add-task"
        >
          <Icon icon={IconNames.PLUS} />
        </NavLink>
        
        <div className="hidden-xs">
          <NavbarDivider className="default-divider" />
        </div>

        <NavLink
          activeClassName="pt-active"
          className="NavigationBar__link pt-button pt-minimal"
          to="/app/notifications"
        >
            <Icon icon={IconNames.NOTIFICATIONS} />
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
