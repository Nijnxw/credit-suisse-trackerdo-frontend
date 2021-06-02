import React, { useEffect, useState } from "react"
import CustomTable from "../commons/CustomTable/index"
import PageContainer from "../commons/PageContainer"
import tasks from "../../service/tasks"

const Today = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    tasks.getTasks()
      .then(res => { setData(res) })
  }, [])
  return (
    <PageContainer className="Today" showSideBar={true}>
      <h1>Today</h1>
      <CustomTable title='Overdued' data={data} />
      <CustomTable title="Today's Task" data={data} />
    </PageContainer>
  )
}

export default Today
