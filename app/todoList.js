import todoItem from './todoItem';

const todoList = {
    template: `
        <ul>
            <todo-item v-for="(todo, index) in data"
            v-bind:key="index"
            v-bind:index="index"
            v-bind:item="todo"
            >
                     
            </todo-item>
        </ul>
    `,
    data: function () {
        return {}
    },
    props: ['data'],
    methods: {},
    components: {
        'todo-item': todoItem
    }
};

export default todoList;

