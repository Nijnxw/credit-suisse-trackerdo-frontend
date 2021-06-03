import { api } from "./utils"

const getTasks = async () => {
  return api.get('/api/tasks')
    .then(res => res.data)
    .catch(err => { throw err })
}

const getTaskById = async (id) => {
  return api.get(`/api/tasks/${id}`)
    .then(res => res.data)
    .catch(err => { throw err })
}

const addNewTask = async (data) => {
  console.log(data)
  return api.post('/api/tasks/new', data)
    .then(res => { console.log(res) })
    .catch(err => { console.log(err) })
}

const tasks = {
  getTasks,
  getTaskById,
  addNewTask,
}

export default tasks;
