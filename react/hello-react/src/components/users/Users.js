import React from 'react';
import User from './User';
import Pagination from '../pagination/Pagination';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

let requstUserPage;
let usersPerPage;

export default class Users extends React.Component {

    users = [];
    noUsers = 0;
    noPages = 0;
    currentPage = 1;

    constructor(props) {
        super(props);
        this.state = {
            noPages: this.noPages,
            users: this.users,
        };
        requstUserPage = this.requestUsers;
        usersPerPage = this.props.perPage;
        this.requestUsers = this.requestUsers.bind(this);
    }

    componentDidMount() {
        this.requestNoPages();
        this.requestUsers(this.props.perPage);
    }

    componentWillUnmount() {
        console.log('Users componentWillUnmount');
    }

    receivedPageNumber = (pageNumber) => {
        console.log(this);
        console.log('Received new page Number from pagination: ' + pageNumber);
        requstUserPage(usersPerPage, pageNumber);
    } 

    // receivedPageNumber(pageNumber) {
    //     console.log(this);
    //     console.log('Received new page Number from pagination: ' + pageNumber);
    //     requstUserPage(usersPerPage, pageNumber);
    // }
    
    render() {
        return <div id="users">
            <p>There are {this.state.noUsers} users</p>
            <table>
                <tbody>
                {
                    this.state.users.map((user) => {
                        return <User user={user} />
                    })
                }
                </tbody>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
            </table>
            {/* <i>{this.users.length}</i> */}
            <nav>
                <Pagination noPages={this.state.noPages} triggerChangePage={this.receivedPageNumber} />
            </nav>
        </div>;
    }

    requestNoPages() {
        fetch(USERS_URL).then((response) => {
            return response.json();
        }).then((users) => {
            this.setState({
                noUsers: users.length,
                noPages: users.length / this.props.perPage
            });
            console.log(this.state.noPages);
        });
    }

    requestUsers = (perPage, pageNo = 1) => { // TODO: request only current page
        console.log(this);
        fetch(USERS_URL + '?_limit=' + perPage + '&_page=' + pageNo).then((response) => {
            return response.json();
        }).then((users) => {
            // this.users = data;
            console.log('data is ', users);
            console.log(this);
            this.setState({
                users
            });
            console.log(this.users);
        });
    }
}