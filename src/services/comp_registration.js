import axios from "axios";

const baseUrl = 'https://api.petrolida.com/'

export const bccRegistration = async (token, data) => {
  const response = await axios.post(baseUrl + 'api/businesscaseregistration', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export const csRegistration = async (token, data) => {
  const response = await axios.post(baseUrl + 'api/casestudyregistration', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export const ffdRegistration = async (token, data) => {
  const response = await axios.post(baseUrl + 'api/fracturingfluiddesignregistration', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export const stRegistration = async (token, data) => {
  const response = await axios.post(baseUrl + 'api/stocktradingregistration', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export const paperRegistration = async (token, data) => {
  const response = await axios.post(baseUrl + 'api/paperregistration', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export const ordRegistration = async (token, data) => {
  const response = await axios.post(baseUrl + 'api/oilrigdesignregistration', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export const psRegistration = async (token, data) => {
  const response = await axios.post(baseUrl + 'api/petrosmartregistration', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}