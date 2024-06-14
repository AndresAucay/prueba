// src/axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8081", // Base URL de tu backend
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // Para permitir cookies si las necesitas
});

// Interceptores para manejar respuestas y errores
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        // Manejo de errores
        return Promise.reject(error);
    }
);

export default axiosInstance;
