import React, { useEffect, useState } from "react"
import CustomTable from "../commons/CustomTable/index"
import PageContainer from "../commons/PageContainer"
import tasks from "../../service/tasks"

const Today = () => {
  const [overduedTasks, setOverduedTasks] = useState([])
  const [todayTasks, setTodayTasks] = useState([])
  useEffect(() => {
    tasks.getOverduedTasks()
      .then(res => { setOverduedTasks(res) })
    tasks.getTodayTasks()
      .then(res => { setTodayTasks(res) })
  }, [])
  return (
    <PageContainer className="Today" showSideBar={true}>
      <h1>Today</h1>
      <CustomTable title='Overdued' data={overduedTasks} />
      <CustomTable title="Today's Task" data={todayTasks} />
    </PageContainer>
  )
}

export default Today
