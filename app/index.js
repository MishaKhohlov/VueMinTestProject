import 'styles/index.scss';

import Vue from 'vue';
import router from './router'

new Vue({
    router
}).$mount('#app');
/*
 let childTodoItem =  {
 props: ['todo'],
 template: '<li>{{todo.text}} !</li>'
 };

 let app = new Vue({
 el: '#app',
 components: {
 'todo-item': childTodoItem
 },
 created: function () {
 console.log('component created')
 },
 data: {
 message: 'Hello Vue!',
 arg: 'binding arguments',
 seen: true,
 todos: [
 {id: 0, text: 'this is loop 1'},
 {id: 1, text: 'this is loop 2'},
 {id: 2, text: 'this is loop 3'}
 ]
 },
 methods: {
 reverseMessage() {
 this.message = this.message.split('').reverse().join('');
 },
 showMessage() {
 this.seen = !this.seen
 }
 }
 });
 */


