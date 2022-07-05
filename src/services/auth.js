import axios from "axios";

const baseUrl = 'https://api.petrolida.com/'

export const login = async data => {
  const response = await axios.post(baseUrl+'api/login', data)
  return response.data
}

export const register = async data => {
  const response = await axios.post(baseUrl+'api/register', data)
  return response.data
}

