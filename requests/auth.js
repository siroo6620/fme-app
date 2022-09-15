import axiosClient from ".";

export const postLogin = ({phone, password}) => {
  return axiosClient.post('/authenticate', {
    phone,
    password
  })
}

export const getCountryCode = () => {
  return axiosClient.get('/country_code')
}

export const verifyAccount = ({code}) => {
  return axiosClient.post('/verify', {
    code
  })
}