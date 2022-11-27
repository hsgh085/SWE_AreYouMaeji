import { List } from '@material-ui/core';
import { useEffect, useState } from 'react';

function Test() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`http://ec2-3-38-226-253.ap-northeast-2.compute.amazonaws.com/api/posts`)
            .then((response) => response.json())
            .then((data) => setList(data));
    }, []);




    return (
        <div>
            <h1>gdd</h1>
            {/* ✅ users is `[]`, until API responds */}
            {list.map((posts) => (
                <div key={posts.postId}>
                    <div>{posts.postId}</div>
                    <div>{posts.helper_star}</div>
                </div>
            ))}
        </div>
    );
}

export default Test;