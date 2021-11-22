import axios from "axios";
export const apiUrl = "http://localhost:8000/api/";

export const APIManager = {
	get<T>(url: string, params: any) {
		return axios.get<T>(`${apiUrl}${url}`, { params });
	},
	post<T>(url: string, data: any) {
		return axios.post<T>(`${apiUrl}${url}`, data);
	},

	put<T>(url: string, data: any) {
		return axios.put<T>(`${apiUrl}${url}`, data);
	},
	delete<T>(url: string) {
		return axios.delete<T>(`${apiUrl}${url}`);
	},
};
