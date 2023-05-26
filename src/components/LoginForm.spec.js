// import { sum } from './math';

// // sum(10, 20); // 30

// describe('math.js', () => {
// 	test('10+20=30', () => {
// 		const result = sum(10, 20);
// 		result === 30;
// 		expect(result).not.toBe(30);
// 	});
// });

import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
		// const instance = new Vue(LoginForm).$mount();
		const wrapper = shallowMount(LoginForm);
		// wrapper.vm.username
		expect(wrapper.vm.username).toBe('');
	});
});

describe('LoginForm.vue', () => {
	test('ID는 이메일 형식이 아니면 경고 메시지가 출력된다', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test',
				};
			},
		});
		// const idInput = wrapper.find('#username');
		// console.log(idInput.html());
		// console.log(idInput.value);
		// console.log('인풋 박스의 값', idInput.element.value);
		// console.log(wrapper.vm.isUsernameValid);
		const warningText = wrapper.find('.warning');
		console.log(warningText.html());

		// expect(wrapper.vm.username).toBe('');
		expect(warningText.exists()).toBeTruthy();
	});

	test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'a',
					password: '',
				};
			},
		});
		const button = wrapper.find('button');
		// button.element.disabled
		expect(button.element.disabled).toBeTruthy();
	});
});
