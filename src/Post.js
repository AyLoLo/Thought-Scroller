import React from "react";

function Post({post}){
    return (
        <div className="text-white border-white md:border-4 grid grid-rows-3 pl-5 pt-5 relative">
            <h1 className="grid grid-rows-2">
                <span>Posted by {post.posted_by_user}</span>
                <span className="font-bold text-2xl">{post.title}</span>
            </h1>
            <span>
                {post.content}
            </span>
            <h1 className="grid grid-cols-2">
                <span className="absolute bottom-0">⬆️{post.vote_count}⬇️</span>
                <span className="absolute bottom-0 right-5">💬{post.comment_count}</span>
            </h1>
        </div>
    )
}

export default Post;