
import axios from 'axios'

export const BASE_URL = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_BACKEND_URL : process.env.REACT_APP_PROD_BACKEND_URL

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
})
