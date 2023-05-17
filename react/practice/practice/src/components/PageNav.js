import 'bootstrap/dist/css/bootstrap.min.css';



const loadItemInBar = (noPages, changePage, currPage) => {
    let lis = [];
    for (let i = 1; i <= noPages; i++) {
        lis.push(<li class="page-item" onClick={() => changePage(i)}><a className={`page-link ${i == currPage ? "active" : ""}`} href="#">{i}</a></li>)
    }
    return lis;
}

export default function PageNav(props) {
    return (<>
        <nav aria-label="Page navigation example">
            <ul class="pagination ms-3 d-flex justify-content-center">
                <li class="page-item" onClick={() => { props.offsetPage(-1) }}><a class="page-link " href="#">Previous</a></li>
                {
                    loadItemInBar(props.noPages, props.changePage, props.curentPage)
                }
                <li class="page-item" onClick={() => { props.offsetPage(1) }}><a class="page-link " href="#">Next</a></li>
            </ul>
        </nav>
    </>);
}