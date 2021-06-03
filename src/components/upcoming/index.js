import React, { useEffect, useState } from "react"
import CustomTable from "../commons/CustomTable/index"
import PageContainer from "../commons/PageContainer"
import Controls from "../commons/controls/Controls"
import { Form, useForm } from "../commons/useForm"
import tasks from "../../service/tasks"

const initialValues = {
  date: new Date(),
}

const Upcoming = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    tasks.getTasks()
      .then(res => { setData(res) })
  }, [])
  const {
    values,
    handleInputChange
  } = useForm(initialValues)

  const handleSubmit = (e) => {
    console.log(values.date)
  }

  return (
    <PageContainer className="Upcoming" showSideBar={true}>
      <h1>Upcoming</h1>
      <div className='datePicker-container'>
        <Form onSubmit={handleSubmit}>
          <Controls.DatePicker 
            name='date'
            label='List tasks until'
            value={values.date}
            onChange={handleInputChange}
          />
        </Form>
      </div>
      <CustomTable title='Upcoming' data={data} />
    </PageContainer>
  )
}

export default Upcoming
