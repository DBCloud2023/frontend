function sayGoodbye() {
    console.log('Goodbye from component');
}

function Goodbye() {
    return <div>
        <h3>Goodbye component</h3>
        <button onClick={sayGoodbye}>Say Goodbye</button>
    </div>;
}

export default Goodbye;
