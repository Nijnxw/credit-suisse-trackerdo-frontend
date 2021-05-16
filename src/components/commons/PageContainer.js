import React, { Fragment } from "react"
import NavigationBar from "../dashboard/NavigationBar"
import SideBar from "../dashboard/SideBar"

const PageContainer = (props) => {
  const { 
    children,
    className = "",
    showSideBar = false,
    SideBarComponent,
    NavBarComponent,
  } = props
  return (
    <Fragment>
      <header>
      {NavBarComponent || <NavigationBar />}
      </header>
      <main>
        <div className="PageContainer">
          {showSideBar && (SideBarComponent || <SideBar />)}
          <div className={`page ${className}`}>
            {children}
          </div>
        </div>
      </main>
      <footer />
    </Fragment>
  )
}

export default PageContainer;
