import axiosClient from ".";

export const postLogin = ({phone, password}) => {
  return axiosClient.post('/authenticate', {
    phone,
    password
  })
}

export const getCountries = () => {
  return axiosClient.get('/countries')
}

export const postVerifyAccount = ({code}) => {
  return axiosClient.post('/verify', {
    code
  })
}