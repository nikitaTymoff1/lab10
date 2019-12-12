import "./style.css"
import React from "react"
import TodoItem from "./TodoItem"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: '',
                date: ''
            },
            todos:
                [
                    {
                        id: 1,
                        text: "qweqwewqewq",
                        createdAt: "29-10-2019",
                        willEndAt: "31-12-2019",
                        completed: true
                    },
                    {
                        id: 2,
                        text: "sdsdsdsdsdsdsdsd",
                        createdAt: "29-10-2019",
                        willEndAt: "31-12-2019",
                        completed: false
                    },
                    {
                        id: 3,
                        text: "aadadadadadadadad",
                        createdAt: "29-10-2019",
                        willEndAt: "31-12-2019",
                        completed: false
                    },
                    {
                        id: 4,
                        text: "poooooooooooooooooo",
                        createdAt: "29-10-2019",
                        willEndAt: "31-12-2019",
                        completed: true
                    },
                    {
                        id: 5,
                        text: "aaaaaaaaaaaaaaaaaa",
                        createdAt: "29-10-2019",
                        willEndAt: "31-12-2019",
                        completed: false
                    }
                ]
        };
    }

    handleChange = (id) => {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            });
            return {
                todos: updatedTodos
            }
        })
    };

    deleteTodo = (id) => {
        let {todos} = this.state;
        todos.forEach((item, index) => {
            if (item.id === id) {
                todos.splice(index, 1)
            }
        });
        this.setState({todos: todos})

    };

    createTodo = () => {
        let {inputs, todos} = this.state;
        const nextId = todos.length + 1;

        if (inputs.date === '' || inputs.name === '') return;


        let today = new Date();

        let day = String(today.getDate()).padStart(2, '0');
        let month = String(today.getMonth() + 1).padStart(2, '0');
        let year = today.getFullYear();

        today = day + '-' + month + '-' + year;

        let newDate = new Date(today);

        newDate.setDate(newDate.getDate() + parseInt(inputs.date));

        let almostFinalDate = newDate.toLocaleString();
        let finalDate = almostFinalDate.slice(0,almostFinalDate.indexOf(','));


        todos.push({
            id: nextId,
            text: inputs.name,
            createdAt: `13-12-2019`,
            willEndAt: finalDate
        });
        this.setState({todos: todos});
    };

    handleInputChange = (e) => {
        let {inputs} = this.state;
        inputs[e.target.name] = e.target.value;
        this.setState({inputs: inputs})
    };

    render() {
        const todoItems = this.state.todos.map(item =>
            <TodoItem
                func={this.deleteTodo}
                key={item.id}
                item={item}
                handleChange={this.handleChange}
            />
        );

        return (
            <>
                <div className="todo-list">
                    {todoItems}
                </div>
                <div className="create">
                    <input type="text"
                           name='name'
                           placeholder='name'
                           value={this.state.inputs.name}
                           onChange={this.handleInputChange}
                    />
                    <input type="number"
                           name='date'
                           placeholder='0'
                           value={this.state.inputs.date}
                           onChange={this.handleInputChange}
                    />
                    <button onClick={this.createTodo}>Submit</button>
                </div>
            </>
        )
    }
}

export default App