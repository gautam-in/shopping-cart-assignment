import axios from 'axios';
import {API_URL} from '../constants';


export function axiosGet({endpoint}) {
	return axios.get(`${API_URL}${endpoint}`).then((res) => res.data);
}

export function axiosPost({endpoint, payload}) {

	return axios.post(`${API_URL}${endpoint}`, payload).then((res) => res.data).catch((err)=>err);
}