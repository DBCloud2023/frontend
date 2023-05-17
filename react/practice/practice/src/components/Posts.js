import React, { useEffect, useState } from 'react';
import Post from './Post';
import PageNav from './PageNav';
export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`;
    useEffect(() => {
        //make http request
        console.log(page);
        fetch(url)
            .then((body) => body.json())
            .then((json) => {
                console.log(json);
                setPosts(json);
            })
    }, [page]);

    const changePage = (pageNo) => {
        console.log(pageNo);
        setPage(pageNo);
    }

    const offsetPage = (offset) => {
        if (page + offset <= 0 || page + offset >= 6) {
            return;
        }
        setPage(page + offset);
    }

    return (<React.Fragment>
        {/* postarile */}
        {
            posts.map((post, id) => {
                return (<Post post={post} key={id} />)
            })
        }
        <PageNav noPages={5} changePage={changePage} offsetPage={offsetPage} curentPage={page} />
    </React.Fragment>);
}