<template>
	<div class="contents">
		<div class="page-header">Create Post</div>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title:</label>
					<input v-model="title" type="text" id="title" />
				</div>
				<div>
					<label for="contents">Contents:</label>
					<textarea v-model="contents" type="text" id="contents" rows="5" />
					<p v-if="!isContentsValid" class="validation-text warning">
						Contents length must be less than 200
					</p>
				</div>
				<button type="submit" class="btn">create</button>
				<p class="log">
					{{ logMessage }}
				</p>
			</form>
		</div>
	</div>
</template>

<script>
import { createPost } from '@/api/index';
export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	computed: {
		isContentsValid() {
			return this.contents.length <= 200;
		},
	},
	methods: {
		async submitForm() {
			try {
				const response = await createPost({
					title: this.title,
					contents: this.contents,
				});
				console.log(response);
			} catch (error) {
				console.log(error.response.data);
				this.logMessage = error.response.data.message;
			}
		},
	},
};
</script>

<style scoped>
.form-wrapper .form {
	width: 100%;
}
.btn {
	color: #fff;
}
</style>
