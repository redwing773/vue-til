<template>
	<div class="contents">
		<div class="page-header">Edit Post</div>
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
				<button type="submit" class="btn">Edit</button>
				<p class="log">
					{{ logMessage }}
				</p>
			</form>
		</div>
	</div>
</template>

<script>
// import { createPost } from '@/api/posts';
import { fetchPost, editPost } from '@/api/posts';

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
			const id = this.$route.params.id;
			const postData = {
				title: this.title,
				contents: this.contents,
			};
			try {
				await editPost(id, postData);
				this.$router.push('/main');
			} catch (error) {
				console.log(error);
				this.logMessage = error;
			}
		},
	},
	async created() {
		const id = this.$route.params.id;
		const { data } = await fetchPost(id);
		this.title = data.title;
		this.contents = data.contents;
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
