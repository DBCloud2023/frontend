import { Link, BrowserRouter as Router } from 'react-router-dom';

function Navigation() {
    return <ul>
            <li>
                <Link to="/">Homepage</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/todos">Tasks</Link>
            </li>
        </ul>;
}

export default Navigation;