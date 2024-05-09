import axios from 'axios'
import { API_URL } from '@/components/utils'

const apiClient = axios.create({
    baseURL: `${API_URL}/test`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getTreatyText() {
        return apiClient.get()
    }
}