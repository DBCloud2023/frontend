import Goodbye from './Goodbye';
import Users from './users/Users';
import Footer from './Footer';
import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Vasilica';
const show = true;
function getRandomAge(maxAge = 80) {
    return Math.ceil(Math.random() * maxAge);
}
const userPerPage = 5;

const footerProps = {
    year: 2024,
    websiteName: 'First React App'
};

const test = '';
    {/* <h1>Hello{show && name.length > 0 && (', ' (<b>{{name}}</b>))}!</h1> */}    
{/* <h1>Hello, {show && name.length > 0 && name}!</h1>
<p>Your age is {getRandomAge(75)}</p>
<Goodbye name={name} />
<Users perPage={userPerPage} />
<Footer {...footerProps} /> */}

const goodbyeElement = React.createElement(Goodbye, {
    name
}, []);
const usersElement = React.createElement(Users, {
    perPage: userPerPage
}, []);
const sectionElement = React.createElement(React.Fragment, {}, [goodbyeElement, usersElement]);
const helloDiv = document.getElementById('container');
console.log(helloDiv);
ReactDOM.render(sectionElement, helloDiv);

export default function Hello() { // function component
    return test;
}
