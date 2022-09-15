import axiosClient from ".";

export const getFarmTypes = () => {
  return axiosClient.get('/all_farm_types')
}
