import axios from 'axios'

export const api = 'http://fme.riceafrika.com/api'

const axiosClient = axios.create({
    baseURL: api,
})

export default axiosClient