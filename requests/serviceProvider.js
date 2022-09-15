import axiosClient from ".";

export const getServiceTypes = () => {
  return axiosClient.get('/all_service_types')
}
