import React from "react";
import ScrollerLogo from "./assets/ScrollerLogo.png"

function Home(){

    return (
        <div className="bg-gray-300 grid grid-rows-3 items-center justify-center h-3/4 mx-60 border-white md:border-2 bg-[url('https://img.freepik.com/free-photo/abstract-smoke-wallpaper-background-desktop_53876-133383.jpg')] bg-no-repeat bg-cover">
            <h6 className="font-extralight text-4xl text-yellow-500">Welcome To Thought Scroll</h6>
            <img className="h-96" src={ScrollerLogo} alt="Your Brain In A Jar"/>
            <h6 className="font-extralight text-4xl text-yellow-500">An Insight To The Human Enigma</h6>
        </div>
    )

}

export default Home;