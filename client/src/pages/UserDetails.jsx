import { useEffect, useState } from 'react'
import axios from 'axios'
import Log from '../components/Log'
import UserCard from '../components/UserCard'
import { useNavigate, useParams } from 'react-router-dom'


const UserDetails = () => {
  const [user, setUser] = useState({})
  const [logs, setLogs] = useState([])
  const [formState, setFormState] = useState({firstName: '', lastName: '', username: '', email: '', password: ''})

  let navigate = useNavigate()
  let {id} = useParams()

  const navToUsers = () => {
    navigate('/')
  }
  const viewLogs = () => {
    navigate('/logs')
  }

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios.put(`/logs/${id}`, formState)
    .then ((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })
    setLogs([...logs, response.data.newLog])
    setFormState({location: '', dateOfDive: '', timeOfDive: '', diveNumOfDay: '', maxDepth: '', diveTime: '', surfaceTemp: '', bottomTemp: '', visibility: '', diveBuddy: '', notes: '', startPressure: '', endPressure: '', gasMix: '', surfaceInterval: ''})
  }
  const handleUpdate = async () => {
  
    let response = await axios.put(`/users/${id}`, formState)
    .then ((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })
    setUser([user, response.data])
    setFormState({firstName: '', lastName: '', username: '', email: '', password: ''})
  }

  
  useEffect(() => {
    const getUser = async () => {
      let response = await axios.get(`/users/${id}`)

      setUser(response.data) 
      setLogs(response.data.logs)
    } 
    getUser()
  }, [])

  const handleDelete = async (event) => {
    event.preventDefault()
    let response = await axios.delete(`/users/${id}`, formState)
    setUser(response)
    navToUsers()
  }

  return (
    <div className="log-container">
      <h2>Buttons and buttons</h2>
      <button onClick={viewLogs}>Logs</button>
        <button>Loadouts</button>
        <button>Stats</button>

       <div className='form'>
      <form onSubmit={handleUpdate}>
        <label htmlFor='firstName'>First Name:</label>
        <input id='firstName' value={formState.firstName} onChange={handleChange} />
        <label htmlFor='lastName'>Last Name:</label>
        <input id='lastName' value={formState.lastName} onChange={handleChange}/>
        <label htmlFor='username'>Username:</label>
        <input id='username' value={formState.username} onChange={handleChange}/>
        <label htmlFor='email'>Email:</label>
        <input id='email' value={formState.email} onChange={handleChange}/>
        <label htmlFor='password'>Password:</label>
        <input id='password' value={formState.password} onChange={handleChange}/>
        <button type='submit'>Update</button>
      </form>
      </div>
      <div>
      <button className="deleteButton" onClick={handleDelete}>Delete User</button>
      </div>
    </div>
  )
}

export default UserDetails