document.addEventListener('DOMContentLoaded', functie);

function functie() {
    console.log(document);
    console.log(document.firstChild.textContent);
    const footerElement = document.getElementById('nota-subsol');
    console.log(footerElement)
    const borderedElements = document.getElementsByClassName('bordered');

    for (i = 0; i < borderedElements.length; i++) {
        console.log(borderedElements[i]);
    }

    const asideElements = borderedElements[0];
    const liElementsAside = asideElements.getElementsByTagName('li');
    for (i = 0; i < liElementsAside.length; i++) {
        console.log(liElementsAside[i]);
    }
    const firstLi = liElementsAside[0];
    console.log(firstLi.childNodes);
}