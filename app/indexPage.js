import sidebar from './sidebar';
import todoList from './todoList';

const indexPage = {
    components: {
        sidebar,
        'todo-list': todoList
    },
    template: `
        <div>
            <sidebar v-on:add-todo="addTodoTotal"></sidebar>
            <todo-list v-bind:data="todos"></todo-list>
        </div>
    `,
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
};

export default indexPage;
