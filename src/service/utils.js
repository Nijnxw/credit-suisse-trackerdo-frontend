
import axios from 'axios'

export const isDevMode = process.env.REACT_APP_ENV === 'development'

export const BASE_URL = isDevMode ? process.env.REACT_APP_DEV_BACKEND_URL : process.env.REACT_APP_PROD_BACKEND_URL

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
})
