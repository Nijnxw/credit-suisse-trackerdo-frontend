import { api } from "./utils"

const getStatistics = async () => {
  return api.get('api/progress/statistics')
    .then(res => res.data)
    .catch(err => { throw err })
}

const progress = {
  getStatistics
}

export default progress
