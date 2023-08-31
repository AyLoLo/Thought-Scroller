import React from "react";

function Post({post}){
    return (
        <div className="text-white border-white md:border-4">
            <h1 className="grid grid-rows-3">
                <span className="border-b-4 border-white">{post.title}</span>
                <span>By User</span>
                <div className="grid grid-cols-2">
                    <span>⬆️{post.vote_count}⬇️</span>
                    <span>💬{post.comment_count}</span>
                </div>
            </h1>
            <h1>

            </h1>
        </div>
    )
}

export default Post;