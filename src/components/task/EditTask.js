import { useEffect, useState } from "react";
import { makeStyles, Paper } from "@material-ui/core"
import { useParams } from "react-router";
import PageContainer from "../commons/PageContainer"
import EditTaskForm from "./EditTaskForm";
import tasks from "../../service/tasks";

const useStyle = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

const EditTask = () => {
  const [data, setData] = useState({})
  const { id } = useParams();
  const classes = useStyle()

  useEffect(() => {
    tasks.getTaskById(id)
      .then(res => { setData(res) })
  }, [id])

  return (
    <PageContainer className='EditTask' showSideBar={true}>
      <Paper className={classes.pageContent} elevation={3}>
        <h1>Edit Task</h1>
        <EditTaskForm data={{ ...data }} id={id} />
      </Paper>
    </PageContainer>
  )
}

export default EditTask
