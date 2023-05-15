function sayGoodbye() {
    console.log('Goodbye from component');
}

function Goodbye(props) {
    return <div>
        <h3>Goodbye, {props.name}!</h3>
        <button onClick={sayGoodbye}>Say Goodbye</button>
    </div>;
}

export default Goodbye;
