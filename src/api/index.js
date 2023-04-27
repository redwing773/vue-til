import axios from 'axios';

const instanse = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
	return instanse.post('/signup', userData);
}

export { registerUser };
