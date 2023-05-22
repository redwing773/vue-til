<template>
	<li>
		<div class="post-title">
			{{ postItem.title }}
		</div>
		<div class="post-contents">
			{{ postItem.contents }}
		</div>
		<div class="post-time">
			{{ postItem.createdAt | formatDate }}
			<i class="icon ion-md-create" @click="routeEditPage">수정</i>
			<i name="trash-outline" class="icon ion-trash" @click="deleteItem"
				>삭제</i
			>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/posts';
export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	methods: {
		async deleteItem() {
			if (confirm('삭제하시겠습니까?')) {
				await deletePost(this.postItem._id);
				this.$emit('refresh');
			}
		},
		routeEditPage() {
			const id = this.postItem._id;
			this.$router.push(`/post/${id}`);
		},
	},
};
</script>

<style></style>
