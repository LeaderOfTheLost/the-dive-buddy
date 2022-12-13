import { useEffect, useState } from 'react'
import axios from 'axios'
import Log from '../components/Log'
import Loadout from '../components/Loadout'
import { useNavigate, useParams } from 'react-router-dom'


const UserDetails = () => {

  const [user, setUser] = useState({})
  const [logs, setLogs] = useState([])
  const [loadouts, setLoadouts] = useState([])
  const [formState, setFormState] = useState({firstName: '', lastName: '', username: '', email: '', password: '', location: '', dateOfDive: '', timeOfDive: '', diveNumOfDay: '', maxDepth: '', diveTime: '', surfaceTemp: '', bottomTemp: '', visibility: '', diveBuddy: '', notes: '', startPressure: '', endPressure: '', gasMix: '', surfaceInterval: '', name: ''})

  let navigate = useNavigate()
  let {id} = useParams()

  useEffect(() => {
    const getUser = async () => {
      let response = await axios.get(`/api/users/${id}`)
      setUser(response.data.user) 
      setLogs(response.data.user.logs)
      setLoadouts(response.data.user.loadouts)
    } 
    getUser()
  }, [id])

  const navToUsers = () => {
    navigate('/')
  }

    const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

    const handleSubmitLog = async (event) => {
    event.preventDefault()

    let response = await axios.post(`/logs/${id}`, formState)
    .then ((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })
    
    setLogs([...logs, response.data.newLog])
    setFormState({location: '', dateOfDive: '', timeOfDive: '', diveNumOfDay: '', maxDepth: '', diveTime: '', surfaceTemp: '', bottomTemp: '', visibility: '', diveBuddy: '', notes: '', startPressure: '', endPressure: '', gasMix: '', surfaceInterval: '', name: ''})
  }

    const handleSubmitLoadout = async (event) => {
    event.preventDefault()

    let response = await axios.post(`/loadouts/${id}`, formState)
    .then ((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })

    setLoadouts([...loadouts, response.data.newLoadout])
    setFormState({location: '', dateOfDive: '', timeOfDive: '', diveNumOfDay: '', maxDepth: '', diveTime: '', surfaceTemp: '', bottomTemp: '', visibility: '', diveBuddy: '', notes: '', startPressure: '', endPressure: '', gasMix: '', surfaceInterval: '', name: ''})
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

  const handleDeleteUser = async (event) => {
    event.preventDefault()
    let response = await axios.delete(`/users/${id}`, formState)
    setUser(response)
    navToUsers()
  }


  const viewLog = () => {


  }

  return (
    <div className="log-container">
      <h2>Buttons and buttons</h2>
            <div className='logs'>
        <h3 className='logHeader'>LOGS</h3>
        <div>
        {logs?.map((log) => (
        <Log
          key={log._id}
          id={log._id}
          location={log.location}
          dateOfDive={log.dateOfDive}
          timeOfDive={log.timeOfDive}
          maxDepth={log.maxDepth}
          onClick={viewLog}
        />
      ))}
      </div>
      <div>
        {loadouts?.map((loadout) => (
        <Loadout
          key={loadout._id}
          id={loadout._id}
          name={loadout.name}
        />
      ))}
      </div>
      <div className='form'>
      <form onSubmit={handleSubmitLoadout}>
        <label htmlFor='name'>Loadout Name:</label>
        <input id='name' value={formState.name} onChange={handleChange} />
        <button type='submit'>Add Loadout</button>
      </form>
      </div>
      </div>
    <div className='form'>
      <form onSubmit={handleSubmitLog}>
        <label htmlFor='location'>Location:</label>
        <input id='location' value={formState.location} onChange={handleChange} />
        <label htmlFor='dateOfDive'>Date:</label>
        <input id='dateOfDive' value={formState.dateOfDive} onChange={handleChange}/>
        <label htmlFor='timeOfDive'>Time:</label>
        <input id='timeOfDive' value={formState.timeOfDive} onChange={handleChange}/>
        <label htmlFor='diveNumOfDay'>Dive Number:</label>
        <input id='diveNumOfDay' value={formState.diveNumOfDay} onChange={handleChange}/>
        <label htmlFor='maxDepth'>Max Depth:</label>
        <input id='maxDepth' value={formState.maxDepth} onChange={handleChange}/>
        <label htmlFor='diveTime'>Dive Time:</label>
        <input id='diveTime' value={formState.diveTime} onChange={handleChange}/>
        <label htmlFor='surfaceTemp'>Surface Temp:</label>
        <input id='surfaceTemp' value={formState.surfaceTemp} onChange={handleChange}/>
        <label htmlFor='bottomTemp'>Bottom Temp:</label>
        <input id='bottomTemp' value={formState.bottomTemp} onChange={handleChange}/>
        <label htmlFor='visibility'>Visibility:</label>
        <input id='visibility' value={formState.visibility} onChange={handleChange}/>
        <label htmlFor='diveBuddy'>Buddy Name:</label>
        <input id='diveBuddy' value={formState.diveBuddy} onChange={handleChange}/>
        <label htmlFor='notes'>Notes:</label>
        <input id='notes' value={formState.notes} onChange={handleChange}/>
        <label htmlFor='startPressure'>Start Pressure:</label>
        <input id='startPressure' value={formState.startPressure} onChange={handleChange}/>
        <label htmlFor='endPressure'>End Pressure:</label>
        <input id='endPressure' value={formState.endPressure} onChange={handleChange}/>
        <label htmlFor='gasMix'>Gas Mix:</label>
        <input id='gasMix' value={formState.gasMix} onChange={handleChange}/>
        <label htmlFor='surfaceInterval'>Surface Interval:</label>
        <input id='surfaceInterval' value={formState.surfaceInterval} onChange={handleChange}/>
        <button type='submit'>Add Log</button>
      </form>
      </div>

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
      <button className="deleteButton" onClick={handleDeleteUser}>Delete User</button>
      </div>
    </div>
  )
}

export default UserDetails