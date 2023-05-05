document.addEventListener('DOMContentLoaded', functie);
window.addEventListener('load', function() {
    console.log('am adus toate resursele');
    console.log(window.screen);
});

function functie() {
    console.log(document);
    const footerElement = document.getElementById('nota-subsol');
    console.log(footerElement, typeof footerElement);

    const borderedElements = document.getElementsByClassName('bordered');
    for (i = 0; i < borderedElements.length; i++) {
        console.log(borderedElements[i]);
    }
    
    // const liElements = document.getElementsByTagName('li');
    
    const asideElement = borderedElements[2];
    asideElement.get
    const liElementsInAside = asideElement.getElementsByTagName('li');
    for (i = 0; i < liElementsInAside.length; i++) {
        console.log(liElementsInAside[i]);
    }
    const firstLi = liElementsInAside[0];
    console.log(firstLi.childNodes, firstLi.nodeType);
    console.log(firstLi.childNodes[0].textContent);
    console.log(firstLi.parentNode);
    const aInFirstLi = firstLi.childNodes[0]; 
    console.log(aInFirstLi.childNodes, aInFirstLi.childNodes[0].nodeType);

    firstAttrOfAside = asideElement.attributes[0];
    console.log(firstAttrOfAside, firstAttrOfAside.nodeType);

    console.log(firstLi.innerHTML);
    console.log(firstLi.textContent);

    const htmlElement = document.getElementsByTagName('html')[0];
    console.log(htmlElement.innerHTML); // all html
    console.log(htmlElement.textContent); // all text after stripping html

    console.log(firstLi.nodeName); // li
    console.log(firstLi.nodeValue); // ?

    const yourNameInput = document.getElementById('your-name');
    console.log(yourNameInput);
    // console.log(yourNameInput.nodeValue); 

    
    // console.log(asideElement.style.borderTop);
    asideElement.style.width = '300px';   

    asideElement.setAttribute('class', asideElement.getAttribute('class') + ' clasaNoua');

    const ulElement = firstLi.parentNode;
    const newLi = document.createElement('li');
    const newA = document.createElement('a');
    const newAText = document.createTextNode('GOV');
    newA.setAttribute('href', 'http://www.gov.ro');
    newA.appendChild(newAText);
    newLi.appendChild(newA);
    ulElement.appendChild(newLi);
}


readName = function() {
    const yourNameInput = document.getElementById('your-name');
    console.log(yourNameInput);
    console.log('Read name', yourNameInput.value);


}