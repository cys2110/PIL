import { BASE_URL } from '@/components/utils';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: `${BASE_URL}/courts`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getAllCourts () {
        return apiClient.get('')
    }
}