<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" action="" class="form">
				<div>
					<label for="username">id:</label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">pw:</label>
					<input id="password" type="text" v-model="password" />
				</div>
				<button :disabled="!isUsernameValid || !password" type="submit">
					로그인
				</button>
				<p>{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
// import axios from 'axios';
export default {
	data() {
		return {
			//form values
			username: '',
			password: '',
			//logMessage
			logMessage: '',
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
		// isFormValid() {
		// 	return false;
		// },
	},
	methods: {
		async submitForm() {
			try {
				// 비즈니스 로직
				const userData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				console.log(data.user.username);
				this.$store.commit('setUsername', data.user.username);
				this.$router.push('/main');
				// this.logMessage = `${data.user.username}님 환영합니다`;
				// this.initForm();
			} catch (error) {
				// 에러 핸들링할 코드
				console.log(error.user.username);
				this.logMessage = error.response.data;
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
