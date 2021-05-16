import CustomTable from "../commons/CustomTable/index"
import PageContainer from "../commons/PageContainer"
import Controls from "../commons/controls/Controls"
import { Form, useForm } from "../commons/useForm"

const initialValues = {
  date: new Date(),
}

const Upcoming = () => {
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
      <CustomTable title='Upcoming' />
    </PageContainer>
  )
}

export default Upcoming
