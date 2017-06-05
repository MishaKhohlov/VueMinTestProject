const todoItem = {
    template: `
            <div>
                <div>{{index+1}}</div>
                <input type="checkbox" v-model:checked="item.checked">
                <div>{{item.name}}</div>
                <div>{{item.value}}</div>
                <a href="#" v-on:click.prevent="edit(item.id)">Edit</a>
                <a href="#" v-on:click.prevent="remove(item.id)">Del</a>
            </div>
    `,
    data: function () {
        return {}
    },
    props: ['item', 'index'],
    methods: {
        edit() {
            console.log('edit');
        },
        remove(id) {
            this.$root.$emit('remove-todo', id);
        }
    }
};

export default todoItem;
