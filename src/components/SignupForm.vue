<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id: </label>
					<input id="username" type="text" v-model="username" />
				</div>
				<div>
					<label for="password">pw: </label>
					<input id="password" type="text" v-model="password" />
				</div>
				<div>
					<label for="nickname">nickname: </label>
					<input id="nickname" type="text" v-model="nickname" />
				</div>
				<button
					:disabled="!isUsernameValid || !password || !nickname"
					type="submit"
				>
					회원 가입
				</button>
				<button @click.prevent="initForm">초기화</button>
				<p>{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
			// log
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
			console.log(process.env.VUE_APP_API_URL);
			console.log('폼 제출');
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const { data } = await registerUser(userData);
			console.log(data.username);
			this.logMessage = `${data.username}님이 가입되셨습니다`;
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style></style>
