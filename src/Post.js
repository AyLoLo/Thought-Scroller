import React from "react";

function Post({post}){
    return (
        <div className="text-white border-white md:border-4">
            {post.title}
        </div>
    )
}

export default Post;