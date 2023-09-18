import React from 'react'
import UserCSS from './User.css'

const User = (props) => {
  return (
    <div className="Container">
        <div className='Card'>
            <img src={props.user.image}></img>
            <p key={props.key}><strong>Name: </strong>{props.user.firstName} {props.user.lastName}</p>
            <p><strong>Age: </strong>{props.user.age} -  <strong>birthday: </strong>{props.user.birthDate}</p>
            <p><strong>Gender: </strong>{props.user.gender}</p>
        </div>
    </div>
  )
}

export default User