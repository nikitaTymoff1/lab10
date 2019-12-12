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

        let boo = false;
        let date = new Date().toLocaleString();
        let withoutTime = date.slice(0,date.indexOf(','));
        let dateArr = withoutTime.split('.');

        let day = parseInt(dateArr[0]) + 1;
        let month = parseInt(dateArr[1]);
        let year = parseInt(dateArr[2]);

        if (day + parseInt(inputs.date) > 31) {
            month = '01';
            day = day + parseInt(inputs.date) - 31;
            boo = true;
        }

        let str = `${boo ? day : day + parseInt(inputs.date)}-${month}-${year}`;

        todos.push({
            id: nextId,
            text: inputs.name,
            createdAt: `13-12-2019`,
            willEndAt: str
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