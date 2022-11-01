import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Write from "./post";

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
        fetch("/api/posts/list")
            .then(data => data.json())
            .then(res => {
                this.setState({
                    posts: res,
                })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(
                        post => {
                            return (
                                <div key={post.boardId} className="outerBox">
                                    <div> {post.boardId} </div>
                                    <div> {post.title} </div>
                                    <div> {post.contents} </div>
                                </div>
                            )
                        })
                }
                <Write/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <List/>
);