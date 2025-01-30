import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data,setData] = useState([])

    // useEffect(() =>{
    //     fetch('https://api.github.com/users/BhaumikCGithub')
    //     .then(response => response.json())
    //     .then(data => { 
    //         setData(data)
    //     })
    // },[])

    return (
        <div className="text-center my-4 bg-purple-400 text-white p-4 text-3xl">
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300}></img>
        </div>
        
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/BhaumikCGithub')
    return response.json()
}