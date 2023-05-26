import axios from '../util/apiClient'

// kaikkien numeroiden haku
const getAll = () => {
    const request = axios.get('/persons')
    return request.then(response => response.data)
}

// uuden numeron lisääminen
const create = newObject => {
    const request = axios.post('/persons', newObject)
    return request.then(response => response.data)
}

const delPerson = (id) => {
    const request = axios.delete(`/persons/${id}`)
    return request.then(response => response.data)
}

const updateNumber = (id, changedPerson) => {
    const request = axios.put(`/persons/${id}`, changedPerson)
    return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, delPerson, updateNumber }