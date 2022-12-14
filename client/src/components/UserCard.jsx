import React from 'react'

const UserCard = (props) => {
  return (
    <div className="user-card" onClick={() => props.onClick(props.id)}>
        <h3>{props.firstName}</h3>
        <h3>{props.lastName}</h3>
</div>
  )
}

export default UserCard