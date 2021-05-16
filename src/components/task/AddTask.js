import { makeStyles, Paper } from "@material-ui/core"
import PageContainer from "../commons/PageContainer"
import AddTaskForm from "./AddTaskForm"

const useStyle = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

const AddTask = () => {
  const classes = useStyle()
  return (
    <PageContainer className="AddTask" showSideBar={true}>
      <Paper className={classes.pageContent} elevation={3}>
        <h1>Add New Task</h1>
        <AddTaskForm />
      </Paper>
    </PageContainer>
  )
}

export default AddTask
