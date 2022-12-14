import { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from '../components/UserCard'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [users, setUsers] = useState([])
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  })

  let navigate = useNavigate()

  useEffect(() => {
    const getAllUsers = async () => {
      const res = await axios.get(`/users`)
      setUsers(res.data.allUsers)
    }

    getAllUsers()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios
      .post('/users', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })

    setUsers([...users, response.data.newUser])
    setFormState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    })
    navigate('/')
  }

  const viewUser = (id) => {
    navigate(`/users/${id}`)
  }

  return (
    <div>
      <div className="user-container">
        {users?.map((user) => (
          <UserCard
            key={user._id}
            id={user._id}
            firstName={user.firstName}
            lastName={user.lastName}
            username={user.username}
            email={user.email}
            password={user.password}
            onClick={viewUser}
          />
        ))}
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            value={formState.lastName}
            onChange={handleChange}
          />
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input id="email" value={formState.email} onChange={handleChange} />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button type="submit">Create User</button>
        </form>
      </div>
    </div>
  )
}

export default Home
