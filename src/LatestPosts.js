import React from "react";
import Post from "./Post";

function LatestPosts({posts}) {

    const sortedPosts = [...posts].sort((b, a) => a.id - b.id);


    const post = sortedPosts.map(post => {
        return <Post post={post} key={post.id}/>
    })

    return (
        <div className="h-5/6 overflow-auto">
            <div className="grid grid-flow-row gap-10 w-3/4 mx-10">
                {post}
            </div>
        </div>
    );
}

export default LatestPosts;