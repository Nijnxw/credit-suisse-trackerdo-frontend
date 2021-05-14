import { Grid } from "@material-ui/core"
import Controls from "../commons/controls/Controls"
import { Form, useForm } from "../commons/useForm"


const initialValues = {
  title: '',
  dueDate: new Date(),
  description: '',
}

const AddTaskForm = () => {
  const {
    values,
    setValues,
    handleInputChange
  } = useForm(initialValues)

  const handleReset = (e) => {
    setValues(initialValues)
  }

  const handleSubmit = (e) => {
    console.log(values)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            required={true}
            label="Task Name"
            name='title'
            value={values.title}
            onChange={handleInputChange}
            variant="outlined"
          />
          <Controls.Input
            className='text-input'
            required
            multiline
            id="outlined-required"
            label="Description"
            name='description'
            value={values.description}
            onChange={handleInputChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.DatePicker 
            name='dueDate'
            label='Due Date'
            value={values.dueDate}
            onChange={handleInputChange}
          />
        </Grid>
        <div>
          <Controls.Button
            type='submit'
            text='Submit'
          />
          <Controls.Button
            text='Reset'
            color='default'
            onClick={handleReset}
          />
        </div>
      </Grid>
    </Form>
  )
}

export default AddTaskForm