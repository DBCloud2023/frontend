let funcInParent = null;

function clickedPage(e) {
    const clickedLi = e.target;
    const pageNumber = clickedLi.dataset.pageNumber;
    funcInParent(pageNumber);
}

function Page(props) {
    funcInParent = props.clickedLiChild;
    // console.log(funcInParent);
    return <li data-page-number={props.pageNumber} onClick={clickedPage}>{props.pageNumber}</li>;
}

export default Page;
