import { getFarmTypes } from "../requests/farmer";
import { getServiceTypes } from "../requests/serviceProvider";

export const getValues = async () => {
  try {
    const farmTypes = await getFarmTypes()
    const serviceTypes = await getServiceTypes()

    return [farmTypes.data, serviceTypes.data]
  } catch (e) {
    return null
  }
}