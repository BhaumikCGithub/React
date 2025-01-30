import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams()
    return (
        <>
        <div className="bg-green-400 my-2 p-10 text-blue-800 text-3xl ">User : {userid}</div>
        </>
    )
}

export default User