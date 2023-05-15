import Goodbye from './Goodbye';
import Users from './users/Users';

const name = 'Vasilica';
const show = true;
function getRandomAge(maxAge = 80) {
    return Math.ceil(Math.random() * maxAge);
}
const userPerPage = 5;

const test = <div>
    {/* <h1>Hello{show && name.length > 0 && (', ' (<b>{{name}}</b>))}!</h1> */}
    <h1>Hello, {show && name.length > 0 && name}!</h1>
    <p>Your age is {getRandomAge(75)}</p>
    <Goodbye name={name} />
    <Users perPage={userPerPage} />
</div>;

export default function Hello() { // function component
    return test;
}
