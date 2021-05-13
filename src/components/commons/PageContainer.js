import React, { Fragment } from "react"
import NavigationBar from "../dashboard/NavigationBar";
import SideBar from "../dashboard/SideBar";

const PageContainer = ({ children, showSideBar = false, className}) => {
  return (
    <Fragment>
      <header>
        <NavigationBar />
      </header>
      <main>
        <div className="PageContainer">
          {showSideBar && <SideBar />}
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
