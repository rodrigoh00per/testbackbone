import axios from 'axios'

export const getContacts = (page: number) => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${process.env.REACT_APP_API_SERVICE}/contacts?page=${page}`)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

export const getContact = (id: string) => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${process.env.REACT_APP_API_SERVICE}/contacts/${id}`)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

export const deleteContact = (id: string) => {
  return new Promise((resolve, reject) => {
    return axios
      .delete(`${process.env.REACT_APP_API_SERVICE}/contacts/${id}`)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

export const createContact = (data: {}) => {
  return new Promise((resolve, reject) => {
    return axios
      .post(`${process.env.REACT_APP_API_SERVICE}/contacts`, data)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

export const updateContact = (id: string, data: {}) => {
  return new Promise((resolve, reject) => {
    return axios
      .put(`${process.env.REACT_APP_API_SERVICE}/contacts/${id}`, data)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}
