import React from 'react';
import ReactDom from 'react-dom';

function Footer(props) {
    console.log(props);
    const headerElement = document.getElementsByTagName('header')[0];
    // ReactDom.render('Test', headerElement);
    return <React.Fragment>
        Copyright &copy; {props.year} - {props.websiteName}
    </React.Fragment>;
}

export default Footer;
