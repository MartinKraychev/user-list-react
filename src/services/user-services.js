const BASE_URL = "http://localhost:3005/api/users/"


export const GetAllUsers =  async() => {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    return data.users
}

export const CreateUser = async(body) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }

    const response = await fetch(BASE_URL, requestOptions)
    const user = await response.json()
    return user

}

export const EditUser = async(body, id) => {

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }

    const response = await fetch(BASE_URL  + id, requestOptions)
    const user = await response.json()
    return user

}

export const GetUser = async(id) => {
    const response = await fetch(BASE_URL + id)
    const user = await response.json()
    return user
}

export const DeleteUser = async(id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }

    const response = await fetch(BASE_URL + id, requestOptions)
    const user_id = await response.json()
    return user_id.userId
}
