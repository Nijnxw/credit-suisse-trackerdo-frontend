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

const tasks = {
  getTasks,
  getTaskById,
}

export default tasks;
