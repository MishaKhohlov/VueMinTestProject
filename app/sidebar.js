const initState = {name: '', value: '', checked: false};

const sidebar = {
    template: `
         <div>
            <input type="checkbox" v-model="newItem.checked"/> 
            <input type="text" v-model.trim="newItem.name" placeholder="Todo Name"/>
            <input type="text" v-model.trim="newItem.value" placeholder="Todo Value"/>
            <input type="button" @click="addTodo" value="Add New Todo"/>
         </div>
    `,
    data: function() {
        return {
            newItem: {name: '', value: ''}
        }
    },
    methods: {
        addTodo() {
            this.$emit('add-todo', this.newItem);
            this.newItem = Object.assign({}, initState);
        }

    }
};

export default sidebar;
