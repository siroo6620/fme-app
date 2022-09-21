import axiosClient from ".";

export const getServiceTypes = () => {
  return axiosClient.get('/all_service_types')
}

export const postSignupServiceProvider = ({
  country, 
  country_code,
  phone,
  name,
  service_type,
  password,
  password_confirmation
}) => {
  return axiosClient.post('/service', {
    country, 
    country_code,
    phone,
    name,
    service_type,
    password,
    password_confirmation
  })
}