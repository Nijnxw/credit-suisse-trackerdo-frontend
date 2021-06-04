import { api } from "./utils"

const getTasks = async () => {
  return api.get('/api/tasks')
    .then(res => res.data)
    .catch(err => { throw err })
}

const getOngoingTasks = async () => {
  return api.get('/api/tasks/ongoing')
    .then(res => res.data)
    .catch(err => { throw err })
}

const getOverduedTasks = async () => {
  return api.get('/api/tasks/overdued')
    .then(res => res.data)
    .catch(err => { throw err })
}

const getTodayTasks = async () => {
  return api.get('/api/tasks/today')
    .then(res => res.data)
    .catch(err => { throw err })
}

const getTaskById = async (id) => {
  return api.get(`/api/tasks/${id}`)
    .then(res => res.data)
    .catch(err => { throw err })
}

const addNewTask = async (data) => {
  return api.post('/api/tasks/new', data)
    .catch(err => { throw err })
}

const updateTaskById = async (id, data) => {
  return api.put(`/api/tasks/${id}`, data)
    .catch(err => { throw err })
}

const deleteTaskById = async (id) => {
  return api.delete(`/api/tasks/${id}`)
  .catch(err => { throw err })
}

const tasks = {
  getTasks,
  getOngoingTasks,
  getOverduedTasks,
  getTodayTasks,
  getTaskById,
  addNewTask,
  updateTaskById,
  deleteTaskById,
}

export default tasks;
