import React from 'react';
import './Post.css';
export default class Post extends React.Component {

    render() {
        return (<div className='post'>
            <p><b>{this.props.post.title}</b></p>
            <p>{this.props.post.body}</p>
        </div>);
    }
}