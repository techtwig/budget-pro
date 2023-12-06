// utils/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
    // Your base URL and other configuration options
    baseURL: 'http://localhost:5000',
    timeout: 5000, // Set a timeout
});

axiosInstance.defaults.headers.common['Accept'] = 'application/json';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

// Function to refresh the access token
const refreshAccessToken = async (config:any) => {
    try {
        const response = await axiosInstance.post('/user/refresh-token', {
            refreshToken: localStorage.getItem('refreshToken'),
        });
        console.log('called for refresh token')

        // Update the access token in localStorage
        localStorage.setItem('userToken', response.data.token.access_token);

        // Retry the original request with the new access token
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${response.data.token.access_token}`,
            // Add your custom headers here
        };

        // Return the result of the axios request
        return axiosInstance(config);
    } catch (error) {
        // Handle refresh token failure (e.g., redirect to login page)
        console.error('Failed to refresh access token', error);
        // You might want to redirect the user to the login page or handle the error in some way
        throw error;
    }
};

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Retrieve the access token from localStorage and add it to the Authorization header
        console.log("request in interceptor");
        const token = localStorage.getItem('accessToken');

        console.log("request interceptor token", token);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.log("request interceptor error", error);

        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // You can modify the response data here
        return response;
    },
    async (error) => {
        // Check if the error is due to an expired access token
        if (error.response && error.response.status === 401) {
            // Retry the original request with the new access token
            try {
                return refreshAccessToken(error.config);
            } catch (refreshError) {
                // If the refresh attempt fails, you might want to redirect to the login page or handle the error
                console.error('Failed to handle refresh token', refreshError);
                throw refreshError;
            }
        }

        // You can handle other types of errors here

        return Promise.reject(error);
    }
);

export default axiosInstance;
