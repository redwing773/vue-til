import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 액시오스 초기화 함수 + 토큰 저장
function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

// 액시오스 초기화 함수 + 토큰 저장
function createInstanceWithAuth(url) {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}/${url}`,
	});
	return setInterceptors(instance);
}
export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');

// GET - posts
// POST - posts
// PUT - posts
// DELETE - posts
