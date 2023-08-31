import React from "react";
import Post from './Post';

function UserProfile({currentUser, posts}) {

    const post = posts.map(post => {
        return <Post post={post} key={post.id}/>
    })

    return (
        <div className="grid grid-rows-2 h-4/5 w-4/5 ml-48 gap-10">
            <div className="grid grid-rows-2">
                <h1 className="text-white font-thin text-7xl h-2/4"> 
                    <span className="border-b-4 border-white">Welcome {currentUser.username}!</span>
                </h1>
                <span className="text-white flex justify-end">Additional User details found here.</span>
            </div>
            <div>
                {post}
            </div>
        </div>
    )
}

export default UserProfile;