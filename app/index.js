/**
 * Application entry point
 */

import Vue from 'vue';
import 'styles/index.scss';

import sidebar from './sidebar';
import todoList from './todoList';

new Vue({
    el: '#app',
    components: {
        sidebar,
        'todo-list': todoList
    },
    mounted: function () {
        this.$root.$on('remove-todo', this.removeTodoTotal);
    },
    data: function () {
        return {
            todos: [
                {id: 0, name: 'Byu helmet', value: 'Go to shop', checked: false},
                {id: 1, name: 'Byu glasses', value: 'Buy in internet', checked: true},
                {id: 2, name: 'Byu phone', value: ' Buy in internet', checked: false}
            ]
        }
    },
    methods: {
        addTodoTotal({name, value, checked}) {
            const item = {
                id: this.todos.length,
                name,
                value,
                checked
            };

            this.todos.push(item);
        },
        removeTodoTotal(id) {
            const index = this.todos.findIndex(item => item.id === id);
            this.todos.splice(index, 1);
        }
    }
});


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

