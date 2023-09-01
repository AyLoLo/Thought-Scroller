import React from "react";
import Post from './Post';

function UserProfile({currentUser, posts}) {

    const userPosts = posts.filter((post) => {
        if(post.posted_by_user === currentUser.username) {
            return true
        } else {
            return null
        }
    })

    const post = userPosts.map(post => {
        return <Post post={post} key={post.id}/>
    })    

    currentUser.user_post_count = userPosts.length

    return (
        <div className="grid grid-rows-2 h-4/5 gap-10">
            <div className="grid grid-rows-2 md:border-4 border-blue-900 p-10 mx-10">
                <h1 className="text-white font-thin text-7xl h-2/4"> 
                    <span className="border-b-4 border-white">Welcome <span className="text-yellow-500">{currentUser.username}</span>!</span>
                </h1>
                <div className="relative">
                    <span className="text-white absolute bottom-0 left-0">Number Of Posts : <span className="text-yellow-500">{currentUser.user_post_count}</span></span>
                    <span className="text-white absolute bottom-0 right-0"> Account Created On : <span className="text-yellow-500">{currentUser.date_created}</span>.</span>
                </div>
            </div>
            <div className="overflow-auto">
                <div className="grid grid-flow-row gap-10 w-4/5 mx-10">
                    {post}
                </div>
            </div>
        </div>
    )
}

export default UserProfile;