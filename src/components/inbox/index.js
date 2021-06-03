
import React, { useEffect, useState } from "react";
import tasks from "../../service/tasks";
import CustomTable from "../commons/CustomTable/index";
import PageContainer from "../commons/PageContainer"

const Inbox = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    tasks.getTasks()
      .then(res => { setData(res) })
  }, [])

  return (
    <PageContainer className="Inbox" showSideBar={true}>
      <h1>Inbox</h1>
      <CustomTable title='All tasks' data={data} />
    </PageContainer>
  )
}

export default Inbox;
