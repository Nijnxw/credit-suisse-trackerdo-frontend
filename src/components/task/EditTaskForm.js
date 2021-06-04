import toast from "react-hot-toast"
import { useHistory } from "react-router"
import tasks from "../../service/tasks"
import Controls from "../commons/controls/Controls"
import { Form, useForm } from "../commons/useForm"

const EditTaskForm = ({ data, id }) => {
  const history = useHistory()
  const {
    values,
    setValues,
    handleInputChange,
    handleSliderChange,
  } = useForm(data)

  const handleSubmit = (e) => {
    tasks.updateTaskById(id, values)
      .then(() => {
        history.push(`/app/view-task/${id}`)
        toast.success('Updated task')
      })
      .catch(err => { toast.error("Unable to update task") })
  }

  const handleReset = (e) => {
    setValues(data)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Controls.Input
        required={true}
        label='Task Name'
        name='title'
        value={values.title}
        onChange={handleInputChange}
        variant="outlined"
      />
      <Controls.DatePicker
        required
        name='dueDate'
        label='Due Date'
        value={values.dueDate}
        onChange={handleInputChange}
      />
      <Controls.Input
        required
        multiline
        label='Description'
        name='description'
        value={values.description}
        onChange={handleInputChange}
        variant="outlined"
      />
      <h2>Progress</h2>
      <Controls.Slider
        name='status'
        value={values.status} 
        onChange={handleSliderChange}
      />
      <Controls.Button type='submit' text='Submit' />
      <Controls.Button text='Reset' variant='outlined' onClick={handleReset} />
    </Form>
  )
}

export default EditTaskForm
