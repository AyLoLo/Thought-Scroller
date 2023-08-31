import React from "react";
import MisterBrain from './assets/MisterBrain.png';

function CreatePost({updateNewPost, addNewPost}) {

    return (
        <div className="grid grid-cols-2 items-center">
            <div>
                <img className="ml-40 md:border-2 border-white" src={MisterBrain} alt="Brainy One"/>
            </div>
            <div className="w-3/4">
                <form onSubmit={(event => addNewPost(event))}>
                    <div className="grid grid-rows-5">
                        <label className="text-white">Title</label>
                        <input onChange={updateNewPost} type="text" id="title" name="title"></input>
                        <br></br>
                        <label className="text-white">Body Text</label>
                        <input onChange={updateNewPost} type="text" id="content" name="content"></input>
                        <br></br>
                        <br></br>
                        <button className="text-white md:border-4 border-white mx-60 py-2" type="submit">Create Post</button>
                    </div>
                </form>
            </div>   
        </div>    
    )
}

export default CreatePost;