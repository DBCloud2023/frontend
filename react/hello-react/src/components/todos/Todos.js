import React from "react";
import Todo from "./Todo";
import Pagination from "../pagination/Pagination";

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

export default class Todos extends React.Component {

    todos = [];
    noTodos = 0;
    noPages = 0;
    currentPage = 1;

    constructor(props) {
        super(props);
        this.state = {
            noPages: this.noPages,
            todos: this.todos,
        };
    }

    componentDidMount() {
        this.requestNoOfPages();
        this.requestTodos(this.props.perPage);
    }

    receivedPageNumber = (pageNumber) => {
        console.log('(Todos) Received new page Number from pagination: ' + pageNumber);
        this.requestTodos(this.props.perPage, pageNumber);
    } 

    render() {
        return <div id="todos">
            <p>There are {this.state.noTodos} tasks.</p>
            <ul>
                {
                    this.state.todos.map((todo) => {
                        return <Todo todo={todo} />
                    })
                }
            </ul>
            <nav>
                <Pagination noPages={this.state.noPages} triggerChangePage={this.receivedPageNumber} />
            </nav>
        </div>;
    }

    requestTodos = (perPage, pageNo = 1) => {
        fetch(TODOS_URL + '?_limit=' + perPage + '&_page=' + pageNo).then((response) => {
            return response.json();
        }).then((data) => {
            // this.users = data;
            console.log('data is ', data);
            this.setState({
                todos: data
            });
            console.log(this.todos);
        });
    }

    requestNoOfPages() {
        fetch(TODOS_URL).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                noTodos: data.length,
                noPages: data.length / this.props.perPage
            });
            console.log(this.state.noPages);
        });
    }

}