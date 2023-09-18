import { useEffect, useState } from "react"
import React from 'react'
import User from "./User"

const Api = () => {

    const [users, setUsers] = useState([])


    useEffect(()=>{
        fetch("https://dummyjson.com/users")
            .then(response => response.json())
            .then(json =>{
                console.log(json.users)
                setUsers(json.users)
            } )
    },[])

  return (
    <div>
        <ul>
            {users.map((user) =>{
                return <User  user={user} key={user.id}/>
            })}
        </ul>
    </div>
  )
}

export default Api