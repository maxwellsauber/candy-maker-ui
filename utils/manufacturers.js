import axios from 'axios'

export const filterManufacturers = (manufacturerList, searchTerm) => manufacturerList.filter(manufacturer => (
  manufacturer.name.toLowerCase().includes(searchTerm.toLowerCase())
))

export const retrieveManufacturers = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/manufacturers`) // eslint-disable-line no-undef

  return data
}
