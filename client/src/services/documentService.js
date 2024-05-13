import { BASE_URL } from '@/components/utils';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: `${BASE_URL}/documents`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getDocumentById (id) {
        return apiClient.get(`/id/${id}`)
    }
}