import { BASE_URL } from '@/components/utils';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: `${BASE_URL}/treaties`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getAllTreaties () {
        return apiClient.get('')
    },
    getTreatyById (id) {
        return apiClient.get(`/id/${id}`)
    }
}