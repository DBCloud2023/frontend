import React from 'react';

function sayGoodbye() {
    console.log('Goodbye from component');
}

function Goodbye(props) {
    // return <div>
    //     <h3>Goodbye, {props.name}!</h3>
    //     <button onClick={sayGoodbye}>Say Goodbye</button>
    // </div>;
    const h3Element = React.createElement('h3', {}, 'Goodbye, ' + props.name + '!');
    const buttonElement = React.createElement('button', {
        onClick: sayGoodbye
    }, 'Say Goodbye');
    return React.createElement(React.Fragment, {}, [
        h3Element,
        buttonElement,
    ]);
    ;
}

export default Goodbye;
