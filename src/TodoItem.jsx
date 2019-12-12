import React from "react"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    };

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>

            <div>
                <pre>Start: {props.item.createdAt}</pre>
                <pre>End: {props.item.willEndAt}</pre>
            </div>

            <img src="trash.png"
                 width="20px"
                 className="trash"
                 alt="trash"
                 id={props.item.id}
                 onClick={() => props.func(props.item.id)}/>
        </div>
    )
}

export default TodoItem