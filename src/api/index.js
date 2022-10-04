import axios from 'axios'

const url =  process.env.REACT_APP_API_URL

const instance = axios.create({
    baseURL:url
})

instance.interceptors.response.use(res => res,error => {
    if(error.response.status === 401) {
        localStorage.removeItem('token')
    }
    return Promise.reject(error)
})

export default instance