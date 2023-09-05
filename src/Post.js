import React, {useState} from "react";

function Post({post}){

    const [vote, setVote] = useState(false)

    return (
        <div className="text-white border-blue-900 md:border-4 grid grid-rows-3 pl-5 pt-5 relative">
            <h1 className="grid grid-rows-2">
                <span>Posted by <span className="text-yellow-500">{post.posted_by_user}</span> at <span className="text-yellow-500">{post.date_created}</span></span>
                <span className="font-bold text-2xl text-yellow-500">{post.title}</span>
            </h1>
            <span>
                {post.content}
            </span>
            <h1 className="grid grid-cols-2">
                <span onClick={() => setVote((vote) => !vote)} className="absolute bottom-0"> {vote ?  `💖 ${post.vote_count}` : `🤍  ${post.vote_count}`} </span>
                <span className="absolute bottom-0 right-5">💬{post.comment_count}</span>
            </h1>
        </div>
    )
}

export default Post;