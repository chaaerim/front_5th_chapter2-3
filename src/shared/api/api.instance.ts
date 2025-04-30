import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
const axiosInstance = axios.create({
  baseURL: "/",
  withCredentials: true,
  headers: {
    "content-type": "application/json; charset=utf-8",
    "accept": "application/json",
  },
})

export interface HttpClient extends AxiosInstance {
  delete<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>
  patch<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  post<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  put<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
}

export const http: HttpClient = axiosInstance

http.interceptors.response.use((response) => response.data)
