import React from 'react'

const UserCard = (props) => {
  return (
    <div className="card" onClick={() => props.onClick(props.id)}>
    <div className="img-wrapper">
    </div>
    <div className="info-wrapper">
        <h3>{props.firstName}</h3>
        <h3>{props.lastName}</h3>
        <h3>{props.username}</h3>
        <h3>{props.email}</h3>
    </div>
</div>
  )
}

export default UserCard