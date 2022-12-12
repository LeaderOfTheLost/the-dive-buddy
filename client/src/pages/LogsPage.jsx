import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Log from '../components/Log'



const LogsPage = () => {
  const [user, setUser] = useState({})
  const [logs, setLogs] = useState([])
  const [formState, setFormState] = useState({location: '', dateOfDive: '', timeOfDive: '', diveNumOfDay: '', maxDepth: '', diveTime: '', surfaceTemp: '', bottomTemp: '', visibility: '', diveBuddy: '', notes: '', startPressure: '', endPressure: '', gasMix: '', surfaceInterval: ''})

  let navigate = useNavigate()
  let {id} = useParams()

  const navToLogs = () => {
    navigate(`/logs`)
  }

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios
      .post(`/logs/${id}`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    setLogs([...logs, response.data])
    setFormState({location: '', dateOfDive: '', timeOfDive: '', diveNumOfDay: '', maxDepth: '', diveTime: '', surfaceTemp: '', bottomTemp: '', visibility: '', diveBuddy: '', notes: '', startPressure: '', endPressure: '', gasMix: '', surfaceInterval: ''})
    navToLogs()
  }
  useEffect(() => {
    const getUser = async () => {
      let response = await axios.get(`/users/${id}`)

      setUser(response.data) 
      setLogs(response.data.logs)
    } 
    getUser()
  }, [])




  return (
    <div className="card">
    <div className="info-wrapper">
      <h1>All Divers Logs</h1>
      {logs?.map((log) => (
        <Log
          key={log._id}
          id={log.id}
          location={log.location}
          dateOfDive={log.dateOfDive}
          timeOfDive={log.timeOfDive}
          maxDepth={log.maxDepth}
        />
      ))}
    </div>
    <div className='form'>
      <form onSubmit={handleSubmit}>
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
</div>
  )
}

export default LogsPage