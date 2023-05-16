import React from 'react';

class Header extends React.Component {
    render() {
        return <header>
            <h1>My First React App</h1>
            <p>Astazi este {this.props.azi()}</p>
        </header>;
    }
}

export default Header;
