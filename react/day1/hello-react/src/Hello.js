import Goodbye from './Goodbye';

const name = 'Vasilica';
const show = true;
function getRandomAge(maxAge = 80) {
    return Math.ceil(Math.random() * maxAge);
}

const test = <div>
    {/* <h1>Hello{show && name.length > 0 && (', ' (<b>{{name}}</b>))}!</h1> */}
    <h1>Hello, {show && name.length > 0 && name}!</h1>
    <p>Your age is {getRandomAge(75)}</p>
    <Goodbye />
</div>;

export default function Hello() { // function component
    return test;
}
