import axios from 'axios';
import { ref } from 'vue';

export function useAxios() {
    const axiosInstance = ref(axios.create(
        {
            baseURL: "http://localhost:8080",
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            withCredentials: true,
        }
    ));
    return axiosInstance.value;
}