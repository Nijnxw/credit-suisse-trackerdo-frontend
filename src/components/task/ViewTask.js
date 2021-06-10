import { Grid, makeStyles, Paper, Typography } from "@material-ui/core"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { useHistory, useParams } from "react-router";
import Controls from "../commons/controls/Controls.js";
import PageContainer from "../commons/PageContainer"
import { Form, useForm } from "../commons/useForm.js";
import { useEffect, useState } from "react";
import tasks from "../../service/tasks.js";
import toast from "react-hot-toast";
import dateUtils from "../../utils/date.utils.js";

const useStyle = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

const ViewTask = () => {
  const [data, setData] = useState({})
  const { id } = useParams()
  const classes = useStyle()
  const history = useHistory()
  
  const { title, dueDate, description } = data
  const {
    values,
    setValues,
    handleSliderChange,
  } = useForm({ status: 0 })

  useEffect(() => {
    tasks.getTaskById(id)
      .then(res => { 
        setData(res)
        setValues({ status: res.status })
      })
  }, [id])


  const handleEdit = () => {
    history.push(`/app/edit-task/${id}`)
  }

  const handleDelete = () => {
    tasks.deleteTaskById(id)
      .then(() => { 
        history.push(`/app/inbox`) 
        toast.success("Deleted task")
      })
      .catch(err => { toast.error("Unable to delete task") })
  }

  const handleSave = () => {
    tasks.updateTaskById(id, values)
      .then(() => { 
        history.push(`/app/inbox`) 
        toast.success("Progress updated")
      })
      .catch(err => { toast.error("Unable to update progress") })
  }

  const handleReset = () => {
    setValues({ status: data.status })
  }

  return (
    <PageContainer className='ViewTask' showSideBar={true}>
      <Paper className={classes.pageContent} elevation={3}>
        <Grid container spacing={2} justify="space-between" alignItems="center">
          <Grid item xs>
            <h1>View Task</h1>
          </Grid>
          <Grid container item xs justify="flex-end">
            <Controls.IconButton Component={<EditOutlinedIcon />} onClick={handleEdit} />
            <Controls.IconButton Component={<DeleteOutlineIcon />} onClick={handleDelete} />
          </Grid>
        </Grid>
        <h2>Task Name</h2>
        <Typography variant="body1">{title}</Typography>
        <h2>Due Date</h2>
        <Typography variant="body1">{dateUtils.convertToReadableDate(dueDate)}</Typography>
        <h2>Description</h2>
        <Typography align="justify" variant="body1">{description}</Typography>
        <h2>Progress</h2>
        {/* <ProgressBar value={data.status} containerStyle={{ width: 300 }} /> */}
        <Form onSubmit={handleSave}>
          <Controls.Slider name='status' value={values.status} onChange={handleSliderChange} />
          <Controls.Button type='submit' text='Update Progress' />
          <Controls.Button text='Reset' variant='outlined' onClick={handleReset} />
        </Form>
      </Paper>
    </PageContainer>
  )
}

export default ViewTask
