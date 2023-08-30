import React from "react";
import Post from './Post';

function UserProfile({currentUser}) {

    return (
        <div>
            <div className="bg-gray-300">
                <span> Welcome {currentUser.username}! </span>
                <h6>This Is Where The Details Of A User Would Go</h6>
            </div>
            <Post></Post>
        </div>
    )
}

export default UserProfile;