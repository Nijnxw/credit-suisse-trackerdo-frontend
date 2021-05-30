import { Grid, makeStyles, Paper, Typography } from "@material-ui/core"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { useHistory, useParams } from "react-router";
import Controls from "../commons/controls/Controls.js";
import PageContainer from "../commons/PageContainer"
import { Form, useForm } from "../commons/useForm.js";
import { tasks } from "../../utils/tempData.js";

const useStyle = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

const ViewTask = ({ data }) => {
  const { title, status, due_date, description } = data || tasks[0]
  const { id } = useParams();
  const classes = useStyle()
  const history = useHistory()
  const {
    values,
    setValues,
    handleSliderChange,
  } = useForm({ status })

  const handleEdit = () => {
    history.push(`/app/edit-task/${id}`)
  }

  const handleDelete = () => {
    console.log('handle delete task')
  }

  const handleSave = () => {
    console.log('handle save task')
  }

  const handleReset = () => {
    setValues({ status })
  }

  const handleCancel = () => {
    history.goBack()
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
        <Typography variant="body1">{due_date}</Typography>
        <h2>Description</h2>
        <Typography align="justify" variant="body1">{description}</Typography>
        <h2>Progress</h2>
        <Form onSubmit={handleSave}>
          <Controls.Slider name='status' value={values.status} onChange={handleSliderChange} />
          <Controls.Button type='submit' text='Save' />
          <Controls.Button text='Reset' color='default' onClick={handleReset} />
          <Controls.Button text='Cancel' variant='outlined' onClick={handleCancel} />
        </Form>
      </Paper>
    </PageContainer>
  )
}

export default ViewTask
