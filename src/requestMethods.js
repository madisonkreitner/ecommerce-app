import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGZlYWM4YmQ5N2NlNDA1OTVmNGVjNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTM5MzQyMiwiZXhwIjoxNjQ1NjUyNjIyfQ.YbAyXbrxKGqHA5FobkJ5IZ7Lcu3RliTcSBPqKtEq9go"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});