import axiosClient from ".";

export const getFarmTypes = () => {
  return axiosClient.get('/all_farm_types')
}

export const postSignupFarmer = ({
  country, 
  country_code,
  phone,
  name,
  farm_type,
  password,
  password_confirmation
}) => {
  return axiosClient.post('/farmer', {
    country, 
    country_code,
    phone,
    name,
    farm_type,
    password,
    password_confirmation
  })
}
