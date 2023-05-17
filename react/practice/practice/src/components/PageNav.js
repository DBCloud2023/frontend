import 'bootstrap/dist/css/bootstrap.min.css';

const loadItemInBar = (noPages, changePage) => {
    let lis = [];
    for (let i = 0; i < noPages; i++) {
        lis.push(<li class="page-item" onClick={() => changePage(i + 1)}><a class="page-link" href="#">{i + 1}</a></li>)
    }
    return lis;
}

export default function PageNav(props) {
    return (<>
        <nav aria-label="Page navigation example">
            <ul class="pagination ms-3 d-flex justify-content-center">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                {
                    loadItemInBar(props.noPages, props.changePage)
                }
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </>);
}