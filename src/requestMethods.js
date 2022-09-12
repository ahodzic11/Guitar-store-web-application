import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWY3NDJlZmEzMDZiMThhNWY0ODNhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzAxNDkxOCwiZXhwIjoxNjYzMjc0MTE4fQ.vg3IZ_0wRqV1X2ivZKIQTeGvRo81DVNDe4FL5i42Py0"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`},
})