function Todo(props) {
    return <li>
        {props.todo.title} ({props.todo.completed ? 'finalizat' : 'in lucru'})
    </li>;
}

export default Todo;
